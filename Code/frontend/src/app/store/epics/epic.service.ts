import {ProductEpic} from './product.epic';
import {combineEpics} from 'redux-observable';
import {UserEpic} from './user.epic';
import {Injectable} from '@angular/core';

@Injectable()
export class EpicService {
  constructor(private productEpic: ProductEpic,
              private userEpic: UserEpic) {}

  getEpics() {
    return combineEpics(
      this.productEpic.fetchProducts$,
      this.userEpic.selectUser$
    );
  }
}
