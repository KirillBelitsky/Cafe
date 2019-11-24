import {combineReducers, Reducer} from 'redux';
import {productReducer} from './product.reducer';
import {usersReducer} from './users.reducer';
import {userPageReducer} from './user-state.reducer';
import {currentUserReducer} from './current-user.reducer';
import {currentProductReducer} from './current-product.reducer';

export const reducers: Reducer = combineReducers({
  product: productReducer,
  userState: usersReducer,
  userPage: userPageReducer,
  currentUser: currentUserReducer,
  currentProduct: currentProductReducer,
});
