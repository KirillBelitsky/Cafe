import {Injectable} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {ActionsObservable} from 'redux-observable';
import {AnyAction} from 'redux';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {TransformService} from '../../services/utils/transform.service';
import {
  FETCH_PRODUCTS,
  fetchProductsActionFailed,
  fetchProductsActionSuccess
} from '../actions/product.actions';

@Injectable()
export class ProductEpic {

  constructor(private productService: ProductService) {
  }

  fetchProducts$ = (action$: ActionsObservable<AnyAction>) => {
    return action$.ofType(FETCH_PRODUCTS).pipe(
      switchMap(({payload}) => {
        return this.productService.getAllProductByMenuCategory(payload.code)
          .pipe(
            map(products => fetchProductsActionSuccess(TransformService.transformToMap(products))),
            catchError(error => of(fetchProductsActionFailed(error.message)))
          );
      })
    );
  };
}
