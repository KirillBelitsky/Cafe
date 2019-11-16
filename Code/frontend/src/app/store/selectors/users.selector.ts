import {AppState} from '../index';

export const selectUsers = (state: AppState) => Array.from(state.usersState.users.values());

export const isLoading = (state: AppState) => state.usersState.isLoading;
