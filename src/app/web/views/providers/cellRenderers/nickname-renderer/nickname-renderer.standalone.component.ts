// nickname-renderer.component.ts
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { WebService } from '../../../../service/web.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nickname-renderer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <a (click)="onCellNameClicked()" href="javascript:void(0)" class="nickname-link">
      {{ params.value }}
    </a>
    <div href="javascript:void(0)" class="tag" *ngIf="params.colDef.type == 'followerProfileRedirection'">
      #{{params.data.followerId}}
    </div>
    <div href="javascript:void(0)" class="tag" *ngIf="params.colDef.type == 'accountDetailsPopup'">
      #{{params.data.clientId}}
    </div>
  `,
  styles: [
    `
      .nickname-link {
        text-decoration: none;
        color: black;
        cursor: pointer;
      }
      .tag {
        border-radius: 8px;
        display: inline-block;
        line-height: 2;
        padding: 0px 10px;
        background: rgba(128, 128, 128, 0.2901960784);
        font-size: 13px;
        font-weight: 400;
      }
    `
  ]
})
export class NicknameRendererStandAloneComponent {
  params: any;

  constructor(private router:Router, private _webService: WebService) {

  }

  // AG Grid passes the row data into this method
  agInit(params: any): void {
    this.params = params;
  }

  onCellNameClicked() {
    if(this.params.colDef.type == 'providerProfileRedirection') {
      this.router.navigate([`${this.params.data.actionUrl}${this.params.data.providerId}`]);
    } else if(this.params.colDef.type == 'followerProfileRedirection') {
      this.router.navigate([`${this.params.data.actionUrl}${this.params.data.followerId}`]);
    } else if(this.params.colDef.type == 'accountDetailsPopup') {
      this._webService.emitOnWebDataChange({action: 'open_account_details_popup', data: this.params.data });
    } else if(this.params.colDef.type == 'transactionTitlePopup') {
      this._webService.emitOnWebDataChange({action: 'open_transact_details_popup', data: this.params.data });
    }
  }
}
