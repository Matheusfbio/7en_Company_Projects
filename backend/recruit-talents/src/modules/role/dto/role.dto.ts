import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';
import { CommonEntityDto } from 'src/common/dto';
import { RoleInterface } from '../interface';

export class RoleDto extends CommonEntityDto implements RoleInterface {
  @ApiProperty({
    type: 'string',
    description: 'email',
  })
  @IsString()
  @Expose()
  name!: string;
}
