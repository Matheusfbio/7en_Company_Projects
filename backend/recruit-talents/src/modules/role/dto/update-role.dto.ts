import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateRoleDto {
  @ApiProperty({
    type: 'string',
    description: 'email',
  })
  @IsString()
  name!: string;
}
