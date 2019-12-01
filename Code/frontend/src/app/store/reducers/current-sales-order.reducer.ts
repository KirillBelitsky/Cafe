import {SalesOrder} from '../../models/sales-order.model';
import {Reducer} from 'redux';
import {
  SELECT_SALES_ORDER,
  SELECT_SALES_ORDER_SUCCESS,
  UPDATE_SALES_ORDER
} from '../actions/current-sales-order.action';
import {Product} from '../../models/product.model';

export interface CurrentSalesOrderState {
  readonly salesOrder: SalesOrder,
  readonly isLoading: boolean
}

const INITIAL_STATE = {
  salesOrder: null,
  isLoading: false
};

export const currentSalesOrderReducer: Reducer<CurrentSalesOrderState> =(state: CurrentSalesOrderState = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_SALES_ORDER: {
      return { ...state, isLoading:true };
    }
    case SELECT_SALES_ORDER_SUCCESS:
    case UPDATE_SALES_ORDER:  {
      const salesOrder = action.payload.salesOrder;
      salesOrder.productsQuantity = new Map<string, number>();
      salesOrder.products.forEach(value => {
        if(salesOrder.productsQuantity.get(value.id) != null) {
          salesOrder.productsQuantity.set(value.id, salesOrder.productsQuantity.get(value.id) + 1);
        }
        else
          salesOrder.productsQuantity.set(value.id, 1);
      });
      return { ...state, salesOrder: salesOrder, isLoading: false };
    }
    default: {
      return { ...state };
    }
  }
};
