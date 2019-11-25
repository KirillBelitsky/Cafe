import {NgModule} from '@angular/core';
import {ProductEpic} from './product.epic';
import {UserEpic} from './user.epic';
import {CurrentUserEpic} from './current-user.epic';
import {CurrentProductEpic} from './current-product.epic';
import {CommentEpic} from './comment.epic';

@NgModule({
  providers: [
    ProductEpic,
    UserEpic,
    CurrentUserEpic,
    CurrentProductEpic,
    CommentEpic
  ]
})
export class EpicsModule {
}
