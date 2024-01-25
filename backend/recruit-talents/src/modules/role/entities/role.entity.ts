import { CommonEntity } from 'src/common/entities';
import { UserRole } from '../../user-role/entities/user-role.entity';
import { Column, Entity, OneToMany, Unique } from 'typeorm';

@Entity()
@Unique(['name'])
export class Role extends CommonEntity {
  @Column()
  name!: string;

  @OneToMany(() => UserRole, (userRole) => userRole.role)
  userRoles?: UserRole[];
}
