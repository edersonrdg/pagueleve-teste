import { BadRequestException, Injectable } from '@nestjs/common';
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

  async addUser({ email, name, password, confirm_password }: AddUserDTO): Promise<UserResponse> {
    if (password !== confirm_password) {
      throw new BadRequestException({
        error: 'Password must be equal than confirm password'
      })
    }

    const emailUsed = await this.getUserByEmail(email)
    if (emailUsed) {
      throw new BadRequestException({
        error: 'Email already used'
      })
    }
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

  async getUserByEmail(email: string): Promise<User> {
    const user = await this.usersRepository.findOne({
      where: {
        email
      }
    })
    return user
  }
  async getUser(username: string): Promise<User> {
    const user = await this.usersRepository.findOne({
      where: {
        name: username
      }
    })
    return user
  }
}
