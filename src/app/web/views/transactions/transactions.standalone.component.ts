import { Component, inject, ViewChild } from '@angular/core';
import { ActionButtonStanAloneComponent } from '../../shared/action-button/action-button.standalone.component';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { ShowErrorStandAloneComponent } from '../../../shared/component/showerror/show.error.standalone.component';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { AgGridConfig, CommonAgGridStandAloneComponent } from '../../shared/common-ag-grid/common.aggrid.standalone.component';
import { MatDialog } from '@angular/material/dialog';
import { WebService } from '../../service/web.service';
import { TransactionHistoryUiModal } from '../../shared/ui-model/web.ui.model';
import { CommonDialogStandAloneComponent } from '../../shared/dialogBox/common-dialog/common.dialog.standalone.component';
import { CommonCellRendererStandAloneComponent } from '../../shared/cell-renderer/common-cell-renderer/common-cell-renderer.standalone.component';
import { MatInputModule } from '@angular/material/input';
import { GridApi } from 'ag-grid-community';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss',
  standalone: true,
  imports: [CommonModule, ShowErrorStandAloneComponent, TranslateModule, MatCardModule, MatSelectModule, FormsModule, CommonAgGridStandAloneComponent, MatInputModule]
})
export class TransactionsStandAloneComponent {
  transactionGridData: any = [];
  showLoader: boolean = false;
  showGridLoader: boolean = false;
  gridConfig!: AgGridConfig;
  showFilters!: boolean;
  selectedFilters: any = { ownerType: "", platformId: "", externalAccount: "", id: "" };
  sortApiKey:any = {transactionTitlePopup: 'id', externalAccount: 'externalAccount', platformId: 'platformId', transactionAmountViewDisplay: 'amount', processTime: 'processTime'};

  @ViewChild(ShowErrorStandAloneComponent) errorComponent?: ShowErrorStandAloneComponent;
  readonly beTradeAccDetailDialog = inject(MatDialog);
  hideAgGrid!: boolean;
  gridApiObj!: GridApi;

  constructor(private _webService: WebService) {
    this._webService.subscribeOnWebDataChange('TransactionsStandAloneComponent', (event: any) => {
      this.recieveChildrenEmitter(event);
    });
    this.setupTransactionGridConfig();
  }
  
  getTransactionsData(event?: any) {
    let param: any = this.getParamsForTransactApi(event.params.request); 
    this._webService.getTransactionPageData(param).subscribe({
      next: (response: any) => {
        this.transactionGridData = [];
        response.transactHistory.items.forEach((obj: any) => this.transactionGridData.push(new TransactionHistoryUiModal(obj, response.providerData)));
        this.sendDataToAgGrid(true, event, response.transactHistory.count, this.transactionGridData);
      },
      error: (errorObj) => {
        this.sendDataToAgGrid(false, event, 0, []);
        this.showErrorWarnMessage(errorObj?.error?.errorMessage);
      }
    })
  }

  getParamsForTransactApi(requestParam: any) {
    let param: any = {};
    param['$count'] = true;
    param['$top'] = requestParam.endRow;
    param['$skip'] = requestParam.startRow;
    this.getOrderByQuery(requestParam.sortModel) ? param['$orderby'] = this.getOrderByQuery(requestParam.sortModel) : "";
    this.getFilterQuery() ? param['$filter'] = this.getFilterQuery() : "";
    return param;
  }

  getFilterQuery() {
    let filterQuery = "";
    if(this.selectedFilters.ownerType) {
      filterQuery += `ownerType eq '${this.selectedFilters.ownerType}' and `;
    }
    if(this.selectedFilters.platformId) {
      filterQuery += `platformId eq ${this.selectedFilters.platformId} and `;
    }
    if(this.selectedFilters.externalAccount) {
      filterQuery += `externalAccount eq ${this.selectedFilters.externalAccount} and `;
    }
    if(this.selectedFilters.id) {
      filterQuery += `id eq ${this.selectedFilters.id} and `;
    }
    return filterQuery ? filterQuery.slice(0, -4) : "";
  }

  getOrderByQuery(sortModel: any) {
    if(sortModel.length == 0) return; 
    let sortQuery = "";
    sortModel.forEach((obj: any) => {
      sortQuery += `${this.sortApiKey[obj.colId]} ${obj.sort},`;
    });
    return sortQuery.slice(0, -1);
  }

  sendDataToAgGrid(status: boolean, event: any, count: number, transactionGridData: any) {
    let serverResponse = {
      status: status,
      data: transactionGridData,
      rowCount: count
    }
    event.callback(serverResponse)   
  }

