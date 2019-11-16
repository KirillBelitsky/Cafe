import {Product} from '../../models/product.model';
import {Reducer} from 'redux';
import {FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS} from '../actions/product.actions';

export interface ProductState {
  readonly products: Map<string, Product>;
  readonly isLoading: boolean;
}

const INITIAL_STATE = {
  products: new Map<string, Product>(),
  isLoading: false
};

export const productReducer: Reducer<ProductState> = (state: ProductState = INITIAL_STATE, action): ProductState => {
  switch (action.type) {
    case FETCH_PRODUCTS: {
        return {...state, isLoading: true};
    }
    case FETCH_PRODUCTS_SUCCESS: {
      return {...state, ...action.payload, isLoading: false};
    }
    default: {
      return {...state};
    }
  }
};

