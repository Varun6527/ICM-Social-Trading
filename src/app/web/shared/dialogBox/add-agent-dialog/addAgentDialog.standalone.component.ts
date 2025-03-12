import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { WebService } from '../../../service/web.service';
import { ShowErrorStandAloneComponent } from '../../../../shared/component/showerror/show.error.standalone.component';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ConstantVariable } from '../../../../shared/model/constantVariable.model';
import { TranslateModule } from '@ngx-translate/core';
import { IcmLoadingOverlayDirective } from '../../../../shared/directive/icmloadingoverlay/icm.loading.overlay.directive';

@Component({
  selector: 'create-offer-dialog',
  templateUrl: './addAgentDialog.html',
  styleUrls: ['./addAgentDialog.scss'],
  standalone: true,
  imports: [MatDialogModule, MatInputModule, MatSelectModule, CommonModule, ReactiveFormsModule, ShowErrorStandAloneComponent, TranslateModule, IcmLoadingOverlayDirective],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddAgentDialog {
  createAgentForm: FormGroup;
  offerData: any = {};
  offerFormData: any = {};
  tempOfferFormData: any = {};
  isUpdate: boolean;
  showError: boolean = false;
  showLoader: boolean = false;
  currentTotalAgentFee: number = 0;

  @ViewChild(ShowErrorStandAloneComponent) errorComponent?: ShowErrorStandAloneComponent;
  IConstant: ConstantVariable = new ConstantVariable();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<AddAgentDialog>, private fb: FormBuilder, private _webService: WebService, private cdr: ChangeDetectorRef) {
    this.offerData = data.offerData;
    this.isUpdate = data.isUpdate;
    this.createAgentForm = this.fb.group({
      externalAccount: ['', [Validators.required, Validators.min(1), this.uniqueAccountValidator(this.offerData.additionalAgents.chain, this.isUpdate, this.data?.offerFormData?.externalAccount)]],
      share: ['', [Validators.required, Validators.min(1), this.totalFeeValidator(this.currentTotalAgentFee)]]
    });
    this.currentTotalAgentFee = this.getTotalAgentFee();
    this.setAgentFormData();
  }

  setAgentFormData() {
    if (this.isUpdate) {
      this.offerFormData = JSON.parse(JSON.stringify(this.data.offerFormData));
      this.tempOfferFormData = JSON.parse(JSON.stringify(this.data.offerFormData));
      this.createAgentForm.get('externalAccount')?.setValue(this.offerFormData.externalAccount);
      this.createAgentForm.get('share')?.setValue(this.offerFormData.share);
      this.createAgentForm.get('externalAccount')?.updateValueAndValidity();
      this.createAgentForm.get('share')?.updateValueAndValidity();
    }
  }

  totalFeeValidator(currentTotalAgentFee: number) {
    return (control: AbstractControl): ValidationErrors | null => {
      const form = control?.parent as FormGroup;
      if (!form) return null;
      let agentFees = form.get('share')?.value || 0;
      let totalFees = agentFees + currentTotalAgentFee;
      if (totalFees > 100) {
        return { totalFeeExceeds: true };
      }
      return null;
    }
  }

  uniqueAccountValidator(agentArr: any, isUpdate: boolean, tempAccountId: number) {
    return (control: AbstractControl): ValidationErrors | null => {
      const form = control?.parent as FormGroup;
      if (!form) return null;
      let agentAccountId = form.get('externalAccount')?.value || 0;
      let isAnyAccountMatch = agentArr.some((o: any) => { 
        if(isUpdate && o.externalAccount == tempAccountId) {
          return false;
        } else {
          return o.externalAccount == agentAccountId;
        }
      })
      if(isAnyAccountMatch) {
        return { agentAccountDuplicate: true };
      }
      return null;
    }
  }

  getTotalAgentFee() {
    let fee = 0;
    if(this.offerData.publicAgents.fee) {
      fee = fee + this.offerData.publicAgents.fee;
    }
    if(this.offerData.additionalAgents.chain.length > 0) {
      let totalAdditonalAgentFee = this.offerData.additionalAgents.chain.reduce((sum: any, item: any) => sum + item.share, 0);
      fee = fee + totalAdditonalAgentFee;
    }
    return fee;
  }
  
  get getControl() {
    return this.createAgentForm.controls;
  }

  createOrUpdateAgent() {
    if (this.createAgentForm.invalid) {
      this.showError = true;
      return;
    }
    this.showLoader = true;
    this.showError = false;
    let param = this.getAgentParamObj();
    this._webService.updateOfferData(param).subscribe({
      next: (response: any) => {
        this.showSuccessPopupMsg("Offer has been updated");
        this.dialogRef.close({action:'refresh_offer_data' });
        this.showLoader = false;
      },
      error: (errorObj) => {
        this.showLoader = false;
        this.showErrorWarnMessage(this.IConstant.errorMessageObj[errorObj?.error?.errorCode]);
        this.cdr.detectChanges();
      },
    })
  }

  getAgentParamObj() {
    let param: any = {}; 
    let obj = {
        externalAccount: this.getControl['externalAccount'].value, 
        share: this.getControl['share'].value
    };
    if(!this.isUpdate) {
      param['additionalAgents'] = JSON.parse(JSON.stringify(this.offerData.additionalAgents));
      param['additionalAgents']['chain'].push(obj);
    } else {
      param['additionalAgents'] = JSON.parse(JSON.stringify(this.offerData.additionalAgents));
      let chainIndex = param['additionalAgents']['chain'].findIndex((o: any) => o.externalAccount == this.tempOfferFormData.externalAccount);
      param['additionalAgents']['chain'][chainIndex] = obj;
    }
    param['offerId'] = this.offerData.id;
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

  closeDialog() {
    this.dialogRef.close({});
  }

}


  