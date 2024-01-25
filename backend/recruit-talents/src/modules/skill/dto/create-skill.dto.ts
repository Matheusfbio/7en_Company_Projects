import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateSkillDto {
  @ApiProperty({
    type: 'string',
    description: 'skills',
  })
  @IsString()
  description!: string;
}
