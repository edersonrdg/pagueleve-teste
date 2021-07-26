import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { AddUserDTO } from './dtos/addUserDTO';
import { User } from './user.entity';
import { UserResponse } from './user.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async addUser({ email, name, password }: AddUserDTO): Promise<UserResponse> {
    const passwordHash = await bcrypt.hash(password, 10);
    const user = this.usersRepository.create({
      email,
      name,
      password: passwordHash
    })
    await this.usersRepository.save(user)
    delete user.password
    return Object.assign({ token: '123'}, user)
  }
}
