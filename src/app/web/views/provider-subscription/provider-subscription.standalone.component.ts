import {Component, inject, ViewChild} from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';
import { CommonCellRendererStandAloneComponent } from '../../shared/cell-renderer/common-cell-renderer/common-cell-renderer.standalone.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { WebService } from '../../service/web.service';
import { ShowErrorStandAloneComponent } from '../../../shared/component/showerror/show.error.standalone.component';
import { FormsModule } from '@angular/forms';
import { AgGridConfig, CommonAgGridStandAloneComponent } from '../../shared/common-ag-grid/common.aggrid.standalone.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CommonDialogStandAloneComponent } from '../../shared/dialogBox/common-dialog/common.dialog.standalone.component';
import { TradingResultUiModal, TransactionHistoryUiModal } from '../../shared/ui-model/web.ui.model';
import { ActionButtonStanAloneComponent } from '../../shared/cell-renderer/action-button-cell-renderer/action-button-cell-renderer.standalone.component';
import { ConstantVariable } from '../../../shared/model/constantVariable.model';
import { GridApi } from 'ag-grid-enterprise';

@Component({
  selector: 'app-provider-subscription',
  templateUrl: './provider-subscription.component.html',
  styleUrl: './provider-subscription.component.scss',
  standalone: true,
  imports: [CommonModule, CommonAgGridStandAloneComponent, FormsModule, MatMenuModule, MatTabsModule, TranslateModule, MatSelectModule, MatInputModule, MatCardModule, RouterModule]
})
export class ProviderSubscriptionStandAloneComponent {
  currentSelectedTabIndx: number = 0;
  tabArrConfig: any = [];
  providerId: any;
  offerId: any;
  subscriptionId: any;
  showPageLoader: boolean = false;
  constantVariable: ConstantVariable = new ConstantVariable();
  gridApiObj!: GridApi;
  serverRequestObj: any = {};

  readonly beFeesDetailDialog = inject(MatDialog);
  @ViewChild(ShowErrorStandAloneComponent) errorComponent?: ShowErrorStandAloneComponent;
  providersData: any = [];
  offerData: any = {};
  subscriptionData: any = {};

