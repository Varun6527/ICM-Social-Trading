import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { WebService } from '../../../service/web.service';
import { ShowErrorStandAloneComponent } from '../../../../shared/component/showerror/show.error.standalone.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ConstantVariable } from '../../../../shared/model/constantVariable.model';
import { TranslateModule } from '@ngx-translate/core';
import { IcmLoadingOverlayDirective } from '../../../../shared/directive/icmloadingoverlay/icm.loading.overlay.directive';

@Component({
  selector: 'create-offer-dialog',
  templateUrl: './createOfferDialog.html',
  styleUrls: ['./createOfferDialog.scss'],
  standalone: true,
  imports: [MatDialogModule, MatInputModule, MatSelectModule, CommonModule, ReactiveFormsModule, ShowErrorStandAloneComponent, TranslateModule, IcmLoadingOverlayDirective],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateOfferDialog {
  createOfferForm: FormGroup;
  showError: boolean = false;
  showLoader: boolean = false;
  intervalArr: any[] = [];

  @ViewChild(ShowErrorStandAloneComponent) errorComponent?: ShowErrorStandAloneComponent;
  IConstant: ConstantVariable = new ConstantVariable();

  constructor(@Inject(MAT_DIALOG_DATA) public providerId: any, private dialogRef: MatDialogRef<CreateOfferDialog>, private fb: FormBuilder, private _webService: WebService, private cdr: ChangeDetectorRef) {
    this.createOfferForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      visibility: ['', Validators.required],
      fee: ['', Validators.required],
      interval: ['']
    });
    this.setInterValArr();
    this.setCustomValidationForInterval();
  }

  setCustomValidationForInterval() {
    this.createOfferForm.get('fee')?.valueChanges.subscribe(value => {
      console.log(value);
      if (value > 0) {
        this.createOfferForm.get('interval')?.setValidators([Validators.required]);
        this.createOfferForm.get('interval')?.updateValueAndValidity();
      } else {
        this.createOfferForm.get('interval')?.setValue("");
        this.createOfferForm.get('interval')?.clearValidators();
        this.createOfferForm.get('interval')?.updateValueAndValidity();
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
  
  get getControl() {
    return this.createOfferForm.controls;
  }

  getOfferParamObj() {
    let param: any = {};
    param['providerId'] = this.providerId;
    param['name'] = this.getControl['name'].value;
    param['visibility'] = this.getControl['visibility'].value;
    param['performance'] = {};
    if(this.getControl['fee'].value > 0) {
      param['performance']['interval'] = this.getControl['interval'].value;
      param['performance']['fee'] = this.getControl['fee'].value;
    } else {
      param['performance']['fee'] = this.getControl['fee'].value;
    }
    return param;
  }

  createOfferForProvider() {
    if (this.createOfferForm.invalid) {
      this.showError = true;
      return;
    }
    this.showLoader = true;
    this.showError = false;
    let param = this.getOfferParamObj();
    this._webService.createOffersDetails(param).subscribe({
      next: (response: any) => {
        this.showSuccessPopupMsg("Offer has been added");
        this.dialogRef.close({action:'redirect_to_offer_page', offerId: response.id});
        this.showLoader = false;
      },
      error: (errorObj) => {
        this.showLoader = false;
        this.showErrorWarnMessage(this.IConstant.errorMessageObj[errorObj?.error?.errorCode]);
        this.cdr.detectChanges();
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

  closeProviderInfoForm() {
    this.dialogRef.close({});
  }

}


  