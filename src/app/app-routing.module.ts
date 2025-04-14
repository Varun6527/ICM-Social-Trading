import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guard/auth.guard';
import { UserDataResolver } from './shared/resolvers/user.data.resolver';
import { UserProfileDataResolver } from './shared/resolvers/user.profile.data.resolver';

const routes: Routes = [
  {
    path: 'portal/login',
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./auth/login/login.standalone.component').then(s => s.LoginStandAloneComponent),
        resolve: { myData: UserDataResolver }
      }
    ]
  },
  {
    path: 'portal/registration/provider',
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./auth/register/provider/provider.standalone.component').then(s => s.RegisterProviderStandAloneComponent),
        resolve: { myData: UserDataResolver }
      }
    ]
  },
  {
    path: 'portal/registration/subscription',
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./auth/register/follower/follower.standalone.component').then(s => s.FollowerProviderStandAloneComponent),
        resolve: { myData: UserDataResolver }
      }
    ]
  },
  {
    path: 'portal/registration/subscription/:publicKey/:joinLink',
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./auth/register/follower/follower.standalone.component').then(s => s.FollowerProviderStandAloneComponent),
        resolve: { myData: UserDataResolver }
      }
    ]
  },
  {
    path: 'portal',
    loadChildren: () => import('./web/app/web.module').then(m => m.WebModule),
    canActivate: [AuthGuard],
    resolve: { myData: UserDataResolver, myProfileData: UserProfileDataResolver }
  }
  ,{ path: '**', redirectTo: '/portal/login', pathMatch: 'full' }
  ,{ path: '',   redirectTo: '/portal/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
