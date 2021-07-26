import { Body, Controller, Post } from '@nestjs/common';
import { AddUserDTO } from './dtos/addUserDTO';
import { UserResponse } from './user.interface';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private userService: UsersService) {}
  @Post('/signup')
  async signUp(@Body() data: AddUserDTO): Promise<UserResponse> {
    const response = this.userService.addUser(data)
    return response
  }
}
