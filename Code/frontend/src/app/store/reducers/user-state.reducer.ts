import {User} from '../../models/user.model';
import {Reducer} from 'redux';
import {SELECT_USER_SUCCESS} from '../actions/user-state.actions';

export interface UserPageState {
  readonly userModel: User;
}

const INITIAL_STATE = {
  userModel: null
};

export const userPageReducer: Reducer<UserPageState> = (state: UserPageState = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_USER_SUCCESS: {
      return {...state, userModel: action.payload.user};
    }
    default: {
      return state;
    }
  }
};
