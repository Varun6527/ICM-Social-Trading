// nickname-renderer.component.ts
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { WebService } from '../../../service/web.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-common-cell-renderer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './common-cell-renderer.standalone.component.html',
  styleUrls: ['./common-cell-renderer.standalone.component.scss']
})
export class CommonCellRendererStandAloneComponent {
  params: any;

  constructor(private router:Router, private _webService: WebService) {

  }

  // AG Grid passes the row data into this method
  agInit(params: any): void {
    this.params = params;
  }

  onCellNameClicked() {
    if(this.params.colDef.colId == 'providerProfileRedirection') {
      this.router.navigate([`/portal/providers/${this.params.data.providerId}`]);
    } else if(this.params.colDef.colId == 'followerProfileRedirection') {
      this.router.navigate([`/portal/subscriptions/${this.params.data.followerId}`]);
    } else if(this.params.colDef.colId == 'accountDetailsPopup') {
      this._webService.emitOnWebDataChange({action: 'open_account_details_popup', data: this.params.data });
    } else if(this.params.colDef.colId == 'transactionTitlePopup') {
      this._webService.emitOnWebDataChange({action: 'open_transact_details_popup', data: this.params.data });
    } else if(this.params.colDef.colId == 'transactionsenderAction') {
      if(this.params.value.ownerType == "Provider") {
        this.router.navigate([`/portal/providers/${this.params.value.providerId}/subscriptions/${this.params.value.subscriptionId}`]);
      } else {
        this.router.navigate([`/portal/subscriptions/${this.params.value.subscriptionId}`]);
      }
    } else if(this.params.colDef.colId == 'transactionRecipientAction') {
      if(this.params.value.ownerType == "Provider") {
        this.router.navigate([`/portal/providers/${this.params.value.id}`]);
      }
    } else if(this.params.colDef.colId == 'providerOfferRedirection') {
      this.router.navigate([`/portal/offers/${this.params.data.offerId}`]);
    }
  }
}
