import { Component, inject, ViewChild } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { BaseLanguageTranslationComponent } from '../../../shared/component/languagetranslation/base.language.translation.component';
import { WebService } from '../../service/web.service';
import { AuthService } from '../../../auth/service/auth.service';
import { Router, RouterModule } from '@angular/router';
import { ShowErrorStandAloneComponent } from '../../../shared/component/showerror/show.error.standalone.component';
import { ConstantVariable } from '../../../shared/model/constantVariable.model';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { clientSettingsDialogStandAloneComponent } from '../dialogBox/client-settings-dialog/clientSettingsDialog.standalone.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  standalone: true,
  styleUrl: './sidenav.component.scss',
  imports: [CommonModule, RouterModule, TranslateModule, MatMenuModule, ShowErrorStandAloneComponent]
})
export class SidenavStanaloneComponent extends BaseLanguageTranslationComponent {
  showProvider: boolean = false;
  showSubscription: boolean = false;
  showRatingWidget: boolean = false;
  clientSettings: any = {};
  providerData: any = {};
  iConstant: ConstantVariable = new ConstantVariable();
  readonly clientSettingsDialog = inject(MatDialog);
  @ViewChild(ShowErrorStandAloneComponent) errorComponent?: ShowErrorStandAloneComponent;

  constructor(private translate: TranslateService, private _webService: WebService, private _authService: AuthService, private _route: Router) {
    super(translate, _authService);
    this._webService.subscribeOnWebDataChange('SidenavComponent', (event: any)=>{
      this.recieveChildrenEvent(event);
    });
    this.setOrRefreshUserProfileConfig();
  }

  getClientDetail() {
    this._webService.getClientDetails().subscribe({
      next: (response)=>{
        this.clientSettings = response;
      },
      error: (errorObj) => {
        this.showErrorWarnMessage(errorObj?.error?.errorMessage);
      }
    })
  }

  getIntialDataForProvider() {
    let param = {scope: 'Active'};
    this._webService.getProviderData(param).subscribe({
      next: (response: any)=>{
        this.providerData = response?.items[0];
        this.setAvatarPath();
      },
      error: (errorObj) => {
        this.showErrorWarnMessage(errorObj?.error?.errorMessage);
      }
    })
  }
  
  setAvatarPath() {
    if(this.providerData && this.providerData?.public?.avatarPath) {
      let path: string = `${this._webService.getFileServerUrl()}${this.iConstant.providerAvatarPath}${this.providerData.public.avatarPath}`;
      this.providerData.public.avatarPath = path;
    }
  }

  showErrorWarnMessage(msg: any) {
    const errorConfigObj = this.errorComponent?.config;
    errorConfigObj.message = msg ? msg : errorConfigObj.message;
    this.errorComponent?.openErrorSnackbar();
  }

  recieveChildrenEvent(event: any) {
    if(event['action'] == "refresh_sidenav_menu_options") {
      this.setOrRefreshUserProfileConfig(event);
    } else if(event['action'] == 'update_user_email') {
      this.clientSettings.settings.email = event['email'];
    } else if(event['action'] == 'refresh_provider_image') {
      this.getIntialDataForProvider();
    }
  }

  setOrRefreshUserProfileConfig(event?: any) {
    this.showProvider = this._webService.isProviderAccount;
    this.showSubscription = this._webService.isSubscriptionAccount;
    this.showRatingWidget = this._authService.userConfig.ratings.integrationMode == "EmbeddedPage";
    this.getClientDetail();
    if(this.showProvider) {
      this.getIntialDataForProvider();
    }
    event?.callback();
  }

  logoutUser() {
    this._authService.clearUserDataAndToken();
    this._webService.clearUserProfileData();
    this._route.navigate(['./portal/login']);
  }

  openSettingsPopup() {
    this.clientSettingsDialog.open(clientSettingsDialogStandAloneComponent, {
      panelClass: 'client-setting-Dialog'
    });
    this.clientSettingsDialog.afterAllClosed.subscribe((result) => {
    });
  }

  ngOnDestroy() {
    this._webService.unSubscribeOnWebDataChange('SidenavComponent');
  }

}
