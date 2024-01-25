import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsUUID } from 'class-validator';
import { CommonEntityDto } from 'src/common/dto';
import { SkillDto } from 'src/modules/skill/dto/skill.dto';
import { UserDto } from 'src/modules/user/dto/user.dto';
import { UserSkillInterface } from '../interfaces/user-skill.interface';

export class UserSkillDto
  extends CommonEntityDto
  implements UserSkillInterface
{
  @ApiProperty({ format: 'uuid' })
  @IsUUID()
  userId!: string;

  @ApiProperty({ format: 'uuid' })
  @IsUUID()
  skillId!: string;

  @ApiProperty({ type: () => SkillDto, required: false })
  @Expose()
  skill: SkillDto;
}
