import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {GlobalUserStorageService} from './global-storage.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private localStorage: GlobalUserStorageService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUser = this.localStorage.currentUser;
    const currentToken = this.localStorage.currentToken;

    if (currentUser && currentToken) {
      req = req.clone({
        setHeaders : {
          Authorization: `Bearer ${currentToken.token}`
        }
      });
    } else {
      this.localStorage.currentUser = null;
      this.localStorage.currentToken = null;
    }

    return next.handle(req);
  }

}
