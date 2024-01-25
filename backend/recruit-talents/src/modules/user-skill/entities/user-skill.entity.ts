import { CommonEntity } from 'src/common/entities';
import { Skill } from '../../skill/entities/skill.entity';
import { User } from '../../user/entities/user.entity';
import { Column, Entity, ManyToOne, Unique } from 'typeorm';
import { UserSkillInterface } from '../interfaces/user-skill.interface';

@Entity()
@Unique(['userId', 'skillId'])
export class UserSkill extends CommonEntity implements UserSkillInterface {
  @Column()
  userId!: string;

  @Column()
  skillId!: string;

  @ManyToOne(() => User, (user) => user.userSkill)
  user?: User;

  @ManyToOne(() => Skill, (skill) => skill.userSkill)
  skill!: Skill;
}
