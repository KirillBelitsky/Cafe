import {User} from '../../models/user.model';
import {Reducer} from 'redux';
import {FETCH_USERS, FETCH_USERS_SUCCESS} from '../actions/user.actions';

export interface UsersState {
  readonly users: Map<string, User>;
  readonly isLoading: boolean;
}

const INITIAL_STATE = {
  users: new Map<string, User>(),
  isLoading: false
};

export const usersReducer: Reducer<UsersState> = (state: UsersState = INITIAL_STATE, action): UsersState => {
  switch (action.type) {
    case FETCH_USERS: {
      return { ...state, isLoading: true };
    }
    case FETCH_USERS_SUCCESS: {
      return { ...state, ...action.payload, isLoading: false };
    }
    default: {
      return state;
    }
  }
};
