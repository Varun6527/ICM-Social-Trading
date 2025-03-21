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
  selector: 'create-update-risk-dialog',
  templateUrl: './createUpdateRisk.html',
  styleUrls: ['./createUpdateRisk.scss'],
  standalone: true,
  imports: [MatDialogModule, MatInputModule, MatSelectModule, CommonModule, ReactiveFormsModule, ShowErrorStandAloneComponent, TranslateModule, IcmLoadingOverlayDirective]
})
export class CreateUpdateRiskDialog {
  createRiskForm: FormGroup;
  subscriptionData: any = {};
  riskFormData: any = {};
  tempRiskFormData: any = {};
  riskData: any = [];
  isUpdate: boolean;
  showError: boolean = false;
  showLoader: boolean = false;

  @ViewChild(ShowErrorStandAloneComponent) errorComponent?: ShowErrorStandAloneComponent;
  IConstant: ConstantVariable = new ConstantVariable();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<CreateUpdateRiskDialog>, private fb: FormBuilder, private _webService: WebService, private cdr: ChangeDetectorRef) {
    this.subscriptionData = data.subscriptionData;
    this.riskData = data.riskData;
    this.isUpdate = data.isUpdate;
    this.createRiskForm = this.fb.group({
      parameter: ['', [Validators.required]],
      threshold: ['', [Validators.required, Validators.min(1)]],
      subscriptionAction: ['', [Validators.required]],
      tradingAction: ['', [Validators.required]],
    });
    this.setRiskFormData();
    this.listenValueChanges();
  }

  listenValueChanges() {
    this.createRiskForm.get('parameter')?.valueChanges.subscribe(value => {
      if (value) {
        this.createRiskForm.patchValue({
          subscriptionAction: '',
          tradingAction: ''
        }, { emitEvent: false }); // Prevent triggering valueChanges again
      }
    });
    
    this.createRiskForm.get('subscriptionAction')?.valueChanges.subscribe(value => {
      if (value) {
        this.createRiskForm.patchValue({
          tradingAction: ''
        }, { emitEvent: false }); // Prevent triggering valueChanges again
      }
    });
  }

  setRiskFormData() {
    if (this.isUpdate) {
      this.riskFormData = JSON.parse(JSON.stringify(this.data.riskFormData));
      this.tempRiskFormData = JSON.parse(JSON.stringify(this.data.riskFormData));
      this.createRiskForm.get('parameter')?.setValue(this.riskFormData.parameter);
      this.createRiskForm.get('threshold')?.setValue(this.riskFormData.threshold);
      this.createRiskForm.get('subscriptionAction')?.setValue(this.riskFormData.subscriptionAction);
      this.createRiskForm.get('tradingAction')?.setValue(this.riskFormData.tradingAction);

      this.createRiskForm.get('parameter')?.updateValueAndValidity();
      this.createRiskForm.get('threshold')?.updateValueAndValidity();
      this.createRiskForm.get('subscriptionAction')?.updateValueAndValidity();
      this.createRiskForm.get('tradingAction')?.updateValueAndValidity();
    }
  }

  get getControl() {
    return this.createRiskForm.controls;
  }

  createOrUpdateRisk() {
    if (this.createRiskForm.invalid) {
      this.showError = true;
      return;
    }
    this.showLoader = true;
    this.showError = false;
    let param = this.getRiskParamObj();
    this._webService.createOrUpdateRiskData(param).subscribe({
      next: (response: any) => {
        this.showSuccessPopupMsg("Subscription has been updated");
        this.dialogRef.close({ action: 'refresh_risk_data' });
        this.showLoader = false;
      },
      error: (errorObj) => {
        this.showLoader = false;
        this.showErrorWarnMessage(this.IConstant.errorMessageObj[errorObj?.error?.errorCode]);
        this.cdr.detectChanges();
      },
    })
  }

  getRiskParamObj() {
    let param: any = {
      rules: JSON.parse(JSON.stringify(this.riskData ? this.riskData : []))
    };
    let obj = {
      parameter: this.getControl['parameter'].value,
      threshold: this.getControl['threshold'].value,
      subscriptionAction: this.getControl['subscriptionAction'].value,
      tradingAction: this.getControl['tradingAction'].value,
    };
    if (!this.isUpdate) {
      param['rules'].push(obj);
    } else {
      let indx = this.riskData.findIndex((o: any) => o.parameter == this.tempRiskFormData.parameter);
      param['rules'].splice(indx, 1, obj);
    }
    param['subscriptionId'] = this.subscriptionData.id;
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


