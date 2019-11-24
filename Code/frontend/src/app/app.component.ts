import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgRedux} from '@angular-redux/store';
import {AppState} from './store';
import {AutoUnsibscribeService} from './services/auto-unsibscribe.service';
import {GlobalUserStorageService} from './services/global-storage.service';
import {logoutUserAction} from './store/actions/current-user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends AutoUnsibscribeService implements OnInit, OnDestroy {

  constructor(private ngRedux: NgRedux<AppState>,
              private localStorage: GlobalUserStorageService) {
    super();
  }

  ngOnInit(): void {
    this.localStorage.asObservable().subscribe((user: Event) => {
      if (!this.localStorage.currentUser || !this.localStorage.currentToken) {
        this.ngRedux.dispatch(logoutUserAction());
      }
    });
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