  applyTransactFilter() {
    if(this.showFilters)  {   
      this.showFilters = false;
      this.clearFilters();
    } else {
      this.showFilters = true;
    }
  }

  clearFilters() {
    this.resetFilter();
    this.gridApiObj.refreshServerSide();
  }

  refreshTransactDataList() {
    this.gridApiObj.refreshServerSide();
  }

  resetFilter() {
    this.selectedFilters = { ownerType: "", platformId: "", externalAccount: "", id: "" };
  }

  toggleLoadingOverlay(loaderType: string, loadingFlag: boolean) {
    if(loaderType == "showPageLoader") {
      this.setupTransactionGridConfig();
      this.showLoader = loadingFlag;
    } else if(loaderType == "showGridLoader") {
      this.showGridLoader = loadingFlag;
    }
  }

  showErrorWarnMessage(msg: any) {
    const errorConfigObj = this.errorComponent?.config;
    errorConfigObj.message = msg ? msg : errorConfigObj.message;
    this.errorComponent?.openErrorSnackbar();
  }

  setupTransactionGridConfig() {
    let colDefs = [
      { field: "transactionObj", headerName: 'TRANSACTIONS.Transaction', cellRenderer: CommonCellRendererStandAloneComponent, resizable: false, width: 150, suppressSizeToFit: true, colId: 'transactionTitlePopup' },
      { field: "externalAccount", headerName: 'TRANSACTIONS.Account', resizable: false, width: 150, suppressSizeToFit: true  },
      { field: "platformId", headerName: 'TRANSACTIONS.MT order', resizable: false, width: 150, suppressSizeToFit: true },
      { field: "transactionAmountObj", headerName: 'REPORTS.Amount', cellRenderer: CommonCellRendererStandAloneComponent, resizable: false, width: 150, colId: 'transactionAmountViewDisplay', suppressSizeToFit: true  },
      { field: "senderObj", headerName: 'TRANSACTIONS.Sender', resizable: false, width: 150, sortable : false, cellRenderer: CommonCellRendererStandAloneComponent, colId: 'transactionsenderAction', suppressSizeToFit: true },
      { field: "reciepentObj", headerName: 'TRANSACTIONS.Recipient', resizable: false, width: 150, sortable : false, cellRenderer: CommonCellRendererStandAloneComponent, colId: 'transactionRecipientAction', suppressSizeToFit: true },
      { field: "processTime", headerName: 'TRANSACTIONS.Processed', resizable: false, width: 200, suppressSizeToFit: true },
      { field: "actions", headerName: "", cellRenderer: ActionButtonStanAloneComponent, sortable : false, colId: 'transactionDetailsPopup', showPopupArraow: true, resizable: false }
    ];
    this.setupGridConfig(colDefs);
  }

  setupGridConfig(colDefs: any) {
    this.gridConfig = {
      maxHeight: '400px',
      noDataWarnMessage: 'There are no transactions',
      gridOptions: {},
      agGridTheme: 'ag-theme-alpine',
      pageSizeDropdownArr: [25, 50, 100],
      initialSelectedPageSize: 25,
      columnDefination: colDefs,
      enablePagination: true,
      headerNameLangArr: colDefs.map((o: any) => o.headerName),
      rowModelType: 'serverSide',
      rowHeight: undefined
    }
  }

  recieveChildrenEmitter(event: any) {
    if(event['action'] == 'open_transact_details_popup') {
      this.openBeTransactDetailsPopup(event['data']);
    } else if(event['action'] == 'get_server_side_data') {
      this.getTransactionsData(event);
    } else if(event['action'] == "set_grid_api_obj") {
      this.gridApiObj = event['data'];
    }
  }
  
  openBeTransactDetailsPopup(data: any) {
    this.beTradeAccDetailDialog.open(CommonDialogStandAloneComponent, {
      panelClass: 'common-dialog',
      data: this.prepareTransactHistoryData(data)
    });
    this.beTradeAccDetailDialog.afterAllClosed.subscribe((result)=>{});
  }

  prepareTransactHistoryData(transactionHistoryDetails: any) {
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
        { title: 'TRANSACTIONS.Recipient', value: transactionHistoryDetails.reciepentObj, type: 'recipent' },
        { title: 'TRANSACTIONS.Processed', value: transactionHistoryDetails.processTime },
      ] 
    };
    if(transactionHistoryDetails.senderObj.ownerType != "Provider") {
      commonDialogData.labelDetails.splice(6, 1); // remove trading result of follower user type
    }
    return commonDialogData;
  }

  ngOnDestroy() {
    this._webService.unSubscribeOnWebDataChange('TransactionsStandAloneComponent');
  }
}
