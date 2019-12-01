import {NgModule} from '@angular/core';
import {ProductEpic} from './product.epic';
import {CurrentUserEpic} from './current-user.epic';
import {CurrentProductEpic} from './current-product.epic';
import {CommentEpic} from './comment.epic';
import {CurrentSalesOrderEpic} from './current-sales-order.epic';
import {CurrentMenuCategoryEpic} from './current-menu-category.epic';

@NgModule({
  providers: [
    ProductEpic,
    CurrentUserEpic,
    CurrentProductEpic,
    CurrentSalesOrderEpic,
    CommentEpic,
    CurrentMenuCategoryEpic
  ]
})
export class EpicsModule {
}
