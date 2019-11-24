import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {AutoUnsibscribeService} from '../../../services/auto-unsibscribe.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {AppState} from '../../../store';
import {NgRedux} from '@angular-redux/store';
import {loginUserAction} from '../../../store/actions/current-user.actions';
import {DialogData} from '../../toolbar/toolbar.component';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent extends AutoUnsibscribeService implements OnInit, OnDestroy {

  private credentialForm: FormGroup;

  constructor(private ngRedux: NgRedux<AppState>,
              private fb: FormBuilder,
              public dialogRef: MatDialogRef<LoginUserComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    super();
  }

  ngOnInit() {
    this.initialize();
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  private initialize(): void {
    this.credentialForm = this.fb.group({
      password: ['', Validators.required],
      login: ['', Validators.required]
    });
  }

  private onLoginClick(): void {
    this.data.registerFlag = false;
    const value = this.credentialForm.getRawValue();
    this.ngRedux.dispatch(loginUserAction(value));
    this.dialogRef.close(this.data.registerFlag);
  }

  private onCancelClick(): void {
    this.dialogRef.close();
  }

  private onRegisterClick(): void {
    this.data.registerFlag = true;
    this.dialogRef.close(this.data.registerFlag);
  }

}
