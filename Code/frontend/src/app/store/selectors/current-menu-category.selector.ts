import {AppState} from '../index';

export const currentMenuCategory = (state: AppState) => state.currentMenuCategory.menuCategory;
export const currentMenuCategoryIsLoading = (state: AppState) => state.currentMenuCategory.isLoading;
