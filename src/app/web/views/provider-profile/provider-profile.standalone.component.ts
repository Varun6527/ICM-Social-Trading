import {ChangeDetectionStrategy, Component, inject, ViewChild} from '@angular/core';
import { AgGridAngular, AgGridModule } from "ag-grid-angular";
import { ColDef } from "ag-grid-community";
import { ActionButtonStanAloneComponent } from '../../shared/action-button/action-button.standalone.component';
import { TypeCellRendererStandAloneComponent } from '../../shared/type-cell-renderer/type-cell-renderer.standalone.component';
import { StatusBtnRendererComponent } from '../../shared/status-btn-renderer/status-btn-renderer.component';
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
import { ActivatedRoute } from '@angular/router';
import { WebService } from '../../service/web.service';
import { ShowErrorStandAloneComponent } from '../../../shared/component/showerror/show.error.standalone.component';
import { OfferDetailsUIModel, TradingAccountUIModal } from '../../shared/ui-model/web.ui.model';
import { CommonDialogStandAloneComponent } from '../../shared/dialogBox/common-dialog/common.dialog.standalone.component';
import { FormsModule } from '@angular/forms';
import { CommonAgGridStandAloneComponent } from '../../shared/common-ag-grid/common.aggrid.standalone.component';

@Component({
  selector: 'app-provider-profile',
  templateUrl: './provider-profile.component.html',
  styleUrl: './provider-profile.component.scss',
  standalone: true,
  imports: [CommonModule, CommonAgGridStandAloneComponent, FormsModule, ShowErrorStandAloneComponent, ProviderFollowerHeaderCardsStandaloneComponent, AgGridModule, MatMenuModule, MatTabsModule, TranslateModule, MatSelectModule, MatInputModule, MatCardModule]
})
export class ProviderProfileStandAloneComponent {
  providersData: any;
  tradeAccountData: any;
  providerId: any;
  showPageLoader: boolean = false;
  selectedOfferState: string = "Active";
  showGridLoder: any = { offers: true };
  gridConfig: any = { offers: {} };
  gridData: any = { offers: [] };

  readonly commonDialog = inject(MatDialog);
  @ViewChild(ShowErrorStandAloneComponent) errorComponent?: ShowErrorStandAloneComponent;

  readonly commonInfoDialog = inject(MatDialog);
  SubsCols: ColDef[] = []
  PositionsCols: ColDef[] = []
  DealsCols: ColDef[] = []
  FeesCols: ColDef[] = []
  OffersCols:ColDef[]=[]

