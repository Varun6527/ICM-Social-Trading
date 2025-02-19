import { ChangeDetectionStrategy, Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { WebService } from '../../../service/web.service';
import { ShowErrorStandAloneComponent } from '../../../../shared/component/showerror/show.error.standalone.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { map, Observable, startWith } from 'rxjs';
import { ConstantVariable } from '../../../../shared/model/constantVariable.model'
import { TranslateModule } from '@ngx-translate/core';
import { IcmLoadingOverlayDirective } from '../../../../shared/directive/icmloadingoverlay/icm.loading.overlay.directive';

@Component({
    selector: 'beFollower-dialog',
    templateUrl: './beFollowerDialog.html',
    standalone: true,
    imports: [MatDialogModule, MatInputModule, MatSelectModule, CommonModule, ReactiveFormsModule, ShowErrorStandAloneComponent, AsyncPipe, MatAutocompleteModule, TranslateModule, IcmLoadingOverlayDirective],
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
      `
        ::ng-deep .beFollower-dialog {
            width: 850px !important;
            border-radius: 10px !important;
            max-width: 850px !important;

            .parent-div {
                width: 100%;

                .child-div-left {
                    width: 60%;
                    border-right: 1px solid #EAECF0;
                }

                .child-div-right {
                    width: 40%;
                    padding-left: 10px;
                }
            }

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

            .commonInfo-Scope {
                width: 100% !important;

                .mdc-text-field {
                    background-color: white;
                    border: 1px solid;
                    border-bottom: 0px;
                }
            }
        }
      `
    ]
  })
  export class BeFollowerDialogStandAloneComponent {
    createFollowerForm: FormGroup;
    tradingIdArr: any = [];
    offersArr: any = [];
    providersData: any = [];
    showError: boolean = false;
    filteredOptions: Observable<any[]> | undefined;
    IConstant: any;
    showLoader:boolean = false;
  
    @ViewChild(ShowErrorStandAloneComponent) errorComponent?: ShowErrorStandAloneComponent;
  
    constructor(private cdr: ChangeDetectorRef, private _webService: WebService, private fb: FormBuilder, public dialogRef: MatDialogRef<BeFollowerDialogStandAloneComponent>) {
      //Setup ReactiveForm for Create Provider
      this.createFollowerForm = this.fb.group({
        accountId: ['', [Validators.required]],
        providerObj: ['', [Validators.required]],
        offerObj: ['', [Validators.required]]
      });
      //End
      this.IConstant = new ConstantVariable();
      this.getTradingAccountDetais();
      this.getAllProvidersData();
    }
  
    ngOnInit() {
      this.setProvidersAutoComplete();
      this.onProviderObjEmpty();
    }

    onProviderObjEmpty() {
      this.getControl['providerObj'].valueChanges.subscribe((value) => {
        if (typeof value == 'string' && value?.trim() === '') {
          this.getControl['offerObj'].setValue("");
          this.getControl['offerObj'].updateValueAndValidity();
        }
      });
    }
  
    displayFn(provider: any): string {
      return provider && provider.nickName ? provider.nickName : '';
    }
  
    setProvidersAutoComplete() {
      this.filteredOptions = this.getControl['providerObj'].valueChanges.pipe(
        startWith(''),
        map((value) => {
          const filterValue = typeof value === 'string' ? value.toLowerCase() : value?.nickName.toLowerCase();
          return this.providersData.filter((data: any) => data.nickName.toLowerCase().includes(filterValue))
        }),
      );
    }
  
    getTradingAccountDetais() {
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
  
    getAllProvidersData() {
      this._webService.getAllProvidersData().subscribe({
        next: (response: any) => {
          this.providersData = response.items.filter((o: any) => o.hasPublicOffers).map((o: any) => { return { nickName: o.nickname, id: o.id, visibility: o.visibility } });
        },
        error: (errorObj) => {
          this.showErrorWarnMessage(errorObj?.error?.errorMessage);
        }
      })
    }
  
    getOffersOfProvider() {
      let param = {
        id: this.getControl['providerObj'].value.id
      }
      this._webService.getOffersOfProvider(param).subscribe({
        next: (response: any) => {
          this.offersArr = response.items;
          if(this.offersArr.length > 0)
          this.getControl['offerObj'].setValue(this.offersArr[0]);
          this.getControl['offerObj'].updateValueAndValidity();
        },
        error: (errorObj) => {
          this.showErrorWarnMessage(errorObj?.error?.errorMessage);
        }
      })
    }
  
    closeCreateFollowerForm() {
      this.dialogRef.close();
    }
  
    get getControl() {
      return this.createFollowerForm.controls;
    }
  
    createFollowerUser() {
      if (this.createFollowerForm.invalid) {
        this.showError = true;
        return;
      }
      this.showLoader = true;
      this.showError = false;
      let param = {
        accountId: this.getControl['accountId'].value,
        agent: {source: "ManualInput"},
        providerId: this.getControl['providerObj'].value.id,
        offerId: this.getControl['offerObj'].value.id
      }
  
      this._webService.createFollower(param).subscribe({
        next: (response) => {
          this.showLoader = false;
          this._webService.emitOnWebDataChange({ action: 'Follower_created', data: response });
        },
        error: (errorObj) => {
          this.showLoader = false;
          this.showErrorWarnMessage(this.IConstant.errorMessageObj[errorObj?.error?.errorCode]);
          this.cdr.detectChanges();
        },
      })
    }
  
    showErrorWarnMessage(msg: any) {
      const errorConfigObj = this.errorComponent?.config;
      errorConfigObj.message = msg ? msg : errorConfigObj.message;
      this.errorComponent?.openErrorSnackbar();
    }
  }