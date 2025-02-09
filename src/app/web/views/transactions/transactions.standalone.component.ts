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
import { CommonCellRendererStandAloneComponent } from '../providers/cellRenderers/common-cell-renderer/common-cell-renderer.standalone.component';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss',
  standalone: true,
  imports: [CommonModule, ShowErrorStandAloneComponent, TranslateModule, MatCardModule, MatSelectModule, FormsModule, CommonAgGridStandAloneComponent]
})
export class TransactionsStandAloneComponent {
  transactionGridData: any = [];
  showLoader: boolean = false;
  showGridLoader: boolean = false;
  gridConfig!: AgGridConfig;

  @ViewChild(ShowErrorStandAloneComponent) errorComponent?: ShowErrorStandAloneComponent;
  readonly beTradeAccDetailDialog = inject(MatDialog);
  hideAgGrid!: boolean;

  constructor(private _webService: WebService) {
    this._webService.subscribeOnWebDataChange('TransactionsStandAloneComponent', (event: any) => {
      this.recieveChildrenEmitter(event);
    });
    this.getTransactionsData('showPageLoader');
  }
  
  getTransactionsData(loaderType: any) {
    this.toggleLoadingOverlay(loaderType, true);
    let param = {
      $count: true
    }
    this._webService.getTransactionPageData(param).subscribe({
      next: (response: any) => {
        this.transactionGridData = [];
        response.transactHistory.items.forEach((obj: any) => this.transactionGridData.push(new TransactionHistoryUiModal(obj, response.providerData)));
        this.toggleLoadingOverlay(loaderType, false);
      },
      error: (errorObj) => {
        this.showErrorWarnMessage(errorObj?.error?.errorMessage);
      }
    })
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
      { field: "transactionObj", headerName: 'TRANSACTIONS.Transaction', cellRenderer: CommonCellRendererStandAloneComponent, resizable: false, maxWidth: 200, suppressSizeToFit: true, colId: 'transactionTitlePopup' },
      { field: "externalAccount", headerName: 'TRANSACTIONS.Account', resizable: false, maxWidth: 200 },
      { field: "platformId", headerName: 'TRANSACTIONS.MT order', resizable: false, maxWidth: 200 },
      { field: "transactionAmountObj", headerName: 'REPORTS.Amount', cellRenderer: CommonCellRendererStandAloneComponent, resizable: false, maxWidth: 200, colId: 'transactionAmountViewDisplay'  },
      { field: "senderObj", headerName: 'TRANSACTIONS.Sender', resizable: false, maxWidth: 200, sortable : false, cellRenderer: CommonCellRendererStandAloneComponent, colId: 'transactionsenderAction' },
      { field: "reciepentObj", headerName: 'TRANSACTIONS.Recipient', resizable: false, maxWidth: 200, sortable : false, cellRenderer: CommonCellRendererStandAloneComponent, colId: 'transactionRecipientAction' },
      { field: "processTime", headerName: 'TRANSACTIONS.Processed', resizable: false, width: 200 },
      { field: "actions", headerName: "", cellRenderer: ActionButtonStanAloneComponent, flex: 1, sortable : false, type: 'transactionDetailsPopup' }
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
      headerNameLangArr: colDefs.map((o: any) => o.headerName)
    }
  }

  refreshAccountDataList() {
    this.getTransactionsData('showGridLoader');
  }

  recieveChildrenEmitter(event: any) {
    if(event['action'] == 'open_transact_details_popup') {
      this.openBeTransactDetailsPopup(event['data']);
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
