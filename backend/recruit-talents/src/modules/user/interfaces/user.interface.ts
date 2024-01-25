import { CommonEntityInterface } from 'src/common/interfaces';
import { ResumeInterface } from 'src/modules/resume/interfaces/resume.interface';
import { UserRoleInterface } from 'src/modules/user-role/interfaces';
import { UserSkillInterface } from 'src/modules/user-skill/interfaces/user-skill.interface';

export interface UserInterface extends CommonEntityInterface {
  firstName: string;
  lastName: string;
  dob: string;
  email: string;
  password: string;
  phone: string;
  workingWith?: string;
  salt: string;
  active: boolean;
  level?: number;
  userRoles?: UserRoleInterface[];
  userSkill?: UserSkillInterface[];
  resume?: string;
  about?: string;
}
