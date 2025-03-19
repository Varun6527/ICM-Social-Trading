import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { WebService } from '../../../service/web.service';
import { ShowErrorStandAloneComponent } from '../../../../shared/component/showerror/show.error.standalone.component';
import { CommonModule } from '@angular/common';
import { ConstantVariable } from '../../../../shared/model/constantVariable.model';
import { TranslateModule } from '@ngx-translate/core';
import { IcmLoadingOverlayDirective } from '../../../../shared/directive/icmloadingoverlay/icm.loading.overlay.directive';

@Component({
  selector: 'subscription-info-dialog',
  template: `
          <h2 mat-dialog-title class="text-center">
          {{'PROVIDERS_PROFILE.Attention' | translate}}
          </h2>
          <mat-dialog-content class="mat-typography">
            <div class="warn-title">
              <p>{{"PROVIDERS_PROFILE.Don't forget to set up your copying options before activation" | translate}}:</p>
              <ol>
                  <li>{{"PROVIDERS_PROFILE.SubscriptionFirstWarnMsg" | translate}},</li>
                  <li>{{"PROVIDERS_PROFILE.SubscriptionSecondWarnMsg" | translate}},</li>
                  <li>{{"PROVIDERS_PROFILE.SubscriptionThirdWarnMsg" | translate}}.</li>
              </ol>
            </div>
          </mat-dialog-content>
          <div class="d-flex justify-center g-20 px-20">
            <button class="secondary-btn" (click)="closeInfoForm()">{{'PROVIDERS_PROFILE.OK' | translate}}</button>
          </div>
  `,
  styleUrls: ['./subscriptionInfoDialog.scss'],
  standalone: true,
  imports: [MatDialogModule, CommonModule, TranslateModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubscriptionInfoDialog {
  

  constructor(private dialogRef: MatDialogRef<SubscriptionInfoDialog>) {
  }

  closeInfoForm() {
    this.dialogRef.close({});
  }

}


  