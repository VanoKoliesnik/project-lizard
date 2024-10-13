import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../database/entities/user.entity';
import { Repository } from 'typeorm';
import { GetUserResponseDto } from './dtos/get-user-response.dto';
import { UpdateUserResponseDto } from './dtos/update-user-response.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async getUser(id: number): Promise<GetUserResponseDto> {
    const { email, username } = await this.usersRepository.findOne({
      where: { id },
    });

    return { email, username };
  }

  async updateUsername(
    id: number,
    username: string,
  ): Promise<UpdateUserResponseDto> {
    await this.usersRepository.update({ id }, { username });

    return this.getUser(id);
  }
}
