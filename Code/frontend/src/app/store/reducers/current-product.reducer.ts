import {Reducer} from 'redux';
import {Product} from '../../models/product.model';
import {SELECT_PRODUCT, SELECT_PRODUCT_SUCCESS} from '../actions/current-product.actions';

export interface CurrentProductState {
  readonly product: Product;
  readonly isLoading: boolean;
}

const INITIAL_STATE = {
  product: null,
  isLoading: false
};

export const currentProductReducer: Reducer<CurrentProductState> = (state: CurrentProductState = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_PRODUCT: {
      return { ...state, isLoading: true };
    }
    case SELECT_PRODUCT_SUCCESS: {
      return { ...state, ...action.payload, isLoading: false };
    }
    default: {
      return { ...state };
    }
  }
};
