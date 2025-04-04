import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { WebService } from '../../../service/web.service';
import { ShowErrorStandAloneComponent } from '../../../../shared/component/showerror/show.error.standalone.component';
import { CommonModule } from '@angular/common';
import { ConstantVariable } from '../../../../shared/model/constantVariable.model';
import { TranslateModule } from '@ngx-translate/core';
import { IcmLoadingOverlayDirective } from '../../../../shared/directive/icmloadingoverlay/icm.loading.overlay.directive';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'upload-avatar-dialog',
  templateUrl: './uploadAvatarDialog.html',
  styleUrls: ['./uploadAvatarDialog.scss'],
  standalone: true,
  imports: [MatDialogModule, CommonModule, MatInputModule, ShowErrorStandAloneComponent, TranslateModule, IcmLoadingOverlayDirective],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UploadAvatarDialog {
  showLoader: boolean = false;
  providerData: any = {};
  fileObject: any;
  avatarPath: string = "";
  tempPathUrl: any;

  @ViewChild(ShowErrorStandAloneComponent) errorComponent?: ShowErrorStandAloneComponent;
  IConstant: ConstantVariable = new ConstantVariable();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<UploadAvatarDialog>, private _webService: WebService, private cdr: ChangeDetectorRef) {
    this.providerData = this.data.providerData;
    this.setAvatarData();
  }

  setAvatarData() {
    if(this.providerData.public.avatarPath) {
      let path: string = `${this._webService.getFileServerUrl()}${this.IConstant.providerAvatarPath}${this.providerData.public.avatarPath}`;
      this.avatarPath = path;
    } else {
      this.avatarPath = "";
    }
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.avatarPath = "";
      this.tempPathUrl = URL.createObjectURL(file);
      this.fileObject = file;
    }
  }

  deleteAvatar() {
    this.showLoader = true;
    let param = {
      providerId: this.providerData.id,
      public: {}
    };
    this._webService.updateProviderData(param).subscribe({
      next: (response: any) => {
        this.showSuccessPopupMsg("Provider has been updated");
        this._webService.emitOnWebDataChange({action: "refresh_provider_Sidebar"});
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

  uploadAvatar() {
    this.showLoader = true;
    let param = {
      providerId: this.providerData.id,
      file: this.fileObject
    };
    this._webService.uploadAvatar(param).subscribe({
      next: (response: any) => {
        this.showSuccessPopupMsg("Provider has been updated");
        this._webService.emitOnWebDataChange({action: "refresh_provider_Sidebar"});
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

  closeUploadAvatarForm() {
    this.dialogRef.close({});
  }

}


  