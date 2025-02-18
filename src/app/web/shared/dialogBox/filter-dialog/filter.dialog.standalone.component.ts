import { ChangeDetectionStrategy, Component, ViewChild, ChangeDetectorRef, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { WebService } from '../../../service/web.service';
import { ShowErrorStandAloneComponent } from '../../../../shared/component/showerror/show.error.standalone.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ConstantVariable } from '../../../../shared/model/constantVariable.model';
import { TranslateModule } from '@ngx-translate/core';
import { MatRadioModule } from '@angular/material/radio';

@Component({
    selector: 'filter-dialog',
    templateUrl: './filter.dialog.html',
    styleUrls: ['./filter.dialog.scss'],
    standalone: true,
    imports: [MatDialogModule, MatInputModule, MatSelectModule, CommonModule, ReactiveFormsModule, ShowErrorStandAloneComponent, TranslateModule, MatRadioModule],
    changeDetection: ChangeDetectionStrategy.OnPush
  })
  export class FilterDialogStandAloneComponent {
    filterForm: FormGroup;
    showError: boolean = false;
    providerArr: any = [];
  
    @ViewChild(ShowErrorStandAloneComponent) errorComponent?: ShowErrorStandAloneComponent;
    @ViewChild('selectElement') selectElement!: MatSelect;
    IConstant: any;
  
    constructor(public dialogRef: MatDialogRef<FilterDialogStandAloneComponent>, private fb: FormBuilder, private _webService: WebService, @Inject(MAT_DIALOG_DATA) public reportObj: any) {
      //Setup ReactiveForm for Create Provider
      this.filterForm = this.fb.group({
        filterType: ['All', [Validators.required]],
        providerId: ['']
      });
      this.setCustomProviderValidator();
      //End
      this.IConstant = new ConstantVariable();
      this.getProviderDetails();
    }

    ngOnInit() {
      this.setFilterData();
    }

    setFilterData() {
      this.filterForm.get('filterType')?.setValue(this.reportObj.grid.filterData.filterType);
      this.filterForm.get('providerId')?.setValue(this.reportObj.grid.filterData.filterValue);
      this.filterForm.get('providerId')?.updateValueAndValidity();
    }

    setCustomProviderValidator() {
      this.filterForm.get('filterType')?.valueChanges.subscribe(value => {
        if(value == "Provider") {
          this.filterForm.get('providerId')?.setValidators([Validators.required]);
          this.filterForm.get('providerId')?.updateValueAndValidity();
        } else {
          this.filterForm.get('providerId')?.setValue("");
          this.filterForm.get('providerId')?.clearValidators();
          this.filterForm.get('providerId')?.updateValueAndValidity();
        }
      });
    }
  
    get getControl() {
      return this.filterForm.controls;
    }
  
    getProviderDetails() {
      let param = {
        scope: 'Active'
      }
      this._webService.getProviderData(param).subscribe({
        next: (response: any) => {
          this.providerArr = [];
          response.items.forEach((obj: any) => this.providerArr.push({id: obj.id, nickName: obj.nickname }) );
          setTimeout(()=>{
            this.selectElement?.focus();
          }, 100)
        },
        error: (errorObj: any) => {
          this.showErrorWarnMessage(errorObj?.error?.errorMessage);
        }
      })
    }
  
    closeProviderFilterForm() {
      this.dialogRef.close();
    }
  
    showErrorWarnMessage(msg: any) {
      const errorConfigObj = this.errorComponent?.config;
      errorConfigObj.message = msg ? msg : errorConfigObj.message;
      this.errorComponent?.openErrorSnackbar();
    }
  
    applyFilters() {
      if (this.filterForm.invalid) {
        this.showError = true;
        return;
      }
      this.showError = false;
      
      this.reportObj.grid.filterData['filterType'] = this.getControl['filterType'].value;
      this.reportObj.grid.filterData['filterValue'] = this.getControl['providerId'].value;
      this._webService.emitOnWebDataChange({ action: 'set_filters', reportObj: this.reportObj });
      this.dialogRef.close();
    }
  }
  