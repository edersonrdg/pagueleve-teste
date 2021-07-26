import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddUserDTO } from './dtos/addUserDTO';
import { User } from './user.entity';
import { UserResponse } from './user.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async addUser(data: AddUserDTO): Promise<UserResponse> {
    const user = this.usersRepository.create(data)
    await this.usersRepository.save(user)
    delete user.password
    return Object.assign({ token: '123'}, user)
  }
}