  constructor(public translate: TranslateService, private _webService: WebService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.providerId = params.get('providerId')!;
      this.getProviderProfileData();
      this.getOffersData();
    });
    this.setupOffersGridConfig();
  }

  setupOffersGridConfig() {
    let colDefs = [
      { field: "offerTitle", headerName: 'PROVIDERS_PROFILE.Title', resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId : 'offerCell' },
      { field: "visibility", headerName: 'PROVIDERS_PROFILE.Visibility', resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId : 'tagCell'},
      { field: "subscriptionCount", sortable: false, headerName: 'PROVIDERS_PROFILE.Subscriptions', resizable: false },
      { field: "joinLinksCount", sortable: false, headerName: 'PROVIDERS_PROFILE.Join Links', resizable: false },
      { field: "actions", headerName: "", cellRenderer: ActionButtonStanAloneComponent, flex: 1, colId: 'offerRedirection' },
    ];
    this.setupGridConfig(colDefs, 'offers');
  }

  setupGridConfig(colDefs: any, key: string) {
    this.gridConfig[key] = {
      maxHeight: '400px',
      noDataWarnMessage: 'There are no offers data',
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

  getProviderProfileData() {
    this.showPageLoader = true;
    let param = { providerId: this.providerId };
    this._webService.getProviderProfilePageData(param).subscribe({
      next: (result)=> {
        this.providersData = result.providerData;
        this.tradeAccountData = new TradingAccountUIModal(result.tradeAccountData);
        this.showPageLoader = false;
      },
      error: (errorObj)=> {
        this.showPageLoader = false;
        this.showErrorWarnMessage(errorObj?.error?.errorMessage);
      }
    })
  }

  showErrorWarnMessage(msg: any) {
    const errorConfigObj = this.errorComponent?.config;
    errorConfigObj.message = msg ? msg : errorConfigObj.message;
    this.errorComponent?.openErrorSnackbar();
  }

  openBeTradingAccountPopup() {
    this.commonDialog.open(CommonDialogStandAloneComponent, {
      panelClass: 'common-dialog',
      data: this.prepareTradingAccountData()
    });
    this.commonDialog.afterAllClosed.subscribe((result) => { });
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

  getOffersData() {
    this.showGridLoder.offers = true;
    let param = {
      providerId: this.providerId,
      $count: true,
      scope: this.selectedOfferState
    }
    this._webService.getOffersDetails(param).subscribe({
      next: (response: any)=> {
        this.gridData.offers = [];
        response.items.forEach((obj: any) => this.gridData.offers.push(new OfferDetailsUIModel(obj)));
        this.showGridLoder.offers = false;
      },
      error: (errorObj)=> {
        this.showGridLoder.offers = false;
        this.showErrorWarnMessage(errorObj?.error?.errorMessage);
      }
    })
  }

  refreshOffersList() {
    this.getOffersData();
  }

  initializeColDefs() {
    this.SubsCols = [
      { field: "name", headerName: this.translate.instant('PROVIDERS_PROFILE.Nickname'), resizable: false, suppressSizeToFit: true, width: 180, cellRenderer: CommonCellRendererStandAloneComponent },
      { field: "status", headerName: this.translate.instant('COMMON.Status'), width: 100, resizable: false, cellRenderer: StatusBtnRendererComponent, cellStyle: { display: 'flex', 'justify-content': 'center', 'align-items': 'center' }, headerClass: 'subs-status-header' },
      { field: "volumeScaling", headerName: this.translate.instant('PROVIDERS_PROFILE.Volume Scaling'), resizable: false, cellRenderer: TypeCellRendererStandAloneComponent, cellStyle: { display: 'flex', 'justify-content': 'center', 'flex-direction': 'column' } },
      { field: "offer", headerName: this.translate.instant('PROVIDERS_PROFILE.Offer'), resizable: false, width: 150 },
      { field: "tradingAccount", headerName: this.translate.instant('PROVIDERS_PROFILE.Trading Account'), resizable: false },
      { field: "equity", headerName: this.translate.instant('PROVIDERS_PROFILE.Equity'), resizable: false, width: 120 },
      { field: "registered", headerName: this.translate.instant('PROVIDERS_PROFILE.Registered'), resizable: false, width: 200 },
      { field: "actions", headerName: "", cellRenderer: ActionButtonStanAloneComponent },
    ];
  
    this.PositionsCols = [
      { field: "position", headerName: this.translate.instant('PROVIDERS_PROFILE.Position'), resizable: false, suppressSizeToFit: true, width: 180 },
      { field: "status", headerName: this.translate.instant('COMMON.Status'), width: 100, resizable: false, cellRenderer: StatusBtnRendererComponent, cellStyle: { display: 'flex', 'justify-content': 'center', 'align-items': 'center' }, headerClass: 'subs-status-header' },
      { field: "symbol", headerName: this.translate.instant('PROVIDERS_PROFILE.Symbol'), width: 150, resizable: false, cellRenderer: TypeCellRendererStandAloneComponent, cellStyle: { display: 'flex', 'justify-content': 'center', 'flex-direction': 'column' } },
      { field: "openTime", headerName: this.translate.instant('PROVIDERS_PROFILE.Open Time'), resizable: false, width: 180 },
      { field: "volume", headerName: this.translate.instant('PROVIDERS_PROFILE.Volume'), resizable: false },
      { field: "profit", headerName: this.translate.instant('PROVIDERS_PROFILE.Profit'), resizable: false, width: 120 },
      { field: "closeTime", headerName: this.translate.instant('PROVIDERS_PROFILE.Close Time'), resizable: false, width: 200 },
      { field: "actions", headerName: "", cellRenderer: ActionButtonStanAloneComponent },
    ];
  
    this.DealsCols = [
      { field: "position", headerName: this.translate.instant('PROVIDERS_PROFILE.Position'), resizable: false, suppressSizeToFit: true, width: 180 },
      { field: "status", headerName: this.translate.instant('COMMON.Status'), width: 100, resizable: false, cellRenderer: StatusBtnRendererComponent, cellStyle: { display: 'flex', 'justify-content': 'center', 'align-items': 'center' }, headerClass: 'subs-status-header' },
      { field: "symbol", headerName: this.translate.instant('PROVIDERS_PROFILE.Symbol'), width: 150, resizable: false, cellRenderer: TypeCellRendererStandAloneComponent, cellStyle: { display: 'flex', 'justify-content': 'center', 'flex-direction': 'column' } },
      { field: "openTime", headerName: this.translate.instant('PROVIDERS_PROFILE.Open Time'), resizable: false, width: 180 },
      { field: "volume", headerName: this.translate.instant('PROVIDERS_PROFILE.Volume'), resizable: false },
      { field: "profit", headerName: this.translate.instant('PROVIDERS_PROFILE.Profit'), resizable: false, width: 120 },
      { field: "closeTime", headerName: this.translate.instant('PROVIDERS_PROFILE.Close Time'), resizable: false, width: 200 },
      { field: "actions", headerName: "", cellRenderer: ActionButtonStanAloneComponent },
    ];
  
    this.FeesCols = [
      { field: "position", headerName: this.translate.instant('PROVIDERS_PROFILE.Position'), resizable: false, suppressSizeToFit: true, width: 180 },
      { field: "status", headerName: this.translate.instant('COMMON.Status'), width: 100, resizable: false, cellRenderer: StatusBtnRendererComponent, cellStyle: { display: 'flex', 'justify-content': 'center', 'align-items': 'center' }, headerClass: 'subs-status-header' },
      { field: "symbol", headerName: this.translate.instant('PROVIDERS_PROFILE.Symbol'), width: 150, resizable: false, cellRenderer: TypeCellRendererStandAloneComponent, cellStyle: { display: 'flex', 'justify-content': 'center', 'flex-direction': 'column' } },
      { field: "openTime", headerName: this.translate.instant('PROVIDERS_PROFILE.Open Time'), resizable: false, width: 180 },
      { field: "volume", headerName: this.translate.instant('PROVIDERS_PROFILE.Volume'), resizable: false },
      { field: "profit", headerName: this.translate.instant('PROVIDERS_PROFILE.Profit'), resizable: false, width: 120 },
      { field: "closeTime", headerName: this.translate.instant('PROVIDERS_PROFILE.Close Time'), resizable: false, width: 200 },
      { field: "actions", headerName: "", cellRenderer: ActionButtonStanAloneComponent },
    ];
  }
  


  SubsRows = [
    { Id:1, name: "Amit Test", status: "Active", volumeScaling: "Multiply", offer: "Test Offer", tradingAccount: "11003456789", equity: "$56.7", registered: "9/16/24, 7:02:20 AM"},
    { Id:2,name: "John Doe", status: "Active", volumeScaling: "Multiply", offer: "Test Offer", tradingAccount: "11003456712", equity: "$34.5", registered: "9/18/24, 10:12:40 AM" },
    { Id:3,name: "Alice Smith", status: "Inactive", volumeScaling: "Multiply", offer: "Test Offer", tradingAccount: "11003456713", equity: "$78.9", registered: "9/20/24, 2:23:18 PM" },
    { Id:4,name: "Bob Johnson", status: "Active", volumeScaling: "Multiply", offer: "Test Offer", tradingAccount: "11003456714", equity: "$23.6", registered: "9/21/24, 9:45:50 AM"},
    { Id:5,name: "Charlie Brown", status: "Active", volumeScaling: "Multiply", offer: "Test Offer", tradingAccount: "11003456715", equity: "$92.3", registered: "9/23/24, 11:34:12 AM" },
    { Id:6,name: "Diana Lee", status: "Inactive", volumeScaling: "Multiply", offer: "Test Offer", tradingAccount: "11003456716", equity: "$67.8", registered: "9/25/24, 5:50:22 PM"},
    { Id:7,name: "Evan Thomas", status: "Active", volumeScaling: "Multiply", offer: "Test Offer", tradingAccount: "11003456717", equity: "$48.1", registered: "9/26/24, 8:16:35 AM"}
  ];

  PositionsRows = [
    { position: "Buy", status: "Active", symbol: "AAPL", openTime: "9/16/24, 9:00 AM", volume: "10", profit: "$500", closeTime: "9/17/24, 4:00 PM" },
    { position: "Sell", status: "Inactive", symbol: "GOOGL", openTime: "9/18/24, 10:00 AM", volume: "5", profit: "$350", closeTime: "9/18/24, 4:30 PM" },
    { position: "Buy", status: "Active", symbol: "TSLA", openTime: "9/20/24, 11:00 AM", volume: "8", profit: "$120", closeTime: "9/21/24, 5:00 PM" },
    { position: "Sell", status: "Inactive", symbol: "AMZN", openTime: "9/21/24, 12:00 PM", volume: "15", profit: "$700", closeTime: "9/21/24, 6:00 PM" },
    { position: "Buy", status: "Active", symbol: "MSFT", openTime: "9/23/24, 2:00 PM", volume: "12", profit: "$420", closeTime: "9/24/24, 3:30 PM" },
    { position: "Sell", status: "Inactive", symbol: "NFLX", openTime: "9/25/24, 4:00 PM", volume: "20", profit: "$600", closeTime: "9/26/24, 7:00 PM" }
  ];

  DealsRows = [
    { position: "Buy", status: "Active", symbol: "AAPL", openTime: "10/10/24, 9:15 AM", volume: "15", profit: "$650", closeTime: "10/11/24, 4:00 PM" },
    { position: "Sell", status: "Inactive", symbol: "GOOGL", openTime: "10/12/24, 10:30 AM", volume: "8", profit: "$280", closeTime: "10/12/24, 3:00 PM" },
    { position: "Buy", status: "Active", symbol: "TSLA", openTime: "10/13/24, 11:45 AM", volume: "10", profit: "$750", closeTime: "10/14/24, 5:00 PM" },
    { position: "Sell", status: "Inactive", symbol: "AMZN", openTime: "10/14/24, 1:00 PM", volume: "20", profit: "$900", closeTime: "10/14/24, 6:00 PM" },
    { position: "Buy", status: "Active", symbol: "MSFT", openTime: "10/15/24, 2:30 PM", volume: "25", profit: "$1100", closeTime: "10/16/24, 3:45 PM" },
    { position: "Sell", status: "Inactive", symbol: "NFLX", openTime: "10/16/24, 3:50 PM", volume: "12", profit: "$500", closeTime: "10/16/24, 7:00 PM" }
  ];

  FeesRows = [
    { position: "Buy", status: "Active", symbol: "AAPL", openTime: "10/01/24, 9:30 AM", volume: "12", profit: "$450", closeTime: "10/02/24, 4:30 PM" },
    { position: "Sell", status: "Inactive", symbol: "GOOGL", openTime: "10/03/24, 10:00 AM", volume: "7", profit: "$380", closeTime: "10/03/24, 3:45 PM" },
    { position: "Buy", status: "Active", symbol: "TSLA", openTime: "10/04/24, 11:30 AM", volume: "9", profit: "$560", closeTime: "10/05/24, 5:15 PM" },
    { position: "Sell", status: "Inactive", symbol: "AMZN", openTime: "10/06/24, 1:45 PM", volume: "16", profit: "$800", closeTime: "10/06/24, 6:30 PM" },
    { position: "Buy", status: "Active", symbol: "MSFT", openTime: "10/07/24, 2:00 PM", volume: "18", profit: "$930", closeTime: "10/08/24, 4:00 PM" },
    { position: "Sell", status: "Inactive", symbol: "NFLX", openTime: "10/09/24, 3:15 PM", volume: "22", profit: "$610", closeTime: "10/09/24, 7:45 PM" }
  ];

  openCommonInfoDialog() {
    const dialogRef = this.commonInfoDialog.open(ProviderCommonInfoDialog,{
      panelClass: 'providerProfile-commonInfo'
    });
    dialogRef.afterClosed().subscribe(result => {});
  }

}
