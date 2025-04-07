import { Component, inject, ViewChild, ViewContainerRef } from '@angular/core';
import { ActionButtonStanAloneComponent } from '../../shared/cell-renderer/action-button-cell-renderer/action-button-cell-renderer.standalone.component';
import { CommonCellRendererStandAloneComponent } from '../../shared/cell-renderer/common-cell-renderer/common-cell-renderer.standalone.component';
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
import { TypeCellRendererStandAloneComponent } from '../../shared/cell-renderer/type-cell-renderer/type-cell-renderer.standalone.component';
import { CommonDialogStandAloneComponent } from '../../shared/dialogBox/common-dialog/common.dialog.standalone.component';
import { AgGridConfig, CommonAgGridStandAloneComponent } from '../../shared/common-ag-grid/common.aggrid.standalone.component';
import { ProviderFollowerHeaderCardsStandaloneComponent } from '../../shared/provider-follower-header-cards/provider.follower.header.cards.standalone.component';
import { AuthService } from '../../../auth/service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, ProviderFollowerHeaderCardsStandaloneComponent, ShowErrorStandAloneComponent, TranslateModule, MatCardModule, MatSelectModule, FormsModule, CommonAgGridStandAloneComponent]
})
export class HomeStandAloneComponent {
  showLoader: boolean = false;
  showGridLoader: boolean = false;
  providerMetric?: ProviderMetricUIModal | any;
  followerMetric?: FollowerMetricUIModal | any;
  providerDetails: any = [];
  followerDetails: any = [];
  tradingAccountDetails: any = [];
  isProvider: boolean = false;
  isFollower: boolean = false;
  isRatingModuleEnabled: boolean = false;
  selectAccountStatus: string = "Active";
  gridData: any = [];
  gridConfig!: AgGridConfig;
  homePageConfig: any = [];

  @ViewChild(ShowErrorStandAloneComponent) errorComponent?: ShowErrorStandAloneComponent;
  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;

  readonly beProviderDialog = inject(MatDialog);
  readonly beFollowerDialog = inject(MatDialog);
  readonly commonDialog = inject(MatDialog);

  constructor(private _webService: WebService, private _router: Router, private _authService: AuthService) {
    this.isProvider = this._webService.isProviderAccount;
    this.isFollower = this._webService.isSubscriptionAccount;
    this.isRatingModuleEnabled = this._authService.userConfig?.ratings?.integrationMode?.toLowerCase() == "embeddedpage";
    this.setHomePageConfig();
    this.getHomePageData();
    this._webService.subscribeOnWebDataChange('HomeStandAloneComponent', (event: any) => {
      this.recieveChildrenEmitter(event);
    });
  }

  setHomePageConfig() {

  }

  ngAfterViewInit() {
    setTimeout(()=>{
      this.loadRatingModule();
    }, 500);
  }

  async loadRatingModule() {
    if(this.isRatingModuleEnabled && this.isFollower) {
      const { ProvidersListStanAloneComponent } = await import('../providers-list/providers-list.standalone.component');
      this.container.createComponent(ProvidersListStanAloneComponent);
    }
  }

