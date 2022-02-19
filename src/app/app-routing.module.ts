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
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then((m) => m.FaqModule),
  },
  {
    path: 'discover',
    loadChildren: () => import('./discover/discover.module').then((m) => m.DiscoverModule),
  },
  {
    path: 'subscription',
    loadChildren: () => import('./subscription/subscription.module').then((m) => m.SubscriptionModule),
  },
  {
    path: 'download',
    loadChildren: () => import('./download/download.module').then((m) => m.DownloadModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  }), ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
