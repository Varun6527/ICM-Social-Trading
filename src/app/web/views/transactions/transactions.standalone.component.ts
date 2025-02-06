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
import { BeTradeAccDetailsStandAloneComponent } from '../home/dialogBox/beTradeAccountDetailsDialog.standalone.component';
import { NicknameRendererStandAloneComponent } from '../providers/cellRenderers/nickname-renderer/nickname-renderer.standalone.component';

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
    this._webService.getTransactionHistoryData(param).subscribe({
      next: (response: any) => {
        this.transactionGridData = [];
        // response.items.forEach((obj: any) => this.transactionGridData.push(new TransactionHistoryUiModal(obj)));
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
      { field: "id", headerName: 'TRANSACTIONS.Transaction', cellRenderer: NicknameRendererStandAloneComponent, resizable: false, maxWidth: 200, suppressSizeToFit: true, type: 'transactionTitlePopup' },
      { field: "externalAccount", headerName: 'TRANSACTIONS.Account', resizable: false, maxWidth: 200 },
      { field: "platformId", headerName: 'TRANSACTIONS.MT order', resizable: false, maxWidth: 200 },
      { field: "amount", headerName: 'REPORTS.Amount', resizable: false, maxWidth: 200 },
      { field: "senderName", headerName: 'TRANSACTIONS.Sender', resizable: false, maxWidth: 200, cellRenderer: NicknameRendererStandAloneComponent, type: 'transactionsenderAction' },
      { field: "recipientName", headerName: 'TRANSACTIONS.Recipient', resizable: false, maxWidth: 200, cellRenderer: NicknameRendererStandAloneComponent, type: 'transactionRecipientAction' },
      { field: "processTime", headerName: 'TRANSACTIONS.Processed', resizable: false, maxWidth: 200 },
      { field: "actions", headerName: "", cellRenderer: ActionButtonStanAloneComponent, flex: 1, type: 'transactionDetailsPopup' }
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
    this.beTradeAccDetailDialog.open(BeTradeAccDetailsStandAloneComponent, {
      panelClass: 'beTradeAccDetails-dialog',
      data: data
    });
    this.beTradeAccDetailDialog.afterAllClosed.subscribe((result)=>{});
  }

  ngOnDestroy() {
    this._webService.unSubscribeOnWebDataChange('TransactionsStandAloneComponent');
  }
}
