import { Component, inject, ViewChild } from '@angular/core';
import { ActionButtonStanAloneComponent } from '../../shared/cell-renderer/action-button-cell-renderer/action-button-cell-renderer.standalone.component';
import { CommonCellRendererStandAloneComponent } from '../../shared/cell-renderer/common-cell-renderer/common-cell-renderer.standalone.component';
import { MatDialog } from '@angular/material/dialog';
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
import { Router } from '@angular/router';
import { BeFollowerDialogStandAloneComponent } from '../../shared/dialogBox/create-follower-dialog/beFollowerDialog.standalone.component';
import { StatusBtnRendererStandAloneComponent } from '../../shared/cell-renderer/status-btn-renderer/status-btn-renderer.standalone.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  standalone: true,
  imports: [
    CommonModule, MatCardModule, MatSelectModule, MatInputModule, FormsModule, TranslateModule, CommonAgGridStandAloneComponent, ShowErrorStandAloneComponent
  ]
})
export class PortfolioStandAloneComponent {
  showPageLoader: boolean = false;
  showGridLoader: boolean = false;
  selectedFilters: any = { externalAccount: "", id: "", status: "Active" };
  filterEnabled: boolean = false;
  followerDashBoardData: any;
  followerTableData: any[] = [];
  gridConfig!: AgGridConfig;

  readonly beFollowerDialog = inject(MatDialog);
  @ViewChild(ShowErrorStandAloneComponent) errorComponent?: ShowErrorStandAloneComponent;
  showFilters: boolean = false;

  constructor(private _webService: WebService, private _router: Router) {
    this._webService.subscribeOnWebDataChange('PortfolioStandAloneComponent', (event: any) => {
      this.recieveChildrenEmitter(event);
    });
    this.setupFollowerTableConfig();
    this.getFollowerDashboardData();
    this.getFollowerTableData();
  }

  setupFollowerTableConfig() {
    let colDefs = [
      { field: "refs.provider.name", headerName: 'HOME.Provider', resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId : 'followerProfileCell' },
      { field: "activationStatus", headerName: 'PROVIDERS_PROFILE.Activity', resizable: false, cellRenderer: StatusBtnRendererStandAloneComponent, colId : 'activityCell' },
      { field: "externalAccount", headerName: 'SUBSCRIPTION.Trading account', resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId : 'providerTradingAccountCell' },
      { field: "performance.fee", headerName: 'OFFERS.Performance fee', resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId : 'performanceFeeCell' },
      { field: "registerTime", headerName: 'PROVIDERS.Registered', sort:'desc', resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId : 'dateTimeCell' },
      { field: "actions", sortable: false, headerName: "", cellRenderer: ActionButtonStanAloneComponent, colId : 'followerProfileRedirection' }
    ];
    this.setupGridConfig(colDefs);
  }

  setupGridConfig(colDefs: any) {
    this.gridConfig = {
      maxHeight: '400px',
      noDataWarnMessage: 'There are no subscriptions',
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

  getFollowerDashboardData() {
    this.showPageLoader = true;
    this._webService.getFollowerDashboardDetails().subscribe({
      next:(response) => {
        this.followerDashBoardData = {};
        this.followerDashBoardData = response;
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

  getFollowerTableData() {
    this.showGridLoader = true;
    let param = this.getFollowerParam();
    this._webService.getFollowerData(param).subscribe({
      next: (response: any) => {
        this.followerTableData = [];
        this.followerTableData = response.items;
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

  getFollowerParam() {
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
    return filterQuery ? filterQuery.slice(0, -4) : "";
  }

  showErrorWarnMessage(msg: any) {
    const errorConfigObj = this.errorComponent?.config;
    errorConfigObj.message = msg ? msg : errorConfigObj.message;
    this.errorComponent?.openErrorSnackbar();
  }

  openNewFollowerDialog() {
    this.beFollowerDialog.open(BeFollowerDialogStandAloneComponent, {
      panelClass: 'beFollower-dialog'
    });
    this.beFollowerDialog.afterAllClosed.subscribe(() => { });
  }

  toggleFilter() {
    this.filterEnabled = !this.filterEnabled;
  }

  recieveChildrenEmitter(event: any) {
    if (event['action'] == 'follower_created') {
      let followerData = event.data;
      this._router.navigate([`/portal/subscriptions/${followerData.id}`]);
      this.beFollowerDialog.closeAll();
    }
  }

  refreshFollowerDataList() {
    this.getFollowerTableData();
  }

  applyFollowerFilter() {
    if(this.showFilters)  {   
      this.showFilters = false;
      this.clearFilters();
    } else {
      this.showFilters = true;
    }
  }

  clearFilters() {
    this.resetFilter();
    this.getFollowerTableData();
  }

  resetFilter() {
    this.selectedFilters = { externalAccount: "", id: "", status: "Active" };
  }

  ngOnDestroy() {
    this._webService.unSubscribeOnWebDataChange("PortfolioStandAloneComponent");
  }
}
