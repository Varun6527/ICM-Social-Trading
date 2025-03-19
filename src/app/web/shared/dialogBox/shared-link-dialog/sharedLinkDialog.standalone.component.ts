import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { WebService } from '../../../service/web.service';
import { ShowErrorStandAloneComponent } from '../../../../shared/component/showerror/show.error.standalone.component';
import { CommonModule } from '@angular/common';
import { ConstantVariable } from '../../../../shared/model/constantVariable.model';
import { TranslateModule } from '@ngx-translate/core';
import { IcmLoadingOverlayDirective } from '../../../../shared/directive/icmloadingoverlay/icm.loading.overlay.directive';

@Component({
  selector: 'shared-link-dialog',
  templateUrl: './sharedLinkDialog.html',
  styleUrls: ['./sharedLinkDialog.scss'],
  standalone: true,
  imports: [MatDialogModule, CommonModule, ShowErrorStandAloneComponent, TranslateModule, IcmLoadingOverlayDirective],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SharedLinkDialog {
  showLoader: boolean = false;

  @ViewChild(ShowErrorStandAloneComponent) errorComponent?: ShowErrorStandAloneComponent;
  IConstant: ConstantVariable = new ConstantVariable();
  isCreateSharedLink: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) public providerData: any, private dialogRef: MatDialogRef<SharedLinkDialog>, private _webService: WebService, private cdr: ChangeDetectorRef) {
    this.isCreateSharedLink = this.providerData.sharedProfile.sharedKey ? false : true;
  }

  createOrDeleteSharedLink() {
    this.showLoader = true;
    let param = {
      providerId: this.providerData.id
    };
    let apiObseverable: any = "";
    if(this.isCreateSharedLink) {
      apiObseverable = this._webService.createSharedLink(param);
    } else {
      apiObseverable = this._webService.deleteSharedLink(param);
    }
    apiObseverable.subscribe({
      next: (response: any) => {
        this.showSuccessPopupMsg("Provider has been updated");
        this.dialogRef.close({action: "refresh_provider_data"});
        this.showLoader = false;
      },
      error: (errorObj: any) => {
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


  