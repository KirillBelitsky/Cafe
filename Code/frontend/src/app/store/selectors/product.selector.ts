import {AppState} from '../index';

export const selectProducts = (state: AppState) => {
  return Array.from(state.productState.products.values());
};

export const selectIsLoading = (state: AppState) => state.productState.isLoading;
