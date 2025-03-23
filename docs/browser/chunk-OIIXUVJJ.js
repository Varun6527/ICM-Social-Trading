import {
  BeProviderDialogStandAloneComponent
} from "./chunk-55XS5TPC.js";
import {
  BeFollowerDialogStandAloneComponent
} from "./chunk-FPDZAUA3.js";
import "./chunk-M2YGG6IJ.js";
import {
  ProviderFollowerHeaderCardsStandaloneComponent
} from "./chunk-LRP7QKMI.js";
import "./chunk-2UBV3CDC.js";
import "./chunk-XT7PDWCQ.js";
import {
  TypeCellRendererStandAloneComponent
} from "./chunk-JQKCEFXE.js";
import {
  CommonDialogStandAloneComponent
} from "./chunk-IAOGV6S5.js";
import {
  ActionButtonStanAloneComponent
} from "./chunk-XJWPAYL2.js";
import "./chunk-YEQ6N72F.js";
import {
  FollowerDetailsUIModal,
  ProviderDetailsUIModal,
  TradingAccountUIModal
} from "./chunk-H2VRCKB7.js";
import {
  CommonAgGridStandAloneComponent,
  CommonCellRendererStandAloneComponent,
  MatDialog,
  MatFormField,
  MatLabel,
  MatSelect,
  MatSelectModule
} from "./chunk-VQMCFLWH.js";
import {
  WebService
} from "./chunk-5MDTIDYM.js";
import {
  FormsModule,
  MatCard,
  MatCardContent,
  MatCardModule,
  MatOption,
  NgControlStatus,
  NgModel,
  ShowErrorStandAloneComponent
} from "./chunk-ZFOVCG2I.js";
import {
  CommonModule,
  NgClass,
  NgIf,
  Router,
  TranslateModule,
  TranslatePipe,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-G46OV5IL.js";
import "./chunk-4OO5LSKA.js";

// src/app/web/views/home/home.standalone.component.ts
var _c0 = (a0) => ({ "d-flex justify-space-between pb-20": a0 });
function HomeStandAloneComponent_mat_card_content_1_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "h5");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "HOME.Provider Metrics"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "HOME.Metrics of individual providers"));
  }
}
function HomeStandAloneComponent_mat_card_content_1_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "h5");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "HOME.Follower Metrics"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "HOME.Metrics of individual Follower"));
  }
}
function HomeStandAloneComponent_mat_card_content_1_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h5");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "ACCOUNTS.Accounts"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "ACCOUNTS.AccountsAddFromMetaTrade"));
  }
}
function HomeStandAloneComponent_mat_card_content_1_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "mat-form-field")(2, "mat-label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-select", 16);
    \u0275\u0275twoWayListener("ngModelChange", function HomeStandAloneComponent_mat_card_content_1_div_25_Template_mat_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.selectAccountStatus, $event) || (ctx_r1.selectAccountStatus = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("selectionChange", function HomeStandAloneComponent_mat_card_content_1_div_25_Template_mat_select_selectionChange_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.refreshTradeAccountList());
    });
    \u0275\u0275elementStart(6, "mat-option", 17);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-option", 17);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "button", 18);
    \u0275\u0275listener("click", function HomeStandAloneComponent_mat_card_content_1_div_25_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.refreshTradeAccountList());
    });
    \u0275\u0275element(13, "img", 19);
    \u0275\u0275text(14, " Refresh ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 6, "PROVIDERS_PROFILE.Scope"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectAccountStatus);
    \u0275\u0275advance();
    \u0275\u0275property("value", "Active");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 8, "COMMON.Active"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", "All");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 10, "COMMON.All"));
  }
}
function HomeStandAloneComponent_mat_card_content_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card-content", 3)(1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "h5");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 7)(11, "button", 8);
    \u0275\u0275listener("click", function HomeStandAloneComponent_mat_card_content_1_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openBeProviderDialog());
    });
    \u0275\u0275element(12, "img", 9);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 8);
    \u0275\u0275listener("click", function HomeStandAloneComponent_mat_card_content_1_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openBeFollowerDialog());
    });
    \u0275\u0275element(16, "img", 9);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(19, "provider-follower-header-cards");
    \u0275\u0275elementStart(20, "div", 10)(21, "div", 11);
    \u0275\u0275template(22, HomeStandAloneComponent_mat_card_content_1_ng_container_22_Template, 7, 6, "ng-container", 12)(23, HomeStandAloneComponent_mat_card_content_1_ng_container_23_Template, 7, 6, "ng-container", 12)(24, HomeStandAloneComponent_mat_card_content_1_div_24_Template, 7, 6, "div", 12)(25, HomeStandAloneComponent_mat_card_content_1_div_25_Template, 15, 12, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "common-ag-grid", 14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 12, "HOME.HELLO"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 14, "HOME.Homepage with overall statistics"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 16, "HOME.Be A Provider"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 18, "HOME.Be A Follower"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(20, _c0, !ctx_r1.role["hasProvider"] && !ctx_r1.role["hasFollower"]));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.role["hasProvider"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.role["hasFollower"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.role["hasProvider"] && !ctx_r1.role["hasFollower"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.role["hasProvider"] && !ctx_r1.role["hasFollower"]);
    \u0275\u0275advance();
    \u0275\u0275property("gridConfig", ctx_r1.gridConfig)("gridData", ctx_r1.gridData)("showGridLoader", ctx_r1.showGridLoader);
  }
}
function HomeStandAloneComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "img", 21);
    \u0275\u0275elementEnd();
  }
}
var HomeStandAloneComponent = class _HomeStandAloneComponent {
  _webService;
  _router;
  showLoader = false;
  showGridLoader = false;
  providerMetric;
  followerMetric;
  providerDetails = [];
  followerDetails = [];
  tradingAccountDetails = [];
  role = {};
  selectAccountStatus = "Active";
  gridData = [];
  gridConfig;
  errorComponent;
  beProviderDialog = inject(MatDialog);
  beFollowerDialog = inject(MatDialog);
  commonDialog = inject(MatDialog);
  constructor(_webService, _router) {
    this._webService = _webService;
    this._router = _router;
    this.role["hasProvider"] = this._webService.isProviderAccount;
    this.role["hasFollower"] = this._webService.isSubscriptionAccount;
    this.getHomePageData();
    this._webService.subscribeOnWebDataChange("HomeStandAloneComponent", (event) => {
      this.recieveChildrenEmitter(event);
    });
  }
  recieveChildrenEmitter(event) {
    if (event["action"] == "provider_created") {
      this.refreshUserProfileAndRedirectToProviderOrFollowerProfile(event.data, true);
      this.beProviderDialog.closeAll();
    } else if (event["action"] == "follower_created") {
      this.refreshUserProfileAndRedirectToProviderOrFollowerProfile(event.data, false);
      this.beFollowerDialog.closeAll();
    } else if (event["action"] == "open_account_details_popup") {
      this.openBeTradingAccountPopup(event["data"]);
    }
  }
  refreshUserProfileAndRedirectToProviderOrFollowerProfile(response, isProvider) {
    this._webService.setOrRefreshUserProfileData((result) => {
      if (result.status) {
        this._webService.emitOnWebDataChange({ action: "refresh_sidenav_menu_options", callback: () => {
          if (isProvider) {
            this._router.navigate([`/portal/providers/${response.id}`]);
          } else {
            this._router.navigate([`/portal/subscriptions/${response.id}`]);
          }
        } });
      }
    });
  }
  getHomePageData() {
    if (this.role["hasProvider"]) {
      this.getProviderTableData();
    } else if (this.role["hasFollower"]) {
      this.getFollowersTableData();
    } else {
      this.getTradingAccountData("showPageLoader");
    }
  }
  getProviderTableData() {
    this.showLoader = true;
    this._webService.getProviderTableData().subscribe({
      next: (response) => {
        this.providerDetails = [];
        response.items.forEach((obj) => this.providerDetails.push(new ProviderDetailsUIModal(obj)));
        this.setUpAgGridOfHomePage();
        this.showLoader = false;
      },
      error: (errorObj) => {
        this.showErrorWarnMessage(errorObj?.error?.errorMessage);
      }
    });
  }
  getFollowersTableData() {
    this.showLoader = true;
    this._webService.getFollowerTableData().subscribe({
      next: (response) => {
        this.followerDetails = [];
        response.items.forEach((obj) => this.followerDetails.push(new FollowerDetailsUIModal(obj)));
        this.setUpAgGridOfHomePage();
        this.showLoader = false;
      },
      error: (errorObj) => {
        this.showErrorWarnMessage(errorObj?.error?.errorMessage);
      }
    });
  }
  getTradingAccountData(loaderType) {
    this.toggleLoadingOverlay(loaderType, true);
    let param = {
      scope: this.selectAccountStatus,
      $count: true
    };
    this._webService.getTradingAccountData(param).subscribe({
      next: (response) => {
        this.tradingAccountDetails = [];
        response.items.forEach((obj) => this.tradingAccountDetails.push(new TradingAccountUIModal(obj)));
        this.gridData = this.tradingAccountDetails;
        this.toggleLoadingOverlay(loaderType, false);
      },
      error: (errorObj) => {
        this.showErrorWarnMessage(errorObj?.error?.errorMessage);
      }
    });
  }
  toggleLoadingOverlay(loaderType, loadingFlag) {
    if (loaderType == "showPageLoader") {
      this.setUpAgGridOfHomePage();
      this.showLoader = loadingFlag;
    } else if (loaderType == "showGridLoader") {
      this.showGridLoader = loadingFlag;
    }
  }
  refreshTradeAccountList() {
    this.getTradingAccountData("showGridLoader");
  }
  showErrorWarnMessage(msg) {
    const errorConfigObj = this.errorComponent?.config;
    errorConfigObj.message = msg ? msg : errorConfigObj.message;
    this.errorComponent?.openErrorSnackbar();
  }
  setUpAgGridOfHomePage() {
    if (this.role["hasProvider"]) {
      this.setupProviderGridConfig();
      this.gridData = this.providerDetails;
    } else if (this.role["hasFollower"]) {
      this.setupFollowerGridConfig();
      this.gridData = this.followerDetails;
    } else {
      this.setupAccountGridConfig();
    }
  }
  setupProviderGridConfig() {
    let colDefs = [
      { field: "nickName", headerName: "HOME.Nickname", resizable: false, width: 250, suppressSizeToFit: true, cellRenderer: CommonCellRendererStandAloneComponent, colId: "providerProfileRedirection" },
      { field: "providerFees", headerName: "HOME.Fees", resizable: false, width: 140, maxWidth: 140 },
      { field: "followers", headerName: "HOME.Followers", resizable: true, width: 150, minWidth: 150, maxWidth: 250 },
      { field: "followersGrowth", headerName: "HOME.Followers Growth", resizable: true, width: 170, minWidth: 170, maxWidth: 250 },
      { field: "closedProfit", headerName: "HOME.Closed Profit", resizable: true, width: 150, minWidth: 150, maxWidth: 250 },
      { field: "registerTime", headerName: "HOME.Registered", resizable: false, width: 250, maxWidth: 250 },
      { field: "actions", headerName: "", cellRenderer: ActionButtonStanAloneComponent, flex: 1, colId: "providerProfileRedirection", sortable: false }
    ];
    this.setupGridConfig(colDefs);
  }
  setupFollowerGridConfig() {
    let colDefs = [
      { field: "providerName", headerName: "HOME.Provider", resizable: false, width: 250, suppressSizeToFit: true, cellRenderer: CommonCellRendererStandAloneComponent, colId: "followerProfileRedirection" },
      { field: "tradingProfit", headerName: "HOME.Trading profit", resizable: false, width: 140, maxWidth: 140 },
      { field: "copiedPosition", headerName: "HOME.Copied Position", resizable: true, minWidth: 150, maxWidth: 250 },
      { field: "paidFees", headerName: "HOME.Paid Fees", resizable: true, width: 170, minWidth: 170, maxWidth: 250 },
      { field: "registerTime", headerName: "HOME.Registered", resizable: false, width: 250, maxWidth: 250 },
      { field: "actions", headerName: "", cellRenderer: ActionButtonStanAloneComponent, flex: 1, colId: "followerProfileRedirection", sortable: false }
    ];
    this.setupGridConfig(colDefs);
  }
  setupAccountGridConfig() {
    let colDefs = [
      { field: "tradingAccName", headerName: "ACCOUNTS.Title", cellRenderer: CommonCellRendererStandAloneComponent, resizable: false, width: 250, suppressSizeToFit: true, colId: "accountDetailsPopup" },
      { field: "type", headerName: "ACCOUNTS.Type", cellRenderer: TypeCellRendererStandAloneComponent, cellStyle: { display: "flex", "justify-content": "center", "flex-direction": "column" }, resizable: false, width: 140, maxWidth: 140 },
      { field: "tradingAccountNo", headerName: "ACCOUNTS.Trading Account", resizable: false, width: 200, maxWidth: 250 },
      { field: "balance", headerName: "ACCOUNTS.Balance", resizable: false, width: 150, maxWidth: 150 },
      { field: "equity", headerName: "ACCOUNTS.Equity", resizable: false, width: 150, maxWidth: 150 },
      { field: "connectTime", headerName: "ACCOUNTS.Connected", resizable: false, width: 220, maxWidth: 220 },
      { field: "actions", headerName: "", cellRenderer: ActionButtonStanAloneComponent, flex: 1, colId: "accountDetailsPopup", showPopupArraow: true, sortable: false }
    ];
    this.setupGridConfig(colDefs);
  }
  setupGridConfig(colDefs) {
    this.gridConfig = {
      maxHeight: "400px",
      noDataWarnMessage: "There are no metrics",
      gridOptions: {},
      agGridTheme: "ag-theme-alpine",
      pageSizeDropdownArr: [25, 50, 100],
      initialSelectedPageSize: 25,
      columnDefination: colDefs,
      enablePagination: true,
      headerNameLangArr: colDefs.map((o) => o.headerName),
      rowModelType: "clientSide",
      rowHeight: void 0
    };
  }
  openBeProviderDialog() {
    this.beProviderDialog.open(BeProviderDialogStandAloneComponent, {
      panelClass: "beProvider-dialog"
    });
    this.beProviderDialog.afterAllClosed.subscribe(() => {
    });
  }
  openBeFollowerDialog() {
    this.beFollowerDialog.open(BeFollowerDialogStandAloneComponent, {
      panelClass: "beFollower-dialog"
    });
    this.beFollowerDialog.afterAllClosed.subscribe(() => {
    });
  }
  openBeTradingAccountPopup(data) {
    this.commonDialog.open(CommonDialogStandAloneComponent, {
      panelClass: "common-dialog",
      data: this.prepareTradingAccountData(data)
    });
    this.commonDialog.afterAllClosed.subscribe(() => {
    });
  }
  prepareTradingAccountData(tradingAccountDetails) {
    let commonDialogData = {
      mainTitle: "HOME.TradingAccInfo",
      secondryTitle: "ACCOUNTS.InfoMetaTradeAccount",
      labelDetails: [
        { title: "COMMON.Id", value: tradingAccountDetails.clientId },
        { title: "COMMON.State", value: tradingAccountDetails.state, type: "tag" },
        { title: "ACCOUNTS.Connected", value: tradingAccountDetails.connectTime },
        { title: "PROVIDERS_PROFILE.MT login", value: tradingAccountDetails.tradingAccountNo },
        { title: "PROVIDERS_PROFILE.MT name", value: tradingAccountDetails.tradingAccName },
        { title: "ACCOUNTS.TradeGroupType", value: tradingAccountDetails.tradeGroupType, type: "tag" },
        { title: "ACCOUNTS.AvailInMetaTrade", value: tradingAccountDetails.avialableInMetaTrade, type: "tag" },
        { title: "ACCOUNTS.TradeType", value: tradingAccountDetails.tradeType, type: "tag" },
        { title: "PROVIDERS_PROFILE.Currency", value: tradingAccountDetails.currency },
        { title: "ACCOUNTS.Balance", value: tradingAccountDetails.balance },
        { title: "ACCOUNTS.Credit", value: tradingAccountDetails.credit },
        { title: "ACCOUNTS.Equity", value: tradingAccountDetails.equity },
        { title: "ACCOUNTS.FloatProfit", value: tradingAccountDetails.floatingPoint }
      ]
    };
    return commonDialogData;
  }
  ngOnDestroy() {
    this._webService.unSubscribeOnWebDataChange("HomeStandAloneComponent");
  }
  static \u0275fac = function HomeStandAloneComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeStandAloneComponent)(\u0275\u0275directiveInject(WebService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeStandAloneComponent, selectors: [["app-home"]], viewQuery: function HomeStandAloneComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(ShowErrorStandAloneComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.errorComponent = _t.first);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 2, consts: [["appearance", "outlined", 1, "section-card"], ["class", "section-card-content", 4, "ngIf"], ["class", "full-view-port-height d-flex justify-center align-center", 4, "ngIf"], [1, "section-card-content"], [1, "home-card"], [1, "header", "d-flex", "justify-space-between", "align-center"], [1, "header-title"], [1, "header-buttons", "d-flex", "justify-space-between", "align-center", "g-20"], [1, "primary-btn", 3, "click"], ["src", "../../../../assets/icons/plusIcon.png"], [1, "metrics-table"], [1, "header-title", 3, "ngClass"], [4, "ngIf"], ["class", "d-flex g-20 common-dropdown align-start", 4, "ngIf"], [3, "gridConfig", "gridData", "showGridLoader"], [1, "d-flex", "g-20", "common-dropdown", "align-start"], [3, "ngModelChange", "selectionChange", "ngModel"], [3, "value"], [1, "refresh-btn", 3, "click"], ["src", "../../../../assets/icons/rotateIcon.svg"], [1, "full-view-port-height", "d-flex", "justify-center", "align-center"], ["src", "../../../../assets/logo/ICM Logo Default 1.png"]], template: function HomeStandAloneComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "mat-card", 0);
      \u0275\u0275template(1, HomeStandAloneComponent_mat_card_content_1_Template, 27, 22, "mat-card-content", 1)(2, HomeStandAloneComponent_div_2_Template, 2, 0, "div", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "show-error-message");
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.showLoader);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showLoader);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, ProviderFollowerHeaderCardsStandaloneComponent, ShowErrorStandAloneComponent, TranslateModule, TranslatePipe, MatCardModule, MatCard, MatCardContent, MatSelectModule, MatFormField, MatLabel, MatSelect, MatOption, FormsModule, NgControlStatus, NgModel, CommonAgGridStandAloneComponent], styles: ["\n\n.refresh-btn[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: black;\n  border-radius: 8px;\n  font-weight: 500;\n  font-size: 18px;\n  border: 1px solid #D0D5DD;\n  padding: 12px 18px;\n  display: flex;\n  justify-content: space-between;\n  gap: 10px;\n  align-items: center;\n  cursor: pointer;\n  min-height: 56px;\n  transition:\n    background-color 0.3s linear,\n    border-radius 0.3s linear,\n    padding 0.3s linear,\n    width 0.3s linear;\n  margin-bottom: 20px;\n}\n  .common-dropdown .mdc-text-field {\n  background-color: var(--primaryWhite) !important;\n  border: 1px solid var(--border-color) !important;\n  border-bottom: 0px !important;\n  border-radius: 8px !important;\n  width: 150px;\n}\n  .common-dropdown .mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {\n  border-bottom-color: var(--border-color) !important;\n}\n  .common-dropdown .mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {\n  border-bottom-color: var(--border-color) !important;\n}\n  .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n/*# sourceMappingURL=home.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeStandAloneComponent, { className: "HomeStandAloneComponent", filePath: "src\\app\\web\\views\\home\\home.standalone.component.ts", lineNumber: 29 });
})();
export {
  HomeStandAloneComponent
};
//# sourceMappingURL=chunk-OIIXUVJJ.js.map
