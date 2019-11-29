import {Injectable} from '@angular/core';
import {SalesOrderService} from '../../services/sales-order.service';
import {ActionsObservable} from 'redux-observable';
import {AnyAction} from 'redux';
import {
  ADD_PRODUCT_TO_SALES_ORDER,
  SELECT_SALES_ORDER,
  selectCurrentSalesOrderActionSuccess, updateCurrentSalesOrder
} from '../actions/current-sales-order.action';
import {map, switchMap} from 'rxjs/operators';

@Injectable()
export class CurrentSalesOrderEpic {

  constructor(private salesOrderService: SalesOrderService){
  }

  selectCurrentSalesOrder$ = (action$: ActionsObservable<AnyAction>) => {
    return action$.ofType(SELECT_SALES_ORDER).pipe(
      switchMap(({}) => {
        return this.salesOrderService.getCurrentSalesOrder()
          .pipe(
            map(salesOrder => selectCurrentSalesOrderActionSuccess(salesOrder)
            )
          );
      })
    );
  };

  addProductToSalesOrder$ = (action$: ActionsObservable<AnyAction>) => {
    return action$.ofType(ADD_PRODUCT_TO_SALES_ORDER).pipe(
      switchMap(({payload}) => {
        return this.salesOrderService.addProductToSO(payload.id)
          .pipe(
            map(salesOrder => updateCurrentSalesOrder(salesOrder))
          );
      })
    );
  }
}
