import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebRoutingModule } from './web-routing.module';
import { SidenavStanaloneComponent } from './shared/sidenav/sidenav.standalone.component';
import { WebLayoutComponent } from './layout/web-layout/web-layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AgGridModule } from 'ag-grid-angular';
import { StatusBtnRendererComponent } from './shared/status-btn-renderer/status-btn-renderer.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { NgApexchartsModule } from 'ng-apexcharts';
import {MatDatepickerModule} from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core'; 
import { MatIconModule } from '@angular/material/icon';
import { TypeIconComponent } from './views/providers-list/cellRenderers/type-icon/type-icon.component';
import { StrategyCellRendererComponent } from './views/providers-list/cellRenderers/strategy-cell-renderer/strategy-cell-renderer.component';
import { RiskCellRendererComponent } from './views/providers-list/cellRenderers/risk-cell-renderer/risk-cell-renderer.component';
import { ChartCellRendererComponent } from './views/providers-list/cellRenderers/chart-cell-renderer/chart-cell-renderer.component';
import { ButtonCellRendererComponent } from './views/providers-list/cellRenderers/button-cell-renderer/button-cell-renderer.component';
import { ProviderListProfileComponent } from './views/providers-list/provider-list-profile/provider-list-profile.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDividerModule} from '@angular/material/divider';
import { SymbolCellRendererComponent } from './views/providers-list/cellRenderers/symbol-cell-renderer/symbol-cell-renderer.component';
import { ProviderListProfileTypeCellRendererComponent } from './views/providers-list/cellRenderers/provider-list-profile-type-cell-renderer/provider-list-profile-type-cell-renderer.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    WebLayoutComponent,
    StatusBtnRendererComponent,
    TypeIconComponent,
    StrategyCellRendererComponent,
    RiskCellRendererComponent,
    ChartCellRendererComponent,
    ButtonCellRendererComponent,
    ProviderListProfileComponent,
    SymbolCellRendererComponent,
    ProviderListProfileTypeCellRendererComponent,
  ],
  imports: [
    CommonModule,
    SidenavStanaloneComponent,
    MatTabsModule,
    MatSidenavModule,
    WebRoutingModule,
    AgGridModule,MatInputModule,MatSelectModule,MatFormFieldModule,MatMenuModule,
    MatAutocompleteModule,MatCardModule,NgApexchartsModule,MatNativeDateModule,MatDatepickerModule,
    MatIconModule,MatButtonToggleModule,MatDividerModule,TranslateModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class WebModule { }
