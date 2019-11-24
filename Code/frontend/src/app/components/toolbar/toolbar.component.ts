import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {LogicalProjectStrategy} from '@angular/compiler-cli/src/ngtsc/imports';
import {LoginUserComponent} from '../dialogs/login-user/login-user.component';
import {NgRedux, select} from '@angular-redux/store';
import {AppState} from '../../store';
import {logoutUserAction} from '../../store/actions/current-user.actions';
import {Observable} from 'rxjs';
import {User} from '../../models/user.model';
import {selectCurrentUser, selectLoginOfCurrentUser} from '../../store/selectors/current-user.selector';
import {RegisterUserComponent} from '../dialogs/register-user/register-user.component';

export interface DialogData {
  registerFlag: boolean;
}

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @select(selectCurrentUser)
  private currentUser: Observable<User>;
  @select(selectLoginOfCurrentUser)
  private loginOfCurrentUser: Observable<string>;

  constructor(private matDialog: MatDialog,
              private ngRedux: NgRedux<AppState>) { }

  ngOnInit() {
  }

  onLoginClick(): void {
    const dialog = this.matDialog.open(LoginUserComponent, {
      data: {registerFlag: false}
    });

    dialog.afterClosed().subscribe(result => {
      if (result) {
        this.matDialog.open(RegisterUserComponent);
      }
    });
  }

  onLogoutClick(): void {
    this.ngRedux.dispatch(logoutUserAction());
  }

}
