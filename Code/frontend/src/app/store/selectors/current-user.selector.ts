import {AppState} from '../index';

export const selectCurrentUser = (state: AppState) => state.currentUser;
export const selectLoginOfCurrentUser = (state: AppState) => state.currentUser.login;
