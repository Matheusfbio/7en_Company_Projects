import { CommonEntity } from 'src/common/entities';
import { UserRole } from '../../user-role/entities/user-role.entity';
import { UserSkill } from '../../user-skill/entities/user-skill.entity';
import { Column, Entity, OneToMany, Unique } from 'typeorm';
import { UserInterface } from '../interfaces/user.interface';

@Entity('user')
@Unique(['email'])
export class User extends CommonEntity implements UserInterface {
  @Column({ type: 'citext', nullable: true })
  firstName!: string;

  @Column({ type: 'citext', nullable: true })
  lastName!: string;

  @Column({ type: 'text' })
  dob!: string;

  @Column({ type: 'citext' })
  email!: string;

  @Column({ type: 'text', nullable: false })
  password!: string;

  @Column({ type: 'text', nullable: true, default: null })
  salt!: string;

  @Column({ type: 'text' })
  phone!: string;

  @Column({ type: 'text' })
  workingWith!: string;

  @Column({ type: 'text' })
  about: string;

  @Column({ type: 'text' })
  level!: number;

  @Column({ default: true, nullable: false })
  active!: boolean;

  @OneToMany(() => UserRole, (userRole) => userRole.user)
  userRoles!: UserRole[];

  @OneToMany(() => UserSkill, (userSkill) => userSkill.user)
  userSkill!: UserSkill[];

  @Column({ type: 'text', nullable: true })
  resume!: string;
}
