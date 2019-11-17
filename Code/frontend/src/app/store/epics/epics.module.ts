import {NgModule} from '@angular/core';
import {ProductEpic} from './product.epic';
import {UserEpic} from './user.epic';
import {CurrentUserEpic} from './current-user.epic';

@NgModule({
  providers: [
    ProductEpic,
    UserEpic,
    CurrentUserEpic
  ]
})
export class EpicsModule {
}
