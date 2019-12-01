import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {MenuCategory} from '../models/menu-category.model';

@Injectable()
export class MenuCategoryService {

  private MENU_CATEGORY_URL = '/api/menu_category';

  constructor(private http: HttpClient) {
  }

  public getMenuCategoryByCode(code: string): Observable<MenuCategory> {
    return this.http.get<MenuCategory>(`${this.MENU_CATEGORY_URL}/code/${code}`)
      .pipe(catchError((error) => throwError(error.error)));
  }
}
