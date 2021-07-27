import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse } from '@nestjs/swagger';
import { AddUserDTO } from './dtos/addUserDTO';
import { UserResponse } from './user.interface';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(
    private userService: UsersService
    ) {}

  @Post('signup')
  @ApiBody({ type: AddUserDTO})
  async signUp(@Body() data: AddUserDTO): Promise<UserResponse> {
    const response = this.userService.addUser(data)
    return response
  }
}
