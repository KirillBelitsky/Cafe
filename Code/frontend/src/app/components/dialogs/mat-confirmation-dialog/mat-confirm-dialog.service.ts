import { Injectable } from '@angular/core';
import { MatConfirmDialogComponent } from './mat-confirm-dialog.component';
import {MatDialog, MatDialogRef} from "@angular/material";
import {InformationPopupComponent} from '../information-popup/information-popup.component';

@Injectable()
export class MatConfirmDialogService {

  constructor(private dialog: MatDialog) { }

  openConfirmDialog(message: string): MatDialogRef<MatConfirmDialogComponent>{
    return this.dialog.open(MatConfirmDialogComponent,{
      width: '390px',
      disableClose: true,
      data:{
          message: message
      }
    });
  }

  openSuccessfullyPopup(message: string): MatDialogRef<InformationPopupComponent>{
    return this.dialog.open(InformationPopupComponent,{
      width: '390px',
      disableClose: true,
      data:{
        message: message
      }
    });
  }
}
