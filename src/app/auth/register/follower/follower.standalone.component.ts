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
import { Router } from '@angular/router';
import { BaseLanguageTranslationComponent } from '../../../shared/component/languagetranslation/base.language.translation.component';

@Component({
  selector: 'register-follower',
  templateUrl: './follower.component.html',
  styleUrl: './follower.component.scss',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatMenuModule, TranslateModule, ReactiveFormsModule, ShowErrorStandAloneComponent]
})
export class FollowerProviderStandAloneComponent extends BaseLanguageTranslationComponent {
  registerProviderForm?: FormGroup;
  showLoginFormError: boolean = false;
  errorMessageConfig?: ErrorSnackBarConfig;

  @ViewChild(ShowErrorStandAloneComponent) errorComponent?: ShowErrorStandAloneComponent;
  
  constructor(private router: Router, private translate: TranslateService, private fb: FormBuilder, private _authService: AuthService) {
    super(translate, _authService);
    //Setup ReactiveForm for Register a Follower
    
    //End
  }
}
