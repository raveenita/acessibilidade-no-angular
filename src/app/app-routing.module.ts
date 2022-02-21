import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    // TODO #1 Páginas com títulos acessíveis
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then((m) => m.FaqModule),
    // TODO #1 Páginas com títulos acessíveis
  },
  {
    path: 'discover',
    loadChildren: () => import('./discover/discover.module').then((m) => m.DiscoverModule),
    // TODO #1 Páginas com títulos acessíveis
  },
  {
    path: 'subscription',
    loadChildren: () => import('./subscription/subscription.module').then((m) => m.SubscriptionModule),
    // TODO #1 Páginas com títulos acessíveis
  },
  {
    path: 'download',
    loadChildren: () => import('./download/download.module').then((m) => m.DownloadModule),
    // TODO #1 Páginas com títulos acessíveis
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false
  }), ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
