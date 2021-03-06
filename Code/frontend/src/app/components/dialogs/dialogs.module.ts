import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  MatInputModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule,
  MatDialogModule, MatIconModule
} from '@angular/material';
import { LoginUserComponent } from './login-user/login-user.component';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../../material.module';
import { RegisterUserComponent } from './register-user/register-user.component';
import {InformationPopupComponent} from './information-popup/information-popup.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MaterialModule
  ],
  declarations: [LoginUserComponent, RegisterUserComponent, InformationPopupComponent],
  entryComponents: [LoginUserComponent, RegisterUserComponent, InformationPopupComponent]
})
export class DialogsModule { }
