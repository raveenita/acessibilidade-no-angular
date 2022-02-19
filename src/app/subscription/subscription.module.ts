import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionComponent } from './subscription.component';
import { SharedModule } from '../shared/shared.module';
import { SubscriptionRoutingModule } from './subscription-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    SubscriptionComponent,
    SuccessDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SubscriptionRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatRadioModule,
    MatOptionModule,
    MatSelectModule,
    FormsModule,
    MatDialogModule,
    MatInputModule
  ]
})
export class SubscriptionModule { }
