import { Component, inject, ViewChild } from '@angular/core';
import { ActionButtonStanAloneComponent } from '../../shared/action-button/action-button.standalone.component';
import { CommonCellRendererStandAloneComponent } from '../providers/cellRenderers/common-cell-renderer/common-cell-renderer.standalone.component';
import { MatDialog } from '@angular/material/dialog';
import { WebService } from '../../service/web.service';
import { ProviderMetricUIModal, ProviderDetailsUIModal, TradingAccountUIModal, FollowerMetricUIModal, FollowerDetailsUIModal } from '../../shared/ui-model/web.ui.model';
import { ShowErrorStandAloneComponent } from '../../../shared/component/showerror/show.error.standalone.component';
import { BeProviderDialogStandAloneComponent } from '../../shared/dialogBox/create-provider-dialog/beProviderDialog.standalone.component';
import { BeFollowerDialogStandAloneComponent } from '../../shared/dialogBox/create-follower-dialog/beFollowerDialog.standalone.component';

import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { TypeCellRendererStandAloneComponent } from '../../shared/type-cell-renderer/type-cell-renderer.standalone.component';
import { CommonDialogStandAloneComponent } from '../../shared/dialogBox/common-dialog/common.dialog.standalone.component';
import { AgGridConfig, CommonAgGridStandAloneComponent } from '../../shared/common-ag-grid/common.aggrid.standalone.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, ShowErrorStandAloneComponent, TranslateModule, MatCardModule, MatSelectModule, FormsModule, CommonAgGridStandAloneComponent]
})
export class HomeStandAloneComponent {
  showLoader: boolean = false;
  showGridLoader: boolean = false;
  providerMetric?: ProviderMetricUIModal | any;
  followerMetric?: FollowerMetricUIModal | any;
  providerDetails: any = [];
  followerDetails: any = [];
  tradingAccountDetails: any = [];
  currentDate: Date = new Date();
  role: any = {};
  selectAccountStatus: string = "Active";
  gridData: any = [];
  gridConfig!: AgGridConfig;

  @ViewChild(ShowErrorStandAloneComponent) errorComponent?: ShowErrorStandAloneComponent;

  readonly beProviderDialog = inject(MatDialog);
  readonly beFollowerDialog = inject(MatDialog);
  readonly commonDialog = inject(MatDialog);

  constructor(private _webService: WebService, private _router: Router) {
    this.role['hasProvider'] = this._webService.isProviderAccount;
    this.role['hasFollower'] = this._webService.isSubscriptionAccount;
    this.getHomePageData();
    this._webService.subscribeOnWebDataChange('HomeStandAloneComponent', (event: any) => {
      this.recieveChildrenEmitter(event);
    });
  }

  recieveChildrenEmitter(event: any) {
    if (event['action'] == 'provider_created') {
      this.refreshUserProfileAndRedirectToProviderOrFollowerProfile(event.data, true);
      this.beProviderDialog.closeAll();
    } else if (event['action'] == 'Follower_created') {
      this.refreshUserProfileAndRedirectToProviderOrFollowerProfile(event.data, false);
      this.beFollowerDialog.closeAll();
    } else if(event['action'] == 'open_account_details_popup') {
      this.openBeTradingAccountPopup(event['data']);
    }
  }
  
  refreshUserProfileAndRedirectToProviderOrFollowerProfile(response: any, isProvider: boolean) {
    this._webService.setOrRefreshUserProfileData((result: any)=>{
      if(result.status) {
        this._webService.emitOnWebDataChange({action: "refresh_sidenav_menu_options", callback: () => {
          if(isProvider) {
            this._router.navigate([`/portal/providers/${response.id}`]);
          } else {
            this._router.navigate([`/portal/subscriptions/${response.id}`]);
          }
        }});
      }
    })
  }

  getHomePageData() {
    if (this.role['hasProvider']) {
      this.getProviderHomePageData();
    } else if (this.role['hasFollower']) {
      this.getFollowersHomePageData();
    } else {
      this.getTradingAccountData("showPageLoader");
    }
  }

