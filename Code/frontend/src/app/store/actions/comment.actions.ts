import {Comment} from '../../models/comment.model';

export const FETCH_COMMENTS = '[Comments] Fetch comments';
export const FETCH_COMMENTS_SUCCESS = '[Comments] Fetch comments success';
export const FETCH_COMMENTS_FAILED = '[Comments] Fetch comments failed';
export const SAVE_COMMENT = '[Comment] Save comment';
export const SAVE_COMMENT_SUCCESS = '[Comment] Save comment success';
export const SAVE_COMMENT_FAILED = '[Comment] Save comment failed';
export const UPDATE_COMMENTS_ADD = '[Comment] Update comments after saving';
export const REMOVE_COMMENT = '[Comment] Remove comment';
export const REMOVE_COMMENT_SUCCESS = '[Comment] Remove comment success';

export function fetchCommentsAction(id: string) {
  return {
    type: FETCH_COMMENTS,
    payload: {id}
  };
}

export function fetchCommentsActionSuccess(comments: Comment[]) {
  return {
    type: FETCH_COMMENTS_SUCCESS,
    payload: {comments}
  };
}

export function fetchCommentsActionFailed(error: string) {
  return {
    type: FETCH_COMMENTS_FAILED,
    payload: {error}
  };
}

export function saveCommentAction(comment: Comment) {
  return {
    type: SAVE_COMMENT,
    payload: {comment}
  };
}

export function saveCommentActionSuccess(comment: Comment) {
  return {
    type: SAVE_COMMENT_SUCCESS,
    payload: {comment}
  };
}

export function saveCommentActionFailed(error: string) {
  return {
    type: SAVE_COMMENT_FAILED,
    payload: {error}
  };
}

export function updateCommentsActionAfterSave(comment: Comment) {
  return {
    type: UPDATE_COMMENTS_ADD,
    payload: {comment}
  };
}

export function removeCommentAction(id: string) {
  return {
    type: REMOVE_COMMENT,
    payload: {id}
  };
}

export function removeCommentActionSuccess(id: string) {
  return {
    type: REMOVE_COMMENT_SUCCESS,
    payload: {id}
  };
}
