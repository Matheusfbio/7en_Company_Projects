import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { Repository } from 'typeorm';
import { CreateSkillDto } from './dto/create-skill.dto';
import { SkillDto } from './dto/skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { Skill } from './entities/skill.entity';

@Injectable()
export class SkillService {
  constructor(
    @InjectRepository(Skill)
    private repo: Repository<Skill>,
  ) {}

  public async create(createSkillDto: CreateSkillDto): Promise<SkillDto> {
    const skill = this.repo.create(createSkillDto);
    const dbSkill = await this.repo.save(skill);
    return plainToInstance(SkillDto, dbSkill);
  }

  public async findAll(): Promise<SkillDto[]> {
    const skills = await this.repo.find();
    return plainToInstance(SkillDto, skills);
  }

  private async findById(id: string): Promise<Skill> {
    const skills = await this.repo.findOneBy({
      id,
    });
    if (!skills) throw new NotFoundException();
    return skills;
  }

  public async findOne(id: string): Promise<SkillDto> {
    const skill = await this.findById(id);
    return plainToInstance(SkillDto, skill);
  }

  public async update(
    id: string,
    updateSkillDto: UpdateSkillDto,
  ): Promise<SkillDto> {
    const skill = await this.findById(id);
    const newSkill: Skill = {
      ...skill,
      ...updateSkillDto,
    };
    this.repo.save(newSkill);
    return plainToInstance(SkillDto, newSkill);
  }

  public async remove(id: string): Promise<void> {
    const skill = await this.findById(id);
    await this.repo.remove(skill);
  }
}
