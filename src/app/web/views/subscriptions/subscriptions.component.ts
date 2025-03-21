import {Component, inject, ViewChild} from '@angular/core';
import { ActionButtonStanAloneComponent } from '../../shared/action-button/action-button.standalone.component';
import { MatDialog } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonCellRendererStandAloneComponent } from '../../shared/cell-renderer/common-cell-renderer/common-cell-renderer.standalone.component';
import { ProviderCommonInfoDialog } from '../../shared/dialogBox/provider-common-info-dialog/providerCommonInfoDialog.standalone.component';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { ProviderFollowerHeaderCardsStandaloneComponent } from '../../shared/provider-follower-header-cards/provider.follower.header.cards.standalone.component';
import { ActivatedRoute, Router } from '@angular/router';
import { WebService } from '../../service/web.service';
import { ShowErrorStandAloneComponent } from '../../../shared/component/showerror/show.error.standalone.component';
import { DealsUiModal, PositionUiModal, TradingAccountUIModal, TransactionHistoryUiModal } from '../../shared/ui-model/web.ui.model';
import { CommonDialogStandAloneComponent } from '../../shared/dialogBox/common-dialog/common.dialog.standalone.component';
import { FormsModule } from '@angular/forms';
import { AgGridConfig, CommonAgGridStandAloneComponent } from '../../shared/common-ag-grid/common.aggrid.standalone.component';
import { ConstantVariable } from '../../../shared/model/constantVariable.model';
import { CreateOfferDialog } from '../../shared/dialogBox/create-offer-dialog/createOfferDialog.standalone.component';
import { ArchiveDialog } from '../../shared/dialogBox/archive-dialog/archiveDialog.standalone.component';
import { SubscriptionInfoDialog } from '../../shared/dialogBox/subscription-info-dialog/subscriptionInfoDialog.standalone.component';
import { ActiveOrDeactiveSubscriptionDialog } from '../../shared/dialogBox/active-or-deactive-subscription-dialog/activeOrDeactiveSubscriptionDialog.standalone.component';
import { CreateUpdateRiskDialog } from '../../shared/dialogBox/create-update-risk-dialog/createUpdateRisk.standalone.component';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrl: './subscriptions.component.scss',
  standalone: true,
  imports: [CommonModule, CommonAgGridStandAloneComponent, FormsModule, ShowErrorStandAloneComponent, ProviderFollowerHeaderCardsStandaloneComponent, MatMenuModule, MatTabsModule, TranslateModule, MatSelectModule, MatInputModule, MatCardModule],
  providers: [CurrencyPipe]
})
export class SubscriptionsStandAloneComponent {
  subscriptionId: any;
  subscriptionData: any;
  providerId: any;
  providerData: any;
  accountId: any;
  tradeAccountData: any;
  offerData: any;
  offerId: any;

  showPageLoader: boolean = false;
  showRiskGridLoder: any = false;
  riskGridConfig: any = {};
  riskGridData: any = [];
  tabArrConfig: any = [];
  constantVariable: ConstantVariable = new ConstantVariable();
  currentSelectedTabIndx: number = 0;
  isEmailExist: boolean = false;

