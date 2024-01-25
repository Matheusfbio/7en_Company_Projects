import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UserSkillService } from './user-skill.service';
import { CreateUserSkillDto } from './dto/create-user-skill.dto';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { UserSkillDto } from './dto/user-skill.dto';

@ApiTags('user-skill')
@Controller('user-skill')
export class UserSkillController {
  constructor(private readonly userSkillService: UserSkillService) {}

  @Post()
  @ApiOperation({
    operationId: 'userSkill',
    description: 'Endpoint to create a new userSkill',
  })
  @ApiOkResponse({
    description: 'Success userSkill created',
  })
  create(
    @Body() createUserSkillDto: CreateUserSkillDto,
  ): Promise<UserSkillDto> {
    return this.userSkillService.create(createUserSkillDto);
  }

  @Get()
  @ApiOperation({
    operationId: 'userSkill_findAll',
    description: 'Endpoint to find all',
  })
  findAll(): Promise<UserSkillDto[]> {
    return this.userSkillService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    operationId: 'userSkill_findOne',
    description: 'Endpoint to create a new userSkill',
  })
  @ApiOkResponse({
    description: 'Success userSkill created',
  })
  @ApiNotFoundResponse({
    description: 'Was not able to find userSkill',
  })
  findOne(@Param('id') id: string) {
    return this.userSkillService.findOne(id);
  }

  @ApiOperation({
    operationId: 'userSkill_delete',
    description: 'Endpoint to delete all',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userSkillService.remove(id);
  }
}
