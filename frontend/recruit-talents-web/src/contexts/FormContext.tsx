import { createContext, useContext, useReducer, ReactNode } from "react";

export type Skill = {
  skill: {
    description: any;
  };
};
export type State = {
  firstName: string;
  lastName: string;
  dob: number | any | string;
  email: string;
  phone: number | any;
  workingWith: string;
  userSkill: [Skill] | any;
  about: string;
  password: string | number;
  level: any;
  resume: string;
};

type Action = {
  type: FormActions;
  payload: any;
};

type ContextType = {
  state: State;
  dispatch: (action: Action) => void;
};

type FormProviderProps = {
  children: ReactNode;
};

const initialData: State = {
  firstName: "",
  lastName: "",
  dob: "",
  email: "",
  phone: "",
  workingWith: "",
  userSkill: [],
  about: "",
  password: "",
  level: 0,
  resume: "",
};

// context
const FormContext = createContext<ContextType | undefined>(undefined);

// reducer
export enum FormActions {
  setFirstName,
  setLastName,
  setDob,
  setEmail,
  setPassword,
  setPhone,
  setWorkingWith,
  setUserSkill,
  setAbout,
  setLevel,
  setResume,
}

const formReducer = (state: State, action: Action) => {
  switch (action.type) {
    case FormActions.setFirstName:
      return { ...state, firstName: action.payload };
    case FormActions.setLastName:
      return { ...state, lastName: action.payload };
    case FormActions.setDob:
      return { ...state, dob: action.payload };
    case FormActions.setEmail:
      return { ...state, email: action.payload };
    case FormActions.setPassword:
      return { ...state, password: action.payload };
    case FormActions.setPhone:
      return { ...state, phone: action.payload };
    case FormActions.setWorkingWith:
      return { ...state, workingWith: action.payload };
    case FormActions.setUserSkill:
      return { ...state, userSkill: action.payload };
    case FormActions.setAbout:
      return { ...state, about: action.payload };
    case FormActions.setLevel:
      return { ...state, level: action.payload };
    case FormActions.setResume:
      return { ...state, resume: action.payload };
  }
};

// provider
export const FormProvider = ({ children }: FormProviderProps) => {
  const [state, dispatch] = useReducer(formReducer, initialData);
  const value = { state, dispatch };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

// context hook

export const useForms = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error("useForm precisa ser usado dentro do FormProvider");
  }
  return context;
};
