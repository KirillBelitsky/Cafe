import {User} from './user.model';

export interface Role {
  readonly id: string;
  readonly role: string;
  readonly users: Set<User>;
}
