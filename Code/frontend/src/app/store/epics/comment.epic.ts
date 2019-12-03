import {Injectable} from '@angular/core';
import {CommentService} from '../../services/comment.service';
import {ActionsObservable} from 'redux-observable';
import {AnyAction} from 'redux';
import {
  FETCH_COMMENTS,
  fetchCommentsActionFailed,
  fetchCommentsActionSuccess, REMOVE_COMMENT, removeCommentActionSuccess,
  SAVE_COMMENT, saveCommentActionFailed, saveCommentActionSuccess, updateCommentsActionAfterSave
} from '../actions/comment.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class CommentEpic {

  constructor(private commentService: CommentService) {
  }

  fetchComments$ = (action$: ActionsObservable<AnyAction>) => {
    return action$.ofType(FETCH_COMMENTS).pipe(
      switchMap(({payload}) => {
        return this.commentService.getCommentsByProductId(payload.id)
          .pipe(
            map(results => {
              return fetchCommentsActionSuccess(results);
            }),
            catchError((err) => {
              return of(fetchCommentsActionFailed(err.message));
            })
          );
      })
    );
  };

  saveComment$ = (action$: ActionsObservable<AnyAction>) => {
    return action$.ofType(SAVE_COMMENT).pipe(
      switchMap(({payload}) => {
        return this.commentService.saveComment(payload.comment)
          .pipe(
            map(result => {
              of(saveCommentActionSuccess(result));
              return updateCommentsActionAfterSave(result);
            }),
            catchError((err) => {
              return of(saveCommentActionFailed(err.message));
            })
          );
      })
    );
  };

  removeComment$ = (action$: ActionsObservable<AnyAction>) => {
    return action$.ofType(REMOVE_COMMENT).pipe(
      switchMap(({payload}) => {
        return this.commentService.removeComment(payload.id)
          .pipe(
            map(result => removeCommentActionSuccess(payload.id))
          );
      })
    );
  };
}
