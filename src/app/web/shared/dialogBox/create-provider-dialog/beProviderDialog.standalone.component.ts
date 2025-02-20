import { ChangeDetectionStrategy, Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
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
    selector: 'beProvider-dialog',
    templateUrl: './beProviderDialog.html',
    standalone: true,
    imports: [MatDialogModule, MatInputModule, MatSelectModule, CommonModule, ReactiveFormsModule, ShowErrorStandAloneComponent, TranslateModule, IcmLoadingOverlayDirective],
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./beProviderDialog.scss']
  })
  export class BeProviderDialogStandAloneComponent {
    createproviderForm: FormGroup;
    tradingIdArr?: any[];
    showError: boolean = false;
    showLoader: boolean = false;
  
    @ViewChild(ShowErrorStandAloneComponent) errorComponent?: ShowErrorStandAloneComponent;
    IConstant: any;
  
    constructor(public dialogRef: MatDialogRef<BeProviderDialogStandAloneComponent>, private fb: FormBuilder, private _webService: WebService, private cdr: ChangeDetectorRef) {
      //Setup ReactiveForm for Create Provider
      this.createproviderForm = this.fb.group({
        accountId: ['', [Validators.required]],
        nickname: ['', [Validators.required, Validators.minLength(6)]]
      });
      //End
      this.IConstant = new ConstantVariable();
      this.getTradingAccountsDetails();
    }
  
    get getControl() {
      return this.createproviderForm.controls;
    }
  
    getTradingAccountsDetails() {
      let param = {
        scope: 'Active'
      }
      this._webService.getTradingAccountData(param).subscribe({
        next: (response: any) => {
          this.tradingIdArr = response.items.map((o: any) => { return { tradingIdAndName: `${o.externalAccount} - ${o.externalName}`, accountId: o.id } });
        },
        error: (errorObj) => {
          this.showErrorWarnMessage(errorObj?.error?.errorMessage);
        }
      })
    }
  
    closeCreateProviderForm() {
      this.dialogRef.close();
    }
  
    showErrorWarnMessage(msg: any) {
      const errorConfigObj = this.errorComponent?.config;
      errorConfigObj.message = msg ? msg : errorConfigObj.message;
      this.errorComponent?.openErrorSnackbar();
    }
  
    createProviderUser() {
      if (this.createproviderForm.invalid) {
        this.showError = true;
        return;
      }
      this.showLoader = true;
      this.showError = false;
      let param = {
        accountId: this.getControl['accountId'].value,
        nickname: this.getControl['nickname'].value
      }
      this._webService.createProvider(param).subscribe({
        next: (response) => {
          this._webService.emitOnWebDataChange({ action: 'provider_created', data: response });
          this.showLoader = false;
        },
        error: (errorObj) => {
          this.showLoader = false;
          this.showErrorWarnMessage(this.IConstant.errorMessageObj[errorObj?.error?.errorCode]);
          this.cdr.detectChanges();
        },
      })
    }
  }
  