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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS, MAT_NATIVE_DATE_FORMATS, MatNativeDateModule, NativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'add-join-link-dialog',
  templateUrl: './addJoinLinkDialog.html',
  styleUrls: ['./addJoinLinkDialog.scss'],
  standalone: true,
  imports: [MatDialogModule, MatDatepickerModule, MatNativeDateModule,  MatInputModule, MatSelectModule, CommonModule, ReactiveFormsModule, ShowErrorStandAloneComponent, TranslateModule, IcmLoadingOverlayDirective],
  providers: [ 
    {provide: DateAdapter, useClass: NativeDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: MAT_NATIVE_DATE_FORMATS}
 ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddJoinLInkDialog {
  createJoinLinkForm: FormGroup;
  offerData: any = {};
  offerJoinLinkData: any = {};
  tempOfferJoinLinkData: any = {};
  isUpdate: boolean;
  showError: boolean = false;
  showLoader: boolean = false;
  minDate: any = new Date();

  @ViewChild(ShowErrorStandAloneComponent) errorComponent?: ShowErrorStandAloneComponent;
  IConstant: ConstantVariable = new ConstantVariable();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<AddJoinLInkDialog>, private fb: FormBuilder, private _webService: WebService, private cdr: ChangeDetectorRef) {
    this.offerData = data.offerData;
    this.isUpdate = data.isUpdate;
    this.createJoinLinkForm = this.fb.group({
      key: ['', [Validators.required, this.uniqueKeyValidator(this.offerData.registration.links, this.isUpdate, this.data?.offerJoinLinkData?.key)]],
      expiration: [''],
      agent: ['', [Validators.min(1), this.uniqueAgentValidator(this.offerData.registration.links, this.isUpdate, this.data?.offerJoinLinkData?.agent)]],
    });
    this.setJoinFormData();
  }

  setJoinFormData() {
    if (this.isUpdate) {
      this.offerJoinLinkData = JSON.parse(JSON.stringify(this.data.offerJoinLinkData));
      this.tempOfferJoinLinkData = JSON.parse(JSON.stringify(this.data.offerJoinLinkData));

      this.createJoinLinkForm.get('key')?.setValue(this.offerJoinLinkData.key);
      this.createJoinLinkForm.get('expiration')?.setValue(this.offerJoinLinkData.expiration);
      this.createJoinLinkForm.get('agent')?.setValue(this.offerJoinLinkData.agent);

      this.createJoinLinkForm.get('key')?.updateValueAndValidity();
      this.createJoinLinkForm.get('expiration')?.updateValueAndValidity();
      this.createJoinLinkForm.get('agent')?.updateValueAndValidity();
    }
  }

  uniqueKeyValidator(joinArr: any, isUpdate: boolean, tempKey: number) {
    return (control: AbstractControl): ValidationErrors | null => {
      const form = control?.parent as FormGroup;
      if (!form) return null;
      let joinLinkKey = form.get('key')?.value || 0;
      let isAnyKeyMatch = joinArr.some((o: any) => { 
        if(isUpdate && o.key == tempKey) {
          return false;
        } else {
          return o.key == joinLinkKey;
        }
      })
      if(isAnyKeyMatch) {
        return { duplicateKeyMatch: true };
      }
      return null;
    }
  }

  uniqueAgentValidator(joinArr: any, isUpdate: boolean, tempAgentAccountId: number) {
    return (control: AbstractControl): ValidationErrors | null => {
      const form = control?.parent as FormGroup;
      if (!form) return null;
      let agentAccountId = form.get('agent')?.value || 0;
      let isAnyAgentMatch = joinArr.some((o: any) => { 
        if(isUpdate && o.agent == tempAgentAccountId) {
          return false;
        } else {
          return o.agent == agentAccountId;
        }
      })
      if(isAnyAgentMatch) {
        return { agentAccountDuplicate: true };
      }
      return null;
    }
  }
  
  get getControl() {
    return this.createJoinLinkForm.controls;
  }

  createOrUpdateJoinLink() {
    if (this.createJoinLinkForm.invalid) {
      this.showError = true;
      return;
    }
    this.showLoader = true;
    this.showError = false;
    let param = this.getJoinLinkParamObj();
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

  getJoinLinkParamObj() {
    let param: any = {}; 
    let obj = {
      key: this.getControl['key'].value ? this.getControl['key'].value : null, 
      expiration: this.getExpirationDate(this.getControl['expiration'].value),
      agent: this.getControl['agent'].value ? this.getControl['agent'].value : null
    };
    param['registration'] = JSON.parse(JSON.stringify(this.offerData.registration));
    if(!this.isUpdate) {
      param['registration']['links'].push(obj);
    } else {
      let chainIndex = param['registration']['links'].findIndex((o: any) => o.key == this.tempOfferJoinLinkData.key);
      param['registration']['links'][chainIndex] = obj;
    }
    param['offerId'] = this.offerData.id;
    return param;
  }

  getExpirationDate(date: any) {
    if(date) {
      if(date instanceof Date) {
        let time = new Date().toISOString().split("T")[1];
        let dateFormat = this.getDateFormat(date);
        return `${dateFormat}T${time}`;
      } else {
        return date;
      }
    } else {
      return null;
    }
  }

  getDateFormat(data: any) {
    const dateObj = new Date(data); // Example future date
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  copyJoinLink() {
    if(this.getControl['key'].value) {
      this._webService.emitOnWebDataChange({action: 'copy_offer_join_link', data: { key : this.getControl['key'].value } });
    }
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


  