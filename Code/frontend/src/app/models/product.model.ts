import {MenuCategory} from './menu-category.model';

export interface Product {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly price: number;
  readonly mass: number;
  readonly menuCategory: MenuCategory;
}
