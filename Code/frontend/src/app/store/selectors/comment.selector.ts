import {AppState} from '../index';

export const fetchComments = (state: AppState) => {
  return Array.from(state.commentState.comments.values());
};

export const fetchCommentsIsLoading = (state: AppState) => state.commentState.isLoading;
