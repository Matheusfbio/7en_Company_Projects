import { ApiProperty, IntersectionType, PartialType, PickType } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsStrongPassword } from 'src/common/decorators/is-strong-password';
import { UserUpdatableInterface } from '../interfaces/user.updateble.interface';
import { UserCreateDto } from './user-create.dto';
import { UserDto } from './user.dto';

export class UserUpdateDto
  extends IntersectionType(
    PickType(UserDto, [
      'firstName',
      'lastName',
      'dob',
      'email',
      'phone',
      'workingWith',
    ]),
    PartialType(PickType(UserCreateDto, ['level', 'active'])),
  )
  implements UserUpdatableInterface {

    @Expose()
    @ApiProperty({
      type: 'password',
      description: 'password',
    })
    @IsStrongPassword()
    password!: string;
  }
