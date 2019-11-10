import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user.model';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable()
export class UserService {

  private USERS_URL = '/api/users';

  constructor(private httpClient: HttpClient) {
  }

  getUserById(id: string): Observable<User> {
    return this.httpClient.get<User>(`${this.USERS_URL}/${id}`)
      .pipe(catchError((error: any) => throwError(error.error)));
  }
}
