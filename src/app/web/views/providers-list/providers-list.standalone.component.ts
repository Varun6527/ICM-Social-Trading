import { Component, ElementRef, ViewChild } from '@angular/core';
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
import { CommonCellRendererStandAloneComponent } from '../../shared/cell-renderer/common-cell-renderer/common-cell-renderer.standalone.component';
import { ActionButtonStanAloneComponent } from '../../shared/cell-renderer/action-button-cell-renderer/action-button-cell-renderer.standalone.component';

@Component({
  selector: 'app-providers-list',
  templateUrl: './providers-list.component.html',
  styleUrl: './providers-list.component.scss',
  standalone: true,
  imports: [NgApexchartsModule, CommonModule, RouterModule, MatCardModule, MatTabsModule, MatInputModule, CommonAgGridStandAloneComponent, TranslateModule, ShowErrorStandAloneComponent]
})
export class ProvidersListStanAloneComponent {
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
  showMoreDataLoader: boolean = false;
  paginationConfigObj: any = {
    totalCount: 6,
    currentPage: 1,
    pageSize: 6,
    totalPages: 0,
    skip: 0,
    top: 6
  };
  scrollBottomobserver!: IntersectionObserver;

  @ViewChild(ShowErrorStandAloneComponent) errorComponent?: ShowErrorStandAloneComponent;
  @ViewChild('observer', { static: false }) observerElement!: ElementRef;
  IConstant: ConstantVariable = new ConstantVariable();

  constructor(private _webService: WebService, private _authService: AuthService) {
    this._webService.subscribeOnWebDataChange("ProvidersListStanAloneComponent", (event: any)=>{
      this.recieveChildrenEmitter(event);
    });
    this.watchListId = this._webService.userPermissionConfig.integrationMetadata.WatchlistId;
    this.widget_key = this._authService.userConfig.ratings.embeddedWidgetKey;
    this.cardChartOptions = this.IConstant.getProviderListPageChartConfig();
    
    this.intialProviderListPageSetup();
  }

  async intialProviderListPageSetup() {
    let result1 = await this.getInitialDataOfRatingWidgetAndWatchList();
    this.initializeFilterTabLabels();
    // this.initializeSubFilterLabels();
    this.switchMode("cards", true);
  }

  getRatingParam() {
    let param: any = {};
    param['ratingId'] = this.ratingId;
    param['$orderby'] = this.tabFilterLabels[this.selectedTabIndex].orderBy;
    param['$filter'] = this.tabFilterLabels[this.selectedTabIndex].filter;
    param['$count'] = true;
    param['widget_key'] = this.widget_key;
    if(this.viewMode == "cards") {
      param['$skip'] = this.paginationConfigObj.skip;
      param['$top'] = this.paginationConfigObj.top;
    }
    return param;
  }

  removeEmptyParamKeys(obj: any) {
    return Object.fromEntries(
      Object.entries(obj).filter(([_, value]) => value !== null && value !== undefined && value !== "")
    );
  }

