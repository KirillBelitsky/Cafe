import {Reducer} from 'redux';
import {Comment} from '../../models/comment.model';
import {
  FETCH_COMMENTS,
  FETCH_COMMENTS_FAILED,
  FETCH_COMMENTS_SUCCESS,
  SAVE_COMMENT,
  SAVE_COMMENT_FAILED, SAVE_COMMENT_SUCCESS, UPDATE_COMMENTS_ADD
} from '../actions/comment.actions';

export interface CommentState {
  readonly comments: Map<string, Comment>;
  readonly isLoading: boolean;
}

const INITIAL_STATE = {
  comments: new Map<string, Comment>(),
  isLoading: false
};

export const commentReducer: Reducer<CommentState> = (state: CommentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_COMMENTS:
    case SAVE_COMMENT: {
      return { ...state, isLoading: true };
    }
    case FETCH_COMMENTS_SUCCESS: {
      const comments = action.payload.comments as Comment[];
      comments.forEach(value => state.comments.set(value.id, value));
      return { ...state, isLoading: false }
    }
    case SAVE_COMMENT_SUCCESS: {
      return { ...state, isLoading: false }
    }
    case UPDATE_COMMENTS_ADD: {
      state.comments.set(action.payload.comment.id, action.payload.comment);
      return { ...state, isLoading: false }
    }
    case FETCH_COMMENTS_FAILED:
    case SAVE_COMMENT_FAILED:  {
      console.log(action.payload.error);
      return { ...state, isLoading: false };
    }
    default: {
      return { ...state };
    }
  }
};
