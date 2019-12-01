import {combineReducers, Reducer} from 'redux';
import {productReducer} from './product.reducer';
import {currentUserReducer} from './current-user.reducer';
import {currentProductReducer} from './current-product.reducer';
import {commentReducer} from './comment.reducer';
import {currentMenuCategoryReducer} from './current-menu-category.reducer';
import {currentSalesOrderReducer} from './current-sales-order.reducer';

export const reducers: Reducer = combineReducers({
  productState: productReducer,
  currentUser: currentUserReducer,
  currentProduct: currentProductReducer,
  commentState: commentReducer,
  currentSalesOrder: currentSalesOrderReducer,
  currentMenuCategory: currentMenuCategoryReducer
});
