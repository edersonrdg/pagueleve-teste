import { Controller, Post } from '@nestjs/common';

@Controller()
export class UsersController {
  @Post('/signup')
  async signUp(data: any): Promise<void> {}
}
