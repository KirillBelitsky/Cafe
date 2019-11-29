import {combineReducers, Reducer} from 'redux';
import {productReducer} from './product.reducer';
import {usersReducer} from './users.reducer';
import {userPageReducer} from './user-state.reducer';
import {currentUserReducer} from './current-user.reducer';
import {currentProductReducer} from './current-product.reducer';
import {commentReducer} from './comment.reducer';
import {currentSalesOrder} from './current-sales-order.reducer';

export const reducers: Reducer = combineReducers({
  productState: productReducer,
  userState: usersReducer,
  userPage: userPageReducer,
  currentUser: currentUserReducer,
  currentProduct: currentProductReducer,
  commentState: commentReducer,
  currentSalesOrder: currentSalesOrder
});
