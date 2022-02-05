import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscoverComponent } from './discover.component';
import { SharedModule } from '../shared/shared.module';
import { DiscoverRoutingModule } from './discover-routing.module';
import { SearchResultComponent } from './search-result/search-result.component';
import { SongComponent } from './search-result/song/song.component';
import { SongsComponent } from './search-result/songs/songs.component';
import { SpotlightComponent } from './search-result/spotlight/spotlight.component';
import { MatCardModule } from '@angular/material/card';
import { SessionInterceptor } from '../shared/interceptors/session.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
@NgModule({
  declarations: [
    DiscoverComponent,
    SearchResultComponent,
    SpotlightComponent,
    SongComponent,
    SongsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DiscoverRoutingModule,
    MatCardModule
  ]
})
export class DiscoverModule { }
