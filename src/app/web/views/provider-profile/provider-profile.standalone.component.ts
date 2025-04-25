import {Component, inject, ViewChild} from '@angular/core';
import { ActionButtonStanAloneComponent } from '../../shared/cell-renderer/action-button-cell-renderer/action-button-cell-renderer.standalone.component';
import { StatusBtnRendererStandAloneComponent } from '../../shared/cell-renderer/status-btn-renderer/status-btn-renderer.standalone.component';
import {MatDialog } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonCellRendererStandAloneComponent } from '../../shared/cell-renderer/common-cell-renderer/common-cell-renderer.standalone.component';
import { ProviderCommonInfoDialog } from '../../shared/dialogBox/provider-common-info-dialog/providerCommonInfoDialog.standalone.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { ProviderFollowerHeaderCardsStandaloneComponent } from '../../shared/provider-follower-header-cards/provider.follower.header.cards.standalone.component';
import { ActivatedRoute, Router } from '@angular/router';
import { WebService } from '../../service/web.service';
import { ShowErrorStandAloneComponent } from '../../../shared/component/showerror/show.error.standalone.component';
import { DealsUiModal, OfferDetailsUIModel, PositionUiModal, SubscriptionUiModal, TradingAccountUIModal, TransactionHistoryUiModal } from '../../shared/ui-model/web.ui.model';
import { CommonDialogStandAloneComponent } from '../../shared/dialogBox/common-dialog/common.dialog.standalone.component';
import { FormsModule } from '@angular/forms';
import { AgGridConfig, CommonAgGridStandAloneComponent } from '../../shared/common-ag-grid/common.aggrid.standalone.component';
import { ConstantVariable } from '../../../shared/model/constantVariable.model';
import { CreateOfferDialog } from '../../shared/dialogBox/create-offer-dialog/createOfferDialog.standalone.component';
import { ArchiveDialog } from '../../shared/dialogBox/archive-dialog/archiveDialog.standalone.component';
import { SharedLinkDialog } from '../../shared/dialogBox/shared-link-dialog/sharedLinkDialog.standalone.component';
import { UploadAvatarDialog } from '../../shared/dialogBox/upload-avatar-dialog/uploadAvatarDialog.standalone.component';
import { GridApi } from 'ag-grid-enterprise';

@Component({
  selector: 'app-provider-profile',
  templateUrl: './provider-profile.component.html',
  styleUrl: './provider-profile.component.scss',
  standalone: true,
  imports: [CommonModule, CommonAgGridStandAloneComponent, FormsModule, ShowErrorStandAloneComponent, ProviderFollowerHeaderCardsStandaloneComponent, MatMenuModule, MatTabsModule, TranslateModule, MatSelectModule, MatInputModule, MatCardModule]
})
export class ProviderProfileStandAloneComponent {
  providersData: any;
  tradeAccountData: any;
  providerId: any;
  showPageLoader: boolean = false;
  selectedOfferState: string = "Active";
  showOfferGridLoder: any = false;
  offerGridConfig: any = {};
  offerGridData: any = [];
  tabArrConfig: any = [];
  constantVariable: ConstantVariable = new ConstantVariable();
  currentSelectedTabIndx: number = 0;
  gridApiObj!: GridApi;
  serverRequestObj: any = {};

  @ViewChild(ShowErrorStandAloneComponent) errorComponent?: ShowErrorStandAloneComponent;
  readonly tradingDialog = inject(MatDialog);
  readonly commonInfoDialog = inject(MatDialog);
  readonly beFeesDetailDialog = inject(MatDialog);
  readonly beDealsDialog = inject(MatDialog);
  readonly createOfferDialog = inject(MatDialog);
  readonly providerArchiveDialog = inject(MatDialog);
  readonly sharedLinkDialog = inject(MatDialog);
  

