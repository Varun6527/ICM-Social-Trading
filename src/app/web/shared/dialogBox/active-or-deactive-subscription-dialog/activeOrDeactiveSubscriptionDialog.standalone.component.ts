import { ChangeDetectionStrategy, Component, Inject, ViewChild } from '@angular/core';
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
            @if(modelType == "activate") {
              {{"PROVIDERS_PROFILE.Activate"|translate}}
            } @else if(modelType == "suspend") {
              {{"PROVIDERS_PROFILE.Suspend"|translate}}
            }
          </h2>
          <p class="text-center">
          @if(modelType == "activate") {
            {{"PROVIDERS_PROFILE.Activate copying of positions"|translate}}
            } @else if(modelType == "suspend") {
              {{"PROVIDERS_PROFILE.Suspend copying of positions"|translate}}
            }
          </p>
          <mat-dialog-content class="mat-typography">
            <div class="{{modelType == 'activate' ? 'active-title' : 'deactive-title'}}">
            @if(modelType == "activate") {
              {{"PROVIDERS_PROFILE.New positions of the provider will start being copied"|translate}}
            } @else if(modelType == "suspend") {
              {{"PROVIDERS_PROFILE.New positions copying will be suspended"|translate}}
            }
            </div>
          </mat-dialog-content>
          <div class="d-flex justify-center g-20 px-20">
            <button class="secondary-btn" (click)="closeModal()">{{'COMMON.Cancel' | translate}}</button>
            <button class="primary-btn" (click)="activeOrDeactiveSubscriber()" [IcmLoadingOverlay]="showLoader">
            @if(modelType == 'activate') {
              {{"PROVIDERS_PROFILE.Activate"|translate}}
            } @else if(modelType == 'suspend') {
              {{"PROVIDERS_PROFILE.Suspend"|translate}}
            }
            </button>
          </div>
          <show-error-message></show-error-message>
  `,
  styleUrls: ['./activeOrDeactiveSubscriptionDialog.scss'],
  standalone: true,
  imports: [MatDialogModule, CommonModule, TranslateModule, IcmLoadingOverlayDirective, ShowErrorStandAloneComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActiveOrDeactiveSubscriptionDialog {
  modelType: string = "";
  subscriptionData: any;
  showLoader: boolean = false;

  @ViewChild(ShowErrorStandAloneComponent) errorComponent?: ShowErrorStandAloneComponent;
  IConstant: ConstantVariable = new ConstantVariable();

  constructor(private dialogRef: MatDialogRef<ActiveOrDeactiveSubscriptionDialog>, @Inject(MAT_DIALOG_DATA) public data: any, private _webService: WebService) {
    this.subscriptionData = data.subscriptionData;
    this.modelType = data.modelType;
  }

  activeOrDeactiveSubscriber() {
    this.showLoader = true;
    let param = {
      subscriptionId: this.subscriptionData.id,
      activationStatus: this.modelType == "activate" ? true : false
    };
    this._webService.activateOrDeactivateSubscription(param).subscribe({
      next: (response) => {
        this.showSuccessPopupMsg("Subscription has been updated");
        this.dialogRef.close({ action: 'refresh_subscription_data' });
        this.showLoader = false;
      },
      error: (errorObj) => {
        this.showLoader = false;
        this.showErrorWarnMessage(this.IConstant.errorMessageObj[errorObj?.error?.errorCode]);
      },
    })
  }

  showErrorWarnMessage(msg: any) {
    const errorConfigObj = this.errorComponent?.config;
    errorConfigObj.message = msg ? msg : errorConfigObj.message;
    this.errorComponent?.openErrorSnackbar();
  }

  showSuccessPopupMsg(msg: string) {
    const errorConfigObj = this.errorComponent?.config;
    errorConfigObj.customStyle = 'default-success-style';
    errorConfigObj.message = msg ? msg : errorConfigObj.message;
    this.errorComponent?.openErrorSnackbar();
  }

  closeModal() {
    this.dialogRef.close({});
  }

}


