import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose, Type } from 'class-transformer';
import { CommonEntityDto } from 'src/common/dto';
import { Resume } from 'src/modules/resume/entities/resume.entity';
import { UserRoleDto } from 'src/modules/user-role/dto/user-role.dto';
import { UserSkillDto } from 'src/modules/user-skill/dto/user-skill.dto';
import { UserRole } from '../../user-role/entities/user-role.entity';
import { UserSkill } from '../../user-skill/entities/user-skill.entity';
import { UserInterface } from '../interfaces/user.interface';

@Exclude()
export class UserDto
  extends CommonEntityDto
  implements Omit<UserInterface, 'salt' | 'password'>
{
  @Expose()
  @ApiProperty({
    type: 'string',
    description: 'Primeiro nome',
  })
  firstName: string;

  @Expose()
  @ApiProperty({
    type: 'string',
    description: 'Sobrenome',
  })
  lastName: string;

  @Expose()
  @ApiProperty({
    type: 'string',
    description: 'Date',
  })
  dob: string;

  @Expose()
  @ApiProperty({
    type: 'string',
    description: 'email',
  })
  email: string;

  @Expose()
  @ApiProperty({
    type: 'string',
    description: 'Phone',
  })
  phone: string;

  @Expose()
  @ApiProperty({
    type: 'string',
    description: 'Trabalho',
  })
  workingWith?: string;

  @Exclude()
  level!: number;

  @Exclude()
  active!: boolean;

  @Exclude()
  userRoles!: UserRoleDto[];

  @Expose()
  @ApiProperty({
    type: [UserSkillDto],
    description: 'Skills',
  })
  userSkill!: UserSkillDto[];

  @Expose()
  @ApiProperty({
    type: 'string',
    description: 'resume',
  })
  resume: string;

  @Expose()
  @ApiProperty({
    type: 'string',
    description: 'about',
  })
  about: string;
}
