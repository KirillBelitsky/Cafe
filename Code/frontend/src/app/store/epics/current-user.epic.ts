import {Injectable} from '@angular/core';
import {GlobalUserStorageService} from '../../services/global-storage.service';
import {AuthService} from '../../services/auth.service';
import {AnyAction} from 'redux';
import {ActionsObservable} from 'redux-observable';
import {
  LOGIN_USER,
  loginUserActionFailed,
  LOGOUT_USER,
  REGISTER_USER, registerUserActionSuccess,
  updateCurrentUserAction
} from '../actions/current-user.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {Router} from '@angular/router';
import {selectCurrentSalesOrderAction} from '../actions/current-sales-order.action';
import {NgRedux} from '@angular-redux/store';
import {AppState} from '../index';

@Injectable()
export class CurrentUserEpic {

  constructor(private localStorage: GlobalUserStorageService,
              private authService: AuthService,
              private route: Router,
              private ngRedux: NgRedux<AppState>) {
  }

  login$ = (action$: ActionsObservable<AnyAction>) => {
    return action$.ofType(LOGIN_USER).pipe(
      switchMap(({payload}) => {
        return this.authService.login(payload.credential)
          .pipe(
            map(userToken => {
              this.localStorage.currentUser = userToken.user;
              this.localStorage.currentToken = userToken.token;
              this.ngRedux.dispatch(selectCurrentSalesOrderAction());
              return updateCurrentUserAction(userToken.user);
            }),
            catchError(err => {
              return of(loginUserActionFailed());
            })
          );
      })
    );
  };

  register$ = (action$: ActionsObservable<AnyAction>) => {
    return action$.ofType(REGISTER_USER).pipe(
      switchMap(({payload}) => {
        return this.authService.register(payload.credential)
          .pipe(
            map(userToken => {
              of(registerUserActionSuccess());
              this.localStorage.currentUser = userToken.user;
              this.localStorage.currentToken = userToken.token;
              return updateCurrentUserAction(userToken.user);
            })
          );
        }
      )
    );
  };

  logout$ = (action$: ActionsObservable<AnyAction>) => {
    return action$.ofType(LOGOUT_USER).pipe(
      switchMap(({ }) => {
        this.localStorage.currentToken = null;
        this.localStorage.currentUser = null;
        this.route.navigate(['menu']);
        return of(updateCurrentUserAction(null));
      })
    );
  }

}
