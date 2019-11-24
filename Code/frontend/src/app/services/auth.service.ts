import {Injectable} from '@angular/core';
import {GlobalUserStorageService} from './global-storage.service';
import {HttpClient} from '@angular/common/http';
import {Credential} from '../models/credential.model';
import {Observable, throwError} from 'rxjs';
import {UserTokenModel} from '../models/user-token.model';
import {User} from '../models/user.model';
import {catchError} from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable()
export class AuthService {

  private LOGIN_USER = '/api/authentication/login';
  private REGISTER_USER = '/api/authentication/register';

  constructor(private localStorage: GlobalUserStorageService,
              private httpClient: HttpClient,
              private jwtHelperService: JwtHelperService) {
  }

  public login(credential: Credential): Observable<UserTokenModel> {
    return this.httpClient.post<UserTokenModel>(`${this.LOGIN_USER}`, credential)
      .pipe(catchError(err => throwError(err.error)));
  }

  public register(credential: Credential): Observable<UserTokenModel> {
    return this.httpClient.post<UserTokenModel>(`${this.REGISTER_USER}`, credential)
      .pipe(catchError(err => throwError(err.error)));
  }

  public isAuthenticated(): boolean {
    const token = this.localStorage.currentToken;
    if (token != null) {
      return !this.jwtHelperService.isTokenExpired(token.token);
    }
    return false;
  }
}
