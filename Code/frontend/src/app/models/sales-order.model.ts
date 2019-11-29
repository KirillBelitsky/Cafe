import {Product} from './product.model';
import {User} from './user.model';

export interface SalesOrder {
  readonly id: string;
  readonly productsQuantity: Map<string, number>;
  readonly products: Product[];
  readonly owner: User;
  readonly price: number;
  readonly isSubmitted: boolean;
}
