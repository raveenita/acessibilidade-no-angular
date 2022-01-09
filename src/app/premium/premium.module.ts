import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PremiumComponent } from './premium.component';
import { SharedModule } from '../shared/shared.module';
import { PremiumRoutingModule } from './premium-routing.module';

@NgModule({
  declarations: [
    PremiumComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PremiumRoutingModule
  ]
})
export class PremiumModule { }
