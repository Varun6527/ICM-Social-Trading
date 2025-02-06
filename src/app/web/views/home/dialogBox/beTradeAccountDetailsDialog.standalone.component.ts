import { ChangeDetectionStrategy, Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { WebService } from '../../../service/web.service';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'beTradeAccDetails-dialog',
    templateUrl: './beTradeAccountDetailsDialog.html',
    standalone: true,
    imports: [MatDialogModule, CommonModule, TranslateModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
      `
        ::ng-deep .beTradeAccDetails-dialog {
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

                .account-left-right-section {
                    display: flex;
                    flex-direction: column;
                    gap: 30px;
                    font-size: 20px;

                        &.text-right div {
                            text-align: right;
                        }

                        &.text-right .bolder {
                            font-weight: bold;
                        }
                }

            }
        }
      `
    ]
  })
  export class BeTradeAccDetailsStandAloneComponent {
  
    constructor(public dialogRef: MatDialogRef<BeTradeAccDetailsStandAloneComponent>, @Inject(MAT_DIALOG_DATA) public tradingAccountDetails: any) {
    }
  
    closeTradingAccountForm() {
      this.dialogRef.close();
    }
  }
  