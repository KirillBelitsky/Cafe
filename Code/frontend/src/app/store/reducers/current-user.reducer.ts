import {User} from '../../models/user.model';
import {Reducer} from 'redux';

export const currentUserReducer: Reducer<User> = (state: User = null, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
