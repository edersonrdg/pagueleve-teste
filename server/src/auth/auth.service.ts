import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor (private userService: UsersService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.getUser(username);
    const mathPass = await bcrypt.compare(pass, user.password)
    if (user && mathPass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
