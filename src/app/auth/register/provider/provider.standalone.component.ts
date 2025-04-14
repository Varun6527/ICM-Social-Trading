// Module Imports
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowErrorStandAloneComponent, ErrorSnackBarConfig } from '../../../shared/component/showerror/show.error.standalone.component';
//End

import { Component, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BaseLanguageTranslationComponent } from '../../../shared/component/languagetranslation/base.language.translation.component';
import { IcmLoadingOverlayDirective } from '../../../shared/directive/icmloadingoverlay/icm.loading.overlay.directive';
import { ConstantVariable } from '../../../shared/model/constantVariable.model';

@Component({
  selector: 'register-provider',
  templateUrl: './provider.component.html',
  styleUrl: './provider.component.scss',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule, MatMenuModule, TranslateModule, ReactiveFormsModule, ShowErrorStandAloneComponent, IcmLoadingOverlayDirective]
})
export class RegisterProviderStandAloneComponent extends BaseLanguageTranslationComponent {
  providerRegisterForm: FormGroup;
  showError: boolean = false;
  serverId: any;
  
  @ViewChild(ShowErrorStandAloneComponent) errorComponent?: ShowErrorStandAloneComponent;
  showLoader!: boolean;
  IConstant: ConstantVariable = new ConstantVariable();
  
  constructor(private router: Router, private translate: TranslateService, private fb: FormBuilder, private _authService: AuthService) {
    super(translate, _authService);
    this.serverId = this._authService.userConfig.serverId;
    //Setup ReactiveForm for register a provider
    this.providerRegisterForm = this.fb.group({
      externalLogin: ['', [Validators.required, Validators.min(1)]],
      externalPassword: ['', [Validators.required]],
      nickname: ['', [Validators.required, Validators.minLength(6)]]
    });
    //End
  }

  get getControl() {
    return this.providerRegisterForm.controls;
  }

  checkLength() {
    let userIdVal = this.getControl['externalLogin'].value;
    if (userIdVal?.toString().length > 16) {
      userIdVal = userIdVal.toString().slice(0, 16);
      this.getControl['externalLogin'].setValue(parseInt(userIdVal));
      this.getControl['externalLogin'].updateValueAndValidity();
    }
  }

  registerProvider() {
    if(this.providerRegisterForm.invalid) {
      this.showError = true;
      return;
    }
    let param = {
      "serverId": this.serverId,
      "externalLogin": this.getControl['externalLogin'].value,
      "externalPassword": this.getControl['externalPassword'].value,
      "nickname": this.getControl['nickname'].value
    };
    this.showLoader = true;
    this._authService.registerProvider(param).subscribe({
      next: (response: any)=> {
        this.loginUser(response.id);
      },
      error: (errorObj) => {
        console.error(errorObj?.error?.error_description);
        this.showErrorWarnMessage(this.IConstant.errorMessageObj[errorObj?.error?.errorCode]);
        this.showLoader = false;
      }
    });
  }

  loginUser(providerId: any) {
    let param = {
      username: this.getControl['externalLogin'].value,
      password: this.getControl['externalPassword'].value,
      grant_type: "password"
    };
    this._authService.loginUser(param).subscribe({
      next: (result)=> {
        this._authService.tokenObject = result;
        this.router.navigate([`./portal/providers/${providerId}`]);
        this.showLoader = false;
      },
      error: (errorObj) => {
        console.error(errorObj?.error?.error_description);
        this.showErrorWarnMessage(this.IConstant.errorMessageObj[errorObj?.error?.errorCode]);
        this.showLoader = false;
      }
    });
  }

  showErrorWarnMessage(msg: any) {
    const errorConfigObj = this.errorComponent?.config;
    errorConfigObj.message = msg ? msg : errorConfigObj.message;
    this.errorComponent?.openErrorSnackbar();
  }
}
