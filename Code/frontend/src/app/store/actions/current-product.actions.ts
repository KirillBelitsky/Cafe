import {Product} from '../../models/product.model';

export const SELECT_PRODUCT = '[SELECT T] Select Product';
export const SELECT_PRODUCT_SUCCESS = '[SELECT T] Select Product Success';

export function selectProductAction(id: string) {
  return {
    type: SELECT_PRODUCT,
    payload: { id }
  };
}

export function selectProductActionSuccess(product: Product) {
  return {
    type: SELECT_PRODUCT_SUCCESS,
    payload: { product }
  };
}
