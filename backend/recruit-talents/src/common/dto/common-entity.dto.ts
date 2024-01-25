import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CommonEntityDto {
  @ApiProperty({
    type: 'string',
    format: 'uuid',
    title: 'Id',
    description: 'The primary key of the resource. ',
  })
  @Expose()
  id!: string;

  @ApiProperty({
    type: 'string',
    format: 'uuid',
    title: 'Id',
    description: 'The date and time at with the resource was created. ',
  })
  @Expose()
  createdAt: Date;

  @ApiProperty({
    type: 'string',
    format: 'uuid',
    title: 'Id',
    description: 'The date and time at which the resource was last updated.',
  })
  @Expose()
  updatedAt: Date;
}
