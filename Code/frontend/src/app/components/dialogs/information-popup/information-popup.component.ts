import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {AutoUnsibscribeService} from '../../../services/auto-unsibscribe.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {AppState} from '../../../store';
import {NgRedux} from '@angular-redux/store';
import {loginUserAction} from '../../../store/actions/current-user.actions';
import {DialogData} from '../../toolbar/toolbar.component';
import {MatConfirmDialogComponent} from '../mat-confirmation-dialog/mat-confirm-dialog.component';

@Component({
  selector: 'app-information-popup',
  templateUrl: './information-popup.component.html',
  styleUrls: ['./information-popup.component.css']
})
export class InformationPopupComponent extends AutoUnsibscribeService implements OnInit, OnDestroy {

  constructor(@Inject(MAT_DIALOG_DATA) public data,
              private dialogRef: MatDialogRef<MatConfirmDialogComponent>) {
    super();
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  closeDialog(): void{
    this.dialogRef.close(false);
  }

}
