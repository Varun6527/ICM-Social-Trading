import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
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
import { AuthService } from '../../../../auth/service/auth.service';

@Component({
    selector: 'client-settings-dialog',
    templateUrl: './clientSettingsDialog.html',
    standalone: true,
    imports: [MatDialogModule, MatInputModule, MatSelectModule, CommonModule, ReactiveFormsModule, ShowErrorStandAloneComponent, TranslateModule, IcmLoadingOverlayDirective],
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
      `
      ::ng-deep .client-setting-Dialog {
          width: 600px !important;
          border-radius: 10px !important;

          .mat-mdc-dialog-title {
              margin: unset !important;
              padding-bottom: 10px !important;
          }

          .mat-mdc-dialog-surface {
              border-radius: 10px !important;
              background: white !important;
              padding: 20px !important;
          }

          .commonInfo-Email {
              width: 100% !important;

              .mdc-text-field {
                  background-color: white;
                  border: 1px solid;
                  border-bottom: 0px;
              }
          }

          .commonInfo-select {
              width: 100% !important;

              .mdc-text-field {
                  background-color: white;
                  border: 1px solid;
                  border-bottom: 0px;
              }
          }
      }

      ::ng-deep .mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked {
        background: var(--secondaryBlue) !important;
      }
      `
    ]
  })
  export class clientSettingsDialogStandAloneComponent {
    clientSettingsForm: FormGroup;
    notificationLangArr?: any[] = [];
    notificationLabelArr?: any[] = [];
    showError: boolean = false;
    showLoader: boolean = false;
    clientData: any;
  
    @ViewChild(ShowErrorStandAloneComponent) errorComponent?: ShowErrorStandAloneComponent;
    IConstant: any;
    isProvider: boolean;
    isFollower: boolean;
  
    constructor(private _authService: AuthService,public dialogRef: MatDialogRef<clientSettingsDialogStandAloneComponent>, private fb: FormBuilder, private _webService: WebService) {
      //Setup ReactiveForm for Create Provider
      this.clientSettingsForm = this.fb.group({
        prefLang: ['', [Validators.required]],
        email: [''],
        notificationLabels: [[]]
      });
      //End
      this.IConstant = new ConstantVariable();
      this.isProvider = this._webService.isProviderAccount;
      this.isFollower = this._webService.isSubscriptionAccount;
      this.setNotificationLangArr();
      this.setNotificationLabelArr();
      this.getClientDetails();
    }
  
    get getControl() {
      return this.clientSettingsForm.controls;
    }

    setNotificationLabelArr() {
      if(this.isProvider) {
        this.notificationLabelArr?.push(...this.IConstant.providerLabelArr);
      }
      if(this.isFollower) {
        this.notificationLabelArr?.push(...this.IConstant.followerLabelArr)
      }
    }

    setNotificationLangArr() {
      let notifLanArr = this._authService.userConfig.notificationLangs;
      notifLanArr = notifLanArr.map((val: any) => val.toLowerCase());
      this.notificationLangArr = this.IConstant.languageArr.filter((obj: any) => notifLanArr.includes(obj.code));
    }

    setClientData() {
      this.clientSettingsForm.get('prefLang')?.setValue(this.formatAccToNotificationLang(this.clientData.settings.preferredLanguage));
      this.clientSettingsForm.get('prefLang')?.updateValueAndValidity();

      this.clientSettingsForm.get('email')?.setValue(this.clientData.settings.email);
      this.clientSettingsForm.get('email')?.updateValueAndValidity();

      let selectedNotifLabels = [];
      if(this.isProvider) {
        selectedNotifLabels = this.clientData.notifications?.providerNotifications;
      }
      if(this.isFollower) {
        selectedNotifLabels = this.clientData.notifications?.followerNotifications;
      }
      this.clientSettingsForm.get('notificationLabels')?.setValue(selectedNotifLabels);
      this.clientSettingsForm.get('notificationLabels')?.updateValueAndValidity();
    }

    formatAccToNotificationLang(formattedCode: any) {
      if (/^[a-z]+(-[a-z]+)?$/.test(formattedCode)) {
        return formattedCode;
      }
      return formattedCode.replace(/([A-Z])/g, (match: any, p1: any, offset: any) =>
        (offset === 0 ? p1.toLowerCase() : `-${p1.toLowerCase()}`)
      );
    }
  
    getClientDetails() {
      this._webService.getClientDetails().subscribe({
        next: (response: any) => {
          this.clientData = response;
          this.setClientData();
        },
        error: (errorObj) => {
          this.showErrorWarnMessage(errorObj?.error?.errorMessage);
        }
      })
    }

    getClientSettingsParam() {
      let param: any = {};
      param['settings'] = {
        preferredLanguage: this.formatLanguageCode(this.getControl['prefLang'].value),
        email: this.getControl['email'].value
      };
      if(this.isProvider || this.isFollower) {
        param['notifications'] = {
          providerNotifications: this.isProvider ? this.getControl['notificationLabels'].value : [],
          followerNotifications: this.isFollower ? this.getControl['notificationLabels'].value : []
        };
      }
      return param;
    }
  
    closeClientSettingsForm() {
      this.dialogRef.close();
    }
  
    showErrorWarnMessage(msg: any) {
      const errorConfigObj = this.errorComponent?.config;
      errorConfigObj.message = msg ? msg : errorConfigObj.message;
      this.errorComponent?.openErrorSnackbar();
    }
  
    saveClientSettings() {
      if (this.clientSettingsForm.invalid) {
        return;
      }
      this.showLoader = true;
      let param = this.getClientSettingsParam();
      this._webService.saveClientDetails(param).subscribe({
        next: (response) => {
          this.showLoader = false;
          //Send the data in parent component
          this._webService.emitOnWebDataChange({action:'update_user_email', email: param.settings.email })
          this.closeClientSettingsForm();
        },
        error: (errorObj) => {
          this.showErrorWarnMessage(errorObj?.error?.errorMessage);
          this.showLoader = false;
        }
      })
    }

    formatLanguageCode(code: any) {
      return code
        .split('-') // Split by hyphen
        .map((part: any, index: any) =>
          index === 0 ? part.charAt(0).toUpperCase() + part.slice(1) : part.charAt(0).toUpperCase() + part.slice(1)
        )
        .join('');
    }
  }
  