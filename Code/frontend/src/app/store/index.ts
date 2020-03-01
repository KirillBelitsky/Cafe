import {ProductState} from './reducers/product.reducer';
import {User} from '../models/user.model';
import {CurrentProductState} from './reducers/current-product.reducer';
import {CommentState} from './reducers/comment.reducer';
import {CurrentMenuCategoryState} from './reducers/current-menu-category.reducer';
import {CurrentSalesOrderState} from './reducers/current-sales-order.reducer';

export interface AppState {
  readonly productState?: ProductState;
  readonly currentUser?: User;
  readonly currentProduct?: CurrentProductState;
  readonly commentState?: CommentState;
  readonly currentSalesOrder?: CurrentSalesOrderState,
  readonly currentMenuCategory?: CurrentMenuCategoryState
}
