import { Component, ViewChild } from '@angular/core';
import { StrategyCellRendererStandAloneComponent } from '../../shared/cell-renderer/strategy-cell-renderer/strategy-cell-renderer.standalone.component';
import { ChartCellRendererStandAloneComponent } from '../../shared/cell-renderer/chart-cell-renderer/chart-cell-renderer.standalone.component';
import { ConstantVariable } from '../../../shared/model/constantVariable.model';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { WebService } from '../../service/web.service';
import { AuthService } from '../../../auth/service/auth.service';
import { ShowErrorStandAloneComponent } from '../../../shared/component/showerror/show.error.standalone.component';
import { RatingUiModal } from '../../shared/ui-model/web.ui.model';
import { CommonAgGridStandAloneComponent } from '../../shared/common-ag-grid/common.aggrid.standalone.component';

@Component({
  selector: 'app-providers-list',
  templateUrl: './providers-list.component.html',
  styleUrl: './providers-list.component.scss',
  standalone: true,
  imports: [NgApexchartsModule, CommonModule, RouterModule, MatCardModule, MatTabsModule, MatInputModule, CommonAgGridStandAloneComponent, TranslateModule, ShowErrorStandAloneComponent]
})
export class ProvidersListStanAloneComponent {
  rowData = [
    {
      id: 1,
      strategy: "Catalog",
      investors: 1,
      invested: "$500",
      ownFunds: "$2200",
      drawdown: "54.5%",
      fee: "50%",
      risk: "High",
      chart: "Bar",
      strategyIcon: '../../../../assets/icons/providerIcon.jpeg'
    }
  ];
  selectedTabIndex: number = 0;
  cardChartOptions: any;
  viewMode: any;
  ratingsData :any = [];
  watchListAccountsArr: any = [];
  widgetsBriefArr: any = [];
  tabFilterLabels: any = [];
  // subFilterLabels: any = [];
  watchListId: any;
  ratingId: any;
  widget_key: any;
  showPageLoader: boolean = false;
  showRatingLoader: boolean = false;
  ratingsGridConfig: any = {};
  showRatingsGridLoader: boolean = false;

  @ViewChild(ShowErrorStandAloneComponent) errorComponent?: ShowErrorStandAloneComponent;
  IConstant: ConstantVariable = new ConstantVariable();

  constructor(private _webService: WebService, private _authService: AuthService) {
    this.watchListId = this._webService.userPermissionConfig.integrationMetadata.WatchlistId;
    this.widget_key = this._authService.userConfig.ratings.embeddedWidgetKey;
    this.cardChartOptions = this.IConstant.getProviderListPageChartConfig();
    this.intialProviderListPageSetup();
  }

  async intialProviderListPageSetup() {
    let result1 = await this.getInitialDataOfRatingWidgetAndWatchList();
    this.initializeFilterTabLabels();
    // this.initializeSubFilterLabels();
    let result2 = await this.getRatingsData();
    this.switchMode("cards");
  }

  getRatingParam() {
    let param: any = {};
    param['ratingId'] = this.ratingId;
    param['$orderby'] = this.tabFilterLabels[this.selectedTabIndex].orderBy;
    param['$filter'] = this.tabFilterLabels[this.selectedTabIndex].filter;
    param['$count'] = true;
    param['widget_key'] = this.widget_key;
    return param;
  }

  removeEmptyParamKeys(obj: any) {
    return Object.fromEntries(
      Object.entries(obj).filter(([_, value]) => value !== null && value !== undefined && value !== "")
    );
  }

  getRatingsData() {
    return new Promise<void>((resolve, reject)=> {
      this.showRatingLoader = true;
      let param = this.getRatingParam();
      param = this.removeEmptyParamKeys(param);
      this._webService.getRatingData(param).subscribe({
        next: (response: any) => {
          this.ratingsData = [];
          response.items.forEach((obj: any) =>
            this.ratingsData.push(
              new RatingUiModal(
                obj,
                this._webService.getFileServerUrl(),
                this._webService.getRatingServerUrl(),
                this.watchListAccountsArr.map((o: any) => o.accountId)
              )
            ));
          this.showRatingLoader = false;
          resolve();
        },
        error: (errorObj) => {
          this.showRatingLoader = false;
          this.showErrorWarnMessage(this.IConstant.errorMessageObj[errorObj?.error?.errorCode]);
          reject();
        }
      })
    })
  }

