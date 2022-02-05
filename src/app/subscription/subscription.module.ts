import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionComponent } from './subscription.component';
import { SharedModule } from '../shared/shared.module';
import { SubscriptionRoutingModule } from './subscription-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';


@NgModule({
  declarations: [
    SubscriptionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SubscriptionRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatRadioModule
  ]
})
export class SubscriptionModule { }
