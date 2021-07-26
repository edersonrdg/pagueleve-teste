import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';

@Controller()
export class AuthController {

  @UseGuards(LocalAuthGuard)
  @Post('/signin')
  async signIn(@Request() data): Promise<any> {
    return data.user
  }
}
