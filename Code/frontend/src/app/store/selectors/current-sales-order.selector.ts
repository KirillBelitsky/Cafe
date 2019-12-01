import {AppState} from '../index';

export const currentSalesOrder = (state: AppState) => state.currentSalesOrder.salesOrder;
export const currentSalesOrderIsLoading = (state: AppState) => state.currentSalesOrder.isLoading;
