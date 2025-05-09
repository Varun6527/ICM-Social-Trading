import { Component, inject, ViewChild} from '@angular/core';
import { ActionButtonStanAloneComponent } from '../../shared/cell-renderer/action-button-cell-renderer/action-button-cell-renderer.standalone.component';
import {MatDialog } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';
import { CommonCellRendererStandAloneComponent } from '../../shared/cell-renderer/common-cell-renderer/common-cell-renderer.standalone.component';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ShowErrorStandAloneComponent } from '../../../shared/component/showerror/show.error.standalone.component';
import { ConstantVariable } from '../../../shared/model/constantVariable.model';
import { WebService } from '../../service/web.service';
import { AgGridConfig, CommonAgGridStandAloneComponent } from '../../shared/common-ag-grid/common.aggrid.standalone.component';
import { CommonDialogStandAloneComponent } from '../../shared/dialogBox/common-dialog/common.dialog.standalone.component';
import { DealsUiModal, TradingAccountUIModal } from '../../shared/ui-model/web.ui.model';
import { FormsModule } from '@angular/forms';
import { GridApi } from 'ag-grid-enterprise';

@Component({
  selector: 'app-position',
  templateUrl: './positions.component.html',
  styleUrl: './positions.component.scss',
  standalone: true,
  imports: [CommonModule, MatMenuModule, CommonAgGridStandAloneComponent, RouterModule, FormsModule, MatTabsModule, TranslateModule, MatSelectModule, MatInputModule, MatCardModule],
  providers: [CurrencyPipe]
})
export class PositionsStandAloneComponent {
  currentSelectedTabIndx: number = 0;
  tabArrConfig: any = [];
  providerId: any;
  positionId: any;
  subscriptionId: any;
  subscriptionData: any;
  accountId: any;
  showPageLoader: boolean = false;
  isProvider: boolean = false;
  isFollower: boolean = false;
  constantVariable: ConstantVariable = new ConstantVariable();

  readonly beDealsDialog = inject(MatDialog);
  readonly tradingDialog = inject(MatDialog);
  @ViewChild(ShowErrorStandAloneComponent) errorComponent?: ShowErrorStandAloneComponent;
  positionData: any = {};
  providersData: any = {};
  tradeAccountData: any = {};
  positionStatsData: any = {};
  gridApiObj!: GridApi;
  serverRequestObj: any = {};

  constructor(private currencyPipe: CurrencyPipe, private _webService: WebService, private route: ActivatedRoute, private _router : Router) {
    this.isProvider = this._webService.isProviderAccount;
    this.isFollower = this._webService.isSubscriptionAccount;
    this.route.paramMap.subscribe(params => {
      this.providerId = params.get('providerId')!;
      this.positionId = params.get('positionId')!;
      this.subscriptionId = params.get('subscriptionId')!;
      this.getAllPositionPageData();
    });
    this._webService.subscribeOnWebDataChange('PositionsStandAloneComponent', (event: any) => {
      this.recieveChildrenEmitter(event);
    });
  }

  getOrderByQuery(sortModel: any) {
    if(sortModel.length == 0) return;
    let sortQuery = "", sortApiKey = this.tabArrConfig[this.currentSelectedTabIndx]['sortApiKey'];
    sortModel.forEach((obj: any) => {
      sortQuery += `${sortApiKey[obj.colId]} ${obj.sort},`;
    });
    return sortQuery.slice(0, -1);
  }

  sendDataToAgGrid(status: boolean, count: number, gridData: any) {
    let event = this.tabArrConfig[this.currentSelectedTabIndx]['filters']['serverRequestObj'];
    let serverResponse = {
      status: status,
      data: gridData,
      rowCount: count
    }
    event.callback(serverResponse);
  }

  async getAllPositionPageData() {
    this.showPageLoader = true;
    let result1 = await this.getPositionData();
    if(this.isProvider) {
      let result2 = await this.getPositionStatsData();
    }
    let result3 = await this.getTradingAccountData();
    if(this.isProvider) {
      let result4 = await this.getProviderData();
    } else {
      let result4 = await this.getSubscriptionData();
    }
    this.setUpTabsConfig();
    this.showPageLoader = false;
  }

