import { ChangeDetectionStrategy, Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { WebService } from '../../../service/web.service';
import { ShowErrorStandAloneComponent } from '../../../../shared/component/showerror/show.error.standalone.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ConstantVariable } from '../../../../shared/model/constantVariable.model';
import { TranslateModule } from '@ngx-translate/core';
import { IcmLoadingOverlayDirective } from '../../../../shared/directive/icmloadingoverlay/icm.loading.overlay.directive';

@Component({
  selector: 'provider-commongInfo-dialog',
  templateUrl: './providerCommonInfoDialog.html',
  styleUrls: ['./providerCommonInfoDialog.scss'],
  standalone: true,
  imports: [MatDialogModule, MatInputModule, MatExpansionModule, MatSelectModule, CommonModule, ReactiveFormsModule, ShowErrorStandAloneComponent, TranslateModule, IcmLoadingOverlayDirective],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProviderCommonInfoDialog {
  providerCommonInfoForm: FormGroup;
  providerData: any;
  financeAccountData: any = [];
  modelType: string = "";
  showError: boolean = false;
  showLoader: boolean = false;

  @ViewChild(ShowErrorStandAloneComponent) errorComponent?: ShowErrorStandAloneComponent;
  IConstant: ConstantVariable = new ConstantVariable();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<ProviderCommonInfoDialog>, private fb: FormBuilder, private _webService: WebService) {
    this.providerData = data.providerData;
    this.modelType = data.modelType;
    this.providerCommonInfoForm = this.fb.group({
      nickname: [''],
      showAccountName: [false],
      visibility: [''],
      summary: [''],
      notes: [''],
      hideStops: [false],
      mode: [''],
      paymentAccountId: ['']
    });
    this.setProviderFormData();
  }
  
  get getControl() {
    return this.providerCommonInfoForm.controls;
  }

  getProviderParamObj() {
    let param: any = {};
    if(this.modelType == "common_info") {
      param['additional'] = this.providerData.additional;
      param['nickname'] = this.getControl['nickname'].value;
      param['additional']['showAccountName'] = this.getControl['showAccountName'].value;
      param['visibility'] = this.getControl['visibility'].value;
    } else if(this.modelType == "personal_details") {
      param['additional'] = this.providerData.additional;
      param['additional']['summary'] = this.getControl['summary'].value;
      param['additional']['notes'] = this.getControl['notes'].value;
    } else if(this.modelType == "strategy_details") {
      param['strategy'] = this.providerData.strategy;
      param['strategy']['hideStops'] = this.getControl['hideStops'].value;
      param['strategy']['mode'] = this.getControl['mode'].value;
    } else if(this.modelType == "finance") {
      param['paymentAccountId'] = this.getControl['paymentAccountId'].value;
    }
    param['providerId'] = this.providerData.id;
    return param;
  }

  updateProviderDetails() {
    if (this.providerCommonInfoForm.invalid) {
      this.showError = true;
      return;
    }
    this.showLoader = true;
    this.showError = false;
    let param = this.getProviderParamObj();
    this._webService.updateProviderData(param).subscribe({
      next: (response) => {
        this.showSuccessPopupMsg("Provider has been updated");
        if(this.modelType == "common_info") {
          this._webService.emitOnWebDataChange({action: "refresh_provider_Sidebar"});
        }
        this.dialogRef.close({action: 'refresh_provider_data'});
        this.showLoader = false;
      },
      error: (errorObj) => {
        this.showLoader = false;
        this.showErrorWarnMessage(this.IConstant.errorMessageObj[errorObj?.error?.errorCode]);
      },
    })
  }

  setProviderFormData() {
    if(this.modelType == "common_info") {
      this.providerCommonInfoForm.patchValue({
        nickname: this.providerData.nickname,
        showAccountName: this.providerData.additional.showAccountName,
        visibility: this.providerData.visibility
      });
      this.getControl['nickname'].setValidators([Validators.required, Validators.minLength(6)]);
      this.getControl['nickname'].updateValueAndValidity();

      this.getControl['visibility'].setValidators([Validators.required]);
      this.getControl['visibility'].updateValueAndValidity();
    } else if(this.modelType == "personal_details") {
      this.providerCommonInfoForm.patchValue({
        summary: this.providerData.additional.summary,
        notes: this.providerData.additional.notes
      });
    } else if(this.modelType == "strategy_details") {
      this.providerCommonInfoForm.patchValue({
        hideStops: this.providerData.strategy.hideStops,
        mode: this.providerData.strategy.mode
      });
    } else if(this.modelType == "finance") {
      this.getFinanceData();
      this.providerCommonInfoForm.patchValue({
        paymentAccountId: this.providerData.clientId
      });

      this.getControl['paymentAccountId'].setValidators([Validators.required]);
      this.getControl['paymentAccountId'].updateValueAndValidity();
    }
    this.providerCommonInfoForm.updateValueAndValidity();
  }

  getFinanceData() {
    let param = {
      scope: 'Active',
      $filter: `clientId eq ${this.providerData.clientId}`,
      $count: false
    }
    this._webService.getTradingAccountData(param).subscribe({
      next: (response: any) => {
        this.financeAccountData = response.items;
      },
      error: (errorObj) => {
        this.showErrorWarnMessage(this.IConstant.errorMessageObj[errorObj?.error?.errorCode]);
      }
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

  closeProviderInfoForm() {
    this.dialogRef.close({});
  }

}


  