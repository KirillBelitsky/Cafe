import {AppState} from '../index';
import {SalesOrder} from '../../models/sales-order.model';
import {Reducer} from 'redux';
import {
  SELECT_SALES_ORDER,
  SELECT_SALES_ORDER_SUCCESS,
  UPDATE_SALES_ORDER
} from '../actions/current-sales-order.action';

export const currentSalesOrder: Reducer<SalesOrder> =(state: SalesOrder = null, action) => {
  switch (action.type) {
    case SELECT_SALES_ORDER: {
      return { ...state };
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
      return salesOrder;
    }
    default: {
      return state;
    }
  }
};
