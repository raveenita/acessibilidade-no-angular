import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SessionInterceptor } from './interceptors/session.interceptor';
import {  MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CommonModule,
    RouterModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [
    SessionInterceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SessionInterceptor,
      multi: true,
    },
  ]
})
export class SharedModule { }