  constructor(private _webService: WebService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.providerId = params.get('providerId')!;
      this.subscriptionId = params.get('subscriptionId')!;
      this.getAllProviderSubscriptionPageData();
    });
    this._webService.subscribeOnWebDataChange('ProviderSubscriptionStandAloneComponent', (event: any) => {
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

  async getAllProviderSubscriptionPageData() {
    this.showPageLoader = true;
    let result1 = await this.getSubscriptionData();
    let result2 = await this.getProviderData();
    let result3 = await this.getOfferData();
    this.setUpTabsConfig();
    this.showPageLoader = false;
  }

  getSubscriptionData() {
    return new Promise<void>((resolve) => {
      let param = { 
        providerId: this.providerId,
        subscriptionId: this.subscriptionId 
      };
      this._webService.getSubscriptionData(param).subscribe({
        next: (response) => {
          this.subscriptionData = response;
          this.providerId = this.subscriptionData.providerId;
          this.offerId = this.subscriptionData.offerId;
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

  getOfferData() {
    return new Promise<void>((resolve) => {
      let param = { offerId: this.offerId };
      this._webService.getSingleOfferData(param).subscribe({
        next: (response: any) => {
          this.offerData = response;
          resolve();
        },
        error: (errorObj: any) => {
          this.showErrorWarnMessage(errorObj?.error?.errorMessage);
          resolve();
        },
        complete: () => {
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
      this.getFeesTabConfig()
    );
    if(this._webService.showSubscriptionsTradingResults) {
      arr.push(
        this.getResultTabConfig()
      );
    }
    return arr;
  }

  getFeesTabConfig() {
    return {
      label: 'PROVIDERS_PROFILE.Fees',
      sortApiKey: { transactionTitlePopup: "id", platformId: "platformId", transactionAmountViewDisplay: "amount", processTime: "processTime" },
      filters: {
        show: false,
        serverRequestObj: this.serverRequestObj,
        type: { id: "", platformId: "" },
        clear: function() {
          this.type = { id: "", platformId: "" };
        },
        providerId: this.providerId,
        subscriptionId: this.subscriptionId,
        getApiParams: function () {
          let param: any = {};
          let getFilterParam = () => {
            let filterQuery = "";
            if (this.type.id) {
              filterQuery += `id eq ${this.type.id} and `;
            }
            if (this.type.platformId) {
              filterQuery += `platformId eq ${this.type.platformId} and `;
            }
            filterQuery += `ownerId eq ${this.providerId} and ownerType eq 'Provider' and counterpartyId eq ${this.subscriptionId} and `
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
      grid: this.getCommonGridDetails('fees', 'There are no fees', TransactionHistoryUiModal, this.constantVariable?.http_Api_Url.transactionsHistory.get, this.providersData)
    }
  }

  getResultTabConfig() {
    let apiUrl = this.constantVariable?.http_Api_Url.webHomePage.follower.result.replace(':subscriptionId', this.subscriptionId);
    return {
      label: 'PROVIDERS_PROFILE.Results',
      sortApiKey: { resultIdCell: 'id', startTime: 'startTime', endTime: 'endTime', amount: "amount" },
      filters: {
        show: false,
        serverRequestObj: this.serverRequestObj,
        type: { resultId: "" },
        clear: function() {
          this.type = { resultId: "" };
        },
        providerId: this.providerId,
        subscriptionId: this.subscriptionId,
        getApiParams: function () {
          let param: any = {};
          let getFilterParam = () => {
            let filterQuery = "";
            if (this.type.resultId) {
              filterQuery += `id eq ${this.type.resultId} and `;
            }
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
      grid: this.getCommonGridDetails('results', 'There are no trading results', TradingResultUiModal, apiUrl, this.offerData)
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
    if (gridType == 'fees') {
      return [
        { field: "transactionObj", headerName: 'PROVIDERS_PROFILE.Fees', sort: 'desc', cellRenderer: CommonCellRendererStandAloneComponent, minWidth: 150, colId: 'transactionTitlePopup' },
        { field: "platformId", headerName: 'TRANSACTIONS.MT order', minWidth: 150 },
        { field: "transactionAmountObj", headerName: 'REPORTS.Amount', cellRenderer: CommonCellRendererStandAloneComponent, minWidth: 150, colId: 'transactionAmountViewDisplay' },
        { field: "processTime", headerName: 'TRANSACTIONS.Processed', minWidth: 200 },
        { field: "actions", headerName: "", cellRenderer: ActionButtonStanAloneComponent, sortable: false, colId: 'transactionDetailsPopup', showPopupArraow: true, minWidth: 100 }
      ]
    } else if (gridType == 'results') {
      return [
        { field: "resultId", headerName: 'PROVIDERS_PROFILE.Results', sort: 'desc', cellRenderer: CommonCellRendererStandAloneComponent, minWidth: 200, colId: 'resultIdCell' },
        { field: "offerTitle", headerName: 'PROVIDERS_PROFILE.Offer', sortable: false, minWidth: 150, cellRenderer: CommonCellRendererStandAloneComponent, colId: 'offerTitleCell' },
        { field: "startTime", headerName: 'PROVIDERS_PROFILE.Start time', minWidth: 200 },
        { field: "endTime", headerName: 'PROVIDERS_PROFILE.End Time', minWidth: 200 },
        { field: "amount", headerName: 'PROVIDERS_PROFILE.Fee Amount', minWidth: 150 },
        { field: "actions", headerName: "", cellRenderer: ActionButtonStanAloneComponent, sortable: false, colId: 'tradingResultRedirection', minWidth: 100 }
      ]
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
    if(event['action'] == 'open_transact_details_popup') {
      this.openBeFeesDetailsPopup(event['data']);
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

  openBeFeesDetailsPopup(data: any) {
    this.beFeesDetailDialog.open(CommonDialogStandAloneComponent, {
      panelClass: 'common-dialog',
      data: this.prepareFeesData(data)
    });
    this.beFeesDetailDialog.afterAllClosed.subscribe((result) => { });
  }

  prepareFeesData(transactionHistoryDetails: any) {
    let commonDialogData = {
      mainTitle: 'TRANSACTIONS.Transaction',
      secondryTitle: 'TRANSACTIONS.InfoAboutTransact',
      labelDetails: [
        { title: 'COMMON.State', value: transactionHistoryDetails.transactionObj.state },
        { title: 'SUBSCRIPTION.Trading account', value: transactionHistoryDetails.externalAccount },
        { title: 'TRANSACTIONS.MT order', value: transactionHistoryDetails.platformId },
        { title: 'TRANSACTIONS.Requested amount', value: transactionHistoryDetails.transactionAmountObj, type: 'transaction_amount' },
        { title: 'TRANSACTIONS.Processed amount', value: transactionHistoryDetails.processedAmountObj, type: 'transaction_amount' },
        { title: 'TRANSACTIONS.Reason', value: transactionHistoryDetails.transactionObj.reason },
        { title: 'TRANSACTIONS.Sender', value: transactionHistoryDetails.senderObj, type: 'sender' },
        { title: 'TRANSACTIONS.Recipient', value: transactionHistoryDetails.reciepentObj, type: 'recipent' },
        { title: 'TRANSACTIONS.Processed', value: transactionHistoryDetails.processTime },
      ]
    };
    return commonDialogData;
  }

  ngOnDestroy() {
    this._webService.unSubscribeOnWebDataChange('ProviderSubscriptionStandAloneComponent');
  }
}