  constructor(private router: Router, public translate: TranslateService, private _webService: WebService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.providerId = params.get('providerId')!;
      this.getAllProviderProfilePageData();
    });
    this._webService.subscribeOnWebDataChange('ProviderProfileStandAloneComponent', (event: any) => {
      this.recieveChildrenEmitter(event);
    });
  }

  async getAllProviderProfilePageData() {
    this.showPageLoader = true;
    let result1 = await this.getProviderProfileData();
    this.setupOffersGridConfig();
    let result2 = await this.getOffersData();
    this.setUpTabsConfig();
    this.showPageLoader = false;
  }

  setUpTabsConfig() {
    this.tabArrConfig = this.getProviderProfileTabsConfig();
  }

  getProviderProfileTabsConfig() {
    let arr = [];
    arr.push(
      this.getSubscriptionTabConfigObj(),
      this.getPositionTabConfigObj(),
      this.getDealsTabConfigObj(),
      this.getFeesTabConfig()
    );
    return arr;
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

  getSubscriptionTabConfigObj() {
    let apiUrl = this.constantVariable?.http_Api_Url.provider_profile.subscriptions.replace(':providerId', this.providerId);
    return {
      label: 'PROVIDERS_PROFILE.Subscriptions',
      sortApiKey: { providerSubscriptionNameCell: 'id', registerTime: 'registerTime' },
      filters: {
        show: false,
        serverRequestObj: this.serverRequestObj,
        type: { id: "", offerId: "", activationStatus: "", externalAccount: "", agent: "", scope: "Active" },
        clear: function() {
          this.type = { id: "", offerId: "", activationStatus: "", externalAccount: "", agent: "", scope: "Active" };
        },
        getApiParams: function () {
          let param: any = {};
          let getFilterParam = () => {
            let filterQuery = "";
            if (this.type.id) {
              filterQuery += `id eq ${this.type.id} and `;
            }
            if (this.type.offerId) {
              filterQuery += `offerId eq ${this.type.offerId} and `;
            }
            if (this.type.agent) {
              filterQuery += `agent eq ${this.type.agent} and `;
            }
            if (this.type.externalAccount) {
              filterQuery += `externalAccount eq ${this.type.externalAccount} and `;
            }
            if (this.type.activationStatus) {
              let isActivated = this.type.activationStatus == 'needsactivation' ? false : true;
              let activationStatus = this.type.activationStatus == 'activated' ? true : false;
              filterQuery += `(isActivated eq ${isActivated} and activationStatus eq ${activationStatus}) and `;
            }
            return filterQuery;
          }
          param['$count'] = true;
          param['scope'] = this.type.scope;
          param['$top'] = this.serverRequestObj.params.request.endRow;
          param['$skip'] = this.serverRequestObj.params.request.startRow;
          let orderVal = this.serverRequestObj.getOrderByQuery(this.serverRequestObj.params.request.sortModel);
          param['$orderby'] = orderVal ? orderVal : "";
          let filterVal = getFilterParam.apply(this);
          param['$filter'] = filterVal ? filterVal.slice(0, -4) : "";
          return param;
        }
      },
      grid: this.getCommonGridDetails('subscription', 'There are no subscription', SubscriptionUiModal, apiUrl, this.offerGridData)
    }
  }

  getPositionTabConfigObj() {
    let apiUrl = this.constantVariable?.http_Api_Url.provider_profile.position.replace(':providerId', this.providerId);
    return {
      label: 'PROVIDERS_PROFILE.Positions',
      sortApiKey: { positionNameCell: "position", symbol: "symbol", openTime: "openTime", positionVolumeCell: "openVolume", profit: "totalProfit", closeTime: "closeTime" },
      filters: {
        show: false,
        type: { position: "", posState: "", symbol: "" },
        clear: function() {
          this.type = { position: "", posState: "", symbol: "" };
        },
        serverRequestObj: this.serverRequestObj,
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
          param['$count'] = true;param['$top'] = this.serverRequestObj.params.request.endRow;
          param['$skip'] = this.serverRequestObj.params.request.startRow;
          let orderVal = this.serverRequestObj.getOrderByQuery(this.serverRequestObj.params.request.sortModel);
          param['$orderby'] = orderVal ? orderVal : "";
          let filterVal = getFilterParam.apply(this);
          param['$filter'] = filterVal ? filterVal.slice(0, -4) : "";
          return param;
        }
      },
      grid: this.getCommonGridDetails('position', 'There are no position', PositionUiModal, apiUrl)
    }
  }

  getDealsTabConfigObj() {
    let apiUrl = this.constantVariable?.http_Api_Url.provider_profile.deals.replace(':providerId', this.providerId)
    return {
      label: 'PROVIDERS_PROFILE.Deals',
      sortApiKey: { dealsTitleCell: "dealKey", dealPositionCell: "position", symbol: "symbol", dealsVolumeCell: "volume", price: "price", time: "time" },
      filters: {
        show: false,
        serverRequestObj: this.serverRequestObj,
        type: { dealKey: "", dealState: "", entry: "", symbol: "" },
        clear: function() {
          this.type = { dealKey: "", dealState: "", entry: "", symbol: "" };
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
            if (this.type.dealState) {
              filterQuery += `state eq '${this.type.dealState}' and `;
            }
            if (this.type.symbol) {
              filterQuery += `symbol eq '${this.type.symbol}' and `;
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
      grid: this.getCommonGridDetails('deals', 'There are no deals', DealsUiModal, apiUrl)
    }
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
            filterQuery += `ownerId eq ${this.providerId} and ownerType eq 'Provider' and `
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

  getCommonGridDetails(gridType: string, warnMessage: string, uiModel: any, apiUrl: string, secondryModelData?: any, rowModelType: any = "serverSide") {
    let commonColDef = this.getGridColDefs(gridType);
    return {
      apiUrl: apiUrl,
      colDef: commonColDef,
      config: this.getCommonGridConfig(commonColDef, warnMessage, rowModelType),
      data: [],
      showLoader: false,
      uiModel: uiModel,
      uiModelSecondParamData: secondryModelData
    }
  }

  getProviderProfileData() {
    return new Promise<void>((resolve) => {
      let param = { providerId: this.providerId };
      this._webService.getProviderProfilePageData(param).subscribe({
        next: (result) => {
          this.providersData = result.providerData;
          this.tradeAccountData = new TradingAccountUIModal(result.tradeAccountData);
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

  setupOffersGridConfig() {
    let colDefs = this.getGridColDefs('offers');
    this.offerGridConfig = this.getCommonGridConfig(colDefs, 'There are no offers data', 'clientSide');
  }

  getOffersData() {
    return new Promise<void>((resolve) => {
      this.showOfferGridLoder = true;
      let param = {
        providerId: this.providerId,
        $count: true,
        scope: this.selectedOfferState
      }
      this._webService.getOffersDetails(param).subscribe({
        next: (response: any) => {
          this.offerGridData = [];
          response.items.forEach((obj: any) => this.offerGridData.push(new OfferDetailsUIModel(obj)));
          this.showOfferGridLoder = false;
          resolve();
        },
        error: (errorObj) => {
          this.showOfferGridLoder = false;
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

  async refreshOffersList() {
    let result = await this.getOffersData();
  }

  onTabChange(event: any) {
    this.currentSelectedTabIndx = event.index;
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

  getGridColDefs(gridType: string) {
    if(gridType == 'offers') {
      return [
        { field: "offerId", sort: 'desc', headerName: 'PROVIDERS_PROFILE.Title', cellRenderer: CommonCellRendererStandAloneComponent, colId : 'offerCell', minWidth: 150 },
        { field: "visibility", headerName: 'PROVIDERS_PROFILE.Visibility', cellRenderer: CommonCellRendererStandAloneComponent, colId : 'tagCell', minWidth: 150},
        { field: "subscriptionCount", sortable: false, headerName: 'PROVIDERS_PROFILE.Subscriptions', minWidth: 150 },
        { field: "joinLinksCount", sortable: false, headerName: 'PROVIDERS_PROFILE.Join Links', minWidth: 150 },
        { field: "actions", headerName: "",sortable : false, cellRenderer: ActionButtonStanAloneComponent, colId: 'offerRedirection', minWidth: 150 },
      ];
    } else if(gridType == 'subscription') {
      return [
        { field: "subscriptionId", headerName: 'REPORTS.Name',  cellRenderer: CommonCellRendererStandAloneComponent, colId: 'providerSubscriptionNameCell', minWidth: 150 },
        { field: "isActivated", sortable: false, headerName: 'COMMON.Status', cellRenderer: StatusBtnRendererStandAloneComponent, minWidth: 100 },
        { field: "volume", sortable: false, headerName: 'PROVIDERS_PROFILE.Volume Scaling', cellRenderer: CommonCellRendererStandAloneComponent, colId: 'tagCell', minWidth: 150},
        { field: "offerTitle", sortable: false, headerName: 'PROVIDERS_PROFILE.Offer', cellRenderer: CommonCellRendererStandAloneComponent, colId: 'offerTitleCell', minWidth: 150 },
        { field: "tradingAccountNo", sortable: false, headerName: 'PROVIDERS_PROFILE.Trading Account', cellRenderer: CommonCellRendererStandAloneComponent, colId: 'providerTradingAccountCell', minWidth: 200},
        { field: "equity", sortable: false, headerName: 'PROVIDERS_PROFILE.Equity', minWidth: 150 },
        { field: "registerTime", headerName: 'PROVIDERS_PROFILE.Registered', sort: 'desc', minWidth: 200 },
        { field: "actions", headerName: "", sortable : false, cellRenderer: ActionButtonStanAloneComponent, colId: 'providerSubscriptionRedirection', minWidth: 100 }
      ];
    } else if(gridType == 'position') {
      return [
        { field: "position", headerName: 'PROVIDERS_PROFILE.Position', cellRenderer: CommonCellRendererStandAloneComponent, colId: 'positionNameCell', minWidth: 150 },
        { field: "status", headerName: 'COMMON.Status', sortable: false,  cellRenderer: CommonCellRendererStandAloneComponent, colId: 'tagCell', minWidth: 150 },
        { field: "symbol", headerName: 'PROVIDERS_PROFILE.Symbol', minWidth: 150 },
        { field: "openTime", headerName: 'PROVIDERS_PROFILE.Open Time', sort: 'desc', minWidth: 200 },
        { field: "volume", headerName: 'PROVIDERS_PROFILE.Volume', cellRenderer: CommonCellRendererStandAloneComponent, colId: 'positionVolumeCell', minWidth: 150 },
        { field: "profit", headerName: 'PROVIDERS_PROFILE.Profit', minWidth: 150 },
        { field: "closeTime", headerName: 'PROVIDERS_PROFILE.Close Time', minWidth: 200 },
        { field: "actions", headerName: "", sortable : false, cellRenderer: ActionButtonStanAloneComponent, minWidth: 150, colId: 'positionRedirection' },
      ]
    } else if(gridType == 'deals') {
      return [
        { field: "dealKey", headerName: 'PROVIDERS_PROFILE.Deal', minWidth: 150, cellRenderer: CommonCellRendererStandAloneComponent, colId: 'dealsTitleCell'  },
        { field: "entry", headerName: 'PROVIDERS_PROFILE.Entry', sortable: false, minWidth: 150, cellRenderer: CommonCellRendererStandAloneComponent, colId: 'tagCell' },
        { field: "position", headerName: 'PROVIDERS_PROFILE.Position', minWidth: 150, cellRenderer: CommonCellRendererStandAloneComponent, colId: 'dealPositionCell' },
        { field: "symbol", headerName: 'PROVIDERS_PROFILE.Symbol', minWidth: 150 },
        { field: "volume", headerName: 'PROVIDERS_PROFILE.Volume', minWidth: 150, cellRenderer: CommonCellRendererStandAloneComponent, colId: 'dealsVolumeCell' },
        { field: "price", headerName: 'PROVIDERS_PROFILE.Price', minWidth: 150 },
        { field: "time", headerName: 'PROVIDERS_PROFILE.Time', sort: 'desc', minWidth: 200 },
        { field: "actions", headerName: "", sortable : false, cellRenderer: ActionButtonStanAloneComponent, showPopupArraow: true, colId: 'dealsPopup', minWidth: 150},
      ]
    } else if(gridType == 'fees') {
      return [
        { field: "transactionObj", headerName: 'PROVIDERS_PROFILE.Fees', sort: 'desc', cellRenderer: CommonCellRendererStandAloneComponent, minWidth: 150, colId: 'transactionTitlePopup' },
        { field: "platformId", headerName: 'TRANSACTIONS.MT order', minWidth: 150, suppressSizeToFit: true },
        { field: "transactionAmountObj", headerName: 'REPORTS.Amount', cellRenderer: CommonCellRendererStandAloneComponent, minWidth: 150, colId: 'transactionAmountViewDisplay'  },
        { field: "senderObj", headerName: 'TRANSACTIONS.Sender', minWidth: 150, sortable : false, cellRenderer: CommonCellRendererStandAloneComponent, colId: 'transactionsenderAction'},
        { field: "processTime", headerName: 'TRANSACTIONS.Processed', minWidth: 200 },
        { field: "actions", headerName: "", cellRenderer: ActionButtonStanAloneComponent, sortable : false, colId: 'transactionDetailsPopup', showPopupArraow: true, minWidth: 150 }
      ]
    }
    return;
  }

  getCommonGridConfig(colDefs: any, warnMessage: string, rowModelType: string) {
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
      rowModelType: rowModelType,
      rowHeight: undefined
    };
    return gridConfig;
  }

  openBeTradingAccountPopup() {
    this.tradingDialog.open(CommonDialogStandAloneComponent, {
      panelClass: 'common-dialog',
      data: this._webService.prepareTradingAccountData(this.tradeAccountData)
    });
    this.tradingDialog.afterAllClosed.subscribe((result) => { });
  }

  recieveChildrenEmitter(event: any) {
    if(event['action'] == 'open_transact_details_popup') {
      this.openBeFeesDetailsPopup(event['data']);
    } else if(event['action'] == 'open_deals_popup') {
      this.openDealsPopup(event['data']);
    } else if(event['action'] == 'refresh_provider_data') {
      this.refreshProviderData();
    } else if(event['action'] == 'redirect_to_offer_page') {
      this.router.navigate([`/portal/offers/${event.offerId}`]);
    } else if(event['action'] == 'redirect_to_provider_page') {
      this.router.navigate(['/portal/providers']);
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

  async refreshProviderData() {
    let result = await this.getProviderProfileData();
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
    const dialogRef = this.commonInfoDialog.open(ProviderCommonInfoDialog,{
      panelClass: 'providerProfile-commonInfo',
      data: { providerData: this.providersData, modelType: modelType }
    });
    dialogRef.afterClosed().subscribe(event => {
      this.recieveChildrenEmitter(event);
    });
  }

  openCreateOfferModal() {
    const dialogRef = this.createOfferDialog.open(CreateOfferDialog, {
      panelClass: 'createinfo-dialog',
      data: this.providerId
    });
    dialogRef.afterClosed().subscribe((event) => {
      this.recieveChildrenEmitter(event);
    });
  }

  openProviderArchiveModal() {
    const dialogRef = this.providerArchiveDialog.open(ArchiveDialog, {
      panelClass: 'archive-dialog',
      data: { providerData: this.providersData, modelType: 'provider' } 
    });
    dialogRef.afterClosed().subscribe((event) => {
      this.recieveChildrenEmitter(event);
    });
  }

  openSharedLinkModal() {
    const dialogRef = this.sharedLinkDialog.open(SharedLinkDialog, {
      panelClass: 'shared-link-dialog',
      data: this.providersData
    });
    dialogRef.afterClosed().subscribe((event) => {
      this.recieveChildrenEmitter(event);
    });
  }

  openUploadAvatarModal() {
    const dialogRef = this.sharedLinkDialog.open(UploadAvatarDialog, {
      panelClass: 'upload-avatar-dialog',
      data: { providerData: this.providersData }
    });
    dialogRef.afterClosed().subscribe((event) => {
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
      mainTitle: 'COMMON.Info',
      secondryTitle: "PROVIDERS_PROFILE.Information about the provider's deal",
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

  ngOnDestroy() {
    this._webService.unSubscribeOnWebDataChange('ProviderProfileStandAloneComponent');
  }

}
