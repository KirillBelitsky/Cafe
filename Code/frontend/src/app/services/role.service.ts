import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Role} from '../models/role.model';
import {catchError} from 'rxjs/operators';

@Injectable()
export class RoleService {
  private ROLES_URL = '/api/roles';

  constructor(private httpClient: HttpClient) {}

  getRoleById(id: string): Observable<Role> {
   return this.httpClient.get<Role>(`${this.ROLES_URL}/${id}`)
     .pipe(catchError((error: any) => throwError(error.error)));
  }
}
