import { Component, inject, ViewChild} from '@angular/core';
import { ActionButtonStanAloneComponent } from '../../shared/action-button/action-button.standalone.component';
import {MatDialog } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';
import { CommonCellRendererStandAloneComponent } from '../../shared/cell-renderer/common-cell-renderer/common-cell-renderer.standalone.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ShowErrorStandAloneComponent } from '../../../shared/component/showerror/show.error.standalone.component';
import { ConstantVariable } from '../../../shared/model/constantVariable.model';
import { WebService } from '../../service/web.service';
import { AgGridConfig, CommonAgGridStandAloneComponent } from '../../shared/common-ag-grid/common.aggrid.standalone.component';
import { CommonDialogStandAloneComponent } from '../../shared/dialogBox/common-dialog/common.dialog.standalone.component';
import { TransactionHistoryUiModal, TradingResultUiModal, ProfitsUiModal, DealsUiModal, TradingAccountUIModal } from '../../shared/ui-model/web.ui.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-position',
  templateUrl: './positions.component.html',
  styleUrl: './positions.component.scss',
  standalone: true,
  imports: [CommonModule, MatMenuModule, CommonAgGridStandAloneComponent, RouterModule, FormsModule, MatTabsModule, TranslateModule, MatSelectModule, MatInputModule, MatCardModule]
})
export class PositionsStandAloneComponent {
  currentSelectedTabIndx: number = 0;
  tabArrConfig: any = [];
  providerId: any;
  positionId: any;
  accountId: any;
  showPageLoader: boolean = false;
  constantVariable: ConstantVariable = new ConstantVariable();

  readonly beDealsDialog = inject(MatDialog);
  readonly tradingDialog = inject(MatDialog);
  @ViewChild(ShowErrorStandAloneComponent) errorComponent?: ShowErrorStandAloneComponent;
  positionData: any = {};
  providersData: any = {};
  tradeAccountData: any = {};
  positionStatsData: any = {};

  constructor(private _webService: WebService, private route: ActivatedRoute, private _router : Router) {
    this.route.paramMap.subscribe(params => {
      this.providerId = params.get('providerId')!;
      this.positionId = params.get('positionId')!;
      this.getAllPositionPageData();
    });
    this._webService.subscribeOnWebDataChange('PositionsStandAloneComponent', (event: any) => {
      this.recieveChildrenEmitter(event);
    });
  }

  async getAllPositionPageData() {
    this.showPageLoader = true;
    let result1 = await this.getPositionData();
    let result2 = await this.getPositionStatsData();
    let result3 = await this.getTradingAccountData();
    let result4 = await this.getProviderData();
    this.setUpTabsConfig();
    this.getGridData(this.tabArrConfig[0]);
    this.showPageLoader = false;
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

  getPositionData() {
    return new Promise<void>((resolve) => {
      let param = { positionId: this.positionId };
      this._webService.getSinglePosotionData(param).subscribe({
        next: (response) => {
          this.positionData = response;
          this.providerId = this.positionData.providerId;
          this.accountId = this.positionData.accountId;
          resolve();
        },
        error: (errorObj) => {
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
    let apiUrl = this.constantVariable?.http_Api_Url.provider_profile.deals.replace(':providerId', this.providerId);
    return {
      label: 'PROVIDERS_PROFILE.Deals',
      filters: {
        show: false,
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
          getFilterParam.apply(this) ? param['$filter'] = getFilterParam.apply(this).slice(0, -4) : "";
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
      rowModelType: 'clientSide',
      rowHeight: undefined
    };
    return gridConfig;
  }
  
  getGridColDefs(gridType: string) {
    if (gridType == 'deals') {
      return [
        { field: "dealKey", headerName: 'PROVIDERS_PROFILE.Deal', resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: 'dealsTitleCell'  },
        { field: "entry", headerName: 'PROVIDERS_PROFILE.Entry', sortable: false, resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: 'tagCell' },
        { field: "symbol", headerName: 'PROVIDERS_PROFILE.Symbol', resizable: false },
        { field: "volume", headerName: 'PROVIDERS_PROFILE.Volume', resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: 'dealsVolumeCell' },
        { field: "price", headerName: 'PROVIDERS_PROFILE.Price', resizable: false },
        { field: "time", headerName: 'PROVIDERS_PROFILE.Time', sort: 'desc', resizable: false },
        { field: "actions", headerName: "", sortable : false, cellRenderer: ActionButtonStanAloneComponent, showPopupArraow: true, colId: 'dealsPopup'},
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
    if(event['action'] == 'open_deals_popup') {
      this.openDealsPopup(event['data']);
    }
  }

  openDealsPopup(data: any) {
    this.beDealsDialog.open(CommonDialogStandAloneComponent, {
      panelClass: 'common-dialog',
      data: this.prepareDealsData(data)
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

  openBeTradingAccountPopup() {
    this.tradingDialog.open(CommonDialogStandAloneComponent, {
      panelClass: 'common-dialog',
      data: this.prepareTradingAccountData()
    });
    this.tradingDialog.afterAllClosed.subscribe((result) => { });
  }

  prepareTradingAccountData() {
    let tradingAccountDetails = this.tradeAccountData;
    let commonDialogData = {
      mainTitle: 'HOME.TradingAccInfo',
      secondryTitle: 'ACCOUNTS.InfoMetaTradeAccount',
      labelDetails: [
        { title: 'COMMON.Id', value: tradingAccountDetails.clientId },
        { title: 'COMMON.State', value: tradingAccountDetails.state, type: 'tag' },
        { title: 'ACCOUNTS.Connected', value: tradingAccountDetails.connectTime },
        { title: 'PROVIDERS_PROFILE.MT login', value: tradingAccountDetails.tradingAccountNo },
        { title: 'PROVIDERS_PROFILE.MT name', value: tradingAccountDetails.tradingAccName },
        { title: 'ACCOUNTS.TradeGroupType', value: tradingAccountDetails.tradeGroupType, type: 'tag' },
        { title: 'ACCOUNTS.AvailInMetaTrade', value: tradingAccountDetails.avialableInMetaTrade, type: 'tag' },
        { title: 'ACCOUNTS.TradeType', value: tradingAccountDetails.tradeType, type: 'tag' },
        { title: 'PROVIDERS_PROFILE.Currency', value: tradingAccountDetails.currency },
        { title: 'ACCOUNTS.Balance', value: tradingAccountDetails.balance },
        { title: 'ACCOUNTS.Credit', value: tradingAccountDetails.credit },
        { title: 'ACCOUNTS.Equity', value: tradingAccountDetails.equity },
        { title: 'ACCOUNTS.FloatProfit', value: tradingAccountDetails.floatingPoint }
      ] 
    }
    return commonDialogData;
  }

  ngOnDestroy() {
    this._webService.unSubscribeOnWebDataChange('PositionsStandAloneComponent');
  }
}
