import {NgModule} from '@angular/core';
import {ProductEpic} from './product.epic';
import {UserEpic} from './user.epic';
import {CurrentUserEpic} from './current-user.epic';
import {CurrentProductEpic} from './current-product.epic';
import {CommentEpic} from './comment.epic';
import {CurrentSalesOrderEpic} from './current-sales-order.epic';

@NgModule({
  providers: [
    ProductEpic,
    UserEpic,
    CurrentUserEpic,
    CurrentProductEpic,
    CurrentSalesOrderEpic,
    CommentEpic
  ]
})
export class EpicsModule {
}
