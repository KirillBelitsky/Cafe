export interface User {
  readonly id: string;
  readonly email: string;
  readonly login: string;
  readonly password: string;
  readonly enabled: boolean;
}

export const defaultUser: User = {
  id: null,
  email: '',
  login: '',
  password: '',
  enabled: false
};
