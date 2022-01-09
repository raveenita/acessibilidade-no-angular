import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscoverComponent } from './discover.component';
import { SharedModule } from '../shared/shared.module';
import { DiscoverRoutingModule } from './discover-routing.module';

@NgModule({
  declarations: [
    DiscoverComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DiscoverRoutingModule
  ]
})
export class DiscoverModule { }
