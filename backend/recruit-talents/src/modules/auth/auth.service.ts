/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UserDto } from '../user/dto/user.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUserPassword(
    username: string,
    password: string,
  ): Promise<UserDto | null> {
    const user = await this.userService.validateUserPassoword(username, password);
    // if (!user) throw new UnauthorizedException();
    return user;
  }
}
