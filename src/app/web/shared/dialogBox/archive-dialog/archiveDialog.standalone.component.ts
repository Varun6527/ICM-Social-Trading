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
  selector: 'archive-dialog',
  templateUrl: './archiveDialog.html',
  styleUrls: ['./archiveDialog.scss'],
  standalone: true,
  imports: [MatDialogModule, MatCheckboxModule, FormsModule, CommonModule, ShowErrorStandAloneComponent, TranslateModule, IcmLoadingOverlayDirective],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArchiveDialog {
  showLoader: boolean = false;
  intervalArr: any[] = [];
  isProviderArchiveConfirm: boolean = false;
  subscriptionCount: any;
  providerData: any = {};
  offerData: any = {};
  subscriptionData: any = {};
  modelType: string = "";

  @ViewChild(ShowErrorStandAloneComponent) errorComponent?: ShowErrorStandAloneComponent;
  IConstant: ConstantVariable = new ConstantVariable();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<ArchiveDialog>, private fb: FormBuilder, private _webService: WebService, private cdr: ChangeDetectorRef) {
    this.modelType = this.data.modelType;
    if(this.modelType == "provider") {
      this.providerData = this.data.providerData;
      this.getAllSubscriptionData();
    } else if(this.modelType == "offer") {
      this.offerData = this.data.offerData;
    } else if(this.modelType == "subscription") {
      this.subscriptionData = this.data.subscriptionData;
    }
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

  archive() {
    this.showLoader = true;
    let param = this.getParamOfArchive();
    let apiObseverableUrl: any;
    if(this.modelType == "provider") {
      apiObseverableUrl = this._webService.deleteOrArchiveProvider(param);
    } else if(this.modelType == "offer") {
      apiObseverableUrl = this._webService.deleteorArchiveOfferData(param);
    } else if(this.modelType == "subscription") {
      apiObseverableUrl = this._webService.deleteOrArchiveFollower(param);
    }
    apiObseverableUrl.subscribe({
      next: (response: any) => {
        let msg = "";
        if(this.modelType == "provider") {
          msg = "Provider has been archived";
        } else if(this.modelType == "offer") {
          msg = "Offer has been archived";
        } else if(this.modelType == "subscription") {
          msg = "Subscription has been archived";
        }
        this.showSuccessPopupMsg(msg);
        if(this.modelType == "provider" || this.modelType == "offer") {
          this.dialogRef.close({action: "redirect_to_provider_page"});
        } else if(this.modelType == "subscription") {
          this.dialogRef.close({action: "redirect_to_subscription_page"});
        }
        this.showLoader = false;
      },
      error: (errorObj: any) => {
        this.showLoader = false;
        this.showErrorWarnMessage(this.IConstant.errorMessageObj[errorObj?.error?.errorCode]);
        this.cdr.detectChanges();
      }
    })
  }

  getParamOfArchive() {
    let param: any = {};
    if(this.modelType == "provider") {
      param['providerId'] = this.providerData.id
    } else if(this.modelType == "offer") {
      param['offerId'] = this.offerData.id
    } else if(this.modelType == "subscription") {
      param['subscriptionId'] = this.subscriptionData.id;
    }
    return param;
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


  