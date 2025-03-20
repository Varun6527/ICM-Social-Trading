import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { WebService } from '../../service/web.service';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-action-button',
  standalone: true,
  imports: [CommonModule, RouterModule, MatMenuModule, TranslateModule],
  template: `
    @if(params.colDef.colId !== 'offerJoinActionCell' && params.colDef.colId !== 'agentActionCell' && params.colDef.colId !== 'riskCell') {
      <button (click)="onActionClick()" class="tableActionBtn">
        <img *ngIf="!params.colDef.showPopupArraow" src=".././../../../assets/icons/arrowIcon.png"/>

        <img *ngIf="params.colDef.showPopupArraow" src=".././../../../assets/icons/arrow-single.png" />
      </button>
    } @else {
      <button class="tableActionBtn" [matMenuTriggerFor]="actionMenu">
        <img src=".././../../../assets/icons/three-dots.png" width="20" />
      </button>
      <mat-menu #actionMenu="matMenu" class="actionMenu">
        @if(params.colDef.colId == 'offerJoinActionCell') {
          <button mat-menu-item (click)="onActionBtnClick('copy')"><img width="20" src=".././../../../assets/icons/copy.png"/>{{"PROVIDERS_LIST.Copy"|translate}}</button>
          <button mat-menu-item (click)="onActionBtnClick('edit')"><img width="20" src=".././../../../assets/icons/pencil.png"/>{{"COMMON.Edit"|translate}}</button>
          <button mat-menu-item (click)="onActionBtnClick('delete')"><img width="20" src=".././../../../assets/icons/trashIcon.png"/>{{"PROVIDERS_PROFILE.Delete"|translate}}</button>
        }
        @if(params.colDef.colId == 'agentActionCell' || params.colDef.colId == 'riskCell') {
          <button mat-menu-item (click)="onActionBtnClick('edit')"> 
            <img width="20" src=".././../../../assets/icons/pencil.png"/>
            {{"COMMON.Edit"|translate}}
          </button>
          <button mat-menu-item (click)="onActionBtnClick('delete')">
          <img width="20" src=".././../../../assets/icons/trashIcon.png"/>
          {{"PROVIDERS_PROFILE.Delete"|translate}}
          </button>
        }
      </mat-menu>
    }
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
      ::ng-deep .actionMenu .mat-mdc-menu-panel{
        background-color: var(--mat-select-panel-background-color);
      }
      ::ng-deep .actionMenu .mat-mdc-menu-content {
        min-height: 100px;
        max-height: 250px;
        background-color: var(--mat-select-panel-background-color);
      }
      ::ng-deep .actionMenu .mat-mdc-menu-item{
        padding-left: 20px;
        padding-right: 20px;
        background-color: var(--mat-select-panel-background-color);
        .mat-mdc-menu-item-text{
            font-size: 17px !important;
            display: flex;
            gap: 20px;
            align-items: center;
        }
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

  onActionBtnClick(type: string) {
    if(this.params.colDef.colId == 'offerJoinActionCell') {
      if(type == "copy") {
        this._webService.emitOnWebDataChange({action: 'copy_offer_join_link', data: this.params.data });
      } else if(type == "edit") {
        this._webService.emitOnWebDataChange({action: 'edit_offer_join_link', data: this.params.data });
      } else if(type == "delete") {
        this._webService.emitOnWebDataChange({action: 'delete_offer_join_link', data: this.params.data });
      }
    } else if(this.params.colDef.colId == 'agentActionCell') {
      if(type == "edit") {
        this._webService.emitOnWebDataChange({action: 'update_agent_data', data: this.params.data });
      } else if(type == "delete") {
        this._webService.emitOnWebDataChange({action: 'delete_agent_data', data: this.params.data });
      }
    }
  }

  onActionClick() {
    if(this.params.colDef.colId == 'providerProfileRedirection') {
      this.router.navigate([`/portal/providers/${this.params.data.providerId}`]);
    } else if(this.params.colDef.colId == 'followerProfileRedirection') {
      this.router.navigate([`/portal/subscriptions/${this.params.data.followerId ? this.params.data.followerId : this.params.data.id }`]);
    } else if(this.params.colDef.colId == 'accountDetailsPopup') {
      this._webService.emitOnWebDataChange({action: 'open_account_details_popup', data: this.params.data });
    } else if(this.params.colDef.colId == 'transactionDetailsPopup') {
      this._webService.emitOnWebDataChange({action: 'open_transact_details_popup', data: this.params.data });
    } else if(this.params.colDef.colId == 'offerRedirection') {
      this.router.navigate([`/portal/offers/${this.params.data.offerId}`]);
    }else if(this.params.colDef.colId == 'providerSubscriptionRedirection') {
      this.router.navigate([`/portal/providers/${this.params.data.providerId}/subscriptions/${this.params.data.subscriptionId}`]);
    } else if(this.params.colDef.colId == 'positionRedirection') {
      this.router.navigate([`/portal/providers/${this.params.data.providerId}/positions/${this.params.data.positionId}`]);
    } else if(this.params.colDef.colId == 'dealsPopup') {
      this._webService.emitOnWebDataChange({action: 'open_deals_popup', data: this.params.data });
    } else if(this.params.colDef.colId == 'tradingResultRedirection') {
      this.router.navigate([`/portal/providers/${this.params.data.providerId}/subscriptions/${this.params.data.subscriptionId}/results/${this.params.data.resultId}`]);
    } else if(this.params.colDef.colId == 'positionSubscriptionRedirection') {
      this.router.navigate([`/portal/subscriptions/${this.params.data.subscriptionId}/positions/${this.params.data.positionId}`]);
    }
  }
}


