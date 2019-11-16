import {Injectable} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {ActionsObservable} from 'redux-observable';
import {AnyAction} from 'redux';
import {FETCH_PRODUCTS, fetchProductsFailedAction, fetchProductsSuccessAction} from '../actions/product.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {TransformService} from '../../services/utils/transform.service';

@Injectable()
export class ProductEpic {

  constructor(private productService: ProductService) {
  }

  fetchProducts$ = (action$: ActionsObservable<AnyAction>) => {
    return action$.ofType(FETCH_PRODUCTS).pipe(
      switchMap(({}) => {
        return this.productService.getAllProducts()
          .pipe(
            map(products => fetchProductsSuccessAction(TransformService.transformToMap(products))),
            catchError(error => of(fetchProductsFailedAction(error.message)))
          );
      })
    );
  }

}
