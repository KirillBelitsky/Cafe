import {Component, ElementRef, Inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AutoUnsibscribeService} from '../../../services/auto-unsibscribe.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {AppState} from '../../../store';
import {NgRedux} from '@angular-redux/store';
import {loginUserAction} from '../../../store/actions/current-user.actions';
import {DialogData} from '../../toolbar/toolbar.component';
import {Credential} from '../../../models/credential.model';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent extends AutoUnsibscribeService implements OnInit, OnDestroy {

  @ViewChild('recaptcha', {static: true })
  recaptchaElement: ElementRef;

  private credentialForm: FormGroup;
  private captchaToken: string;
  private isCaptchaTokenReady: boolean;

  constructor(private ngRedux: NgRedux<AppState>,
              private fb: FormBuilder,
              public dialogRef: MatDialogRef<LoginUserComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    super();
  }

  ngOnInit() {
    this.initialize();
    this.addRecaptchaScript();
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

  private addRecaptchaScript(): void {
    window['grecaptchaCallback'] = () => {
      this.renderReCaptch();
    };

    (function(d, s, id, obj){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { obj.renderReCaptch(); return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://www.google.com/recaptcha/api.js?onload=grecaptchaCallback&amp;render=explicit";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'recaptcha-jssdk', this));
  }

  renderReCaptch(): void {
    window['grecaptcha'].render(this.recaptchaElement.nativeElement, {
      'sitekey' : '6Le_ct4UAAAAADtjG5uZAwF_O4g8ibeYuof8EQdO',
      'callback': (response) => {
        this.captchaToken = response;
        this.isCaptchaTokenReady = true;
        console.log(response);
      }
    });
  }

  private onLoginClick(): void {
    this.data.registerFlag = false;
    const value = this.credentialForm.getRawValue();
    this.ngRedux.dispatch(loginUserAction(this.fillCredential(value, this.captchaToken)));
    this.dialogRef.close(this.data.registerFlag);
    this.captchaToken = null;
    this.isCaptchaTokenReady = false;
  }

  private onCancelClick(): void {
    this.dialogRef.close();
  }

  private onRegisterClick(): void {
    this.data.registerFlag = true;
    this.dialogRef.close(this.data.registerFlag);
  }

  private fillCredential(value, captchaToken): Credential {
    const credential = new Credential();
    credential.user = value;
    credential.token = captchaToken;
    return credential;
  }

}
