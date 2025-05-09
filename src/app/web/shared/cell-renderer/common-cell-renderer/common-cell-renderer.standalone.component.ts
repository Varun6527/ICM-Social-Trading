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
    if(this.params.colDef.colId == 'providerProfileRedirection' || this.params.colDef.colId == 'providerNameCell') {
      this.router.navigate([`/portal/providers/${this.params.data.providerId}`]);
    } else if(this.params.colDef.colId == 'followerProfileRedirection' || this.params.colDef.colId == 'subscriptionRedirection' || this.params.colDef.colId == 'followerProfileCell') {
      this.router.navigate([`/portal/subscriptions/${this.params.data.followerId ? this.params.data.followerId : this.params.data.id}`]);
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
    } else if(this.params.colDef.colId == 'providerOfferRedirection' || this.params.colDef.colId == 'offerCell' || this.params.colDef.colId == 'offerTitleCell') {
      this.router.navigate([`/portal/offers/${this.params.data.offerId}`]);
    } else if(this.params.colDef.colId == 'providerSubscriptionNameCell') {
      this.router.navigate([`/portal/providers/${this.params.data.providerId}/subscriptions/${this.params.data.subscriptionId}`]);
    } else if(this.params.colDef.colId == 'positionNameCell') {
      this.router.navigate([`/portal/providers/${this.params.data.providerId}/positions/${this.params.data.positionId}`]);
    } else if(this.params.colDef.colId == 'dealsTitleCell' || this.params.colDef.colId == 'dealsSubTitleCell') {
      this._webService.emitOnWebDataChange({action: 'open_deals_popup', data: this.params.data });
    } else if(this.params.colDef.colId == 'dealPositionCell') {
      this.getPositionDetails();
    } else if(this.params.colDef.colId == 'resultIdCell') {
      this.router.navigate([`/portal/providers/${this.params.data.providerId}/subscriptions/${this.params.data.subscriptionId}/results/${this.params.data.resultId}`]);
    } else if(this.params.colDef.colId == 'offerKeyCell') {
      this._webService.emitOnWebDataChange({action: 'edit_offer_join_link', data: this.params.data });
    } else if(this.params.colDef.colId == 'dealSubscriptionPositionCell' || this.params.colDef.colId == 'positionSubscriptionNameCell') {
      this.router.navigate([`/portal/subscriptions/${this.params.data.subscriptionId}/positions/${this.params.data.positionId}`]);
    }
  }

  getPositionDetails() {
    let param = {
      $filter: `position eq ${this.params.value}`,
      $count: false,
      providerId: this.params.data.providerId
    }
    this._webService.getPositionDetails(param).subscribe({

      next: (response: any) => {
        this.router.navigate([`/portal/providers/${this.params.data.providerId}/positions/${response.items[0].id}`]);
      }
    })
  }
}
