import {ProductState} from './reducers/product.reducer';
import {UsersState} from './reducers/users.reducer';
import {UserPageState} from './reducers/user-state.reducer';
import {User} from '../models/user.model';
import {CurrentProductState} from './reducers/current-product.reducer';
import {CommentState} from './reducers/comment.reducer';
import {SalesOrder} from '../models/sales-order.model';

export interface AppState {
  readonly productState?: ProductState;
  readonly usersState?: UsersState;
  readonly userPageState?: UserPageState;
  readonly currentUser?: User;
  readonly currentProduct?: CurrentProductState;
  readonly commentState?: CommentState;
  readonly currentSalesOrder?: SalesOrder
}
