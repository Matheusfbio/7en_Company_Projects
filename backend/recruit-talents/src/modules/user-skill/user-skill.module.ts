import { Module } from '@nestjs/common';
import { UserSkillService } from './user-skill.service';
import { UserSkillController } from './user-skill.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSkill } from './entities/user-skill.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserSkill])],
  controllers: [UserSkillController],
  providers: [UserSkillService],
  exports: [UserSkillService],
})
export class UserSkillModule {}