  getPositionData() {
    return new Promise<void>((resolve) => {
      let param = { positionId: this.positionId };
      let apiObseverable: any;
      if(this.isProvider) {
        apiObseverable = this._webService.getSinglePosotionData(param);
      } else {
        apiObseverable = this._webService.getSingleSubscriptionPositionData(param);
      }
      apiObseverable.subscribe({
        next: (response: any) => {
          this.positionData = response;
          this.providerId = this.positionData.providerId;
          this.accountId = this.positionData.accountId;
          resolve();
        },
        error: (errorObj: any) => {
          this.showErrorWarnMessage(errorObj?.error?.errorMessage);
          resolve();
        }
      })
    })
  }

  getTradingAccountData() {
    return new Promise<void>((resolve) => {
      let param = { accountId: this.accountId };
      this._webService.getSingleTradingAccountData(param).subscribe({
        next: (response) => {
          this.tradeAccountData = new TradingAccountUIModal(response);
          resolve();
        },
        error: (errorObj) => {
          this.showErrorWarnMessage(errorObj?.error?.errorMessage);
          resolve();
        }
      })
    })
  }

  getProviderData() {
    return new Promise<void>((resolve) => {
      let param = { providerId: this.providerId };
      this._webService.getSingleProviderData(param).subscribe({
        next: (response) => {
          this.providersData = response;
          resolve();
        },
        error: (errorObj) => {
          this.showErrorWarnMessage(errorObj?.error?.errorMessage);
          resolve();
        }
      })
    })
  }

  getSubscriptionData() {
    return new Promise<void>((resolve) => {
      let param = { subscriptionId: this.subscriptionId };
      this._webService.getFollowerDataById(param).subscribe({
        next: (response) => {
          this.subscriptionData = response;
          resolve();
        },
        error: (errorObj) => {
          this.showErrorWarnMessage(errorObj?.error?.errorMessage);
          resolve();
        }
      })
    })
  }

  getPositionStatsData() {
    return new Promise<void>((resolve) => {
      let param = { providerId: this.providerId, positionId: this.positionId };
      this._webService.getStatsData(param).subscribe({
        next: (response) => {
          this.positionStatsData = response;
          resolve();
        },
        error: (errorObj) => {
          this.showErrorWarnMessage(errorObj?.error?.errorMessage);
          resolve();
        }
      })
    })
  }

  setUpTabsConfig() {
    this.tabArrConfig = this.getProviderSubscriptionTabsConfig();
  }

  getProviderSubscriptionTabsConfig() {
    let arr = [];
    arr.push(
      this.getDealsTabConfigObj()
    );
    return arr;
  }

  getDealsTabConfigObj() {
    let apiUrl = this.constantVariable?.http_Api_Url[this.isProvider ? 'provider_profile' : 'subscription_profile'].deals.replace(this.isProvider ? ':providerId' : ':subscriptionId', this.isProvider ? this.providerId : this.subscriptionId );
    return {
      label: 'PROVIDERS_PROFILE.Deals',
      sortApiKey: { dealsTitleCell: "dealKey", dealsSubTitleCell: "dealKey", tagCell: "entry", tagCell_2: "entry", symbol: "symbol", dealsVolumeCell: "volume", price: "price", time: "time" },
      filters: {
        show: false,
        serverRequestObj: this.serverRequestObj,
        type: { entry: "" },
        clear: function() {
          this.type = { entry: "" };
        },
        positionData: this.positionData,
        getApiParams: function () {
          let param: any = {};
          let getFilterParam = () => {
            let filterQuery = "";
            if (this.type.entry) {
              filterQuery += `entry eq '${this.type.entry}' and `;
            }
            filterQuery += `position eq ${this.positionData.position} and `;
            return filterQuery;
          }
          param['$count'] = true;
          param['$top'] = this.serverRequestObj.params.request.endRow;
          param['$skip'] = this.serverRequestObj.params.request.startRow;
          let orderVal = this.serverRequestObj.getOrderByQuery(this.serverRequestObj.params.request.sortModel);
          param['$orderby'] = orderVal ? orderVal : "";
          let filterVal = getFilterParam.apply(this);
          param['$filter'] = filterVal ? filterVal.slice(0, -4) : "";
          return param;
        }
      },
      grid: this.getCommonGridDetails('deals', 'There are no deals', DealsUiModal, apiUrl)
    }
  }

  getCommonGridDetails(gridType: string, warnMessage: string, uiModel: any, apiUrl: string, secondryModelData?: any) {
    let commonColDef = this.getGridColDefs(gridType);
    return {
      apiUrl: apiUrl,
      colDef: commonColDef,
      config: this.getCommonGridConfig(commonColDef, warnMessage),
      data: [],
      showLoader: false,
      uiModel: uiModel,
      uiModelSecondParamData: secondryModelData
    }
  }

