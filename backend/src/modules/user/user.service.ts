import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../database/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  getUser(id) {
    return this.usersRepository.findOne({ where: { id } });
  }

  async updateUsername(id, username) {
    await this.usersRepository.update({ id }, { username });
  }
}
