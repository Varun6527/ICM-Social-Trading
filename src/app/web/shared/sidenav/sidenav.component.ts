import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BaseLanguageTranslationComponent } from '../../../shared/component/languagetranslation/base.language.translation.component';
import { WebService } from '../../service/web.service';
import { AuthService } from '../../../auth/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent extends BaseLanguageTranslationComponent {
  showProvider: boolean = false;
  showSubscription: boolean = false;
  showRatingWidget: boolean = false;

  constructor(private translate: TranslateService, private _webService: WebService, private _authService: AuthService, private _route: Router) {
    super(translate, _authService);
    this._webService.subscribeOnWebDataChange('SidenavComponent', (event: any)=>{
      this.recieveChildrenEvent(event);
    })
  }

  ngOnInit() {
    this.setOrRefreshUserProfileConfig();
  }

  recieveChildrenEvent(event: any) {
    if(event['action'] == "refresh_sidenav_menu_options") {
      this.setOrRefreshUserProfileConfig(event);
    }
  }

  setOrRefreshUserProfileConfig(event?: any) {
    this.showProvider = this._webService.isProviderAccount;
    this.showSubscription = this._webService.isSubscriptionAccount;
    this.showRatingWidget = this._authService.userConfig.ratings.integrationMode == "EmbeddedPage";
    event?.callback();
  }

  logoutUser() {
    this._authService.clearUserSession();
    this._route.navigate(['./portal/login']);
  }

  ngOnDestroy() {
    this._webService.unSubscribeOnWebDataChange('SidenavComponent');
  }

}
