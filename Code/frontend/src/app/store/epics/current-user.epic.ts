import {Injectable} from '@angular/core';
import {GlobalUserStorageService} from '../../services/global-storage.service';
import {AuthService} from '../../services/auth.service';
import {AnyAction} from 'redux';
import {ActionsObservable} from 'redux-observable';
import {
  LOGIN_USER, loginUserAction,
  loginUserActionFailed,
  LOGOUT_USER,
  REGISTER_USER, registerUserActionFailed, registerUserActionSuccess,
  updateCurrentUserAction
} from '../actions/current-user.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class CurrentUserEpic {

  constructor(private localStorage: GlobalUserStorageService,
              private authService: AuthService) {
  }

  login$ = (action$: ActionsObservable<AnyAction>) => {
    return action$.ofType(LOGIN_USER).pipe(
      switchMap(({payload}) => {
        return this.authService.login(payload.credential)
          .pipe(
            map(userToken => {
              this.localStorage.currentUser = {...userToken.user};
              this.localStorage.currentToken = {...userToken.token};
              return of(updateCurrentUserAction(userToken.user));
            }),
            catchError(err => {
              return of(loginUserActionFailed());
            })
          );
      })
    );
  }

  register$ = (action$: ActionsObservable<AnyAction>) => {
    return action$.ofType(REGISTER_USER).pipe(
      switchMap(({payload}) => {
        return this.authService.register(payload.credential)
          .pipe(
            map(user => {
              of(registerUserActionSuccess(user));
              of(loginUserAction({login: user.login,
              email: user.email, password: user.password}));
            }),
            catchError(err => {
              return of(registerUserActionFailed());
            })
          );
        }
      )
    );
  }

  logout$ = (action$: ActionsObservable<AnyAction>) => {
    return action$.ofType(LOGOUT_USER).pipe(
      switchMap(({ }) => {
        this.localStorage.currentToken = null;
        this.localStorage.currentUser = null;
        return of(updateCurrentUserAction(null));
      })
    );
  }

}
