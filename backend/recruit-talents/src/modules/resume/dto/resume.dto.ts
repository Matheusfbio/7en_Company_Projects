import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';
import { CommonEntityDto } from 'src/common/dto';
import { ResumeInterface } from '../interfaces/resume.interface';

export class ResumeDto extends CommonEntityDto implements ResumeInterface {
  @ApiProperty({
    type: 'string',
    description: 'resume',
  })
  @Expose()
  @IsString()
  resume!: string;
}