  getInitialDataOfRatingWidgetAndWatchList() {
    return new Promise<void>((resolve, reject)=> {
      this.showPageLoader = true;
      let param = {
        widget_key: this.widget_key,
        watchListId: this.watchListId
      }
      this._webService.getInitialProviderListPageData(param).subscribe({
        next: (response: any) => {
          this.widgetsBriefArr = response.widgetBrief.items;
          this.ratingId = response.widgetBrief.items.find((o: any) => o.key == this.widget_key).id;
          this.watchListAccountsArr = response?.watchListedProvider?.watch?.values ? response?.watchListedProvider?.watch?.values : [];
          this.showPageLoader = false;
          resolve();
        },
        error: (errorObj) => {
          this.showPageLoader = false;
          this.showErrorWarnMessage(this.IConstant.errorMessageObj[errorObj?.error?.errorCode]);
          reject();
        }
      })
    })
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

  onTabChange(event: any) {
    this.selectedTabIndex = event.index;
    this.getRatingsData();
  }

  setupRatingConfig() {
    let colDefs = [
      { field: "strategy", headerName: 'PROVIDERS_LIST.Title', resizable: false, width: 250, suppressSizeToFit: true, cellRenderer: StrategyCellRendererStandAloneComponent },
      { field: "investors", headerName: 'PROVIDERS_LIST.Investors', resizable: false, width: 150 },
      { field: "invested", headerName: 'PROVIDERS_LIST.Invested', resizable: false, width: 150 },
      { field: "ownFunds", headerName: 'PROVIDERS_LIST.Own Funds', resizable: false, width: 150 },
      { field: "drawdown", headerName: 'PROVIDERS_LIST.Drawdown', resizable: false, width: 150 },
      { field: "fee", headerName: 'PROVIDERS_LIST.Fee', resizable: false, width: 150 },
      { field: "chart", headerName: 'PROVIDERS_LIST.Chart', resizable: false, cellRenderer: ChartCellRendererStandAloneComponent, width: 200, headerClass: 'chartHeader' }
      // { field: "action", headerName: '', resizable: false, cellRenderer: ButtonCellRendererComponent, width: 150, cellStyle: { 'padding-left': '40px' }, },
    ];
    this.setupGridConfig(colDefs);
  }

  setupGridConfig(colDefs: any) {
    this.ratingsGridConfig = {
      maxHeight: '400px',
      noDataWarnMessage: 'There are no data',
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

  initializeFilterTabLabels() {
    this.tabFilterLabels = [
      { type: 'all', label: 'PROVIDERS_LIST.All', orderBy: "rank asc", filter: "" },
      { type: 'watchlist', label: 'PROVIDERS_LIST.Watchlist', orderBy: "rank asc", filter: this.getWatchListFilter() },
      { type: 'mostPopular', label: 'PROVIDERS_LIST.Most Popular', orderBy: "investors desc, rank asc", filter: "" },
      { type: 'mostActive', label: 'PROVIDERS_PROFILE.Most Active', orderBy: "rank asc", filter: "" },
      { type: 'highWinRatio', label: 'PROVIDERS_LIST.High Win Ratio', orderBy: "rank asc", filter: "" },
      { type: 'lowFees', label: 'PROVIDERS_LIST.Low Fees', orderBy: "performanceFee asc, rank asc", filter: "" },
    ];
  }

  getWatchListFilter() {
    if(this.watchListAccountsArr.length > 0) {
      let str = "";
      this.watchListAccountsArr.forEach(({accountId}: any, indx: any)=>{
          str += `(accountId eq ${accountId}) or `;
      });
      return str.slice(0, -4);
    } else {
      return "";
    }
  }

  // initializeSubFilterLabels() {
  //   this.subFilterLabels = [
  //     { type: 'any', label: 'PROVIDERS_LIST.Any', active: false },
  //     { type: 'forex', label: 'PROVIDERS_LIST.Forex', active: false },
  //     { type: 'indices', label: 'PROVIDERS_LIST.Indices', active: false },
  //     { type: 'crypto', label: 'PROVIDERS_LIST.Crypto', active: false },
  //     { type: 'algorithmic', label: 'PROVIDERS_LIST.Algorithmic', active: false },
  //     { type: 'commodities', label: 'PROVIDERS_LIST.Commodities', active: false }
  //   ];
  // }

  switchMode(type: any) {
    this.viewMode = type;
    if(this.viewMode == "table") {
      this.setupRatingConfig();
    }
  }

  toggleWatchList(ratingObj: any) {

  }
}
