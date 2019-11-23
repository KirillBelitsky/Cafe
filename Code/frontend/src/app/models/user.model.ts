export interface User {
  readonly id: string;
  readonly email: string;
  readonly login: string;
  readonly password: string;
}

export const defaultUser: User = {
  id: null,
  email: '',
  login: '',
  password: ''
};
