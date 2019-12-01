import {Injectable} from '@angular/core';
import {ActionsObservable} from 'redux-observable';
import {AnyAction} from 'redux';
import {MenuCategoryService} from '../../services/menu-category.service';
import {SELECT_MENU_CATEGORY, selectCurrentMenuCategorySuccess} from '../actions/current-menu-category.action';
import {map, switchMap} from 'rxjs/operators';

@Injectable()
export class CurrentMenuCategoryEpic {

  constructor(private menuCategoryService: MenuCategoryService) {
  }

  selectCurrentMenuCategory$ = (action$: ActionsObservable<AnyAction>) => {
    return action$.ofType(SELECT_MENU_CATEGORY).pipe(
      switchMap(({payload}) => {
        return this.menuCategoryService.getMenuCategoryByCode(payload.code)
          .pipe(
            map(menuCategory => selectCurrentMenuCategorySuccess(menuCategory))
          )
      })
    )
  };
}
