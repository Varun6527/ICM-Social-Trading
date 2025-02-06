import { Component, ViewChild } from '@angular/core';
import { WebService } from '../../service/web.service';
import { ShowErrorStandAloneComponent } from '../../../shared/component/showerror/show.error.standalone.component';

@Component({
  selector: 'app-web-layout',
  templateUrl: './web-layout.component.html',
  styleUrl: './web-layout.component.scss'
})
export class WebLayoutComponent {
  showLoader: boolean = false;

  @ViewChild(ShowErrorStandAloneComponent) errorComponent?: ShowErrorStandAloneComponent;
  
  constructor(private _webService: WebService) {
    this.setUserProfileData();
  }

  setUserProfileData() {
    this.showLoader = true;
    this._webService.setOrRefreshUserProfileData((result: any)=>{
      if(result['status']) {
        this.showLoader = false;
      } else {
        this.showErrorWarnMessgae(result.errorObj?.error?.error_description);
      }
    });
  }

  showErrorWarnMessgae(msg: any) {
    const errorConfigObj = this.errorComponent?.config;
    if(msg) {
      errorConfigObj.message = msg;
    }
    this.errorComponent?.openErrorSnackbar();
  }
}