  getProviderHomePageData() {
    this.showLoader = true;
    this._webService.getHomePageProviderData().subscribe({
      next: (result: any) => {
        if (result.source == 'provider_Metric') {
          this.providerMetric = new ProviderMetricUIModal(result.response);
        }
        if (result.source == 'provider_Details') {
          this.providerDetails = [];
          result.response.items.forEach((obj: any) => this.providerDetails.push(new ProviderDetailsUIModal(obj)));
        }
        if (this.providerMetric && this.providerDetails) {
          this.setUpAgGridOfHomePage();
          this.showLoader = false;
        }
      },
      error: (errorObj) => {
        this.showErrorWarnMessage(errorObj?.error?.errorMessage);
      }
    })
  }

  getFollowersHomePageData() {
    this.showLoader = true;
    this._webService.getHomePageFollowerData().subscribe({
      next: (result: any) => {
        if (result.source == 'follower_Metric') {
          this.followerMetric = new FollowerMetricUIModal(result.response);
        }
        if (result.source == 'follower_Details') {
          this.followerDetails = [];
          result.response.items.forEach((obj: any) => this.followerDetails.push(new FollowerDetailsUIModal(obj)));
        }
        if (this.followerMetric && this.followerDetails) {
          this.setUpAgGridOfHomePage();
          this.showLoader = false;
        }
      },
      error: (errorObj) => {
        this.showErrorWarnMessage(errorObj?.error?.errorMessage);
      }
    })
  }

  getTradingAccountData(loaderType: string) {
    this.toggleLoadingOverlay(loaderType, true);
    let param = {
      scope: this.selectAccountStatus,
      $count: true
    }
    this._webService.getTradingAccountData(param).subscribe({
      next: (response: any) => {
        this.tradingAccountDetails = [];
        response.items.forEach((obj: any) => this.tradingAccountDetails.push(new TradingAccountUIModal(obj)));
        this.gridData = this.tradingAccountDetails;
        this.toggleLoadingOverlay(loaderType, false);
      },
      error: (errorObj) => {
        this.showErrorWarnMessage(errorObj?.error?.errorMessage);
      }
    })
  }

  toggleLoadingOverlay(loaderType: string, loadingFlag: boolean) {
    if(loaderType == "showPageLoader") {
      this.setUpAgGridOfHomePage();
      this.showLoader = loadingFlag;
    } else if(loaderType == "showGridLoader") {
      this.showGridLoader = loadingFlag;
    }
  }

  refreshTradeAccountList() {
    this.getTradingAccountData("showGridLoader");
  }

  showErrorWarnMessage(msg: any) {
    const errorConfigObj = this.errorComponent?.config;
    errorConfigObj.message = msg ? msg : errorConfigObj.message;
    this.errorComponent?.openErrorSnackbar();
  }

  setUpAgGridOfHomePage() {
    if (this.role['hasProvider']) {
      this.setupProviderGridConfig();
      this.gridData = this.providerDetails;
    } else if (this.role['hasFollower']) {
      this.setupFollowerGridConfig();
      this.gridData = this.followerDetails;
    } else {
      this.setupAccountGridConfig();
    }
  }

  setupProviderGridConfig() {
    let colDefs = [
      { field: "nickName", headerName: 'HOME.Nickname', resizable: false, width: 250, suppressSizeToFit: true, cellRenderer: CommonCellRendererStandAloneComponent },
      { field: "providerFees", headerName: 'HOME.Fees', resizable: false, width: 140, maxWidth: 140 },
      { field: "followers", headerName: 'HOME.Followers', resizable: true, width: 150, minWidth: 150, maxWidth: 250 },
      { field: "followersGrowth", headerName: 'HOME.Followers Growth', resizable: true, width: 170, minWidth: 170, maxWidth: 250 },
      { field: "closedProfit", headerName: 'HOME.Closed Profit', resizable: true, width: 150, minWidth: 150, maxWidth: 250 },
      { field: "registerTime", headerName: 'HOME.Registered', resizable: false, width: 250, maxWidth: 250 },
      { field: "actions", headerName: "", cellRenderer: ActionButtonStanAloneComponent, flex: 1, type: 'providerProfileRedirection' }
    ];
    this.setupGridConfig(colDefs);
  }

