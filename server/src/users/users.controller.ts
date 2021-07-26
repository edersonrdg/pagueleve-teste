import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { AddUserDTO } from './dtos/addUserDTO';
import { AuthUserDTO } from './dtos/authUserDTO';
import { UserResponse } from './user.interface';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('signup')
  async signUp(@Body() data: AddUserDTO): Promise<UserResponse> {
    const response = this.userService.addUser(data)
    return response
  }

  @UseGuards(LocalAuthGuard)
  @Post('signin')
  async signIn(@Body() data: AuthUserDTO): Promise<any> {
    return data
  }
}
