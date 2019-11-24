import {Injectable} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {ActionsObservable} from 'redux-observable';
import {AnyAction} from 'redux';
import {
  SELECT_PRODUCT,
  selectProductActionSuccess
} from '../actions/current-product.actions';
import {catchError, map, switchMap} from 'rxjs/operators';

@Injectable()
export class CurrentProductEpic {

  constructor(private productService: ProductService) {
  }

  getProductById$ = (action$: ActionsObservable<AnyAction>) => {
    return action$.ofType(SELECT_PRODUCT).pipe(
      switchMap(({ payload }) => {
        return this.productService.getProductById(payload.id)
          .pipe(
            map(product => {
              return selectProductActionSuccess(product);
            })
          );
      })
    );
  }
}
