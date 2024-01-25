import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsUUID } from 'class-validator';
import { RoleDto } from 'src/modules/role/dto/role.dto';
import { CommonEntityDto } from '../../../common/dto';
import { UserRoleInterface } from '../interfaces';

export class UserRoleDto extends CommonEntityDto implements UserRoleInterface {
  @ApiProperty({ format: 'uuid' })
  @IsUUID()
  userId!: string;

  @ApiProperty({ format: 'uuid' })
  @IsUUID()
  roleId: string;

  @ApiProperty({ type: () => RoleDto, required: false })
  @Expose()
  role: RoleDto;
}
