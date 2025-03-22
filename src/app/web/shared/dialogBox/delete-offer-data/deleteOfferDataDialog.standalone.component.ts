import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { WebService } from '../../../service/web.service';
import { ShowErrorStandAloneComponent } from '../../../../shared/component/showerror/show.error.standalone.component';
import { CommonModule } from '@angular/common';
import { ConstantVariable } from '../../../../shared/model/constantVariable.model';
import { TranslateModule } from '@ngx-translate/core';
import { IcmLoadingOverlayDirective } from '../../../../shared/directive/icmloadingoverlay/icm.loading.overlay.directive';

@Component({
  selector: 'delete-offer-dialog',
  templateUrl: './deleteOfferDataDialog.html',
  styleUrls: ['./deleteOfferDataDialog.scss'],
  standalone: true,
  imports: [MatDialogModule, CommonModule, ShowErrorStandAloneComponent, TranslateModule, IcmLoadingOverlayDirective],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeleteOfferDataDialog {
  showLoader: boolean = false;
  offerData: any = {};
  riskData: any;
  modelType: string = "";
  modelData: any = {};
  subscriptionData: any;

  @ViewChild(ShowErrorStandAloneComponent) errorComponent?: ShowErrorStandAloneComponent;
  IConstant: ConstantVariable = new ConstantVariable();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<DeleteOfferDataDialog>, private _webService: WebService, private cdr: ChangeDetectorRef) {
    this.modelType = this.data.modelType;
    this.modelData = this.data.modelData;
    this.offerData = this.data.offerData;
    this.subscriptionData = this.data.subscriptionData;
    this.riskData = this.data.riskData;
  }

  deleteOfferData() {
    this.showLoader = true;
    let param = this.getParamOfDeleteOfferData(), apiObseverable: any, successMsg = "", eventMsg = "";
    if(this.modelType == "agent" || this.modelType == "joinLink") {
      apiObseverable = this._webService.updateOfferData(param);
      successMsg = "Offer has been updated";
      eventMsg = "refresh_offer_data";
    } else if(this.modelType == "risk") {
      apiObseverable = this._webService.createOrUpdateRiskData(param);
      successMsg = "Subscription has been updated";
      eventMsg = "refresh_risk_data";
    }
    apiObseverable?.subscribe({
      next: (response: any) => {
        this.showSuccessPopupMsg(successMsg);
        this.dialogRef.close({action: eventMsg });
        this.showLoader = false;
      },
      error: (errorObj: any) => {
        this.showLoader = false;
        this.showErrorWarnMessage(this.IConstant.errorMessageObj[errorObj?.error?.errorCode]);
        this.cdr.detectChanges();
      }
    })
  }

  getParamOfDeleteOfferData() {
    let param: any = {};
    if(this.modelType == "agent") {
      param['additionalAgents'] = JSON.parse(JSON.stringify(this.offerData.additionalAgents));
      param['additionalAgents']['chain'] = param['additionalAgents']['chain'].filter((o: any) => o.externalAccount != this.modelData.externalAccount);
      param['offerId'] = this.offerData.id;
    } else if(this.modelType == "joinLink") {
      param['registration'] = JSON.parse(JSON.stringify(this.offerData.registration));
      param['registration']['links'] = param['registration']['links'].filter((o: any) => o.key != this.modelData.key);
      param['offerId'] = this.offerData.id;
    } else if(this.modelType == "risk") {
      param['rules'] = JSON.parse(JSON.stringify(this.riskData));
      param['rules'] = param['rules'].filter((obj: any)=> obj.parameter !== this.modelData.parameter);
      param['subscriptionId'] = this.subscriptionData.id;
    }
    return param;
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

  closeDeleteInfoForm() {
    this.dialogRef.close({});
  }

}


  