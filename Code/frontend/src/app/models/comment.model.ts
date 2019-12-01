import {User} from './user.model';
import {Product} from './product.model';

export interface Comment {
  readonly id: string;
  readonly comment: string;
  readonly owner: User;
  readonly product: Product;
  readonly date: string;
}
