import {Product} from '../../models/product.model';

export const FETCH_PRODUCTS = '[Products] Fetch products';
export const FETCH_PRODUCTS_SUCCESS = '[Products] Fetch products success';
export const FETCH_PRODUCTS_FAILED = '[Products] Fetch products failed';

export function fetchProductsAction(categoryId: string) {
  return {
    type: FETCH_PRODUCTS,
    payload: {categoryId}
  };
}

export function fetchProductsActionSuccess(products: Map<string, Product>) {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: {products}
  };
}

export function fetchProductsActionFailed(errorMessage: string) {
  return {
    type: FETCH_PRODUCTS_FAILED,
    payload: {errorMessage}
  };
}


