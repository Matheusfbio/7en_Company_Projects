import { UserInterface } from './user.interface';

export interface UserCreatetableInterface
  extends Pick<
    UserInterface,
    | 'firstName'
    | 'lastName'
    | 'dob'
    | 'password'
    | 'phone'
    | 'email'
    | 'workingWith'
    | 'userRoles'
    | 'userSkill'
    | 'resume'
    | 'about'
  >,
  Partial<Pick<UserInterface, 'active'>> { }
