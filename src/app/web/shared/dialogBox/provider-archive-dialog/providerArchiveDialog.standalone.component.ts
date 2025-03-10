import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { WebService } from '../../../service/web.service';
import { ShowErrorStandAloneComponent } from '../../../../shared/component/showerror/show.error.standalone.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ConstantVariable } from '../../../../shared/model/constantVariable.model';
import { TranslateModule } from '@ngx-translate/core';
import { IcmLoadingOverlayDirective } from '../../../../shared/directive/icmloadingoverlay/icm.loading.overlay.directive';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'provider-archive-dialog',
  templateUrl: './providerArchiveDialog.html',
  styleUrls: ['./providerArchiveDialog.scss'],
  standalone: true,
  imports: [MatDialogModule, MatCheckboxModule, FormsModule, CommonModule, ShowErrorStandAloneComponent, TranslateModule, IcmLoadingOverlayDirective],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProviderArchiveDialog {
  showLoader: boolean = false;
  intervalArr: any[] = [];
  isProviderArchiveConfirm: boolean = false;
  subscriptionCount: any;

  @ViewChild(ShowErrorStandAloneComponent) errorComponent?: ShowErrorStandAloneComponent;
  IConstant: ConstantVariable = new ConstantVariable();

  constructor(@Inject(MAT_DIALOG_DATA) public providerData: any, private dialogRef: MatDialogRef<ProviderArchiveDialog>, private fb: FormBuilder, private _webService: WebService, private cdr: ChangeDetectorRef) {
    this.getAllSubscriptionData();
  }

  getAllSubscriptionData() {
    let param = {
      scope: 'Active',
      providerId: this.providerData.id
    }
    this._webService.getAllSubscriptionData(param).subscribe({
      next: (response: any)=>{
        this.subscriptionCount = response.items.length;
      }
    })
  }

  archiveProvider() {
    if(!this.isProviderArchiveConfirm) return;
    this.showLoader = true;
    let param = {
      providerId: this.providerData.id
    };
    this._webService.deleteOrArchiveProvider(param).subscribe({
      next: (response: any) => {
        this.showSuccessPopupMsg("Provider has been archived");
        this.dialogRef.close({action: "redirect_to_provider_page"});
        this.showLoader = false;
      },
      error: (errorObj) => {
        this.showLoader = false;
        this.showErrorWarnMessage(this.IConstant.errorMessageObj[errorObj?.error?.errorCode]);
        this.cdr.detectChanges();
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


  