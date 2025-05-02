import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guard/auth.guard';
import { UserDataResolver } from './shared/resolvers/user.data.resolver';
import { UserProfileDataResolver } from './shared/resolvers/user.profile.data.resolver';
import { MyAuthGaurdWhenUserLoggedIn } from './web/gaurd/web.gaurd';

const routes: Routes = [
  {
    path: 'portal/login',
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./auth/login/login.standalone.component').then(s => s.LoginStandAloneComponent),
        resolve: { myData: UserDataResolver },
        canActivate: [MyAuthGaurdWhenUserLoggedIn],
        data: { loginFormType: "Client" }
      }
    ]
  },
  {
    path: 'admin/login',
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./auth/login/login.standalone.component').then(s => s.LoginStandAloneComponent),
        resolve: { myData: UserDataResolver },
        data: { loginFormType: "Admin" }
      }
    ]
  },
  {
    path: 'rating/admin/login',
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./auth/login/login.standalone.component').then(s => s.LoginStandAloneComponent),
        resolve: { myData: UserDataResolver },
        data: { loginFormType: "RatingAdmin" }
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
        resolve: { myData: UserDataResolver },
        canActivate: [MyAuthGaurdWhenUserLoggedIn]
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
        resolve: { myData: UserDataResolver },
        canActivate: [MyAuthGaurdWhenUserLoggedIn]
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
        resolve: { myData: UserDataResolver },
        canActivate: [MyAuthGaurdWhenUserLoggedIn]
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