  recieveChildrenEmitter(event: any) {
    if (event['action'] == 'provider_created') {
      this.refreshUserProfileAndRedirectToProviderOrFollowerProfile(event.data, true);
      this.beProviderDialog.closeAll();
    } else if (event['action'] == 'follower_created') {
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
    if (this.isProvider) {
      this.getProviderTableData();
    } else if (this.isFollower) {
      this.getFollowersTableData();
    } else {
      this.getTradingAccountData("showPageLoader");
    }
  }

  getProviderTableData() {
    this.showLoader = true;
    this._webService.getProviderTableData().subscribe({
      next: (response: any) => {
        this.providerDetails = [];
        response.items.forEach((obj: any) => this.providerDetails.push(new ProviderDetailsUIModal(obj)));
        this.setUpAgGridOfHomePage();
        this.showLoader = false;
      },
      error: (errorObj) => {
        this.showErrorWarnMessage(errorObj?.error?.errorMessage);
      }
    })
  }

  getFollowersTableData() {
    this.showLoader = true;
    this._webService.getFollowerTableData().subscribe({
      next: (response: any) => {
        this.followerDetails = [];
        response.items.forEach((obj: any) => this.followerDetails.push(new FollowerDetailsUIModal(obj)));
        this.setUpAgGridOfHomePage();
        this.showLoader = false;
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
    if (this.isProvider) {
      this.setupProviderGridConfig();
      this.gridData = this.providerDetails;
    } else if (this.isFollower) {
      this.setupFollowerGridConfig();
      this.gridData = this.followerDetails;
    } else {
      this.setupAccountGridConfig();
    }
  }

  setupProviderGridConfig() {
    let colDefs = [  
      { field: "nickName", headerName: 'HOME.Nickname', cellRenderer: CommonCellRendererStandAloneComponent, colId: 'providerProfileRedirection', autoHeight: true, wrapText: true, resizable: true, width: 250 },
      { field: "providerFees", headerName: 'HOME.Fees', autoHeight: true, wrapText: true, resizable: true, width: 200, colId: 'currencyCell', cellRenderer: CommonCellRendererStandAloneComponent },
      { field: "followers", headerName: 'HOME.Followers', autoHeight: true, wrapText: true, resizable: true, width: 200 },
      { field: "followersGrowth", headerName: 'HOME.Followers Growth', autoHeight: true, wrapText: true, resizable: true, width: 200 },
      { field: "closedProfit", headerName: 'HOME.Closed Profit', autoHeight: true, wrapText: true, resizable: true, width: 200, colId: 'currencyCell', cellRenderer: CommonCellRendererStandAloneComponent },
      { field: "registerTime", sort: 'desc', headerName: 'HOME.Registered', autoHeight: true, wrapText: true, resizable: true, width: 200, colId: 'dateTimeCell', cellRenderer: CommonCellRendererStandAloneComponent },
      { field: "actions", headerName: " ", cellRenderer: ActionButtonStanAloneComponent, colId: 'providerProfileRedirection', sortable: false, wrapText: true, autoHeight: true, resizable: true, width: 200 }
    ];
    this.setupGridConfig(colDefs);
  }

  setupFollowerGridConfig() {
    let colDefs = [
      { field: "providerName", headerName: 'HOME.Provider', cellRenderer: CommonCellRendererStandAloneComponent, colId: 'followerProfileRedirection', autoHeight: true, wrapText: true, resizable: true, width: 250 },
      { field: "tradingProfit", headerName: 'HOME.Trading profit', autoHeight: true, wrapText: true, resizable: true, width: 200, colId: 'currencyCell', cellRenderer: CommonCellRendererStandAloneComponent },
      { field: "copiedPosition", headerName: 'HOME.Copied Position', autoHeight: true, wrapText: true, resizable: true, width: 200 },
      { field: "paidFees", headerName: 'HOME.Paid Fees', autoHeight: true, wrapText: true, resizable: true, width: 200, colId: 'currencyCell', cellRenderer: CommonCellRendererStandAloneComponent },
      { field: "registerTime", headerName: 'HOME.Registered', autoHeight: true, wrapText: true, resizable: true, width: 200, colId: 'dateTimeCell', cellRenderer: CommonCellRendererStandAloneComponent },
      { field: "actions", headerName: "", cellRenderer: ActionButtonStanAloneComponent, colId: 'followerProfileRedirection', sortable: false, wrapText: true, autoHeight: true, resizable: true, width: 200 }
    ];
    this.setupGridConfig(colDefs);
  }

  setupAccountGridConfig() {
    let colDefs = [
      { field: "tradingAccName", headerName: 'ACCOUNTS.Title', cellRenderer: CommonCellRendererStandAloneComponent, colId: 'accountDetailsPopup' , wrapText: true, autoHeight: true, resizable: true, width: 250 },
      { field: 'type', headerName: 'ACCOUNTS.Type', cellRenderer: TypeCellRendererStandAloneComponent, cellStyle: { display: 'flex', 'justify-content': 'center', 'flex-direction': 'column'}, wrapText: true, autoHeight: true, resizable: true, width: 200 },
      { field: "tradingAccountNo", headerName: 'ACCOUNTS.Trading Account', wrapText: true, autoHeight: true, resizable: true, width: 200},
      { field: "balance", headerName: 'ACCOUNTS.Balance', wrapText: true, autoHeight: true, resizable: true, width: 200, colId: 'currencyCell', cellRenderer: CommonCellRendererStandAloneComponent },
      { field: "equity", headerName: 'ACCOUNTS.Equity', wrapText: true, autoHeight: true, resizable: true, width: 200, colId: 'currencyCell', cellRenderer: CommonCellRendererStandAloneComponent },
      { field: "connectTime", headerName: 'ACCOUNTS.Connected', wrapText: true, autoHeight: true, resizable: true, width: 200, colId: 'dateTimeCell', cellRenderer: CommonCellRendererStandAloneComponent },
      { field: "actions", headerName: "", cellRenderer: ActionButtonStanAloneComponent, colId: 'accountDetailsPopup', wrapText: true, autoHeight: true, resizable: true, width: 200 }
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
      headerNameLangArr: colDefs.map((o: any) => o.headerName),
      rowModelType: 'clientSide',
      rowHeight: undefined
    }
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
      data: this._webService.prepareTradingAccountData(data)
    });
    this.commonDialog.afterAllClosed.subscribe(()=>{});
  }

  ngOnDestroy() {
    this._webService.unSubscribeOnWebDataChange('HomeStandAloneComponent');
  }
}


