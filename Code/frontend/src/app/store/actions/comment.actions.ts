import {Comment} from '../../models/comment.model';

export const FETCH_COMMENTS = '[Comments] Fetch comments';
export const FETCH_COMMENTS_SUCCESS = '[Comments] Fetch comments success';
export const FETCH_COMMENTS_FAILED = '[Comments] Fetch comments failed';

export function fetchCommentsAction(id: string) {
  return {
    type: FETCH_COMMENTS,
    payload: { id }
  };
}

export function fetchCommentsActionSuccess(comments: Comment[]) {
  return {
    type: FETCH_COMMENTS_SUCCESS,
    payload: { comments }
  };
}

export function fetchCommentsActionFailed(error: string) {
  return {
    type: FETCH_COMMENTS_FAILED,
    payload: { error }
  };
}
