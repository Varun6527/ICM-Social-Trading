import { ChangeDetectionStrategy, Component, Inject, ViewChild } from '@angular/core';
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
  selector: 'offer-commongInfo-dialog',
  templateUrl: './offerCommonInfoDialog.html',
  styleUrls: ['./offerCommonInfoDialog.scss'],
  standalone: true,
  imports: [MatDialogModule, MatInputModule, MatSelectModule, CommonModule, ReactiveFormsModule, ShowErrorStandAloneComponent, TranslateModule, IcmLoadingOverlayDirective],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OfferCommonInfoDialog {
  offerCommonInfoForm: FormGroup;
  offerData: any;
  modelType: string = "";
  showError: boolean = false;
  showLoader: boolean = false;
  currentTotalAgentFee: any = 0;
  intervalArr: any = [];

  @ViewChild(ShowErrorStandAloneComponent) errorComponent?: ShowErrorStandAloneComponent;
  IConstant: ConstantVariable = new ConstantVariable();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<OfferCommonInfoDialog>, private fb: FormBuilder, private _webService: WebService) {
    this.offerData = data.offerData;
    this.modelType = data.modelType;
    this.currentTotalAgentFee = this.getTotalAgentFee();
    this.offerCommonInfoForm = this.fb.group({
      name: [''],
      visibility: [''],
      summary: [''],
      notes: [''],
      minBalance: [''],
      fee: [''],
      performance_fee: [''],
      interval: ['']
    });
    this.setOfferFormData();
  }

  get getControl() {
    return this.offerCommonInfoForm.controls;
  }

  setCustomValidationForInterval() {
    this.offerCommonInfoForm.get('performance_fee')?.valueChanges.subscribe(value => {
      if (value > 0) {
        this.offerCommonInfoForm.get('interval')?.setValidators([Validators.required]);
        this.offerCommonInfoForm.get('interval')?.updateValueAndValidity();
      } else {
        this.offerCommonInfoForm.get('interval')?.setValue("");
        this.offerCommonInfoForm.get('interval')?.clearValidators();
        this.offerCommonInfoForm.get('interval')?.updateValueAndValidity();
      }
    });
  }

  setInterValArr() {
    let intervalArr = this._webService.userPermissionConfig.provider.performanceFeeIntervalRights;
    this.intervalArr = Object.keys(intervalArr)
      .filter(key => intervalArr[key].length > 0)
      .map(key => {
        const value = key.replace('allow', '').replace('Interval', '');
        return { value: value, viewValue: value };
      });
  }

  totalFeeValidator(currentTotalAgentFee: number) {
    return (control: AbstractControl): ValidationErrors | null => {
      const form = control?.parent as FormGroup;
      if (!form) return null;
      let agentFees = form.get('fee')?.value || 0;
      let totalFees = agentFees + currentTotalAgentFee;
      if (totalFees > 100) {
        return { totalFeeExceeds: true };
      }
      return null;
    }
  }

  getTotalAgentFee() {
    let fee = 0;
    if (this.offerData.additionalAgents.chain.length > 0) {
      fee = this.offerData.additionalAgents.chain.reduce((sum: any, item: any) => sum + item.share, 0);;
    }
    return fee;
  }

  getOfferParamObj() {
    let param: any = {};
    if (this.modelType == "common_info") {
      param['additional'] = this.offerData.additional;
      param['name'] = this.getControl['name'].value;
      param['additional']['summary'] = this.getControl['summary'].value;
      param['additional']['notes'] = this.getControl['notes'].value;
      param['visibility'] = this.getControl['visibility'].value;
    } else if (this.modelType == "filters") {
      param['filters'] = {};
      param['filters']['minBalance'] = this.getControl['minBalance'].value;
    } else if (this.modelType == "public_agents") {
      param['publicAgents'] = {};
      param['publicAgents']['fee'] = this.getControl['fee'].value;
    } else if (this.modelType == "performance_fees") {
      param['performance'] = {};
      if (this.getControl['performance_fee'].value > 0) {
        param['performance']['interval'] = this.getControl['interval'].value;
        param['performance']['fee'] = this.getControl['performance_fee'].value;
      } else {
        param['performance']['fee'] = this.getControl['performance_fee'].value;
      }
    }
    param['offerId'] = this.offerData.id;
    return param;
  }

  updateOfferDetails() {
    if (this.offerCommonInfoForm.invalid) {
      this.showError = true;
      return;
    }
    this.showLoader = true;
    this.showError = false;
    let param = this.getOfferParamObj();
    this._webService.updateOfferData(param).subscribe({
      next: (response) => {
        this.showSuccessPopupMsg("Offer has been updated");
        this.dialogRef.close({ action: 'refresh_offer_data' });
        this.showLoader = false;
      },
      error: (errorObj) => {
        this.showLoader = false;
        this.showErrorWarnMessage(this.IConstant.errorMessageObj[errorObj?.error?.errorCode]);
      },
    })
  }

  setOfferFormData() {
    if (this.modelType == "common_info") {
      this.offerCommonInfoForm.patchValue({
        name: this.offerData.name,
        visibility: this.offerData.visibility,
        summary: this.offerData.additional.summary,
        notes: this.offerData.additional.notes
      });
      this.getControl['name'].setValidators([Validators.required, Validators.minLength(6)]);
      this.getControl['name'].updateValueAndValidity();
    } else if (this.modelType == "filters") {
      this.offerCommonInfoForm.patchValue({
        minBalance: this.offerData.filters.minBalance
      });
      this.getControl['minBalance'].setValidators([Validators.min(1)]);
      this.getControl['minBalance'].updateValueAndValidity();
    } else if (this.modelType == "public_agents") {
      this.offerCommonInfoForm.patchValue({
        fee: this.offerData.publicAgents.fee
      });
      this.getControl['fee'].setValidators([Validators.min(1), this.totalFeeValidator(this.currentTotalAgentFee)]);
      this.getControl['fee'].updateValueAndValidity();
    } else if (this.modelType == "performance_fees") {
      this.setInterValArr();
      this.setCustomValidationForInterval();
      this.offerCommonInfoForm.patchValue({
        performance_fee: this.offerData.performance.fee,
        interval: this.offerData.performance.interval,
      });
      this.getControl['performance_fee'].setValidators([Validators.required]);
      this.getControl['performance_fee'].updateValueAndValidity();
    }
    this.offerCommonInfoForm.updateValueAndValidity();
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

  closeOfferInfoForm() {
    this.dialogRef.close({});
  }

}


