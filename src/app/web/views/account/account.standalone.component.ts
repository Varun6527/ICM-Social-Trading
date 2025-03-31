import { Component, inject, ViewChild } from '@angular/core';
import { ActionButtonStanAloneComponent } from '../../shared/cell-renderer/action-button-cell-renderer/action-button-cell-renderer.standalone.component';
import { TypeCellRendererStandAloneComponent } from '../../shared/cell-renderer/type-cell-renderer/type-cell-renderer.standalone.component';
import { TranslateModule} from '@ngx-translate/core';
import { WebService } from '../../service/web.service';
import { TradingAccountUIModal } from '../../shared/ui-model/web.ui.model';
import { ShowErrorStandAloneComponent } from '../../../shared/component/showerror/show.error.standalone.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { CommonDialogStandAloneComponent } from '../../shared/dialogBox/common-dialog/common.dialog.standalone.component';
import { MatDialog } from '@angular/material/dialog';
import { AgGridConfig, CommonAgGridStandAloneComponent } from '../../shared/common-ag-grid/common.aggrid.standalone.component';
import { CommonCellRendererStandAloneComponent } from '../../shared/cell-renderer/common-cell-renderer/common-cell-renderer.standalone.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
  standalone: true,
  imports: [CommonModule, ShowErrorStandAloneComponent, TranslateModule, MatCardModule, MatSelectModule, FormsModule, CommonAgGridStandAloneComponent]
})
export class AccountStandAloneComponent {
  accountGridData: any = [];
  selectedAccountStatus: string = "Active";
  showLoader: boolean = false;
  showGridLoader: boolean = false;
  showFilters: boolean = false;
  gridConfig!: AgGridConfig;

  @ViewChild(ShowErrorStandAloneComponent) errorComponent?: ShowErrorStandAloneComponent;
  readonly commonDialog = inject(MatDialog);
  hideAgGrid!: boolean;

  constructor(private _webService: WebService) {
    this._webService.subscribeOnWebDataChange('AccountStandAloneComponent', (event: any) => {
      this.recieveChildrenEmitter(event);
    });
    this.getAccountsData('showPageLoader');
    
  }
  
  getAccountsData(loaderType: any) {
    this.toggleLoadingOverlay(loaderType, true);
    let param = {
      scope: this.selectedAccountStatus,
      $count: true
    }
    this._webService.getTradingAccountData(param).subscribe({
      next: (response: any) => {
        this.accountGridData = [];
        response.items.forEach((obj: any) => this.accountGridData.push(new TradingAccountUIModal(obj)));
        this.toggleLoadingOverlay(loaderType, false);
      },
      error: (errorObj) => {
        this.showErrorWarnMessage(errorObj?.error?.errorMessage);
      }
    })
  }

  toggleLoadingOverlay(loaderType: string, loadingFlag: boolean) {
    if(loaderType == "showPageLoader") {
      this.setupAccountGridConfig();
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

  setupAccountGridConfig() {
    let colDefs = [
      { field: "tradingAccName", headerName: 'ACCOUNTS.Title', cellRenderer: CommonCellRendererStandAloneComponent, colId: 'accountDetailsPopup', autoHeight: true, wrapText: true, resizable: true, width: 250, sort: 'desc' },
      { field: 'type', headerName: 'ACCOUNTS.Type', cellRenderer: TypeCellRendererStandAloneComponent, cellStyle: { display: 'flex', 'justify-content': 'center', 'flex-direction': 'column'}, autoHeight: true, wrapText: true, resizable: true, width: 140 },
      { field: "tradingAccountNo", headerName: 'ACCOUNTS.Trading Account', autoHeight: true, wrapText: true, resizable: true, width: 200 },
      { field: "balance", headerName: 'ACCOUNTS.Balance', autoHeight: true, wrapText: true, resizable: true, width: 200, colId: 'currencyCell', cellRenderer: CommonCellRendererStandAloneComponent },
      { field: "equity", headerName: 'ACCOUNTS.Equity', autoHeight: true, wrapText: true, resizable: true, width: 200, colId: 'currencyCell', cellRenderer: CommonCellRendererStandAloneComponent },
      { field: "connectTime", headerName: 'ACCOUNTS.Connected', autoHeight: true, wrapText: true, resizable: true, width: 200 },
      { field: "actions", headerName: "", cellRenderer: ActionButtonStanAloneComponent, colId: 'accountDetailsPopup', showPopupArraow: true, sortable: false, autoHeight: true, wrapText: true, resizable: true, width: 200 }
    ];
    this.setupGridConfig(colDefs);
  }

  setupGridConfig(colDefs: any) {
    this.gridConfig = {
      maxHeight: '400px',
      noDataWarnMessage: 'There are no accounts data',
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

  refreshAccountDataList() {
    this.getAccountsData('showGridLoader');
  }

  clearFilters() {
    this.selectedAccountStatus = 'Active';
    this.refreshAccountDataList()
  }

  applyFilters() {
    if(this.showFilters) {
      this.showFilters = false;
      this.selectedAccountStatus !== 'Active' ? this.clearFilters() : "";
    } else {
      this.showFilters = true;
    }
  }

  recieveChildrenEmitter(event: any) {
    if(event['action'] == 'open_account_details_popup') {
      this.openBeTradingAccountPopup(event['data']);
    }
  }
  
  openBeTradingAccountPopup(data: any) {
    this.commonDialog.open(CommonDialogStandAloneComponent, {
      panelClass: 'common-dialog',
      data: this._webService.prepareTradingAccountData(data)
    });
    this.commonDialog.afterAllClosed.subscribe((result)=>{});
  }

  ngOnDestroy() {
    this._webService.unSubscribeOnWebDataChange('AccountStandAloneComponent');
  }
}
