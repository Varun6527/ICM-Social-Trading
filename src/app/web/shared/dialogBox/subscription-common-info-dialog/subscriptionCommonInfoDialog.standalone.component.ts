import { ChangeDetectionStrategy, Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { WebService } from '../../../service/web.service';
import { ShowErrorStandAloneComponent } from '../../../../shared/component/showerror/show.error.standalone.component';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ConstantVariable } from '../../../../shared/model/constantVariable.model';
import { TranslateModule } from '@ngx-translate/core';
import { IcmLoadingOverlayDirective } from '../../../../shared/directive/icmloadingoverlay/icm.loading.overlay.directive';

@Component({
  selector: 'subscription-commongInfo-dialog',
  templateUrl: './subscriptionCommonInfoDialog.html',
  styleUrls: ['./subscriptionCommonInfoDialog.scss'],
  standalone: true,
  imports: [MatDialogModule, MatInputModule, MatExpansionModule, MatSelectModule, CommonModule, ReactiveFormsModule, ShowErrorStandAloneComponent, TranslateModule, IcmLoadingOverlayDirective],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubscriptionCommonInfoDialog {
  subscriptionCommonInfoForm: FormGroup;
  subscriptionData: any;
  modelType: string = "";
  showError: boolean = false;
  showLoader: boolean = false;

  @ViewChild(ShowErrorStandAloneComponent) errorComponent?: ShowErrorStandAloneComponent;
  IConstant: ConstantVariable = new ConstantVariable();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<SubscriptionCommonInfoDialog>, private fb: FormBuilder, private _webService: WebService) {
    this.subscriptionData = data.subscriptionData;
    this.modelType = data.modelType;
    this.subscriptionCommonInfoForm = this.fb.group({
      direction: [''],
      minimumLot: [''],
      maximumLot: [''],
      type: [''],
      riskRatio: [''],
      minVolumeHandling: [''],
      riskFactor: [''],
      action: ['']
    });
    this.setFollowerFormData();
  }
  
  get getControl() {
    return this.subscriptionCommonInfoForm.controls;
  }

  getFollowerParamObj() {
    let param: any = {};
    if(this.modelType == "filters") {
      param['filters'] = JSON.parse(JSON.stringify(this.subscriptionData.filters || {}));
      param['filters']['direction'] = this.getControl['direction'].value;
      param['filters']['minimumLot'] = this.getControl['minimumLot'].value || null;
      param['filters']['maximumLot'] = this.getControl['maximumLot'].value || null;
    } else if(this.modelType == "strategy") {
      param['strategy'] = JSON.parse(JSON.stringify(this.subscriptionData.strategy || {}));
      param['strategy']['type'] = this.getControl['type'].value;
      param['strategy']['riskRatio'] = this.getControl['riskRatio'].value;
      delete param['strategy']['minVolumeHandling'];
      if(param['strategy']['type'] == "Multiply") {
        param['strategy']['minVolumeHandling'] = this.getControl['minVolumeHandling'].value;
      }
    } else if(this.modelType == "correction") {
      param['correction'] = JSON.parse(JSON.stringify(this.subscriptionData.correction || {}));
      param['correction']['riskFactor'] = this.getControl['riskFactor'].value || null;
      delete param['correction']['action'];
      if(param['correction']['riskFactor']) {
        param['correction']['action'] = this.getControl['action'].value;
      }
    }
    param['subscriptionId'] = this.subscriptionData.id;
    return param;
  }

  updateFollowerDetails() {
    if (this.subscriptionCommonInfoForm.invalid) {
      this.showError = true;
      return;
    }
    this.showLoader = true;
    this.showError = false;
    let param = this.getFollowerParamObj();
    this._webService.updateFollowerDataById(param).subscribe({
      next: (response) => {
        this.showSuccessPopupMsg("Subscription has been updated");
        this.dialogRef.close({action: 'refresh_subscription_data'});
        this.showLoader = false;
      },
      error: (errorObj) => {
        this.showLoader = false;
        this.showErrorWarnMessage(this.IConstant.errorMessageObj[errorObj?.error?.errorCode]);
      },
    })
  }

  minAndMaxValidationForLot() {
    return (control: AbstractControl): ValidationErrors | null => {
      const form = control?.parent as FormGroup;
      if (!form) return null;
      let minValue = form.get('minimumLot')?.value || "";
      let maxValue = form.get('maximumLot')?.value || "";
      if((minValue && maxValue) && (minValue > maxValue || minValue == maxValue || maxValue < minValue)) {
        return { wrongValue: true };
      }
      return null;
    }
  }

  minVolumeHandlingValidator() {
    return (control: AbstractControl): ValidationErrors | null => {
      const form = control?.parent as FormGroup;
      if (!form) return null;
      let type = form.get('type')?.value || 0;
      let minVolumeHandling = form.get('minVolumeHandling')?.value || "";
      if(type == "Multiply" && !minVolumeHandling) {
        return { required: true };
      }
      return null;
    }
  }

  riskActionValidators() {
    return (control: AbstractControl): ValidationErrors | null => {
      const form = control?.parent as FormGroup;
      if (!form) return null;
      let riskFactor = form.get('riskFactor')?.value || "";
      if(riskFactor) {
        const actionControl = form.get('action');
        if (actionControl) {
          actionControl.setValidators([Validators.required]);
          actionControl.updateValueAndValidity();
        }
        return null;
      }
      return null;
    }
  }

  setFollowerFormData() {
    if(this.modelType == "filters") {
      this.subscriptionCommonInfoForm.patchValue({
        direction: this.subscriptionData.filters.direction,
        minimumLot: this.subscriptionData.filters.minimumLot,
        maximumLot:  this.subscriptionData.filters.maximumLot
      });
      this.getControl['direction'].setValidators([Validators.required]);
      this.getControl['minimumLot'].setValidators([Validators.min(1), this.minAndMaxValidationForLot()]);
      this.getControl['maximumLot'].setValidators([Validators.min(1), this.minAndMaxValidationForLot()]);

      this.getControl['direction'].updateValueAndValidity();
      this.getControl['minimumLot'].updateValueAndValidity();
      this.getControl['maximumLot'].updateValueAndValidity();

    } else if(this.modelType == "strategy") {
      this.subscriptionCommonInfoForm.patchValue({
        type: this.subscriptionData.strategy.type,
        riskRatio: this.subscriptionData.strategy.riskRatio,
        minVolumeHandling: this.subscriptionData.strategy.minVolumeHandling
      });

      this.getControl['type'].setValidators([Validators.required]);
      this.getControl['riskRatio'].setValidators([Validators.required, Validators.min(1)]);
      this.getControl['minVolumeHandling'].setValidators([this.minVolumeHandlingValidator()]);

      this.getControl['type'].updateValueAndValidity();
      this.getControl['riskRatio'].updateValueAndValidity();
      this.getControl['minVolumeHandling'].updateValueAndValidity();
      
    } else if(this.modelType == "correction") {
      this.subscriptionCommonInfoForm.patchValue({
        riskFactor: this.subscriptionData.correction.riskFactor,
        action: this.subscriptionData.correction.action
      });

      this.getControl['riskFactor'].setValidators([Validators.min(1), this.riskActionValidators()]);
      this.getControl['riskFactor'].updateValueAndValidity();

    }
    this.subscriptionCommonInfoForm.updateValueAndValidity();
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

  closeFollowerInfoForm() {
    this.dialogRef.close({});
  }

}


  