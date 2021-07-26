import { Injectable } from '@nestjs/common';
import { AddUserDTO } from './dtos/addUserDTO';
import { UserResponse } from './user.interface';

@Injectable()
export class UsersService {
  async addUser(data: AddUserDTO): Promise<UserResponse> {
    return Object.assign({ 
      token: '123', 
      id: '123', 
      name: data.name, 
      email: data.email
    })
  }
}
