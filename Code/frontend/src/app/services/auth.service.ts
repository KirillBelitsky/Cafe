import {Injectable} from '@angular/core';
import {GlobalUserStorageService} from './global-storage.service';
import {HttpClient} from '@angular/common/http';
import {Credential} from '../models/credential.model';
import {Observable, throwError} from 'rxjs';
import {UserTokenModel} from '../models/user-token.model';
import {User} from '../models/user.model';
import {catchError} from 'rxjs/operators';

@Injectable()
export class AuthService {

  private LOGIN_USER = '/api/authentication/login';

  constructor(private localStorage: GlobalUserStorageService,
              private httpClient: HttpClient) {
  }

  login(credential: Credential): Observable<UserTokenModel> {
    return this.httpClient.post<UserTokenModel>(`${this.LOGIN_USER}`, credential)
      .pipe(catchError(err => throwError(err.error)));
  }
}
