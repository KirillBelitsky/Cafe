export interface User {
  readonly id: string;
  readonly email: string;
  readonly phoneNumber: string;
  readonly password: string;
}

export const defaultUser: User = {
  id: null,
  email: '',
  phoneNumber: '',
  password: ''
};
