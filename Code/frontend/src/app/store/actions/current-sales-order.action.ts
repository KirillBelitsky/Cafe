import {SalesOrder} from '../../models/sales-order.model';

export const SELECT_SALES_ORDER = '[Current T] Select Sales Order';
export const SELECT_SALES_ORDER_SUCCESS = '[Current T] Select Sales Order Success';
export const ADD_PRODUCT_TO_SALES_ORDER = '[Product] Add product to Sales Order';
export const REMOVE_PRODUCT_IN_SALES_ORDER = '[Product] Remove product in Sales Order';
export const UPDATE_SALES_ORDER = '[Current T] Update Sales Order';
export const SUBMIT_SALES_ORDER = '[Current T] Submit Sales Order';
export const SUBMIT_SALES_ORDER_SUCCESS = '[Current T] Submit Sales Order Success';

export function selectCurrentSalesOrderAction() {
  return {
    type: SELECT_SALES_ORDER
  };
}

export function selectCurrentSalesOrderActionSuccess(salesOrder: SalesOrder) {
  return {
    type: SELECT_SALES_ORDER_SUCCESS,
    payload: {salesOrder}
  };
}

export function addProductToSalesOrder(id: string) {
  return {
    type: ADD_PRODUCT_TO_SALES_ORDER,
    payload: {id}
  };
}

export function removeProductInSalesOrder(id: string) {
  return {
    type: REMOVE_PRODUCT_IN_SALES_ORDER,
    payload: {id}
  };
}

export function updateCurrentSalesOrder(salesOrder: SalesOrder) {
  return {
    type: UPDATE_SALES_ORDER,
    payload: {salesOrder}
  };
}

export function submitCurrentSalesOrder(salesOrder: SalesOrder) {
  return {
    type: SUBMIT_SALES_ORDER,
    payload: {salesOrder}
  };
}

export function submitCurrentSalesOrderSuccess(salesOrder: SalesOrder) {
  return {
    type: SUBMIT_SALES_ORDER_SUCCESS,
    payload: {salesOrder}
  };
}

