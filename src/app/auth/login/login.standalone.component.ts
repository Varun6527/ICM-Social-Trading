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
import { ActivatedRoute, Router } from '@angular/router';
import { BaseLanguageTranslationComponent } from '../../shared/component/languagetranslation/base.language.translation.component';
import { IcmLoadingOverlayDirective } from '../../shared/directive/icmloadingoverlay/icm.loading.overlay.directive';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatMenuModule, TranslateModule, ReactiveFormsModule, ShowErrorStandAloneComponent, IcmLoadingOverlayDirective]
})
export class LoginStandAloneComponent extends BaseLanguageTranslationComponent {
  loginForm: FormGroup;
  showLoginFormError: boolean = false;
  
  @ViewChild(ShowErrorStandAloneComponent) errorComponent?: ShowErrorStandAloneComponent;
  redirectUrl: any;
  showLoader!: boolean;
  
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private translate: TranslateService, private fb: FormBuilder, private _authService: AuthService) {
    super(translate, _authService);
    //Setup ReactiveForm for Login
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
    //End
    this.activatedRoute.queryParams.subscribe(params => {
      this.redirectUrl = params['redirectUrl'];
    });
  }

  get getControl() {
    return this.loginForm.controls;
  }

  checkLength() {
    let userIdVal = this.getControl['username'].value;
    if (userIdVal?.toString().length > 16) {
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
    this._authService.loginUser(param).subscribe({
      next: (result)=> {
        this._authService.tokenObject = result;
        this.router.navigate([this.redirectUrl ? this.redirectUrl : './portal']);
      },
      error: (errorObj) => {
        console.error(errorObj?.error?.error_description);
        this.showErrorWarnMessage(errorObj?.error?.error_description);
        this.showLoader = false;
      }
    });
  }

  showErrorWarnMessage(msg: any) {
    const errorConfigObj = this.errorComponent?.config;
    errorConfigObj.message = "Wrong login or password. Use login and password from MetaTrader server";
    this.errorComponent?.openErrorSnackbar();
  }
}
