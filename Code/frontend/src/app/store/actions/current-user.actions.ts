import {Credential} from '../../models/credential.model';
import {User} from '../../models/user.model';

export const LOGIN_USER = '[Current T] Login User';
export const LOGIN_USER_FAILED = '[Current T] Login User Failed';
export const LOGOUT_USER = '[Current T] Logout';
export const REGISTER_USER = '[Current T] Register User';
export const REGISTER_USER_SUCCESS = '[Current T] Register User Success';
export const REGISTER_USER_FAILED = '[Current T] Register User Failed';
export const UPDATE_CURRENT_USER = '[Current T] Update Current User';

export function loginUserAction(credential: Credential) {
  return {
    type: LOGIN_USER,
    payload: {credential}
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

export function registerUserAction(credential: Credential) {
  return {
    type: REGISTER_USER,
    payload: {credential}
  };
}

export function registerUserActionSuccess(user: User) {
  return {
    type: REGISTER_USER_SUCCESS,
    payload: {user}
  };
}

export function registerUserActionFailed() {
  return {
    type: REGISTER_USER_FAILED
  };
}

export function updateCurrentUserAction(user: User) {
  return {
    type: UPDATE_CURRENT_USER,
    payload: {user}
  };
}
