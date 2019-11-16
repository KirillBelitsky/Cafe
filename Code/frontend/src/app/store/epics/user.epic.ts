import {Injectable} from '@angular/core';
import construct = Reflect.construct;
import {UserService} from '../../services/user.service';
import {catchError, map, switchMap} from 'rxjs/operators';
import {SELECT_USER, selectUserSuccess} from '../actions/user-state.actions';
import {AnyAction} from 'redux';
import {ActionsObservable} from 'redux-observable';
import {of} from 'rxjs';
import {fetchUsersFailedAction} from '../actions/user.actions';

@Injectable()
export class UserEpic {
  constructor(private userService: UserService) { }

  selectUser$ = (action$: ActionsObservable<AnyAction>) => {
    return action$.ofType(SELECT_USER).pipe(
      switchMap(({payload}) => {
        return this.userService
          .getUserById(payload.userId)
          .pipe(
            map( user => selectUserSuccess(user)),
            catchError(error => of(fetchUsersFailedAction(error.message)))
          );
      })
    );
  }
}
