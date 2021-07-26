import { Module } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [UsersService, PassportModule],
  providers: [AuthService, LocalStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
