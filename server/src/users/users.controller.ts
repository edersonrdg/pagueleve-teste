import { Controller, Post } from '@nestjs/common';
import { AddUserDTO } from './dtos/addUserDTO';

@Controller()
export class UsersController {
  @Post('/signup')
  async signUp(data: AddUserDTO): Promise<void> {}
}
