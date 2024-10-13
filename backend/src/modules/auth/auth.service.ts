import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../database/entities/user.entity';
import { Repository } from 'typeorm';
import { RegisterUserBodyDto } from './dtos/register-user.body.dto';
import { LoginUserBodyDto } from './dtos/login-user.body.dto';
import { VerifyUserBodyDto } from './dtos/verify-user.body.dto';

import * as srpServer from 'secure-remote-password/server';
import * as srpClient from 'secure-remote-password/client';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async register({ salt, email, username, verifier }: RegisterUserBodyDto) {
    const existingUser = await this.usersRepository.findOne({
      where: [{ username }, { email }],
    });

    if (existingUser) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }

    await this.usersRepository.save({ salt, email, username, verifier });

    return { message: 'Registration successful' };
  }

  async login({ email }: LoginUserBodyDto) {
    const user = await this.usersRepository.findOne({ where: { email } });

    if (!user) {
      return {
        salt: srpClient.generateSalt(),
        serverPublicKey: srpClient.generateEphemeral().public,
      };
    }

    const serverEphemeral = srpServer.generateEphemeral(user.verifier);

    await this.usersRepository.update(
      {
        email,
      },
      { serverEphemeral },
    );

    return { salt: user.salt, serverPublicKey: serverEphemeral.public };
  }

  async verify({ email, clientProof, clientPublicKey }: VerifyUserBodyDto) {
    const user = await this.usersRepository.findOne({
      where: [{ email }],
    });

    if (!user) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }

    const { salt, verifier, serverEphemeral } = user;

    const serverSession = srpServer.deriveSession(
      serverEphemeral.secret,
      clientPublicKey,
      salt,
      email,
      verifier,
      clientProof,
    );

    const token = this.jwtService.sign({ email });

    return { serverProof: serverSession.proof, token };
  }
}
