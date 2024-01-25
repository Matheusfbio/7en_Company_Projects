import { UserSkill } from '../../user-skill/entities/user-skill.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('skill')
export class Skill {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description!: string;

  @OneToMany(() => UserSkill, (userSkill) => userSkill.skill)
  userSkill?: UserSkill[];
}
