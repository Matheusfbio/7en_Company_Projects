import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { Repository } from 'typeorm';
import { CreateUserSkillDto } from './dto/create-user-skill.dto';
import { UserSkillDto } from './dto/user-skill.dto';
import { UserSkill } from './entities/user-skill.entity';

@Injectable()
export class UserSkillService {
  constructor(
    @InjectRepository(UserSkill)
    private repo: Repository<UserSkill>,
  ) {}

  public async create(
    createUserSkillDto: CreateUserSkillDto,
  ): Promise<UserSkillDto> {
    const userSkill = this.repo.create(createUserSkillDto);
    const dbUserSkill = await this.repo.save(userSkill);
    console.log("db userSKill",dbUserSkill);
    return plainToInstance(UserSkillDto, dbUserSkill);
  }

  public async findAll(): Promise<UserSkillDto[]> {
    const userSkill = await this.repo.find();
    return plainToInstance(UserSkillDto, userSkill);
  }

  private async findById(id: string): Promise<UserSkill> {
    const userSkill = await this.repo.findOneBy({
      id,
    });
    if (!userSkill) throw new NotFoundException();
    return userSkill;
  }

  public async findOne(id: string): Promise<UserSkillDto> {
    const userSkill = await this.findById(id);
    return plainToInstance(UserSkillDto, userSkill);
  }

  public async remove(id: string): Promise<void> {
    const userSkill = await this.findById(id);
    await this.repo.remove(userSkill);
  }
}