  setupFollowerGridConfig() {
    let colDefs = [
      { field: "providerName", headerName: 'HOME.Provider', resizable: false, width: 250, suppressSizeToFit: true, cellRenderer: CommonCellRendererStandAloneComponent, colId: 'followerProfileRedirection' },
      { field: "tradingProfit", headerName: 'HOME.Trading profit', resizable: false, width: 140, maxWidth: 140 },
      { field: "copiedPosition", headerName: 'HOME.Copied Position', resizable: true, minWidth: 150, maxWidth: 250 },
      { field: "paidFees", headerName: 'HOME.Paid Fees', resizable: true, width: 170, minWidth: 170, maxWidth: 250 },
      { field: "registerTime", headerName: 'HOME.Registered', resizable: false, width: 250, maxWidth: 250 },
      { field: "actions", headerName: "", cellRenderer: ActionButtonStanAloneComponent, flex: 1, type: 'followerProfileRedirection' }
    ];
    this.setupGridConfig(colDefs);
  }

  setupAccountGridConfig() {
    let colDefs = [
      { field: "tradingAccName", headerName: 'ACCOUNTS.Title', cellRenderer: CommonCellRendererStandAloneComponent, resizable: false, width: 250, suppressSizeToFit: true, colId: 'accountDetailsPopup' },
      { field: 'type', headerName: 'ACCOUNTS.Type', cellRenderer: TypeCellRendererStandAloneComponent, cellStyle: { display: 'flex', 'justify-content': 'center', 'flex-direction': 'column'}, resizable: false, width: 140, maxWidth: 140 },
      { field: "tradingAccountNo", headerName: 'ACCOUNTS.Trading Account', resizable: false, width: 200, maxWidth: 250 },
      { field: "balance", headerName: 'ACCOUNTS.Balance', resizable: false, width: 150, maxWidth: 150 },
      { field: "equity", headerName: 'ACCOUNTS.Equity', resizable: false, width: 150, maxWidth: 150 },
      { field: "connectTime", headerName: 'ACCOUNTS.Connected', resizable: false, width: 220, maxWidth: 220 },
      { field: "actions", headerName: "", cellRenderer: ActionButtonStanAloneComponent, flex: 1, type: 'accountDetailsPopup' }
    ];
    this.setupGridConfig(colDefs);
  }

  setupGridConfig(colDefs: any) {
    this.gridConfig = {
      maxHeight: '400px',
      noDataWarnMessage: 'There are no metrics',
      gridOptions: {},
      agGridTheme: 'ag-theme-alpine',
      pageSizeDropdownArr: [25, 50, 100],
      initialSelectedPageSize: 25,
      columnDefination: colDefs,
      enablePagination: true,
      headerNameLangArr: colDefs.map((o: any) => o.headerName)
    }
  }

  getCopiedColDef(colDefs: any) {
    let colD = JSON.parse(JSON.stringify(colDefs));

  }

  openBeProviderDialog() {
    this.beProviderDialog.open(BeProviderDialogStandAloneComponent, {
      panelClass: 'beProvider-dialog'
    });
    this.beProviderDialog.afterAllClosed.subscribe(()=>{});
  }

  openBeFollowerDialog() {
    this.beFollowerDialog.open(BeFollowerDialogStandAloneComponent, {
      panelClass: 'beFollower-dialog'
    });
    this.beFollowerDialog.afterAllClosed.subscribe(()=>{});
  }

  openBeTradingAccountPopup(data: any) {
    this.commonDialog.open(CommonDialogStandAloneComponent, {
      panelClass: 'common-dialog',
      data: this.prepareTradingAccountData(data)
    });
    this.commonDialog.afterAllClosed.subscribe(()=>{});
  }

  prepareTradingAccountData(tradingAccountDetails: any) {
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
    this._webService.unSubscribeOnWebDataChange('HomeStandAloneComponent');
  }
}


