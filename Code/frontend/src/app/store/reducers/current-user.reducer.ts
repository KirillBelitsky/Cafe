import {User} from '../../models/user.model';
import {Reducer} from 'redux';
import {
  REGISTER_USER,
  REGISTER_USER_FAILED,
  REGISTER_USER_SUCCESS,
  UPDATE_CURRENT_USER
} from '../actions/current-user.actions';

export const currentUserReducer: Reducer<User> = (state: User = null, action) => {
  switch (action.type) {
    case REGISTER_USER: {
      return state;
    }
    case REGISTER_USER_SUCCESS: {
      // const {user} = action.payload;
      // const modifiedUsers = new Map(state.).set(user.id, user);
      return state;
    }
    case REGISTER_USER_FAILED: {
      return state
    }
    case UPDATE_CURRENT_USER: {
      return action.payload.user;
    }
    default: {
      return state;
    }
  }
};
