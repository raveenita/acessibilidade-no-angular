import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SessionInterceptor } from './interceptors/session.interceptor';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DisableAnimationComponent } from './components/disable-animation/disable-animation.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { A11yToolbarComponent } from './components/a11y-toolbar/a11y-toolbar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DisableAnimationComponent,
    A11yToolbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatIconModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    DisableAnimationComponent,
    CommonModule,
    RouterModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
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
