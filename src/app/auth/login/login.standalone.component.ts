// Module Imports
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowErrorStandAloneComponent } from '../../shared/component/showerror/show.error.standalone.component';
//End

import { Component, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BaseLanguageTranslationComponent } from '../../shared/component/languagetranslation/base.language.translation.component';
import { IcmLoadingOverlayDirective } from '../../shared/directive/icmloadingoverlay/icm.loading.overlay.directive';
import { WebService } from '../../web/service/web.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule, MatMenuModule, TranslateModule, ReactiveFormsModule, ShowErrorStandAloneComponent, IcmLoadingOverlayDirective]
})
export class LoginStandAloneComponent extends BaseLanguageTranslationComponent {
  loginForm: FormGroup;
  showLoginFormError: boolean = false;
  
  @ViewChild(ShowErrorStandAloneComponent) errorComponent?: ShowErrorStandAloneComponent;
  redirectUrl: any;
  showLoader!: boolean;
  loginFormType: string = "";
  
  constructor(private activatedRoute: ActivatedRoute, private _webService: WebService, private router: Router, private translate: TranslateService, private fb: FormBuilder, private _authService: AuthService) {
    super(translate, _authService);
    //Setup ReactiveForm for Login
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.min(1),]],
      password: ['', [Validators.required]]
    });
    //End
    this.activatedRoute.queryParams.subscribe(params => {
      this.redirectUrl = params['redirectUrl'];
    });
    this.activatedRoute.data.subscribe((data: any) => {
      this.loginFormType =  data.loginFormType;
    });
  }

  get getControl() {
    return this.loginForm.controls;
  }

  checkLength() {
    let userIdVal = this.getControl['username'].value;
    if (userIdVal?.toString().length > 16 && this.loginFormType == 'Client') {
      userIdVal = userIdVal.toString().slice(0, 16);
      this.getControl['username'].setValue(parseInt(userIdVal));
      this.getControl['username'].updateValueAndValidity();
    }
  }

  loginUser() {
    if(this.loginForm.invalid) {
      this.showLoginFormError = true;
      return;
    }
    this.showLoader = true;
    let param = {
      username: this.getControl['username'].value,
      password: this.getControl['password'].value,
      grant_type: "password"
    };
    let apiObserverable;
    if(this.loginFormType == 'RatingAdmin') {
      apiObserverable = this._authService.loginRatingAdminUser(param);
    } else {
      apiObserverable = this._authService.loginUser(param);
    }
    apiObserverable.subscribe({
      next: (result)=> {
        this._authService.setAccessToken(true, result);
        this.getRoleOfUser();
      },
      error: (errorObj) => {
        console.error(errorObj?.error?.error_description);
        if(this.loginFormType == 'Client') {
          this.showErrorWarnMessage("Wrong login or password. Use login and password from MetaTrader server");
        } else {
          this.showErrorWarnMessage("Not Authorized");
        }
        this.showLoader = false;
      }
    });
  }

  getRoleOfUser() {
    this._webService.setOrRefreshUserProfileDataAsObserver(this.loginFormType).subscribe({
      next: ()=>  {
        this.redirectUserToHomePageByRole();
      },
      error: (errorObj) => {
        console.error(errorObj?.error?.error_description);
        this.showErrorWarnMessage(errorObj?.error?.error_description);
        this.showLoader = false;
      }
    })
  }

  redirectUserToHomePageByRole() {
    let role = this._webService.userPermissionConfig.role;
    if(this.loginFormType == 'Client') {
      if(role == 'Client') {
        this.router.navigate([this.redirectUrl ? this.redirectUrl : './portal']);
      } else {
        this.showErrorWarnMessage("Not Authorized");
        this._authService.clearUserDataAndToken();
        this._webService.clearUserProfileData();
      }
    } else if(this.loginFormType == 'Admin') {
      if(role == 'Admin') {
        let url = `${this._authService.REST_API_SERVER}/admin/login?token=${this._authService.getAccessToken()}`;
        this._authService.clearUserDataAndToken();
        this._webService.clearUserProfileData();
        window.location.href = url;
      } else {
        this.showErrorWarnMessage("Not Authorized");
        this._authService.clearUserDataAndToken();
        this._webService.clearUserProfileData();
      }
    } else if(this.loginFormType == 'RatingAdmin') {
        let url = `${this._authService.RATING_SERVER}/admin/login?token=${this._authService.getAccessToken()}`;
        this._authService.clearUserDataAndToken();
        this._webService.clearUserProfileData();
        window.location.href = url;
    }
    this.showLoader = false;
  }

  showErrorWarnMessage(msg: any) {
    const errorConfigObj = this.errorComponent?.config;
    errorConfigObj.message = msg;
    this.errorComponent?.openErrorSnackbar();
  }
}