  getCommonGridConfig(colDefs: any, warnMessage: string) {
    let gridConfig: AgGridConfig = {
      maxHeight: '400px',
      noDataWarnMessage: warnMessage,
      gridOptions: {},
      agGridTheme: 'ag-theme-alpine',
      pageSizeDropdownArr: [5, 10, 15],
      initialSelectedPageSize: 5,
      columnDefination: colDefs,
      enablePagination: true,
      headerNameLangArr: colDefs.map((o: any) => o.headerName),
      rowModelType: 'serverSide',
      rowHeight: undefined
    };
    return gridConfig;
  }
  
  getGridColDefs(gridType: string) {
    if (gridType == 'deals' ) {
      if(this.isProvider) {
        return [
          { field: "dealKey", headerName: 'PROVIDERS_PROFILE.Deal', minWidth: 200, cellRenderer: CommonCellRendererStandAloneComponent, colId: 'dealsTitleCell' },
          { field: "entry", headerName: 'PROVIDERS_PROFILE.Entry', minWidth: 100, cellRenderer: CommonCellRendererStandAloneComponent, colId: 'tagCell' },
          { field: "symbol", headerName: 'PROVIDERS_PROFILE.Symbol', minWidth: 100 },
          { field: "volume", headerName: 'PROVIDERS_PROFILE.Volume', minWidth: 100, cellRenderer: CommonCellRendererStandAloneComponent, colId: 'dealsVolumeCell' },
          { field: "price", headerName: 'PROVIDERS_PROFILE.Price', minWidth: 100 },
          { field: "time", headerName: 'PROVIDERS_PROFILE.Time', sort: 'desc', minWidth: 200 },
          { field: "actions", headerName: "", sortable : false, cellRenderer: ActionButtonStanAloneComponent, showPopupArraow: true, colId: 'dealsPopup', minWidth: 100 },
        ]
      } else {
        return [
          { field: "dealKey", headerName: 'PROVIDERS_PROFILE.Deal', resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: 'dealsSubTitleCell' },
          { field: "status", headerName: 'COMMON.Status', sortable : false, resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: 'tagCell' },
          { field: "entry", headerName: 'PROVIDERS_PROFILE.Entry', resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: 'tagCell' },
          { field: "price", headerName: 'PROVIDERS_PROFILE.Price', resizable: false },
          { field: "actions", headerName: "", sortable : false, cellRenderer: ActionButtonStanAloneComponent, showPopupArraow: true, colId: 'dealsPopup'},
        ]
      }
    }
    return;
  }

  onTabChange(event: any) {
    this.currentSelectedTabIndx = event.index;
  }

  getGridData(tab: any) {
    let gridConfig = tab.grid
    let param: any = tab.filters.getApiParams();
    //remove empty param values
    param = Object.fromEntries(
      Object.entries(param).filter(([_, value]) => value !== null && value !== undefined && value !== "")
    );
    //End
    this._webService.getCommonGridData(gridConfig.apiUrl, param).subscribe({

      next: (response: any) => {
        let arr: any = [];
        response.items.forEach((obj: any) => arr.push(new gridConfig.uiModel(obj, gridConfig.uiModelSecondParamData)));
        gridConfig.data = arr;
        this.sendDataToAgGrid(true, response.count, arr);
      },
      error: (errorObj: any) => {
        this.showErrorWarnMessage(errorObj?.error?.errorMessage);
        this.sendDataToAgGrid(false, 0, []);
      }
    })
  }

  applyFilters(tab: any) { 
    if(tab.filters.show)  {   
      tab.filters.show = false;
      this.clearFilters(tab);
    } else {
      tab.filters.show = true;
    }
  }

  clearFilters(tab: any) {
    tab.filters.clear();
    this.gridApiObj.refreshServerSide();
  }

  refreshDataList(tab: any) {
    this.gridApiObj.refreshServerSide();
  }

  showErrorWarnMessage(msg: any) {
    const errorConfigObj = this.errorComponent?.config;
    errorConfigObj.message = msg ? msg : errorConfigObj.message;
    this.errorComponent?.openErrorSnackbar();
  }

  recieveChildrenEmitter(event: any) {
    if(event['action'] == 'open_deals_popup') {
      this.openDealsPopup(event['data']);
    } else if(event['action'] == 'get_server_side_data') {
      this.setAgGridServerRequestObjInTabConfig(event);
      this.getGridData(this.tabArrConfig[this.currentSelectedTabIndx]);
    } else if(event['action'] == "set_grid_api_obj") {
      this.gridApiObj = event['data'];
    }
  }

