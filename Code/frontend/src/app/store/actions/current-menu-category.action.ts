import {MenuCategory} from '../../models/menu-category.model';

export const SELECT_MENU_CATEGORY = '[Current T] Select current menu category';
export const SELECT_MENU_CATEGORY_SUCCESS = '[Current T] Select current menu category success';

export function selectCurrentMenuCategory(code: string) {
  return {
    type: SELECT_MENU_CATEGORY,
    payload: {code}
  };
}

export function selectCurrentMenuCategorySuccess(menuCategory: MenuCategory) {
  return {
    type: SELECT_MENU_CATEGORY_SUCCESS,
    payload: {menuCategory}
  };
}
