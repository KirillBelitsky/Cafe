import {ProductEpic} from './product.epic';
import {combineEpics} from 'redux-observable';
import {UserEpic} from './user.epic';
import {Injectable} from '@angular/core';
import {CurrentUserEpic} from './current-user.epic';
import {CurrentProductEpic} from './current-product.epic';
import {CommentEpic} from './comment.epic';
import {CurrentSalesOrderEpic} from './current-sales-order.epic';

@Injectable()
export class EpicService {
  constructor(private productEpic: ProductEpic,
              private userEpic: UserEpic,
              private currentUserEpic: CurrentUserEpic,
              private currentProductEpic: CurrentProductEpic,
              private commentEpic: CommentEpic,
              private currentSalesOrderEpic: CurrentSalesOrderEpic) {}

  getEpics() {
    return combineEpics(
      this.productEpic.fetchProducts$,
      this.userEpic.selectUser$,
      this.currentUserEpic.login$,
      this.currentUserEpic.logout$,
      this.currentUserEpic.register$,
      this.currentProductEpic.getProductById$,
      this.commentEpic.fetchComments$,
      this.commentEpic.saveComment$,
      this.currentSalesOrderEpic.selectCurrentSalesOrder$,
      this.currentSalesOrderEpic.addProductToSalesOrder$
    );
  }
}
