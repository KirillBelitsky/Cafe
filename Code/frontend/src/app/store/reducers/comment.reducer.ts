import {Reducer} from 'redux';
import {AppState} from '../index';
import {Comment} from '../../models/comment.model';
import {FETCH_COMMENTS, FETCH_COMMENTS_FAILED, FETCH_COMMENTS_SUCCESS} from '../actions/comment.actions';

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
    case FETCH_COMMENTS: {
      return { ...state, isLoading: true };
    }
    case FETCH_COMMENTS_SUCCESS: {
      const comments = action.payload.comments as Comment[];
      comments.forEach(value => state.comments.set(value.id, value));
      return { ...state, isLoading: false }
    }
    case FETCH_COMMENTS_FAILED: {
      return { ...state, isLoading: false };
    }
    default: {
      return { ...state };
    }
  }
}
