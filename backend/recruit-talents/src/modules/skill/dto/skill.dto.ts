import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { CommonEntityDto } from 'src/common/dto';
import { SkillInterface } from '../interfaces/skill.interface';

@Exclude()
export class SkillDto extends CommonEntityDto implements SkillInterface {
  @Expose()
  @ApiProperty({
    type: 'string',
    description: 'skills',
  })
  description!: string;
}
