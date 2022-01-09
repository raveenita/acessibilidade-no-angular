import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq.component';
import { SharedModule } from '../shared/shared.module';
import { FaqRoutingModule } from './faq-routing.module';



@NgModule({
  declarations: [
    FaqComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FaqRoutingModule
  ]
})
export class FaqModule { }
