import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-status-btn-renderer',
  template: `
    <div>
        @if(params.colDef.colId == 'activityCell') {
            <img height="25" width="25" *ngIf="params.data.isActivated && params.data.state == 'Active' && params.value" src="assets/icons/Check icon.png" />
            <img height="25" width="25" *ngIf="params.data.isActivated && params.data.state == 'Active' && !params.value" src="assets/icons/pause-button.png" />
            <img height="25" width="25" *ngIf="!params.data.isActivated && params.data.state == 'Archived'" src="assets/icons/cancelIcon.png" />
            <img height="25" width="25" *ngIf="!params.data.isActivated && params.data.state == 'Active'" src="assets/icons/redSettingsIcon.png" />
        } @else if(params.colDef.colId == 'ratingType') {
          <img src="assets/icons/buyIcon.svg" *ngIf="params.data.type == 'Buy' || params.value == 'Buy'"/>
          <img src="assets/icons/sellIcon.svg" *ngIf="params.data.type == 'Sell'|| params.value == 'Sell'">
        } @else {
            <img height="25" width="25" *ngIf="params.value == true || params.value == 'Active'" src="assets/icons/Check icon.png" />
            <img height="25" width="25" *ngIf="params.value == false || params.value == 'Expired'" src="assets/icons/cancelIcon.png" />
        }
    </div>
  `,
  styles: `
    .status{
      img{
          display: flex;
          justify-content: center;
          align-items: center;
      }
    }

    .inactiveIcon{
        height: 25px;
        width: 25px;
    }
  `,
  standalone: true,
  imports: [CommonModule]
})
export class StatusBtnRendererStandAloneComponent {
  public params: any;

  agInit(params: any): void {
    this.params = params;
  }
}