  @ViewChild(ShowErrorStandAloneComponent) errorComponent?: ShowErrorStandAloneComponent;
  readonly tradingDialog = inject(MatDialog);
  readonly commonInfoDialog = inject(MatDialog);
  readonly beFeesDetailDialog = inject(MatDialog);
  readonly beDealsDialog = inject(MatDialog);
  readonly createOrUpdateRiskDialog = inject(MatDialog);
  readonly subscriptionArchiveDialog = inject(MatDialog);
  readonly subscriptionInfoDialog = inject(MatDialog);
  readonly activeOrDeactiveSubscriptionDialog = inject(MatDialog);

  
  constructor(private currencyPipe: CurrencyPipe, private router: Router, public translate: TranslateService, private _webService: WebService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.subscriptionId = params.get('subscriptionId')!;
      this.getAllSubscriptionProfilePageData();
    });
    this._webService.subscribeOnWebDataChange('SubscriptionsStandAloneComponent', (event: any) => {
      this.recieveChildrenEmitter(event);
    });
  }

  async getAllSubscriptionProfilePageData() {
    this.showPageLoader = true;
    let result1 = await this.getSubscriptionProfileData();
    let result2 = await this.getProviderData();
    let result3 = await this.getTradingAccountData();
    let result4 = await this.getOfferData();
    this.setupRiskGridConfig();
    let result5 = await this.getRiskData();
    this.setUpTabsConfig();
    this.getGridData(this.tabArrConfig[0]);
    this.showPageLoader = false;
    this.openImportantInfoPopup();
  }

  openImportantInfoPopup() {
    if(this.subscriptionData.state !== 'Archived') {
      if(this.subscriptionData.activationHistory == 'New' && !this.subscriptionData.isActivated) {
        const dialogRef = this.subscriptionInfoDialog.open(SubscriptionInfoDialog, {
          panelClass: 'info-dialog'
        });
        dialogRef.afterClosed().subscribe((event) => {
          this.recieveChildrenEmitter(event);
        });
      }
    }
  }

  setUpTabsConfig() {
    this.tabArrConfig = this.getSubscriptionProfileTabsConfig();
  }

  getSubscriptionProfileTabsConfig() {
    let arr = [];
    arr.push(
      this.getPositionTabConfigObj(),
      this.getDealsTabConfigObj(),
      this.getFeesTabConfig()
    );
    return arr;
  }

  getPositionTabConfigObj() {
    let apiUrl = this.constantVariable?.http_Api_Url.subscription_profile.position.replace(':subscriptionId', this.subscriptionId);
    return {
      label: 'PROVIDERS_PROFILE.Positions',
      filters: {
        show: false,
        type: { position: "", posState: "", symbol: "" },
        clear: function() {
          this.type = { position: "", posState: "", symbol: "" };
        },
        getApiParams: function () {
          let param: any = {};
          let getFilterParam = () => {
            let filterQuery = "";
            if (this.type.posState) {
              filterQuery += `state eq '${this.type.posState}' and `;
            }
            if (this.type.symbol) {
              filterQuery += `contains(tolower(symbol), '${this.type.symbol}') and `;
            }
            if (this.type.position) {
              filterQuery += `position eq ${this.type.position} and `;
            }
            return filterQuery;
          }
          param['$count'] = true;
          getFilterParam.apply(this) ? param['$filter'] = getFilterParam.apply(this).slice(0, -4) : "";
          return param;
        }
      },
      grid: this.getCommonGridDetails('position', 'There are no position', PositionUiModal, apiUrl)
    }
  }

  getDealsTabConfigObj() {
    let apiUrl = this.constantVariable?.http_Api_Url.subscription_profile.deals.replace(':subscriptionId', this.subscriptionId)
    return {
      label: 'PROVIDERS_PROFILE.Deals',
      filters: {
        show: false,
        type: { dealKey: "", entry: "", symbol: "" },
        clear: function() {
          this.type = { dealKey: "", entry: "", symbol: "" };
        },
        getApiParams: function () {
          let param: any = {};
          let getFilterParam = () => {
            let filterQuery = "";
            if (this.type.dealKey) {
              filterQuery += `dealKey eq '${this.type.dealKey}' and `;
            }
            if (this.type.entry) {
              filterQuery += `entry eq '${this.type.entry}' and `;
            }
            if (this.type.symbol) {
              filterQuery += `symbol eq '${this.type.symbol}' and `;
            }
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


  getFeesTabConfig() {
    return {
      label: 'PROVIDERS_PROFILE.Fees',
      filters: {
        show: false,
        type: { id: "", platformId: "" },
        clear: function() {
          this.type = { id: "", platformId: "" };
        },
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
            filterQuery += `ownerId eq ${this.subscriptionId} and ownerType eq 'Subscription' and `
            return filterQuery;
          }
          param['$count'] = true;
          getFilterParam.apply(this) ? param['$filter'] = getFilterParam.apply(this).slice(0, -4) : "";
          return param;
        }
      },
      grid: this.getCommonGridDetails('fees', 'There are no fees', TransactionHistoryUiModal, this.constantVariable?.http_Api_Url.transactionsHistory.get, this.providerData)
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

  getClientDetails() {
    this._webService.getClientDetails().subscribe({
      next: (response: any) => {
        this.isEmailExist = response.settings.email ? true : false;
      },
      error: (errorObj) => {
        this.showErrorWarnMessage(errorObj?.error?.errorMessage);
      }
    });
  }

  getSubscriptionProfileData() {
    return new Promise<void>((resolve) => {
      let param = { subscriptionId: this.subscriptionId };
      this._webService.getFollowerDataById(param).subscribe({
        next: (response: any) => {
          this.subscriptionData = response;
          this.providerId = response.providerId;
          this.accountId = response.accountId;
          this.offerId = response.offerId;
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
      this._webService.getProviderDataById(param).subscribe({
        next: (response: any) => {
          this.providerData = response;
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
        next: (response: any) => {
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

  getOfferData() {
    return new Promise<void>((resolve) => {
      let param = { offerId: this.offerId };
      this._webService.getBriefOfferDataById(param).subscribe({
        next: (response: any) => {
          this.offerData = response;
          resolve();
        },
        error: (errorObj) => {
          this.showErrorWarnMessage(errorObj?.error?.errorMessage);
          resolve();
        }
      })
    })
  }

  showErrorWarnMessage(msg: any) {
    const errorConfigObj = this.errorComponent?.config;
    errorConfigObj.message = msg ? msg : errorConfigObj.message;
    this.errorComponent?.openErrorSnackbar();
  }

  setupRiskGridConfig() {
    let colDefs = this.getGridColDefs('risk');
    this.riskGridConfig = this.getCommonGridConfig(colDefs, 'No rules are added');
  }

  getRiskData() {
    return new Promise<void>((resolve) => {
      this.showRiskGridLoder = true;
      let param = {
        subscriptionId: this.subscriptionId
      }
      this._webService.getAllRiskData(param).subscribe({
        next: (response: any) => {
          this.riskGridData = response.rules;
          this.showRiskGridLoder = false;
          resolve();
        },
        error: (errorObj) => {
          this.showRiskGridLoder = false;
          this.showErrorWarnMessage(errorObj?.error?.errorMessage);
          resolve();
        },
        complete: () => {
          resolve();
        }
      })
    })
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

  onTabChange(event: any) {
    this.currentSelectedTabIndx = event.index;
    this.getGridData(this.tabArrConfig[this.currentSelectedTabIndx]);
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

  getGridColDefs(gridType: string) {
    if(gridType == 'risk') {
      return [
        { field: "threshold", headerName: 'Parameter', resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: 'thresHoldCell' },
        { field: "subscriptionAction", headerName: 'Actions', resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: 'subscriptionActionCell' },
        { field: "actions", headerName: "",sortable : false, cellRenderer: ActionButtonStanAloneComponent, colId: 'riskCell', resizable: false },
      ];
    } else if(gridType == 'position') {
      return [

        { field: "position", headerName: 'PROVIDERS_PROFILE.Position', resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: 'positionSubscriptionNameCell' },
        { field: "copyPosition", headerName: 'PROVIDERS_PROFILE.Source', resizable: false },
        { field: "status", headerName: 'COMMON.Status', resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: 'tagCell' },
        { field: "symbol", headerName: 'PROVIDERS_PROFILE.Symbol', resizable: false },
        { field: "openTime", headerName: 'PROVIDERS_PROFILE.Open Time', sort: 'desc', resizable: false },
        { field: "volume", headerName: 'PROVIDERS_PROFILE.Volume', resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: 'positionVolumeCell' },
        { field: "profit", headerName: 'PROVIDERS_PROFILE.Profit', resizable: false },
        { field: "closeTime", headerName: 'PROVIDERS_PROFILE.Close Time', resizable: false },
        { field: "actions", headerName: "", sortable : false, cellRenderer: ActionButtonStanAloneComponent, resizable: false, colId: 'positionSubscriptionRedirection' },
      ]
    } else if(gridType == 'deals') {
      return [
        { field: "dealKey", headerName: 'PROVIDERS_PROFILE.Deal', resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: 'dealsTitleCell'  },
        { field: "position", headerName: 'PROVIDERS_PROFILE.Position', resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: 'dealSubscriptionPositionCell' },
        { field: "status", headerName: 'COMMON.Status', sortable : false, resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: 'tagCell' },
        { field: "copyDealKey", headerName: 'PROVIDERS_PROFILE.Source', resizable: false },
        { field: "entry", headerName: 'PROVIDERS_PROFILE.Entry', sortable: false, resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: 'tagCell' },
        { field: "symbol", headerName: 'PROVIDERS_PROFILE.Symbol', resizable: false },
        { field: "volume", headerName: 'PROVIDERS_PROFILE.Volume', resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: 'dealsVolumeCell' },
        { field: "price", headerName: 'PROVIDERS_PROFILE.Price', resizable: false },
        { field: "time", headerName: 'PROVIDERS_PROFILE.Time', sort: 'desc', resizable: false },
        { field: "actions", headerName: "", sortable : false, cellRenderer: ActionButtonStanAloneComponent, showPopupArraow: true, colId: 'dealsPopup'},
      ]
    } else if(gridType == 'fees') {
      return [
        { field: "transactionObj", headerName: 'PROVIDERS_PROFILE.Fees', sort: 'desc', cellRenderer: CommonCellRendererStandAloneComponent, resizable: false, colId: 'transactionTitlePopup' },
        { field: "platformId", headerName: 'TRANSACTIONS.MT order', resizable: false, suppressSizeToFit: true },
        { field: "transactionAmountObj", headerName: 'REPORTS.Amount', cellRenderer: CommonCellRendererStandAloneComponent, resizable: false, colId: 'transactionAmountViewDisplay'  },
        { field: "processTime", headerName: 'TRANSACTIONS.Processed', resizable: false },
        { field: "actions", headerName: "", cellRenderer: ActionButtonStanAloneComponent, sortable : false, colId: 'transactionDetailsPopup', showPopupArraow: true, resizable: false }
      ]
    }
    return;
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

  recieveChildrenEmitter(event: any) {
    if(event['action'] == 'open_transact_details_popup') {
      this.openBeFeesDetailsPopup(event['data']);
    } else if(event['action'] == 'open_deals_popup') {
      this.openDealsPopup(event['data']);
    } else if(event['action'] == 'refresh_subscription_data') {
      this.refreshSubscriptionData();
    } else if(event['action'] == 'update_risk_data') {
      this.openCreateOrUpdateRiskModal(true, event.data);
    } else if(event['action'] == 'update_user_email') {
      this.isEmailExist = event.email ? true : false;
    } else if(event['action'] == 'redirect_to_subscription_page') {
      this.router.navigate(['/portal/subscriptions']);
    } else if(event['action'] == 'refresh_risk_data') {
      this.refreshRiskData();
    }
  }

  async refreshSubscriptionData() {
    let result = await this.getSubscriptionProfileData();
  }

  async refreshRiskData() {
    let result = await this.getRiskData();
  }

  openBeTradingAccountPopup() {
    this.tradingDialog.open(CommonDialogStandAloneComponent, {
      panelClass: 'common-dialog',
      data: this.prepareTradingAccountData()
    });
    this.tradingDialog.afterAllClosed.subscribe((result) => { });
  }

  openDealsPopup(data: any) {
    this.beDealsDialog.open(CommonDialogStandAloneComponent, {
      panelClass: 'common-dialog',
      data: this.prepareDealsData(data)
    });
    this.beDealsDialog.afterAllClosed.subscribe((result)=>{});
  }

  openBeFeesDetailsPopup(data: any) {
    this.beFeesDetailDialog.open(CommonDialogStandAloneComponent, {
      panelClass: 'common-dialog',
      data: this.prepareFeesData(data)
    });
    this.beFeesDetailDialog.afterAllClosed.subscribe((result)=>{});
  }

  openCommonInfoDialog(modelType: string) {
    const dialogRef = this.commonInfoDialog.open(ProviderCommonInfoDialog, {
      panelClass: 'subscriptionProfile-commonInfo',
      data: { subscriptionData: this.subscriptionData, modelType: modelType }
    });
    dialogRef.afterClosed().subscribe(event => {
      this.recieveChildrenEmitter(event);
    });
  }

  openCreateOrUpdateRiskModal(isUpdate: any, formData?: any) {
    const dialogRef = this.createOrUpdateRiskDialog.open(CreateUpdateRiskDialog, {
      panelClass: 'create-update-risk-dialog',
      data: { subscriptionData: this.subscriptionData, isUpdate: isUpdate, riskData: this.riskGridData, riskFormData: formData }
    });
    dialogRef.afterClosed().subscribe((event) => {
      this.recieveChildrenEmitter(event);
    });
  }

  openSubscriberArchiveModal() {
    const dialogRef = this.subscriptionArchiveDialog.open(ArchiveDialog, {
      panelClass: 'archive-dialog',
      data: { subscriptionData: this.subscriptionData, modelType: 'subscription' } 
    });
    dialogRef.afterClosed().subscribe((event) => {
      this.recieveChildrenEmitter(event);
    });
  }

  openActiveOrDeactiveSubscriptionDialog(modelType: string) {
    const dialogRef = this.activeOrDeactiveSubscriptionDialog.open(ActiveOrDeactiveSubscriptionDialog, {
      panelClass: 'active-or-deactive-subscription-dialog',
      data: { subscriptionData: this.subscriptionData, modelType: modelType }
    });
    dialogRef.afterClosed().subscribe(event => {
      this.recieveChildrenEmitter(event);
    });
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

  prepareDealsData(dealsData: any) {
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
        { title: 'PROVIDERS_PROFILE.Profit', value: this.currencyPipe.transform(dealsData.profit, dealsData.currency, 'symbol') },
        { title: 'PROVIDERS_PROFILE.Error', value: dealsData.error },
        { title: 'PROVIDERS_PROFILE.Attempts', value: dealsData.attempts },
      ]
    };
    if(!dealsData.error) {
      commonDialogData.labelDetails.splice(commonDialogData.labelDetails.length - 2, 1);
    }
    return commonDialogData;
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
    this._webService.unSubscribeOnWebDataChange('SubscriptionsStandAloneComponent');
  }
}
