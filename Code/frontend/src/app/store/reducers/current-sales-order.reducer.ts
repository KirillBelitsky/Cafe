import {SalesOrder} from '../../models/sales-order.model';
import {Reducer} from 'redux';
import {
  ADD_PRODUCT_TO_SALES_ORDER, REMOVE_PRODUCT_IN_SALES_ORDER,
  SELECT_SALES_ORDER,
  SELECT_SALES_ORDER_SUCCESS, SUBMIT_SALES_ORDER,
  UPDATE_SALES_ORDER
} from '../actions/current-sales-order.action';

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
    case SELECT_SALES_ORDER:
    case ADD_PRODUCT_TO_SALES_ORDER:
    case REMOVE_PRODUCT_IN_SALES_ORDER:
    case SUBMIT_SALES_ORDER:  {
      return { ...state, isLoading: true };
    }
    case SELECT_SALES_ORDER_SUCCESS:
    case UPDATE_SALES_ORDER:  {
      const salesOrder = action.payload.salesOrder;
      salesOrder.price = salesOrder.price.toFixed(2);
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
