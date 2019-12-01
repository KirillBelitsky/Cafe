import {ProductState} from './reducers/product.reducer';
import {User} from '../models/user.model';
import {CurrentProductState} from './reducers/current-product.reducer';
import {CommentState} from './reducers/comment.reducer';
import {SalesOrder} from '../models/sales-order.model';
import {CurrentMenuCategoryState} from './reducers/current-menu-category.reducer';

export interface AppState {
  readonly productState?: ProductState;
  readonly currentUser?: User;
  readonly currentProduct?: CurrentProductState;
  readonly commentState?: CommentState;
  readonly currentSalesOrder?: SalesOrder,
  readonly currentMenuCategory?: CurrentMenuCategoryState
}
