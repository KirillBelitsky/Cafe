import {NgModule} from '@angular/core';
import {ProductEpic} from './product.epic';
import {UserEpic} from './user.epic';

@NgModule({
  providers: [
    ProductEpic,
    UserEpic
  ]
})
export class EpicsModule {
}