  setAgGridServerRequestObjInTabConfig(event: any) {
    let obj = {
      getOrderByQuery: this.getOrderByQuery.bind(this),
      params: event.params,
      callback: event.callback
    };
    this.serverRequestObj = obj;
    this.tabArrConfig[this.currentSelectedTabIndx]['filters']['serverRequestObj'] = this.serverRequestObj;
  }

  openDealsPopup(data: any) {
    this.beDealsDialog.open(CommonDialogStandAloneComponent, {
      panelClass: 'common-dialog',
      data: this.isProvider ? this.prepareDealsData(data) : this.prepareSubscriptionDealsData(data)
    });
    this.beDealsDialog.afterAllClosed.subscribe((result)=>{});
  }

  prepareDealsData(dealsData: any) {
    let commonDialogData = {
      mainTitle: 'Info',
      secondryTitle: "Information about the provider's deal",
      labelDetails: [
        { title: 'PROVIDERS_PROFILE.Deal', value: dealsData.dealKey },
        { title: 'PROVIDERS_PROFILE.Position', value: dealsData.position },
        { title: 'PROVIDERS_PROFILE.State', value: dealsData.state },
        { title: 'PROVIDERS_PROFILE.Symbol', value: dealsData.symbol},
        { title: 'PROVIDERS_PROFILE.Entry', value: dealsData.entry },
        { title: 'PROVIDERS_PROFILE.Entry type', value: dealsData.entryType },
        { title: 'PROVIDERS_PROFILE.Direction', value: dealsData.direction },
        { title: 'PROVIDERS_PROFILE.Volume', value: dealsData.volume },
        { title: 'PROVIDERS_PROFILE.Price', value: dealsData.price },
        { title: 'PROVIDERS_PROFILE.Time', value: dealsData.time }
      ]
    };
    return commonDialogData;
  }

  prepareSubscriptionDealsData(dealsData: any) {
    let commonDialogData = {
      mainTitle: 'PROVIDERS_PROFILE.Deal',
      secondryTitle: "PROVIDERS_PROFILE.Deal's details",
      labelDetails: [
        { title: 'PROVIDERS_PROFILE.Deal', value: dealsData.dealKey },
        { title: 'PROVIDERS_PROFILE.Source', value: dealsData.copyDealKey },
        { title: 'PROVIDERS_PROFILE.Position', value: `${dealsData.position} #${dealsData.positionId}`, type: 'postionRedirection', data: dealsData },
        { title: 'ACCOUNTS.Type', value: dealsData.type },
        { title: 'PROVIDERS_PROFILE.State', value: dealsData.state },
        { title: 'COMMON.Status', value: dealsData.status},
        { title: 'PROVIDERS_PROFILE.Symbol', value: dealsData.symbol},
        { title: 'PROVIDERS_PROFILE.Entry', value: dealsData.entry },
        { title: 'PROVIDERS_PROFILE.Entry type', value: dealsData.entryType },
        { title: 'PROVIDERS_PROFILE.Direction', value: dealsData.direction },
        { title: 'PROVIDERS_PROFILE.Volume', value: dealsData.volume },
        { title: 'PROVIDERS_PROFILE.Price', value: dealsData.price },
        { title: 'PROVIDERS_PROFILE.Time', value: dealsData.time },
        { title: 'PROVIDERS_PROFILE.Profit', value: this._webService.transFormCurrency(dealsData.profit, dealsData.currency) },
        { title: 'PROVIDERS_PROFILE.Error', value: dealsData.error },
        { title: 'PROVIDERS_PROFILE.Attempts', value: dealsData.attempts },
      ]
    };
    if(!dealsData.error) {
      commonDialogData.labelDetails.splice(commonDialogData.labelDetails.length - 2, 1);
    }
    return commonDialogData;
  }

  openBeTradingAccountPopup() {
    this.tradingDialog.open(CommonDialogStandAloneComponent, {
      panelClass: 'common-dialog',
      data: this._webService.prepareTradingAccountData(this.tradeAccountData)
    });
    this.tradingDialog.afterAllClosed.subscribe((result) => { });
  }

  ngOnDestroy() {
    this._webService.unSubscribeOnWebDataChange('PositionsStandAloneComponent');
  }
}
