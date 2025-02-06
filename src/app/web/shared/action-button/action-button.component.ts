import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WebService } from '../../service/web.service';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent {

  constructor(private router:Router, private _webService: WebService) {

  }

  params: any;

  // AG Grid passes the row data into this method
  agInit(params: any): void {
    this.params = params;
  }

  onActionClick() {
    if(this.params.colDef.type == 'providerProfileRedirection') {
      this.router.navigate([`${this.params.data.actionUrl}${this.params.data.providerId}`]);
    } else if(this.params.colDef.type == 'followerProfileRedirection') {
      this.router.navigate([`${this.params.data.actionUrl}${this.params.data.followerId}`]);
    } else if(this.params.colDef.type == 'accountDetailsPopup') {
      this._webService.emitOnWebDataChange({action: 'open_account_details_popup', data: this.params.data })
    }
  }
}
