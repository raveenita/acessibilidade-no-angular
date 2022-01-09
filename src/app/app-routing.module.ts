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
    path: 'premium',
    loadChildren: () => import('./premium/premium.module').then((m) => m.PremiumModule),
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
