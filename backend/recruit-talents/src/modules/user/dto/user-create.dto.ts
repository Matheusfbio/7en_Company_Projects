import {
  ApiProperty,
  IntersectionType,
  PartialType,
  PickType,
} from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsStrongPassword } from 'src/common/decorators/is-strong-password';
import { UserCreatetableInterface } from '../interfaces/user.createtable.interface';
import { UserDto } from './user.dto';

export class UserCreateDto
  extends IntersectionType(
    PickType(UserDto, [
      'firstName',
      'lastName',
      'dob',
      'email',
      'phone',
      'workingWith',
      'userRoles',
      'userSkill',
      'resume',
      'about',
    ]),
    PartialType(PickType(UserDto, ['active', 'level'])),
  )
  implements UserCreatetableInterface
{
  @Expose() '';
  @ApiProperty({
    type: 'string',
    description: 'password',
  })
  @IsStrongPassword()
  password!: string;
}
