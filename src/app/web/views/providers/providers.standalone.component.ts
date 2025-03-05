import { ChangeDetectionStrategy, Component, inject, OnInit, ViewChild } from '@angular/core';
import { ActionButtonStanAloneComponent } from '../../shared/action-button/action-button.standalone.component';
import { CommonCellRendererStandAloneComponent } from '../../shared/cell-renderer/common-cell-renderer/common-cell-renderer.standalone.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { BeProviderDialogStandAloneComponent } from '../../shared/dialogBox/create-provider-dialog/beProviderDialog.standalone.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { AgGridConfig, CommonAgGridStandAloneComponent } from '../../shared/common-ag-grid/common.aggrid.standalone.component';
import { FormsModule } from '@angular/forms';
import { WebService } from '../../service/web.service';
import { ShowErrorStandAloneComponent } from '../../../shared/component/showerror/show.error.standalone.component';
import { ProviderDashboardUIModal, ProviderTableUIModal } from '../../shared/ui-model/web.ui.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.scss'],
  standalone: true,
  imports: [
    CommonModule, MatCardModule, MatSelectModule, MatInputModule, FormsModule, TranslateModule, CommonAgGridStandAloneComponent, ShowErrorStandAloneComponent
  ]
})
export class ProvidersStandAloneComponent {
  showPageLoader: boolean = false;
  showGridLoader: boolean = false;
  selectedFilters: any = { nickName: "", externalAccount: "", id: "", status: "Active" };
  filterEnabled: boolean = false;
  providersDashBoardData: any;
  providersTableData: any[] = [];
  gridConfig!: AgGridConfig;

  readonly beProviderDialog = inject(MatDialog);
  @ViewChild(ShowErrorStandAloneComponent) errorComponent?: ShowErrorStandAloneComponent;
  showFilters: boolean = false;

  constructor(private _webService: WebService, private _router: Router) {
    this._webService.subscribeOnWebDataChange('ProvidersStandAloneComponent', (event: any) => {
      this.recieveChildrenEmitter(event);
    });
    this.setupProviderTableConfig();
    this.getProviderDashboardData();
    this.getProvidersTableData();
  }

  setupProviderTableConfig() {
    let colDefs = [
      { field: "nickName", headerName: 'PROVIDERS.Nickname', resizable: false, suppressSizeToFit: true, cellRenderer: CommonCellRendererStandAloneComponent, colId: 'providerNameCell', width:250 },
      { field: "tradingAccount", sortable: false, headerName: 'PROVIDERS.Trading Account', resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: 'providerTradingAccountCell'  },
      { field: "strategyMode", headerName: 'PROVIDERS.Strategy Mode', resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: 'tagCell' },
      { field: "equity", headerName: 'PROVIDERS.Equity', resizable: false },
      { field: "registerTime", headerName: 'PROVIDERS.Registered', resizable: false, flex: 1 },
      { field: "actions", sortable: false, headerName: "", cellRenderer: ActionButtonStanAloneComponent, flex: 1, colId : 'providerProfileRedirection' }
    ];
    this.setupGridConfig(colDefs);
  }

  setupGridConfig(colDefs: any) {
    this.gridConfig = {
      maxHeight: '400px',
      noDataWarnMessage: 'There are no providers',
      gridOptions: {},
      agGridTheme: 'ag-theme-alpine',
      pageSizeDropdownArr: [25, 50, 100],
      initialSelectedPageSize: 25,
      columnDefination: colDefs,
      enablePagination: true,
      headerNameLangArr: colDefs.map((o: any) => o.headerName),
      rowModelType: 'clientSide',
      rowHeight: undefined
    }
  }

  getProviderDashboardData() {
    this.showPageLoader = true;
    this._webService.getProviderDashboardDetails().subscribe({
      next:(response) => {
        this.providersDashBoardData = {};
        this.providersDashBoardData = new ProviderDashboardUIModal(response);
        this.showPageLoader = false;
      },
      error: (errorObj) => {
        this.showErrorWarnMessage(errorObj?.error?.errorMessage);
        this.showPageLoader = false;
      },
      complete: () => {
        this.showPageLoader = false;
      }
    })
  }

  getProvidersTableData() {
    this.showGridLoader = true;
    let param = this.getProvdersParam();
    this._webService.getProviderData(param).subscribe({
      next: (response: any) => {
        this.providersTableData = [];
        response.items.forEach((obj: any) => this.providersTableData.push(new ProviderTableUIModal(obj)));
        this.showGridLoader = false;
      },
      error: (errorObj) => {
        this.showGridLoader = false;
        this.showErrorWarnMessage(errorObj?.error?.errorMessage);
      },
      complete: () => {
        this.showGridLoader = false;
      }
    })
  }

  getProvdersParam() {
    let param: any = {
      scope: this.selectedFilters.status,
      $count: true
    }
    this.getFilterQuery() ? param['$filter'] = this.getFilterQuery() : "";
    return param;
  }

  getFilterQuery() {
    let filterQuery = "";
    if(this.selectedFilters.externalAccount) {
      filterQuery += `externalAccount eq ${this.selectedFilters.externalAccount} and `;
    }
    if(this.selectedFilters.id) {
      filterQuery += `id eq ${this.selectedFilters.id} and `;
    }
    if(this.selectedFilters.nickName) {
      filterQuery += `contains(tolower(nickname), '${this.selectedFilters.nickName}') and `;
    }
    return filterQuery ? filterQuery.slice(0, -4) : "";
  }

  showErrorWarnMessage(msg: any) {
    const errorConfigObj = this.errorComponent?.config;
    errorConfigObj.message = msg ? msg : errorConfigObj.message;
    this.errorComponent?.openErrorSnackbar();
  }

  openNewProviderDialog() {
    this.beProviderDialog.open(BeProviderDialogStandAloneComponent, {
      panelClass: 'beProvider-dialog'
    });
    this.beProviderDialog.afterAllClosed.subscribe(() => { });
  }

  toggleFilter() {
    this.filterEnabled = !this.filterEnabled;
  }

  recieveChildrenEmitter(event: any) {
    if (event['action'] == 'provider_created') {
      this.getProvidersTableData();
      // let providerData = event.data;
      // this._router.navigate([`/portal/providers/${response.id}`]);
      this.beProviderDialog.closeAll();
    }
  }

  refreshProviderDataList() {
    this.getProvidersTableData();
  }

  applyProvidersFilter() {
    if(this.showFilters)  {   
      this.showFilters = false;
      this.clearFilters();
    } else {
      this.showFilters = true;
    }
  }

  clearFilters() {
    this.resetFilter();
    this.getProvidersTableData();
  }

  resetFilter() {
    this.selectedFilters = { nickName: "", externalAccount: "", id: "", status: "Active" };
  }

  ngOnDestroy() {
    this._webService.unSubscribeOnWebDataChange("ProvidersStandAloneComponent");
  }
}
