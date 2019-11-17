import {Credential} from '../../models/credential.model';
import {User} from '../../models/user.model';

export const LOGIN_USER = '[Current T] Login User';
export const LOGIN_USER_FAILED = '[Current T] Login User Failed';
export const LOGOUT_USER = '[Current T] Logout';
export const UPDATE_CURRENT_USER = '[Current T] Update Current User';

export function loginUserAction(credential: Credential) {
  return {
    type: LOGIN_USER,
    payload: { credential }
  };
}

export function loginUserActionFailed() {
  return {
    type: LOGIN_USER_FAILED
  };
}

export function logoutUserAction() {
  return {
    type: LOGOUT_USER
  };
}

export function updateCurrentUserAction(user: User) {
  return {
    type: UPDATE_CURRENT_USER,
    payload: {user}
  };
}
