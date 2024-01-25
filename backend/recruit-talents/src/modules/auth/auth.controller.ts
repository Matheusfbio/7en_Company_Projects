import { Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserDto } from '../user/dto/user.dto';
import { AuthUser } from './decorator/auth-user.decorator';

@Controller('auth')
export class AuthController {
  @UseGuards(AuthGuard('local'))
  @Post('protected')
  signIn(@AuthUser() user: UserDto) {
    return user;
  }
}
