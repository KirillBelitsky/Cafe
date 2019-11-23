import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DialogData} from '../../toolbar/toolbar.component';
import {AutoUnsibscribeService} from '../../../services/auto-unsibscribe.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgRedux} from '@angular-redux/store';
import {AppState} from '../../../store';
import {REGISTER_USER, registerUserAction} from '../../../store/actions/current-user.actions';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent extends AutoUnsibscribeService implements OnInit, OnDestroy {

  private credentialForm: FormGroup;

  constructor(private dialogRef: MatDialogRef<RegisterUserComponent>,
              private formBuider: FormBuilder,
              private ngRedux: NgRedux<AppState>) {
    super();
  }

  ngOnInit() {
    this.initialize();
    this.dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.ngRedux.dispatch(registerUserAction(result));
      }
    });
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  private initialize(): void {
    this.credentialForm = this.formBuider.group({
      login: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  private onCancelClick(): void {
    this.dialogRef.close();
  }
}
