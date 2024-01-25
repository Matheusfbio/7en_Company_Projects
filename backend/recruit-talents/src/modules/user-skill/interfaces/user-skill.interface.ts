import { CommonEntityInterface } from 'src/common/interfaces';

export interface UserSkillInterface extends CommonEntityInterface {
  userId: string;
  skillId: string;
}
