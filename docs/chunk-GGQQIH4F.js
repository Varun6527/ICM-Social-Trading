import {
  StatusBtnRendererComponent
} from "./chunk-DAHACZEA.js";
import {
  BeFollowerDialogStandAloneComponent
} from "./chunk-FPDZAUA3.js";
import "./chunk-M2YGG6IJ.js";
import "./chunk-XT7PDWCQ.js";
import {
  ActionButtonStanAloneComponent
} from "./chunk-XJWPAYL2.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-YEQ6N72F.js";
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
  DefaultValueAccessor,
  FormsModule,
  MatCard,
  MatCardContent,
  MatCardModule,
  MatOption,
  NgControlStatus,
  NgModel,
  NumberValueAccessor,
  ShowErrorStandAloneComponent
} from "./chunk-ZFOVCG2I.js";
import {
  CommonModule,
  CurrencyPipe,
  NgForOf,
  NgIf,
  Router,
  TranslateModule,
  TranslatePipe,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-G46OV5IL.js";
import "./chunk-4OO5LSKA.js";

// src/app/web/views/portfolio/portfolio.component.ts
function PortfolioStandAloneComponent_mat_card_content_1_div_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const subs_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(3, 3, "TRANSACTIONS.Subscription"), " #", subs_r2.id, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(6, 5, subs_r2.value, "USD", "symbol"));
  }
}
function PortfolioStandAloneComponent_mat_card_content_1_button_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function PortfolioStandAloneComponent_mat_card_content_1_button_75_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.clearFilters());
    });
    \u0275\u0275element(1, "img", 23);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.Clear"), " ");
  }
}
function PortfolioStandAloneComponent_mat_card_content_1_Conditional_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field")(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function PortfolioStandAloneComponent_mat_card_content_1_Conditional_77_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.selectedFilters.id, $event) || (ctx_r2.selectedFilters.id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "mat-form-field")(6, "mat-label");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function PortfolioStandAloneComponent_mat_card_content_1_Conditional_77_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.selectedFilters.externalAccount, $event) || (ctx_r2.selectedFilters.externalAccount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "mat-form-field")(11, "mat-label");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "mat-select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function PortfolioStandAloneComponent_mat_card_content_1_Conditional_77_Template_mat_select_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.selectedFilters.status, $event) || (ctx_r2.selectedFilters.status = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("selectionChange", function PortfolioStandAloneComponent_mat_card_content_1_Conditional_77_Template_mat_select_selectionChange_14_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.refreshFollowerDataList());
    });
    \u0275\u0275elementStart(15, "mat-option", 26);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "mat-option", 26);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 10, "COMMON.Id"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.selectedFilters.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 12, "TRANSACTIONS.Account"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.selectedFilters.externalAccount);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 14, "PROVIDERS_PROFILE.Scope"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.selectedFilters.status);
    \u0275\u0275advance();
    \u0275\u0275property("value", "Active");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 16, "COMMON.Active"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", "All");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 18, "COMMON.All"));
  }
}
function PortfolioStandAloneComponent_mat_card_content_1_Conditional_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "PROVIDERS_LIST.Search"), " ");
  }
}
function PortfolioStandAloneComponent_mat_card_content_1_Conditional_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.Refresh"), " ");
  }
}
function PortfolioStandAloneComponent_mat_card_content_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card-content", 3)(1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "h5");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 7)(11, "div", 8)(12, "h6");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 9)(16, "h5");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "h5");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 9)(22, "h5");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "h5");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 8)(28, "h6");
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 9)(32, "h5");
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "h5");
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 9)(39, "h5");
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "h5");
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "currency");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 8)(46, "h6");
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 9)(50, "h5");
    \u0275\u0275text(51);
    \u0275\u0275pipe(52, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "h5");
    \u0275\u0275text(54);
    \u0275\u0275pipe(55, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 9)(57, "h5");
    \u0275\u0275text(58);
    \u0275\u0275pipe(59, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "h5");
    \u0275\u0275text(61);
    \u0275\u0275pipe(62, "currency");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(63, "div", 8)(64, "h6");
    \u0275\u0275text(65);
    \u0275\u0275pipe(66, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(67, PortfolioStandAloneComponent_mat_card_content_1_div_67_Template, 7, 9, "div", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "div", 11)(69, "div", 12)(70, "div", 13)(71, "button", 14);
    \u0275\u0275listener("click", function PortfolioStandAloneComponent_mat_card_content_1_Template_button_click_71_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.applyFollowerFilter());
    });
    \u0275\u0275element(72, "img", 15);
    \u0275\u0275text(73);
    \u0275\u0275pipe(74, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(75, PortfolioStandAloneComponent_mat_card_content_1_button_75_Template, 4, 3, "button", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "div", 17);
    \u0275\u0275template(77, PortfolioStandAloneComponent_mat_card_content_1_Conditional_77_Template, 21, 20);
    \u0275\u0275elementStart(78, "button", 18);
    \u0275\u0275listener("click", function PortfolioStandAloneComponent_mat_card_content_1_Template_button_click_78_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.refreshFollowerDataList());
    });
    \u0275\u0275template(79, PortfolioStandAloneComponent_mat_card_content_1_Conditional_79_Template, 3, 3)(80, PortfolioStandAloneComponent_mat_card_content_1_Conditional_80_Template, 3, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "button", 19);
    \u0275\u0275listener("click", function PortfolioStandAloneComponent_mat_card_content_1_Template_button_click_81_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openNewFollowerDialog());
    });
    \u0275\u0275element(82, "img", 20);
    \u0275\u0275text(83);
    \u0275\u0275pipe(84, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(85, "common-ag-grid", 21);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 27, "SIDEBAR.My Portfolio"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 29, "PROVIDERS_PROFILE.List of subscriptions"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 31, "PROVIDERS_PROFILE.Subscriptions' Activity"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 33, "COMMON.Active"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.followerDashBoardData == null ? null : ctx_r2.followerDashBoardData.activeCount);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 35, "COMMON.Inactive"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.followerDashBoardData == null ? null : ctx_r2.followerDashBoardData.inActiveCount);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 37, "PROVIDERS_PROFILE.Profit"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 39, "PROVIDERS.This month"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(37, 41, ctx_r2.followerDashBoardData == null ? null : ctx_r2.followerDashBoardData.thisMonthProfit, "USD", "symbol"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 45, "PROVIDERS.Previous month"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(44, 47, ctx_r2.followerDashBoardData == null ? null : ctx_r2.followerDashBoardData.previousMonthProfit, "USD", "symbol"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(48, 51, "PROVIDERS.Performance Fee"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(52, 53, "PROVIDERS.This month"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(55, 55, ctx_r2.followerDashBoardData == null ? null : ctx_r2.followerDashBoardData.thisMonthPaidFees, "USD", "symbol"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(59, 59, "PROVIDERS.Previous month"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(62, 61, ctx_r2.followerDashBoardData == null ? null : ctx_r2.followerDashBoardData.previousMonthPaidFees, "USD", "symbol"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(66, 65, "PROVIDERS_PROFILE.Profitable Subscriptions"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.followerDashBoardData.subscriptionsRating);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(74, 67, "COMMON.Filters"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.showFilters);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.showFilters ? 77 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.selectedFilters.externalAccount || ctx_r2.selectedFilters.id ? 79 : 80);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(84, 69, "COMMON.Create"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("gridConfig", ctx_r2.gridConfig)("gridData", ctx_r2.followerTableData)("showGridLoader", ctx_r2.showGridLoader);
  }
}
function PortfolioStandAloneComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275element(1, "img", 30);
    \u0275\u0275elementEnd();
  }
}
var PortfolioStandAloneComponent = class _PortfolioStandAloneComponent {
  _webService;
  _router;
  showPageLoader = false;
  showGridLoader = false;
  selectedFilters = { externalAccount: "", id: "", status: "Active" };
  filterEnabled = false;
  followerDashBoardData;
  followerTableData = [];
  gridConfig;
  beFollowerDialog = inject(MatDialog);
  errorComponent;
  showFilters = false;
  constructor(_webService, _router) {
    this._webService = _webService;
    this._router = _router;
    this._webService.subscribeOnWebDataChange("PortfolioStandAloneComponent", (event) => {
      this.recieveChildrenEmitter(event);
    });
    this.setupFollowerTableConfig();
    this.getFollowerDashboardData();
    this.getFollowerTableData();
  }
  setupFollowerTableConfig() {
    let colDefs = [
      { field: "refs.provider.name", headerName: "HOME.Provider", resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: "followerProfileCell" },
      { field: "activationStatus", headerName: "PROVIDERS_PROFILE.Activity", resizable: false, cellRenderer: StatusBtnRendererComponent, colId: "activityCell" },
      { field: "externalAccount", headerName: "SUBSCRIPTION.Trading account", resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: "providerTradingAccountCell" },
      { field: "performance.fee", headerName: "OFFERS.Performance fee", resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: "performanceFeeCell" },
      { field: "registerTime", headerName: "PROVIDERS.Registered", sort: "desc", resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: "dateTimeCell" },
      { field: "actions", sortable: false, headerName: "", cellRenderer: ActionButtonStanAloneComponent, colId: "followerProfileRedirection" }
    ];
    this.setupGridConfig(colDefs);
  }
  setupGridConfig(colDefs) {
    this.gridConfig = {
      maxHeight: "400px",
      noDataWarnMessage: "There are no subscriptions",
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
  getFollowerDashboardData() {
    this.showPageLoader = true;
    this._webService.getFollowerDashboardDetails().subscribe({
      next: (response) => {
        this.followerDashBoardData = {};
        this.followerDashBoardData = response;
        this.showPageLoader = false;
      },
      error: (errorObj) => {
        this.showErrorWarnMessage(errorObj?.error?.errorMessage);
        this.showPageLoader = false;
      },
      complete: () => {
        this.showPageLoader = false;
      }
    });
  }
  getFollowerTableData() {
    this.showGridLoader = true;
    let param = this.getFollowerParam();
    this._webService.getFollowerData(param).subscribe({
      next: (response) => {
        this.followerTableData = [];
        this.followerTableData = response.items;
        this.showGridLoader = false;
      },
      error: (errorObj) => {
        this.showGridLoader = false;
        this.showErrorWarnMessage(errorObj?.error?.errorMessage);
      },
      complete: () => {
        this.showGridLoader = false;
      }
    });
  }
  getFollowerParam() {
    let param = {
      scope: this.selectedFilters.status,
      $count: true
    };
    this.getFilterQuery() ? param["$filter"] = this.getFilterQuery() : "";
    return param;
  }
  getFilterQuery() {
    let filterQuery = "";
    if (this.selectedFilters.externalAccount) {
      filterQuery += `externalAccount eq ${this.selectedFilters.externalAccount} and `;
    }
    if (this.selectedFilters.id) {
      filterQuery += `id eq ${this.selectedFilters.id} and `;
    }
    return filterQuery ? filterQuery.slice(0, -4) : "";
  }
  showErrorWarnMessage(msg) {
    const errorConfigObj = this.errorComponent?.config;
    errorConfigObj.message = msg ? msg : errorConfigObj.message;
    this.errorComponent?.openErrorSnackbar();
  }
  openNewFollowerDialog() {
    this.beFollowerDialog.open(BeFollowerDialogStandAloneComponent, {
      panelClass: "beFollower-dialog"
    });
    this.beFollowerDialog.afterAllClosed.subscribe(() => {
    });
  }
  toggleFilter() {
    this.filterEnabled = !this.filterEnabled;
  }
  recieveChildrenEmitter(event) {
    if (event["action"] == "follower_created") {
      let followerData = event.data;
      this._router.navigate([`/portal/subscriptions/${followerData.id}`]);
      this.beFollowerDialog.closeAll();
    }
  }
  refreshFollowerDataList() {
    this.getFollowerTableData();
  }
  applyFollowerFilter() {
    if (this.showFilters) {
      this.showFilters = false;
      this.clearFilters();
    } else {
      this.showFilters = true;
    }
  }
  clearFilters() {
    this.resetFilter();
    this.getFollowerTableData();
  }
  resetFilter() {
    this.selectedFilters = { externalAccount: "", id: "", status: "Active" };
  }
  ngOnDestroy() {
    this._webService.unSubscribeOnWebDataChange("PortfolioStandAloneComponent");
  }
  static \u0275fac = function PortfolioStandAloneComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PortfolioStandAloneComponent)(\u0275\u0275directiveInject(WebService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PortfolioStandAloneComponent, selectors: [["app-portfolio"]], viewQuery: function PortfolioStandAloneComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(ShowErrorStandAloneComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.errorComponent = _t.first);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 2, consts: [["appearance", "outlined", 1, "section-card"], ["class", "section-card-content", 4, "ngIf"], ["class", "full-view-port-height d-flex justify-center align-center", 4, "ngIf"], [1, "section-card-content"], [1, "home-card"], [1, "header", "d-flex", "justify-space-between", "align-center"], [1, "header-title"], [1, "stats", "d-flex", "justify-space-between", "g-20"], [1, "stats-card"], [1, "stats-info"], ["class", "d-flex justify-space-between flex-column", 4, "ngFor", "ngForOf"], [1, "metrics-table"], [1, "header-buttons", "d-flex", "justify-space-between"], [1, "d-flex", "g-20", "justify-center", "align-center"], [1, "secondary-btn", 3, "click"], ["src", "../../../../assets/icons/filterIcon.svg"], ["class", "secondary-btn", 3, "click", 4, "ngIf"], [1, "d-flex", "g-20", "common-dropdown", "align-center"], [1, "refresh-btn", 3, "click"], [1, "primary-btn", 3, "click"], ["src", "../../../../assets/icons/plusIcon.png"], [3, "gridConfig", "gridData", "showGridLoader"], [1, "d-flex", "justify-space-between", "flex-column"], ["width", "20", "src", "../../../../assets/icons/clear-icon.svg"], ["matInput", "", "type", "number", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "selectionChange", "ngModel"], [3, "value"], ["src", "../../../../assets/icons/searchIcon.svg"], ["src", "../../../../assets/icons/rotateIcon.svg"], [1, "full-view-port-height", "d-flex", "justify-center", "align-center"], ["src", "../../../../assets/logo/ICM Logo Default 1.png"]], template: function PortfolioStandAloneComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "mat-card", 0);
      \u0275\u0275template(1, PortfolioStandAloneComponent_mat_card_content_1_Template, 86, 71, "mat-card-content", 1)(2, PortfolioStandAloneComponent_div_2_Template, 2, 0, "div", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "show-error-message");
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.showPageLoader);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showPageLoader);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, CurrencyPipe, MatCardModule, MatCard, MatCardContent, MatSelectModule, MatFormField, MatLabel, MatSelect, MatOption, MatInputModule, MatInput, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgModel, TranslateModule, TranslatePipe, CommonAgGridStandAloneComponent, ShowErrorStandAloneComponent], styles: ["\n\n.stats-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.stats-info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.stats-subline[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .positive[_ngcontent-%COMP%] {\n  color: #027A48;\n}\n.stats-subline[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .negative[_ngcontent-%COMP%] {\n  color: #B42318;\n}\n  .common-dropdown .mdc-text-field {\n  background-color: var(--primaryWhite) !important;\n  border: 1px solid var(--border-color) !important;\n  border-bottom: 0px !important;\n  border-radius: 8px !important;\n  width: 150px;\n}\n  .common-dropdown .mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {\n  border-bottom-color: var(--border-color) !important;\n}\n  .common-dropdown .mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {\n  border-bottom-color: var(--border-color) !important;\n}\n  .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.refresh-btn[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: black;\n  border-radius: 8px;\n  font-weight: 500;\n  font-size: 18px;\n  border: 1px solid #D0D5DD;\n  padding: 12px 18px;\n  display: flex;\n  justify-content: space-between;\n  gap: 10px;\n  align-items: center;\n  cursor: pointer;\n  min-height: 56px;\n  transition:\n    background-color 0.3s linear,\n    border-radius 0.3s linear,\n    padding 0.3s linear,\n    width 0.3s linear;\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=portfolio.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PortfolioStandAloneComponent, { className: "PortfolioStandAloneComponent", filePath: "src\\app\\web\\views\\portfolio\\portfolio.component.ts", lineNumber: 28 });
})();
export {
  PortfolioStandAloneComponent
};
//# sourceMappingURL=chunk-GGQQIH4F.js.map
