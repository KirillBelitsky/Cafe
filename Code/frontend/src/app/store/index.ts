import {ProductState} from './reducers/product.reducer';
import {UsersState} from './reducers/users.reducer';
import {UserPageState} from './reducers/user-state.reducer';
import {User} from '../models/user.model';

export interface AppState {
  readonly productState?: ProductState;
  readonly usersState?: UsersState;
  readonly userPageState?: UserPageState;
  readonly currentUser?: User;
}
