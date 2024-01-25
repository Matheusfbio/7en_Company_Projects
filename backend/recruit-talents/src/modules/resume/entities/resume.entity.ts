import { User } from '../../user/entities/user.entity';
import { Column, Entity, OneToOne } from 'typeorm';
import { CommonEntity } from '../../../common/entities';

@Entity('resume')
export class Resume extends CommonEntity {
  @OneToOne(() => User, (user) => user.resume)
  user: User;

  @Column()
  resume: string;

  @Column({
    type: 'uuid',
  })
  userId: string;
}
