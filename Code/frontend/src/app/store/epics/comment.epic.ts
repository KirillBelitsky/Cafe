import {Injectable} from '@angular/core';
import {CommentService} from '../../services/comment.service';
import {ActionsObservable} from 'redux-observable';
import {AnyAction} from 'redux';
import {FETCH_COMMENTS, fetchCommentsActionFailed, fetchCommentsActionSuccess} from '../actions/comment.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class CommentEpic {

  constructor(private commentService: CommentService) {
  }

  fetchComments$ = (action$: ActionsObservable<AnyAction>) => {
    return action$.ofType(FETCH_COMMENTS).pipe(
      switchMap(({ payload }) => {
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
  }
}
