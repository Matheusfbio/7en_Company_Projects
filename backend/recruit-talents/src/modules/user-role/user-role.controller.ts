import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UserRoleService } from './user-role.service';
import { CreateUserRoleDto } from './dto/create-user-role.dto';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { UserRoleDto } from './dto/user-role.dto';

@ApiTags('user-role')
@Controller('user-role')
export class UserRoleController {
  constructor(private readonly userRoleService: UserRoleService) {}

  @Post()
  @ApiOperation({
    operationId: 'userUserRole_create',
    description: 'Endpoint to create a new userUserRole',
  })
  @ApiOkResponse({
    description: 'Success userUserRole created',
  })
  create(@Body() createUserRoleDto: CreateUserRoleDto): Promise<UserRoleDto> {
    return this.userRoleService.create(createUserRoleDto);
  }

  @Get()
  @ApiOperation({
    operationId: 'userUserRole_findAll',
    description: 'Endpoint to find all',
  })
  findAll() {
    return this.userRoleService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    operationId: 'userUserRole_findOne',
    description: 'Endpoint to create a new userUserRole',
  })
  @ApiOkResponse({
    description: 'Success userUserRole created',
  })
  @ApiNotFoundResponse({
    description: 'Was not able to find userUserRole',
  })
  findOne(@Param('id') id: string): Promise<UserRoleDto> {
    return this.userRoleService.findOne(id);
  }

  @ApiOperation({
    operationId: 'userUserRole_delete',
    description: 'Endpoint to delete all',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userRoleService.remove(id);
  }
}
