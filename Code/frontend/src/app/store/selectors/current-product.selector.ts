import {AppState} from '../index';

export const selectCurrentProduct = (state: AppState) => state.currentProduct.product;
export const currentProductIsLoading = (state: AppState) => state.currentProduct.isLoading;
