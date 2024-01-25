import { forwardRef, Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '../user/user.module';
import { AuthLocalStrategy } from './auth-local.strategy';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [
   forwardRef(() => UserModule),
   PassportModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthLocalStrategy],
})
export class AuthModule {}
