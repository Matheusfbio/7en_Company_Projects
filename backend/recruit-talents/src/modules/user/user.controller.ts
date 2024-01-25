import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserCreateDto } from './dto/user-create.dto';
import { UserUpdateDto } from './dto/user-update.dto';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({
    operationId: 'user_create',
    description: 'Endpoint to create a new user',
  })
  @ApiOkResponse({
    description: 'Success user created',
  })
  create(@Body() userCreateDto: UserCreateDto): Promise<UserDto> {
    return this.userService.create(userCreateDto);
  }

  @Get()
  @ApiOperation({
    operationId: 'user_findAll',
    description: 'Endpoint to find all',
  })
  findAll(): Promise<UserDto[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    operationId: 'user_findOne',
    description: 'Endpoint to create a new user',
  })
  @ApiOkResponse({
    description: 'Success user created',
  })
  @ApiNotFoundResponse({
    description: 'Was not able to find user',
  })
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  // @Patch(':id')
  // @ApiOperation({
  //   operationId: 'user_update',
  //   description: 'Endpoint to update user',
  // })
  // update(@Param('id') id: string, @Body() userUpdateDto: UserUpdateDto) {
  //   return this.userService.update(id, userUpdateDto);
  // }

  @ApiOperation({
    operationId: 'user_delete',
    description: 'Endpoint to delete all',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
