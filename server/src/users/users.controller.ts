import { Body, Controller, Post } from '@nestjs/common';
import { AddUserDTO } from './dtos/addUserDTO';
import { UserResponse } from './user.interface';

@Controller()
export class UsersController {
  @Post('/signup')
  async signUp(@Body() data: AddUserDTO): Promise<UserResponse> {
    return Object.assign({ 
      token: '123', 
      id: '123', 
      name: data.name, 
      email: data.email
    })
  }
}
