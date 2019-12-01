import {Reducer} from 'redux';
import {MenuCategory} from '../../models/menu-category.model';
import {SELECT_MENU_CATEGORY, SELECT_MENU_CATEGORY_SUCCESS} from '../actions/current-menu-category.action';

export interface CurrentMenuCategoryState {
  readonly menuCategory: MenuCategory,
  readonly isLoading: boolean
}

const INITIAL_STATE = {
  menuCategory: null,
  isLoading: false
};

export const currentMenuCategoryReducer: Reducer<CurrentMenuCategoryState> = (state: CurrentMenuCategoryState = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_MENU_CATEGORY: {
      return { ...state, isLoading: true };
    }
    case SELECT_MENU_CATEGORY_SUCCESS: {
      return { ...state, menuCategory: action.payload.menuCategory, isLoading: false };
    }
    default: {
      return { ...state };
    }
  }
};
