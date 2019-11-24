import {NgModule} from '@angular/core';
import {ProductEpic} from './product.epic';
import {UserEpic} from './user.epic';
import {CurrentUserEpic} from './current-user.epic';
import {CurrentProductEpic} from './current-product.epic';

@NgModule({
  providers: [
    ProductEpic,
    UserEpic,
    CurrentUserEpic,
    CurrentProductEpic
  ]
})
export class EpicsModule {
}
