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
import { ActionButtonStanAloneComponent } from '../../shared/action-button/action-button.standalone.component';
import { ConstantVariable } from '../../../shared/model/constantVariable.model';

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

  async getAllProviderSubscriptionPageData() {
    this.showPageLoader = true;
    let result1 = await this.getSubscriptionData();
    let result2 = await this.getProviderData();
    let result3 = await this.getOfferData();
    this.setUpTabsConfig();
    this.getGridData(this.tabArrConfig[0]);
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
      filters: {
        show: false,
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
          getFilterParam.apply(this) ? param['$filter'] = getFilterParam.apply(this).slice(0, -4) : "";
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
      filters: {
        show: false,
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
          getFilterParam.apply(this) ? param['$filter'] = getFilterParam.apply(this).slice(0, -4) : "";
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
      rowModelType: 'clientSide',
      rowHeight: undefined
    };
    return gridConfig;
  }
  
  getGridColDefs(gridType: string) {
    if (gridType == 'fees') {
      return [
        { field: "transactionObj", headerName: 'PROVIDERS_PROFILE.Fees', sort: 'desc', cellRenderer: CommonCellRendererStandAloneComponent, resizable: false, colId: 'transactionTitlePopup' },
        { field: "platformId", headerName: 'TRANSACTIONS.MT order', resizable: false },
        { field: "transactionAmountObj", headerName: 'REPORTS.Amount', cellRenderer: CommonCellRendererStandAloneComponent, resizable: false, colId: 'transactionAmountViewDisplay' },
        { field: "processTime", headerName: 'TRANSACTIONS.Processed', resizable: false },
        { field: "actions", headerName: "", cellRenderer: ActionButtonStanAloneComponent, sortable: false, colId: 'transactionDetailsPopup', showPopupArraow: true, resizable: false }
      ]
    } else if (gridType == 'results') {
      return [
        { field: "resultId", headerName: 'PROVIDERS_PROFILE.Results', sort: 'desc', cellRenderer: CommonCellRendererStandAloneComponent, resizable: false, colId: 'resultIdCell' },
        { field: "offerTitle", headerName: 'PROVIDERS_PROFILE.Offer', sortable: false, resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: 'offerTitleCell' },
        { field: "startTime", headerName: 'PROVIDERS_PROFILE.Start time', resizable: false },
        { field: "endTime", headerName: 'PROVIDERS_PROFILE.End Time', resizable: false },
        { field: "amount", headerName: 'PROVIDERS_PROFILE.Fee Amount', resizable: false },
        { field: "actions", headerName: "", cellRenderer: ActionButtonStanAloneComponent, sortable: false, colId: 'tradingResultRedirection', resizable: false }
      ]
    }
    return;
  }

  onTabChange(event: any) {
    this.currentSelectedTabIndx = event.index;
    this.getGridData(this.tabArrConfig[this.currentSelectedTabIndx]);
  }

  getGridData(tab: any) {
    let gridConfig = tab.grid
    gridConfig.showLoader = true;
    let param: any = tab.filters.getApiParams();
    this._webService.getCommonGridData(gridConfig.apiUrl, param).subscribe({

      next: (response: any) => {
        let arr: any = [];
        response.items.forEach((obj: any) => arr.push(new gridConfig.uiModel(obj, gridConfig.uiModelSecondParamData)));
        gridConfig.data = arr;
        gridConfig.showLoader = false;
      },
      error: (errorObj: any) => {
        this.showErrorWarnMessage(errorObj?.error?.errorMessage);
        gridConfig.showLoader = false;
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
    this.getGridData(tab);
  }

  refreshDataList(tab: any) {
    this.getGridData(tab);
  }

  showErrorWarnMessage(msg: any) {
    const errorConfigObj = this.errorComponent?.config;
    errorConfigObj.message = msg ? msg : errorConfigObj.message;
    this.errorComponent?.openErrorSnackbar();
  }

  recieveChildrenEmitter(event: any) {
    if(event['action'] == 'open_transact_details_popup') {
      this.openBeFeesDetailsPopup(event['data']);
    }
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
