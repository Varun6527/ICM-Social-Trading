import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { WebService } from '../../service/web.service';

@Component({
  selector: 'app-action-button',
  standalone: true,
  imports: [RouterModule],
  template: `
    <button (click)="onActionClick()" class="tableActionBtn">
      <img src=".././../../../assets/icons/arrowIcon.png"/>
    </button>
  `,
  styles: `
      .tableActionBtn {
          padding: 15px;
          background: none;
          border: none;
          cursor: pointer;
          width: 80px;
          transition: background-color 0.3s linear, border-radius 0.3s linear, padding 0.3s linear, width 0.3s linear; 
      }

      .tableActionBtn:hover {
          background-color: #e3e3e396;
          border-radius: 6px;
      }
  `
})
export class ActionButtonStanAloneComponent {

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
      this._webService.emitOnWebDataChange({action: 'open_account_details_popup', data: this.params.data });
    } else if(this.params.colDef.type == 'transactionDetailsPopup') {
      this._webService.emitOnWebDataChange({action: 'open_transact_details_popup', data: this.params.data });
    }
  }
}


