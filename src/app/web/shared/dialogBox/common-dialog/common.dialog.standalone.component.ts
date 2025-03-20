import { ChangeDetectionStrategy, Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'common-dialog',
    templateUrl: './common.dialog.standalone.component.html',
    standalone: true,
    imports: [MatDialogModule, CommonModule, TranslateModule, RouterModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
      `
        ::ng-deep .common-dialog {
            min-width: 600px !important;
            border-radius: 10px !important;

            .mat-mdc-dialog-title {
                margin: unset !important;
                padding-bottom: 10px !important;
            }

            .mat-mdc-dialog-surface {
                border-radius: 10px !important;
                background: white !important;
                padding: 20px !important;
            }

            .account-details-container {
                display: flex;
                justify-content: space-between;
                flex-direction: column;
                gap: 30px;
                font-size: 20px;
            }
            .tag {
                    border-radius: 8px;
                    display: inline-block;
                    line-height: 2;
                    padding: 0px 10px;
                    background: var(--primary-light-positive-color);
                    color: var(--primary-positive-color);
                    font-size: 17px;
                    font-weight: 400;
             }
             
        }
      `
    ]
  })
  export class CommonDialogStandAloneComponent {
  
    constructor(private router: Router,public dialogRef: MatDialogRef<CommonDialogStandAloneComponent>, @Inject(MAT_DIALOG_DATA) public commonDialogData: any) {
    }
  
    closeCommonDialogPopup() {
      this.dialogRef.close();
    }

    redirectToResultPage(labelObj: any) {
      this.closeCommonDialogPopup();
      this.router.navigate([labelObj.redirectionUrl]);
    }

    redirectToSubscription(senderObj: any) {
      this.closeCommonDialogPopup();
      if(senderObj.ownerType == "Provider") {
        this.router.navigate([`/portal/providers/${senderObj.providerId}/subscriptions/${senderObj.subscriptionId}`]);
      } else {
        this.router.navigate([`/portal/subscriptions/${senderObj.subscriptionId}`]);
      }
    }

    redirectToProvider(recipentObj: any) {
      if(recipentObj.ownerType == "Provider") {
        this.closeCommonDialogPopup();
        this.router.navigate([`/portal/providers/${recipentObj.id}`]);
      }
    }

    redirectToSubscriptionPosition(data: any) {
      this.closeCommonDialogPopup();
      this.router.navigate([`/portal/subscriptions/${data.subscriptionId}/positions/${data.positionId}`]);
    }
  }
  