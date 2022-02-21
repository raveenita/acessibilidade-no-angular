import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscoverComponent } from './discover.component';
import { SharedModule } from '../shared/shared.module';
import { DiscoverRoutingModule } from './discover-routing.module';
import { SearchResultComponent } from './search-result/search-result.component';
import { SpotlightComponent } from './search-result/spotlight/spotlight.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    DiscoverComponent,
    SearchResultComponent,
    SpotlightComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    DiscoverRoutingModule,
    MatCardModule
  ]
})
export class DiscoverModule { }
