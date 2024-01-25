import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { RoleDto } from './dto/role.dto';

@ApiTags('roles')
@Controller('roles')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  @ApiOperation({
    operationId: 'role_create',
    description: 'Endpoint to create a new role',
  })
  @ApiOkResponse({
    description: 'Success role created',
  })
  create(@Body() createRoleDto: CreateRoleDto): Promise<RoleDto> {
    return this.roleService.create(createRoleDto);
  }

  @Get()
  @ApiOperation({
    operationId: 'role_findAll',
    description: 'Endpoint to find all',
  })
  findAll() {
    return this.roleService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    operationId: 'role_findOne',
    description: 'Endpoint to create a new role',
  })
  @ApiOkResponse({
    description: 'Success role created',
  })
  @ApiNotFoundResponse({
    description: 'Was not able to find role',
  })
  findOne(@Param('id') id: string) {
    return this.roleService.findOne(id);
  }

  @ApiOperation({
    operationId: 'role_update',
    description: 'Endpoint to update role',
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.roleService.update(id, updateRoleDto);
  }

  @ApiOperation({
    operationId: 'role_delete',
    description: 'Endpoint to delete all',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roleService.remove(id);
  }
}
