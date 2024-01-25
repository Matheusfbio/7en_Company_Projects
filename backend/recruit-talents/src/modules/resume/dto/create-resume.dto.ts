import { ApiProperty } from '@nestjs/swagger';

export class CreateResumeDto {
  @ApiProperty({
    type: 'string',
    description: 'resume',
  })
  resume!: string;
}