  getRatingsData(loadInitalRatingData: boolean) {
    return new Promise<void>((resolve, reject)=> {

      if(loadInitalRatingData) this.showRatingLoader = true;

      let param = this.getRatingParam();
      param = this.removeEmptyParamKeys(param);
      this._webService.getRatingData(param).subscribe({
        next: (response: any) => {
          this.paginationConfigObj.totalCount = response.count;

          if(loadInitalRatingData) this.ratingsData = [];

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
          this.showMoreDataLoader = false;
          resolve();
        },
        error: (errorObj) => {
          this.showRatingLoader = false;
          this.showMoreDataLoader = false;
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
    this.switchMode(this.viewMode, true);
  }

  resetPaginationConfig() {
    this.paginationConfigObj = {
      totalCount: 6,
      currentPage: 1,
      pageSize: 6,
      totalPages: 0,
      skip: 0,
      top: 6
    };
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
      enablePagination: false,
      headerNameLangArr: colDefs.map((o: any) => o.headerName),
      rowModelType: 'clientSide',
      rowHeight: 70
    }
  }

  setupRatingConfig() {
    let colDefs = [
      { field: "accountName", headerName: 'PROVIDERS_LIST.Title', resizable: false, width: 250, suppressSizeToFit: true, cellRenderer: StrategyCellRendererStandAloneComponent },
      { field: "extension.investors", headerName: 'PROVIDERS_LIST.Investors', resizable: false, width: 150, valueFormatter: (params: any) => params.value ? params.value : '-' },
      { field: "extension.investorsEquity", headerName: 'PROVIDERS_LIST.Invested', resizable: false, width: 150, cellRenderer: CommonCellRendererStandAloneComponent, colId: 'currencyCell' },
      { field: "account.balance", headerName: 'PROVIDERS_LIST.Own Funds', resizable: false, width: 150, cellRenderer: CommonCellRendererStandAloneComponent, colId: 'currencyCell' },
      { field: "maxDrawdown", headerName: 'PROVIDERS_LIST.Drawdown', resizable: false, width: 150, valueFormatter: (params: any) => params.value || params.value == 0 ? params.value + '%' : '-' },
      { field: "extension.performanceFee", headerName: 'PROVIDERS_LIST.Fee', resizable: false, width: 150, valueFormatter: (params: any) => params.value || params.value == 0 ? params.value + '%' : '-' },
      { field: "historyGraph.value", headerName: 'PROVIDERS_LIST.Chart', resizable: false, cellRenderer: ChartCellRendererStandAloneComponent, width: 200},
      { field: "action", sortable: false, headerName: '', resizable: false, cellRenderer: ActionButtonStanAloneComponent, colId: 'copyTradeBtnCell', width: 150, cellStyle: { 'padding-left': '40px', 'display': 'flex', 'justify-content': 'center', 'align-items': 'center' } },
    ];
    this.setupGridConfig(colDefs);
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

  async switchMode(type: any, isInitialState: boolean) {
    if(type == "cards") {
      if(isInitialState) {
        this.setupIntersectionObserver();
        this.resetPaginationConfig();
      }
      this.viewMode = type;
      let result = await this.getRatingsData(isInitialState);
    } else if(type == "table") {
      if(isInitialState) {
        this.scrollBottomobserver.disconnect();
        this.setupRatingConfig();
        this.resetPaginationConfig();
      }
      this.viewMode = type;
      let result = await this.getRatingsData(isInitialState);
    }
  }

  toggleWatchList(ratingObj: any) {

  }

  openCopyTradePopup(ratingObj: any) {

  }

  recieveChildrenEmitter(event: any) {
    if(event['action'] == 'open_copy_trade_popup') {
      this.openCopyTradePopup(event.data);
    }
  }

  setupIntersectionObserver() {
    this.scrollBottomobserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        if(this.showMoreDataLoader) return;
        let flag = this.updateNextPaginationParamAndGetDataLoadFlag();
        if(flag) {
          this.showMoreDataLoader = true;
          this.switchMode(this.viewMode, false);
        } else {
          return;
        }
      }
    });
    if (this.observerElement) {
      this.scrollBottomobserver.observe(this.observerElement.nativeElement);
    }
  }

  updateNextPaginationParamAndGetDataLoadFlag() {
    let paginationObj = this.generatePaginationParams(this.paginationConfigObj.totalCount, this.paginationConfigObj.pageSize);
    this.paginationConfigObj.totalPages = paginationObj.totalPages;
    this.paginationConfigObj.currentPage = this.paginationConfigObj.currentPage + 1;
    let skipTopObj: any = paginationObj.getParams(this.paginationConfigObj.currentPage);
    if(skipTopObj) {
      this.paginationConfigObj.skip = skipTopObj.skip;
      this.paginationConfigObj.top = skipTopObj.top;
      return true;
    } else {
      this.paginationConfigObj.currentPage = this.paginationConfigObj.currentPage - 1;
      return false;
    }
  }

  generatePaginationParams(totalCount: number, perPage: number) {
    const totalPages = Math.ceil(totalCount / perPage); 
    const getParams = (pageNumber: number) => {
      if (pageNumber > totalPages) return null;
      const skip = (pageNumber - 1) * perPage;
      const top = perPage;
      return { skip, top };
    };
    return {
      totalPages,
      getParams
    };
  }

  ngOnDestroy() {
    this._webService.unSubscribeOnWebDataChange('ProvidersListStanAloneComponent');
  }
}
