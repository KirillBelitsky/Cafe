import {AppState} from '../index';

export const selectProducts = (state: AppState) => {
  return Array.from(state.productState.products.values());
};

export const selectProductsIsLoading = (state: AppState) => state.productState.isLoading;
