import {Token} from './token';
import {User} from './user.model';

export interface UserTokenModel {
  readonly user: User;
  readonly token: Token;
}
