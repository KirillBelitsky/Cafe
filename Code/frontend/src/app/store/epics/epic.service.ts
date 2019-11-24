import {ProductEpic} from './product.epic';
import {combineEpics} from 'redux-observable';
import {UserEpic} from './user.epic';
import {Injectable} from '@angular/core';
import {CurrentUserEpic} from './current-user.epic';
import {CurrentProductEpic} from './current-product.epic';

@Injectable()
export class EpicService {
  constructor(private productEpic: ProductEpic,
              private userEpic: UserEpic,
              private currentUser: CurrentUserEpic,
              private currentProduct: CurrentProductEpic) {}

  getEpics() {
    return combineEpics(
      this.productEpic.fetchProducts$,
      this.userEpic.selectUser$,
      this.currentUser.login$,
      this.currentUser.logout$,
      this.currentUser.register$,
      this.currentProduct.getProductById$
    );
  }
}
