import {Injectable} from '@angular/core';
import {User} from '../models/user.model';
import {Token} from '../models/token';
import {fromEvent} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalUserStorageService {
  private USER_KEY = 'currentUser';
  private TOKEN_KEY = 'currentToken';

  set currentUser(user: User) {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  get currentUser() {
    return JSON.parse(localStorage.getItem(this.USER_KEY));
  }

  set currentToken(token: Token) {
    localStorage.setItem(this.TOKEN_KEY, JSON.stringify(token));
  }

  get currentToken() {
    return JSON.parse(localStorage.getItem(this.TOKEN_KEY));
  }

  constructor() {
  }

  asObservable() {
    return fromEvent(window, 'storage');
  }

}
