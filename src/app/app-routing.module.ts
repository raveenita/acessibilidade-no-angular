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
    data: {
      title: 'Perguntas Frequentes - Acessibilidade no Angular'
    }
  },
  {
    path: 'discover',
    loadChildren: () => import('./discover/discover.module').then((m) => m.DiscoverModule),
    data: {
      title: 'Descubra sua música favorita - Acessibilidade no Angular'
    }
  },
  {
    path: 'subscription',
    loadChildren: () => import('./subscription/subscription.module').then((m) => m.SubscriptionModule),
    data: {
      title: 'Cadastre-se no Spotify - Acessibilidade no Angular'
    }
  },
  {
    path: 'download',
    loadChildren: () => import('./download/download.module').then((m) => m.DownloadModule),
    data: {
      title: 'Baixe o Spotify - Acessibilidade no Angular'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false
  }), ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
