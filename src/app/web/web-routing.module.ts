import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebLayoutComponent } from './layout/web-layout/web-layout.component';
import { ProvidersComponent } from './views/providers/providers.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { ProviderProfileComponent } from './views/providers/provider-profile/provider-profile.component';
import { SubscriptionsComponent } from './views/subscriptions/subscriptions.component';
import { OffersComponent } from './views/offers/offers.component';
import { ProvidersListComponent } from './views/providers-list/providers-list.component';
import { ProviderListProfileComponent } from './views/providers-list/provider-list-profile/provider-list-profile.component';
import { MyFollowerGaurd, MyProviderGaurd, MyRatingsGaurd, MyReportsGaurd } from './gaurd/web.gaurd';
import { AuthGuard } from '../shared/guard/auth.guard';

const WEB_ROUTES: Routes = [
  {
    path: '',
    component: WebLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./views/home/home.standalone.component').then(s => s.HomeStandAloneComponent),
        title: "ICM | Home"
      },
      {
        path: 'account',
        loadComponent: () => import('./views/account/account.standalone.component').then(s => s.AccountStandAloneComponent),
        title: "ICM | Account"
      },
      {
        path: 'transactions',
        loadComponent: () => import('./views/transactions/transactions.standalone.component').then(s => s.TransactionsStandAloneComponent),
        title: "ICM | Transactions"
      },
      {
        path: 'reports',
        loadComponent: () => import('./views/reports/reports.standalone.component').then(s => s.ReportsStandAloneComponent),
        title: "ICM | Reports",
        canActivate: [AuthGuard, MyReportsGaurd]
      },
      {
        path: 'providers',
        component: ProvidersComponent,
        title: "ICM | Providers",
        canActivate: [AuthGuard, MyProviderGaurd]
      },
      {
        path: 'subscriptions',
        component: PortfolioComponent,
        title: "ICM | Portfolio",
        canActivate: [AuthGuard, MyFollowerGaurd]
      },
      {
        path: 'providers/:providerId',
        component: ProviderProfileComponent,
        title: "ICM | Providers",
        canActivate: [AuthGuard, MyProviderGaurd]
      },
      {
        path: 'subscriptions/:profileId',
        component: SubscriptionsComponent,
        title: "ICM | Subscriptions",
        canActivate: [AuthGuard, MyFollowerGaurd]
      },
      {
        path: 'offers/:offerId',
        component: OffersComponent,
        title: "ICM | Offers",
        canActivate: [AuthGuard, MyProviderGaurd]
      },
      {
        path: 'ratings',
        component: ProvidersListComponent,
        title: "ICM | Providers List",
        canActivate: [AuthGuard, MyRatingsGaurd]
      },
      {
        path: 'ratings/:profileId',
        component: ProviderListProfileComponent,
        title: "ICM | Providers List",
        canActivate: [AuthGuard, MyRatingsGaurd]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(WEB_ROUTES)],
  exports: [RouterModule],
})
export class WebRoutingModule { }
