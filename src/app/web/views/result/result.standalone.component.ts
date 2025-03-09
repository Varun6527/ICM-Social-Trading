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
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CommonDialogStandAloneComponent } from '../../shared/dialogBox/common-dialog/common.dialog.standalone.component';
import { TransactionHistoryUiModal, ProfitsUiModal } from '../../shared/ui-model/web.ui.model';
import { ActionButtonStanAloneComponent } from '../../shared/action-button/action-button.standalone.component';
import { ConstantVariable } from '../../../shared/model/constantVariable.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss',
  standalone: true,
  imports: [CommonModule, CommonAgGridStandAloneComponent, FormsModule, MatMenuModule, MatTabsModule, TranslateModule, MatSelectModule, MatInputModule, MatCardModule, RouterModule]
})
export class ResultStandAloneComponent {
  currentSelectedTabIndx: number = 0;
  tabArrConfig: any = [];
  providerId: any;
  offerId: any;
  subscriptionId: any;
  resultId: any;
  showPageLoader: boolean = false;
  constantVariable: ConstantVariable = new ConstantVariable();

  readonly beFeesDetailDialog = inject(MatDialog);
  @ViewChild(ShowErrorStandAloneComponent) errorComponent?: ShowErrorStandAloneComponent;
  providersData: any = {};
  offerData: any = {};
  subscriptionData: any = {};
  resultData: any = {};

  constructor(private _webService: WebService, private route: ActivatedRoute, private _router : Router) {
    this.route.paramMap.subscribe(params => {
      this.providerId = params.get('providerId')!;
      this.subscriptionId = params.get('subscriptionId')!;
      this.resultId = params.get('resultId')!;
      this.getAllSubscriptionResultPageData();
    });
    this._webService.subscribeOnWebDataChange('ResultStandAloneComponent', (event: any) => {
      this.recieveChildrenEmitter(event);
    });
  }

  async getAllSubscriptionResultPageData() {
    this.showPageLoader = true;
    let result1 = await this.getResultData();
    let result2 = await this.getSubscriptionData();
    let result3 = await this.getProviderData();
    let result4 = await this.getOfferData();
    this.setUpTabsConfig();
    this.getGridData(this.tabArrConfig[0]);
    this.showPageLoader = false;
  }

  getResultData() {
    return new Promise<void>((resolve) => {
      let param = { resultId: this.resultId };
      this._webService.getSingleResultData(param).subscribe({
        next: (response) => {
          this.resultData = response;
          this.subscriptionId = this.resultData.subscriptionId;
          this.offerId = this.resultData.offerId;
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
      let param = { 
        providerId: this.providerId,
        subscriptionId: this.subscriptionId 
      };
      this._webService.getSubscriptionData(param).subscribe({
        next: (response) => {
          this.subscriptionData = response;
          this.providerId = this.subscriptionData.providerId;
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
      this.getProfitTabConfig(),
      this.getFeesTabConfig()
    );
    return arr;
  }

  getProfitTabConfig() {
    let url = this.constantVariable?.http_Api_Url.webHomePage.follower.profits.replace(':resultId', this.resultId);
    return {
      label: 'PROVIDERS_PROFILE.Profits',
      filters: {
        show: false,
        type: { origin: "", uniqueId: "" },
        clear: function() {
          this.type = { origin: "", uniqueId: "" };
        },
        getApiParams: function () {
          let param: any = {};
          let getFilterParam = () => {
            let filterQuery = "";
            if (this.type.origin) {
              filterQuery += `origin eq '${this.type.origin}' and `;
            }
            if (this.type.uniqueId) {
              filterQuery += `uniqueId eq '${this.type.uniqueId}' and `;
            }
            return filterQuery;
          }
          param['$count'] = true;
          getFilterParam.apply(this) ? param['$filter'] = getFilterParam.apply(this).slice(0, -4) : "";
          return param;
        }
      },
      grid: this.getCommonGridDetails('profits', 'There are no profits', ProfitsUiModal, url)
    }
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
        resultId: this.resultId,
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
            filterQuery += `reasonId eq ${this.resultId} and `;
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
    } else if (gridType == 'profits') {
      return [
        { field: "id", headerName: 'COMMON.Id', sort: 'desc', resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: 'profitId' },
        { field: "finalProfit", headerName: 'PROVIDERS_PROFILE.Final Profit', resizable: false },
        { field: "origin", headerName: 'PROVIDERS_PROFILE.Origin', resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: 'tagCell' },
        { field: "position", headerName: 'PROVIDERS_PROFILE.Position', resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: 'profitPositionCell' },
        { field: "processTime", headerName: 'PROVIDERS_PROFILE.Process Time', resizable: false }
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
        { title: 'TRANSACTIONS.Trading result', value: transactionHistoryDetails.senderObj.reasonId, type: 'trading_reason', redirectionUrl: `/portal/providers/${transactionHistoryDetails.senderObj.providerId}/subscriptions/${transactionHistoryDetails.senderObj.subscriptionId}/results/${transactionHistoryDetails.senderObj.reasonId}` },
        { title: 'TRANSACTIONS.Sender', value: transactionHistoryDetails.senderObj, type: 'sender' },
        { title: 'TRANSACTIONS.Processed', value: transactionHistoryDetails.processTime },
      ]
    };
    return commonDialogData;
  }

  redirectToSubscriptionPage() {
    this._router.navigate([`/portal/providers/${this.providerId}/subscriptions/${this.subscriptionId}`]);
  }

  ngOnDestroy() {
    this._webService.unSubscribeOnWebDataChange('ResultStandAloneComponent');
  }
}
