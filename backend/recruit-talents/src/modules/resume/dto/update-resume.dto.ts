import { ApiProperty } from '@nestjs/swagger';

export class UpdateResumeDto {
  @ApiProperty({
    type: 'string',
    description: 'resume',
  })
  resume!: string;
}
