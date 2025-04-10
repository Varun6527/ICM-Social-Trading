import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebLayoutComponent } from './web-layout.component';
import { MyFollowerGaurd, MyProviderGaurd, MyRatingsGaurd, MyReportsGaurd } from '../gaurd/web.gaurd';
import { AuthGuard } from '../../shared/guard/auth.guard';

const WEB_ROUTES: Routes = [
  {
    path: '',
    component: WebLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('../views/home/home.wrapper.standalone.component').then(s => s.HomeWrapperStandAloneComponent),
        title: "ICM | Home"
      },
      {
        path: 'account',
        loadComponent: () => import('../views/account/account.standalone.component').then(s => s.AccountStandAloneComponent),
        title: "ICM | Account"
      },
      {
        path: 'transactions',
        loadComponent: () => import('../views/transactions/transactions.standalone.component').then(s => s.TransactionsStandAloneComponent),
        title: "ICM | Transactions"
      },
      {
        path: 'reports',
        loadComponent: () => import('../views/reports/reports.standalone.component').then(s => s.ReportsStandAloneComponent),
        title: "ICM | Reports",
        canActivate: [AuthGuard, MyReportsGaurd]
      },


      {
        path: 'providers',
        loadComponent: () => import('../views/providers/providers.standalone.component').then(s => s.ProvidersStandAloneComponent),
        title: "ICM | Providers",
        canActivate: [AuthGuard, MyProviderGaurd]
      },
      {
        path: 'providers/:providerId',
        loadComponent: () => import('../views/provider-profile/provider-profile.standalone.component').then(s => s.ProviderProfileStandAloneComponent),
        title: "ICM | Providers",
        canActivate: [AuthGuard, MyProviderGaurd]
      },
      {
        path: 'offers/:offerId',
        loadComponent: () => import('../views/offers/offers.standalone.component').then(s => s.OffersStandALoneComponent),
        title: "ICM | Offers",
        canActivate: [AuthGuard, MyProviderGaurd]
      },
      {
        path: 'providers/:providerId/subscriptions/:subscriptionId/results/:resultId',
        loadComponent: () => import('../views/result/result.standalone.component').then(s => s.ResultStandAloneComponent),
        title: "ICM | Result",
        canActivate: [AuthGuard, MyProviderGaurd]
      },
      {
        path: 'providers/:providerId/subscriptions/:subscriptionId',
        loadComponent: () => import('../views/provider-subscription/provider-subscription.standalone.component').then(s => s.ProviderSubscriptionStandAloneComponent),
        title: "ICM | Providers-Subscriptions",
        canActivate: [AuthGuard, MyProviderGaurd]
      },
      {
        path: 'providers/:providerId/positions/:positionId',
        loadComponent: () => import('../views/positions/positions.standalone.component').then(s => s.PositionsStandAloneComponent),
        title: "ICM | Positions",
        canActivate: [AuthGuard, MyProviderGaurd]
      },



      {
        path: 'subscriptions',
        loadComponent: () => import('../views/portfolio/portfolio.component').then(s => s.PortfolioStandAloneComponent),
        title: "ICM | Portfolio",
        canActivate: [AuthGuard, MyFollowerGaurd]
      },
      {
        path: 'subscriptions/:subscriptionId',
        loadComponent: () => import('../views/subscriptions/subscriptions.component').then(s => s.SubscriptionsStandAloneComponent),
        title: "ICM | Subscriptions",
        canActivate: [AuthGuard, MyFollowerGaurd]
      },
      {
        path: 'subscriptions/:subscriptionId/positions/:positionId',
        loadComponent: () => import('../views/positions/positions.standalone.component').then(s => s.PositionsStandAloneComponent),
        title: "ICM | Positions",
        canActivate: [AuthGuard, MyFollowerGaurd]
      },



      {
        path: 'ratings',
        loadComponent: () => import('../views/providers-list/providers-list.standalone.component').then(s => s.ProvidersListStanAloneComponent),
        title: "ICM | Providers List",
        canActivate: [AuthGuard, MyRatingsGaurd]
      },
      {
        path: 'ratings/:ratingId/:accountId',
        loadComponent: () => import('../views/provider-list-profile/provider-list-profile.standalone.component').then(s => s.ProviderListProfileStandAloneComponent),
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
