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
import { Router, RouterModule } from '@angular/router';
import { WebService } from '../../service/web.service';
import { AuthService } from '../../../auth/service/auth.service';
import { ShowErrorStandAloneComponent } from '../../../shared/component/showerror/show.error.standalone.component';
import { RatingUiModal } from '../../shared/ui-model/web.ui.model';
import { CommonAgGridStandAloneComponent } from '../../shared/common-ag-grid/common.aggrid.standalone.component';
import { CommonCellRendererStandAloneComponent } from '../../shared/cell-renderer/common-cell-renderer/common-cell-renderer.standalone.component';
import { ActionButtonStanAloneComponent } from '../../shared/cell-renderer/action-button-cell-renderer/action-button-cell-renderer.standalone.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { map, Observable, startWith } from 'rxjs';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-providers-list',
  templateUrl: './providers-list.component.html',
  styleUrl: './providers-list.component.scss',
  standalone: true,
  imports: [NgApexchartsModule, RouterModule, MatMenuModule, CommonModule, ReactiveFormsModule, MatAutocompleteModule, RouterModule, MatCardModule, MatTabsModule, MatInputModule, CommonAgGridStandAloneComponent, TranslateModule, ShowErrorStandAloneComponent]
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
  paginationConfigObj: any = {};
  scrollBottomobserver!: IntersectionObserver;
  customFilterTabSortedData: { sortedByWinRatio: any[], sortedByTotalTrades: any[] } = {sortedByWinRatio: [], sortedByTotalTrades: []};
  filteredOptions: Observable<any[]> | undefined;
  mySearchForm = new FormGroup({
    providerObj: new FormControl(null) 
  });
  disableWatchListBtn: boolean = false;

  @ViewChild(ShowErrorStandAloneComponent) errorComponent?: ShowErrorStandAloneComponent;
  @ViewChild('observer', { static: false }) observerElement!: ElementRef;
  IConstant: ConstantVariable = new ConstantVariable();

  constructor(private _webService: WebService, private _router: Router, private _authService: AuthService) {
    
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
    let result2 = await this.fetchAndSetTradingDataForAllUser();
    this.initializeFilterTabLabels();
    // this.initializeSubFilterLabels();
    this.switchMode("cards", true);
    this.setProvidersSearchAutoComplete();
  }

  setClientSideSorting(data: any) {
    let type: string = this.tabFilterLabels[this.selectedTabIndex].type;
    if(type == "mostActive") {
      return data.sort((a: any, b: any) => b.totalTrades - a.totalTrades);
    } else if(type == "highWinRatio") {
      return data.sort((a: any, b: any) => b.winRatio - a.winRatio);
    } else {
      return data;
    }
  }

  getRatingParam() {
    let param: any = {};
    param['ratingId'] = this.ratingId;
    param['$orderby'] = this.tabFilterLabels[this.selectedTabIndex].orderBy;
    param['$count'] = true;
    param['widget_key'] = this.widget_key;
    param['$skip'] = this.paginationConfigObj.skip;
    param['$top'] = this.paginationConfigObj.top;
    param['$filter'] = this.getFiltersDataOfTab();
    return param;
  }

  removeEmptyParamKeys(obj: any) {
    //For Table View Need to fetch All data. becuase it has client side pagination
    if(this.viewMode == "table") { 
      delete obj['$skip'];
      delete obj['$top'];
    }
    //End
    //If filter have some data then we need to remove skip top property
    if(obj['$filter']) {
      delete obj['$skip'];
      delete obj['$top'];
    }
    //End
    
    return Object.fromEntries(
      Object.entries(obj).filter(([_, value]) => value !== null && value !== undefined && value !== "")
    );
  }

  getRatingsData(loadInitalRatingData: boolean) {
    return new Promise<void>((resolve, reject)=> {
      if(loadInitalRatingData) this.showRatingLoader = true;
      let param = this.removeEmptyParamKeys(this.getRatingParam());
      this._webService.getRatingDataWithPagination(param).subscribe({
        next: (response: any) => {
          this.paginationConfigObj.totalCount = response.count;

          if(loadInitalRatingData) this.ratingsData = [];
          response.items = this.setClientSideSorting(response.items);
         
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
          this.showErrorWarnMessage(this.IConstant.errorMessageObj[errorObj?.error?.errorCode]);
          this.showPageLoader = false;
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
      enablePagination: true,
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
        this.removeIntersectionOberver();
        this.setupRatingConfig();
        this.resetPaginationConfig();
      }
      this.viewMode = type;
      let result = await this.getRatingsData(isInitialState);
    }
  }

  recieveChildrenEmitter(event: any) {
    if(event['action'] == 'open_copy_trade_popup') {
      this.openCopyTradePopup(event.data);
    }
  }

  getFiltersDataOfTab() {
    let type = this.tabFilterLabels[this.selectedTabIndex].type;
    if(type == "all") {
      return "";
    } else if(type == "watchlist") {
      return this.getWatchListFilter();
    } else if(type == "mostPopular") {
      return "";
    } else if(type == "mostActive") {
      return this.getMostActiveProvider();
    } else if(type == "highWinRatio") {
      return this.getHighWinRatioProvider();
    } else if(type == "lowFees") {
      return "";
    }
    return "";
  }

  getWatchListFilter() {
    if (this.watchListAccountsArr.length == 0) return "(accountId eq null)";
    let str = "", arr = this.watchListAccountsArr;
    if (this.viewMode == "cards") {
      arr = arr.slice(this.paginationConfigObj.skip, this.paginationConfigObj.skip + this.paginationConfigObj.top);
    } else if (this.viewMode == "table") {
      arr = this.watchListAccountsArr;
    }
    arr.forEach(({ accountId }: any, indx: any) => {
      str += `(accountId eq ${accountId}) or `;
    });
    return str.slice(0, -4);
  }

  getMostActiveProvider() {
    if(this.customFilterTabSortedData.sortedByTotalTrades.length == 0) return "(accountId eq null)";
    let str = "", arr = this.customFilterTabSortedData.sortedByTotalTrades;
    if(this.viewMode == "cards") {
      arr = arr.slice(this.paginationConfigObj.skip, this.paginationConfigObj.skip + this.paginationConfigObj.top);
    } else if(this.viewMode == "table") {
      arr = this.customFilterTabSortedData.sortedByTotalTrades;
    }
      arr.forEach((obj: any)=>{
      str += `(accountId eq ${obj.accountId}) or `;
    });
    return str.slice(0, -4);
  }

  getHighWinRatioProvider() {
    if(this.customFilterTabSortedData.sortedByWinRatio.length == 0) return "(accountId eq null)";
    let str = "", arr: any = this.customFilterTabSortedData.sortedByWinRatio;
    if(this.viewMode == "cards") {
      arr = arr.slice(this.paginationConfigObj.skip, this.paginationConfigObj.skip + this.paginationConfigObj.top);
    } else if(this.viewMode == "table") {
      arr = this.customFilterTabSortedData.sortedByWinRatio;
    }
    arr.forEach((obj: any) => {
      str += `(accountId eq ${obj.accountId}) or `;
    });
    return str.slice(0, -4);
  }

  initializeFilterTabLabels() {
    this.tabFilterLabels = [
      { type: 'all', label: 'PROVIDERS_LIST.All', orderBy: "rank asc"},
      { type: 'watchlist', label: 'PROVIDERS_LIST.Watchlist', orderBy: "rank asc" },
      { type: 'mostPopular', label: 'PROVIDERS_LIST.Most Popular', orderBy: "investors desc, rank asc" },
      { type: 'mostActive', label: 'PROVIDERS_PROFILE.Most Active', orderBy: "" },
      { type: 'highWinRatio', label: 'PROVIDERS_LIST.High Win Ratio', orderBy: "" },
      { type: 'lowFees', label: 'PROVIDERS_LIST.Low Fees', orderBy: "performanceFee asc, rank asc" },
    ];
  }

  setupIntersectionObserver() {
    this.scrollBottomobserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        if(this.showMoreDataLoader || this.showRatingLoader) return;
        this.showMoreDataLoader = true;
        this.setTotalCountIfCustomFiltersTab();
        let flag = this.updateNextPaginationParamAndGetDataLoadFlag(this.paginationConfigObj);
        if(flag) {
          this.switchMode(this.viewMode, false);
        } else {
          this.showMoreDataLoader = false;
          return;
        }
      }
    });
    if (this.observerElement) {
      this.scrollBottomobserver.observe(this.observerElement.nativeElement);
    }
  }

  removeIntersectionOberver() {
    this.scrollBottomobserver.disconnect();
  }

  setTotalCountIfCustomFiltersTab() {
    let type = this.tabFilterLabels[this.selectedTabIndex].type;
    if(type == "watchlist") {
      this.paginationConfigObj.totalCount = this.watchListAccountsArr.length;
    } else if(type == "mostActive") {
      this.paginationConfigObj.totalCount = this.customFilterTabSortedData.sortedByWinRatio.length;
    } else if(type == "highWinRatio") {
      this.paginationConfigObj.totalCount = this.customFilterTabSortedData.sortedByTotalTrades.length;
    }
  }

  updateNextPaginationParamAndGetDataLoadFlag(paginationConfigObj: any) {
    let paginationObj = this.generatePaginationParams(paginationConfigObj.totalCount, paginationConfigObj.pageSize);
    paginationConfigObj.totalPages = paginationObj.totalPages;
    paginationConfigObj.currentPage = paginationConfigObj.currentPage + 1;
    let skipTopObj: any = paginationObj.getParams(paginationConfigObj.currentPage);
    if(skipTopObj) {
      paginationConfigObj.skip = skipTopObj.skip;
      paginationConfigObj.top = skipTopObj.top;
      return true;
    } else {
      paginationConfigObj.currentPage = paginationConfigObj.currentPage - 1;
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

  fetchAndSetTradingDataForAllUser() {
    return new Promise<void>((resolve)=>{
      this.showPageLoader = true;
      let param = {
        widget_key: this.widget_key,
        ratingId: this.ratingId
      };
      this._webService.getSortedRatingsTradingDetails(param).subscribe({
        next: (response)=>  {
          this._webService.sortedRatingsData = response;
          this.customFilterTabSortedData = response;
          this.showPageLoader = false;
          resolve();
        },
        error: (errorObj) => {
          this.showErrorWarnMessage(this.IConstant.errorMessageObj[errorObj?.error?.errorCode]);
          this.showPageLoader = false;
          resolve();
        }
      })
    })
  }

  displayFn(provider: any): string {
    return provider && provider.accountName ? provider.accountName : '';
  }
  
  setProvidersSearchAutoComplete() {
    this.filteredOptions = this.mySearchForm.controls['providerObj'].valueChanges.pipe(
      startWith(''),
      map((value: any) => {
        const filterValue = typeof value === 'string' ? value.toLowerCase() : value?.accountName.toLowerCase();
        return this.customFilterTabSortedData.sortedByTotalTrades.filter((data: any) => data.accountName.toLowerCase().includes(filterValue))
      })
    );
  }

  goToProviderRatingProfilePage() {
    let obj: any = this.mySearchForm.controls['providerObj'].value;
    this._router.navigate([`/portal/ratings/${obj.accountId}`]);
  }

  toggleWatchList(ratingObj: any) {
    if(ratingObj.isWatchListed) {
      this.watchListAccountsArr = this.watchListAccountsArr.filter((o: any) => o.accountId !== ratingObj.accountId);
    } else {
      let obj = {accountId: ratingObj.accountId, from: new Date().toISOString().split("T")[0]};
      this.watchListAccountsArr.push(obj);
    }
    this.updateWatchListData(ratingObj);
  }

  updateWatchListData(ratingObj: any) {
    this.disableWatchListBtn = true;
    let param = {
      id: this.watchListId,
      watch: {values: this.watchListAccountsArr.map((o: any) => {return {...o, from: o.from.split("T")[0] }})},
      widget_key: this.widget_key
    };
    this._webService.updateWatchListedProviderData(param).subscribe({
      next: ()=> {
        ratingObj.isWatchListed = !ratingObj.isWatchListed;
        if(ratingObj.isWatchListed) {
          this.showSuccessPopupMsg("Account has been added to watchlist")
        } else {
          this.removeDeletedWatchListedData(ratingObj)
          
          this.showSuccessPopupMsg("Account has been removed from watchlist")
        }
        this.disableWatchListBtn = false;
      },
      error: (errorObj) => {
        this.showErrorWarnMessage(this.IConstant.errorMessageObj[errorObj?.error?.errorCode]);
        this.disableWatchListBtn = false;
      }
    })
  }

  removeDeletedWatchListedData(ratingObj: any) {
    if(this.tabFilterLabels[this.selectedTabIndex].type == "watchlist") {
      this.ratingsData = this.ratingsData.filter((o: any) => o.accountId !== ratingObj.accountId);
    }
  }

  openWatchListWarnMenu(trigger: any) {
    trigger?.openMenu();
  }

  openCopyTradePopup(ratingObj: any) {

  }

  ngOnDestroy() {
    this._webService.unSubscribeOnWebDataChange('ProvidersListStanAloneComponent');
  }
}
