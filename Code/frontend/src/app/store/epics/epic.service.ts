import {ProductEpic} from './product.epic';
import {combineEpics} from 'redux-observable';
import {Injectable} from '@angular/core';
import {CurrentUserEpic} from './current-user.epic';
import {CurrentProductEpic} from './current-product.epic';
import {CommentEpic} from './comment.epic';
import {CurrentSalesOrderEpic} from './current-sales-order.epic';
import {CurrentMenuCategoryEpic} from './current-menu-category.epic';

@Injectable()
export class EpicService {
  constructor(private productEpic: ProductEpic,
              private currentUserEpic: CurrentUserEpic,
              private currentProductEpic: CurrentProductEpic,
              private commentEpic: CommentEpic,
              private currentSalesOrderEpic: CurrentSalesOrderEpic,
              private currentMenuCategoryEpic: CurrentMenuCategoryEpic) {}

  getEpics() {
    return combineEpics(
      this.productEpic.fetchProducts$,
      this.currentUserEpic.login$,
      this.currentUserEpic.logout$,
      this.currentUserEpic.register$,
      this.currentProductEpic.getProductById$,
      this.commentEpic.fetchComments$,
      this.commentEpic.saveComment$,
      this.commentEpic.removeComment$,
      this.currentSalesOrderEpic.selectCurrentSalesOrder$,
      this.currentSalesOrderEpic.addProductToSalesOrder$,
      this.currentSalesOrderEpic.removeProductInSalesOrder$,
      this.currentSalesOrderEpic.submitCurrentSalesOrder$,
      this.currentMenuCategoryEpic.selectCurrentMenuCategory$
    );
  }
}
