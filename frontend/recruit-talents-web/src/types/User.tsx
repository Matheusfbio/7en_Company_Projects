import { Skill } from '../contexts/FormContext'

export type User = {
  id: number
  firstName: string
  lastName: string
  dob: number
  email: string | number
  phone: number
  workingWith: string
  // userSkill: [Skill] | any;
  about: string
  password: string | number
  level: string
  resume: string // fileName
}
