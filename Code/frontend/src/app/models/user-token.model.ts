import {Token} from './token';
import {User} from './user.model';

export interface UserTokenModel {
  user: User;
  token: Token;
}
