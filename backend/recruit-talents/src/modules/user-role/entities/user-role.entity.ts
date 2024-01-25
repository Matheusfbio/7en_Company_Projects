import { CommonEntity } from 'src/common/entities';
import { Role } from '../../role/entities/role.entity';
import { User } from '../../user/entities/user.entity';
import { Column, Entity, ManyToOne, Unique } from 'typeorm';
import { UserRoleInterface } from '../interfaces';

@Entity()
@Unique(['userId', 'roleId'])
export class UserRole extends CommonEntity implements UserRoleInterface {
  @Column()
  userId!: string;

  @Column()
  roleId!: string;

  @ManyToOne(() => User, (user) => user.userRoles)
  user?: User;

  @ManyToOne(() => Role, (role) => role.userRoles)
  role?: Role;
}
