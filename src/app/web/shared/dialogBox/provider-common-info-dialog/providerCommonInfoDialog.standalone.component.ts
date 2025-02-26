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

@Component({
  selector: 'provider-commongInfo-dialog',
  templateUrl: './providerCommonInfoDialog.html',
  styleUrls: ['./providerCommonInfoDialog.scss'],
  standalone: true,
  imports: [MatDialogModule, MatInputModule, MatSelectModule, CommonModule, ReactiveFormsModule, ShowErrorStandAloneComponent, TranslateModule, IcmLoadingOverlayDirective],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProviderCommonInfoDialog {

  @ViewChild(ShowErrorStandAloneComponent) errorComponent?: ShowErrorStandAloneComponent;
  IConstant: ConstantVariable = new ConstantVariable();

}


  