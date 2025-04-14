// Module Imports
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
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
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { map, Observable, startWith } from 'rxjs';
import { WebService } from '../../../web/service/web.service';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'register-follower',
  templateUrl: './follower.component.html',
  styleUrl: './follower.component.scss',
  standalone: true,
  imports: [CommonModule, RouterModule, MatSelectModule, MatAutocompleteModule, MatCardModule, MatButtonModule, MatMenuModule, TranslateModule, ReactiveFormsModule, ShowErrorStandAloneComponent, IcmLoadingOverlayDirective]
})
export class FollowerProviderStandAloneComponent extends BaseLanguageTranslationComponent {
  followerRegisterForm: FormGroup;
  showError: boolean = false;
  serverId: any;
  publicKey: string = "";
  joinLink: string = "";
  joinData: any;
  filteredOptions: Observable<any[]> | undefined;
  providersData: any = [];
  offersArr: any = [];

  @ViewChild(ShowErrorStandAloneComponent) errorComponent?: ShowErrorStandAloneComponent;
  showLoader!: boolean;
  IConstant: ConstantVariable = new ConstantVariable();

  constructor(private router: Router, private _webService: WebService, private route: ActivatedRoute, private translate: TranslateService, private fb: FormBuilder, private _authService: AuthService) {
    super(translate, _authService);
    this.serverId = this._authService.userConfig.serverId;
    //Setup ReactiveForm for register a follower
    this.followerRegisterForm = this.fb.group({
      externalLogin: ['', [Validators.required, Validators.min(1)]],
      externalPassword: ['', [Validators.required]],
      providerObj: ['', [Validators.required]],
      offerObj: ['', [Validators.required]]
    });
    //End
    this.route.paramMap.subscribe(params => {
      this.publicKey = params.get('publicKey')!;
      this.joinLink = params.get('joinLink')!;
      if(this.publicKey && this.joinLink) {
        this.getJoinLinkData();
      } else {
        this.getAllProvidersData();
      }
    });
  }
  
  ngOnInit() {
    this.setProvidersAutoComplete();
    this.onProviderObjEmpty();
  }
  
  getAllProvidersData() {
    this._webService.getAllProvidersData().subscribe({
      next: (response: any) => {
        this.providersData = response.items.filter((o: any) => o.hasPublicOffers).map((o: any) => { return o });
      },
      error: (errorObj) => {
        this.showErrorWarnMessage(errorObj?.error?.errorMessage);
      }
    })
  }

  onProviderObjEmpty() {
    this.getControl['providerObj'].valueChanges.subscribe((value) => {
      if (typeof value == 'string' && value?.trim() === '') {
        this.getControl['offerObj'].setValue("");
        this.getControl['offerObj'].updateValueAndValidity();
      }
    });
  }
  
  getOffersOfProvider() {
    let param = {
      id: this.getControl['providerObj'].value.id
    }
    this._webService.getOffersOfProvider(param).subscribe({
      next: (response: any) => {
        this.offersArr = response.items;
        this.getControl['offerObj'].setValue(this.offersArr[0]);
        this.getControl['offerObj'].updateValueAndValidity();
      },
      error: (errorObj) => {
        this.showErrorWarnMessage(errorObj?.error?.errorMessage);
      }
    })
  }

  displayFn(provider: any): string {
    return provider && provider.nickname ? provider.nickname : '';
  }

  setProvidersAutoComplete() {
    this.filteredOptions = this.getControl['providerObj'].valueChanges.pipe(
      startWith(''),
      map((value) => {
        const filterValue = typeof value === 'string' ? value.toLowerCase() : value?.nickname.toLowerCase();
        return this.providersData.filter((data: any) => data.nickname.toLowerCase().includes(filterValue))
      }),
    );
  }

  getJoinLinkData() {
    let param = {
      "publicKey": this.publicKey,
      "joinLink": this.joinLink
    };
    this._authService.getJoinLinkData(param).subscribe({
      next: (response: any) => {
        this.joinData = response;
        this.getControl['providerObj'].setValue(this.joinData.provider);
        this.getControl['providerObj'].updateValueAndValidity();

        this.getControl['offerObj'].setValue(this.joinData.offer);
        this.getControl['offerObj'].updateValueAndValidity();
      },
      error: (errorObj) => {
        console.error(errorObj?.error?.error_description);
        this.showErrorWarnMessage(this.IConstant.errorMessageObj[errorObj?.error?.errorCode]);
        this.router.navigate([`/portal/login`]);
      }
    });
  }

  get getControl() {
    return this.followerRegisterForm.controls;
  }

  checkLength() {
    let userIdVal = this.getControl['externalLogin'].value;
    if (userIdVal?.toString().length > 16) {
      userIdVal = userIdVal.toString().slice(0, 16);
      this.getControl['externalLogin'].setValue(parseInt(userIdVal));
      this.getControl['externalLogin'].updateValueAndValidity();
    }
  }

  getFollowerParam() {
    let param: any = {};
    param['serverId'] = this.serverId;
    param['externalLogin'] = this.getControl['externalLogin'].value;
    param['externalPassword'] = this.getControl['externalPassword'].value;
    param['providerId'] = this.getControl['providerObj'].value?.id;
    param['offerId'] = this.getControl['offerObj'].value?.id;
    if(this.joinData) {
      param['agent'] = { account: this.joinData.agent, source: "UrlIntegration", joinLink: this.joinLink }
    } else {
      param['agent'] = { source: "ManualInput" }
    }
    return param;
  }

  registerFollower() {
    if (this.followerRegisterForm.invalid) {
      this.showError = true;
      return;
    }
    let param = this.getFollowerParam();
    this.showLoader = true;
    this._authService.registerFollower(param).subscribe({
      next: (response: any) => {
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
      next: (result) => {
        this._authService.tokenObject = result;
        this.router.navigate([`./portal/subscriptions/${providerId}`]);
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
