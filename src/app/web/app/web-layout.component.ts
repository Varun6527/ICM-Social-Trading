import { Component } from '@angular/core';
import { WebService } from '../service/web.service';

@Component({
  selector: 'app-web-layout',
  template: `
    <div class="web-layout">
      <div class="sidenav" [ngClass]="{'active': showSideNav}">
          <app-sidenav></app-sidenav>
          <div class="sidenave-close-wrapper" (click)="toggleSideNavBar()"></div>
      </div>
    <mat-card appearance="outlined" class="section-card header-logo">
      <mat-card-content class="section-card-content">
        <img width="100" src="../../../assets/logo/ICM Logo Default 1.png" />
        <img width="20" src="../../../assets/logo/Hamburger-icon.png" (click)="toggleSideNavBar()" />
      </mat-card-content>
    </mat-card>
      <div class="pages">
          <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styleUrls: ['./web-layout-comonent.scss']
})
export class WebLayoutComponent {
  showSideNav: boolean = false;
  
  constructor(private _webService: WebService) {
    this._webService.subscribeOnWebDataChange('WebLayoutComponent', (event: any)=>{
      if(event.action == "close_sidenav_menu_options") {
        this.toggleSideNavBar();
      }
    });
  }

  toggleSideNavBar() {
    this.showSideNav = !this.showSideNav;
  }

  ngOnDestroy() {
    this._webService.unSubscribeOnWebDataChange('WebLayoutComponent');
  }
}
