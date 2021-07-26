import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthUserDTO } from 'src/users/dtos/authUserDTO';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt/jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('signin')
  async signIn(@Body() data: AuthUserDTO): Promise<any> {
    return this.authService.login(data)
  }

  // @UseGuards(JwtAuthGuard)
  // @Get('teste')
  // async test(): Promise<string> {
  //   return 'Autorizado'
  // }
}
