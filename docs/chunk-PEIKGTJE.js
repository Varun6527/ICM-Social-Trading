import {
  BeProviderDialogStandAloneComponent
} from "./chunk-55XS5TPC.js";
import "./chunk-XT7PDWCQ.js";
import {
  ActionButtonStanAloneComponent
} from "./chunk-XJWPAYL2.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-YEQ6N72F.js";
import {
  ProviderDashboardUIModal,
  ProviderTableUIModal
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
  ɵɵproperty,
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

// src/app/web/views/providers/providers.standalone.component.ts
function ProvidersStandAloneComponent_mat_card_content_1_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const provider_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(provider_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(provider_r2.count);
  }
}
function ProvidersStandAloneComponent_mat_card_content_1_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const provider_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(provider_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(provider_r3.value);
  }
}
function ProvidersStandAloneComponent_mat_card_content_1_button_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function ProvidersStandAloneComponent_mat_card_content_1_button_60_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.clearFilters());
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
function ProvidersStandAloneComponent_mat_card_content_1_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field")(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function ProvidersStandAloneComponent_mat_card_content_1_Conditional_62_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.selectedFilters.id, $event) || (ctx_r3.selectedFilters.id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "mat-form-field")(6, "mat-label");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function ProvidersStandAloneComponent_mat_card_content_1_Conditional_62_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.selectedFilters.externalAccount, $event) || (ctx_r3.selectedFilters.externalAccount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "mat-form-field")(11, "mat-label");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function ProvidersStandAloneComponent_mat_card_content_1_Conditional_62_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.selectedFilters.nickName, $event) || (ctx_r3.selectedFilters.nickName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "mat-form-field")(16, "mat-label");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-select", 26);
    \u0275\u0275twoWayListener("ngModelChange", function ProvidersStandAloneComponent_mat_card_content_1_Conditional_62_Template_mat_select_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.selectedFilters.status, $event) || (ctx_r3.selectedFilters.status = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("selectionChange", function ProvidersStandAloneComponent_mat_card_content_1_Conditional_62_Template_mat_select_selectionChange_19_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.refreshProviderDataList());
    });
    \u0275\u0275elementStart(20, "mat-option", 27);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "mat-option", 27);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 12, "COMMON.Id"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.selectedFilters.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 14, "PROVIDERS.Trading Account"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.selectedFilters.externalAccount);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 16, "PROVIDERS.Nickname"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.selectedFilters.nickName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 18, "PROVIDERS_PROFILE.Scope"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.selectedFilters.status);
    \u0275\u0275advance();
    \u0275\u0275property("value", "Active");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 20, "COMMON.Active"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", "All");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 22, "COMMON.All"));
  }
}
function ProvidersStandAloneComponent_mat_card_content_1_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "PROVIDERS_LIST.Search"), " ");
  }
}
function ProvidersStandAloneComponent_mat_card_content_1_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 29);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.Refresh"), " ");
  }
}
function ProvidersStandAloneComponent_mat_card_content_1_Template(rf, ctx) {
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
    \u0275\u0275template(31, ProvidersStandAloneComponent_mat_card_content_1_div_31_Template, 5, 2, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 8)(33, "h6");
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, ProvidersStandAloneComponent_mat_card_content_1_div_36_Template, 5, 2, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 8)(38, "h6");
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 9)(42, "h5");
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "h5");
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 9)(48, "h5");
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "h5");
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(53, "div", 11)(54, "div", 12)(55, "div", 13)(56, "button", 14);
    \u0275\u0275listener("click", function ProvidersStandAloneComponent_mat_card_content_1_Template_button_click_56_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.applyProvidersFilter());
    });
    \u0275\u0275element(57, "img", 15);
    \u0275\u0275text(58);
    \u0275\u0275pipe(59, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(60, ProvidersStandAloneComponent_mat_card_content_1_button_60_Template, 4, 3, "button", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div", 17);
    \u0275\u0275template(62, ProvidersStandAloneComponent_mat_card_content_1_Conditional_62_Template, 26, 24);
    \u0275\u0275elementStart(63, "button", 18);
    \u0275\u0275listener("click", function ProvidersStandAloneComponent_mat_card_content_1_Template_button_click_63_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.refreshProviderDataList());
    });
    \u0275\u0275template(64, ProvidersStandAloneComponent_mat_card_content_1_Conditional_64_Template, 3, 3)(65, ProvidersStandAloneComponent_mat_card_content_1_Conditional_65_Template, 3, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "button", 19);
    \u0275\u0275listener("click", function ProvidersStandAloneComponent_mat_card_content_1_Template_button_click_66_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openNewProviderDialog());
    });
    \u0275\u0275element(67, "img", 20);
    \u0275\u0275text(68);
    \u0275\u0275pipe(69, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(70, "common-ag-grid", 21);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 24, "PROVIDERS.Providers"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 26, "PROVIDERS.List of Providers"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 28, "COMMON.Status"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 30, "COMMON.Active"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.providersDashBoardData == null ? null : ctx_r3.providersDashBoardData.activeCount);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 32, "COMMON.Inactive"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.providersDashBoardData == null ? null : ctx_r3.providersDashBoardData.inActiveCount);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 34, "PROVIDERS.Popular Providers"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.providersDashBoardData.popularProvidersArr);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 36, "PROVIDERS.Profitable Providers"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.providersDashBoardData.profitableProvidersArr);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 38, "PROVIDERS.Performance Fee"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(44, 40, "PROVIDERS.This month"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.providersDashBoardData == null ? null : ctx_r3.providersDashBoardData.currentMonthPerformanceFee);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(50, 42, "PROVIDERS.Previous month"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.providersDashBoardData == null ? null : ctx_r3.providersDashBoardData.previousMonthPerformanceFee);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(59, 44, "COMMON.Filters"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.showFilters);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.showFilters ? 62 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.selectedFilters.nickName || ctx_r3.selectedFilters.externalAccount || ctx_r3.selectedFilters.id ? 64 : 65);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(69, 46, "COMMON.Create"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("gridConfig", ctx_r3.gridConfig)("gridData", ctx_r3.providersTableData)("showGridLoader", ctx_r3.showGridLoader);
  }
}
function ProvidersStandAloneComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275element(1, "img", 31);
    \u0275\u0275elementEnd();
  }
}
var ProvidersStandAloneComponent = class _ProvidersStandAloneComponent {
  _webService;
  _router;
  showPageLoader = false;
  showGridLoader = false;
  selectedFilters = { nickName: "", externalAccount: "", id: "", status: "Active" };
  filterEnabled = false;
  providersDashBoardData;
  providersTableData = [];
  gridConfig;
  beProviderDialog = inject(MatDialog);
  errorComponent;
  showFilters = false;
  constructor(_webService, _router) {
    this._webService = _webService;
    this._router = _router;
    this._webService.subscribeOnWebDataChange("ProvidersStandAloneComponent", (event) => {
      this.recieveChildrenEmitter(event);
    });
    this.setupProviderTableConfig();
    this.getProviderDashboardData();
    this.getProvidersTableData();
  }
  setupProviderTableConfig() {
    let colDefs = [
      { field: "nickName", headerName: "PROVIDERS.Nickname", resizable: false, suppressSizeToFit: true, cellRenderer: CommonCellRendererStandAloneComponent, colId: "providerNameCell", width: 250 },
      { field: "tradingAccount", sortable: false, headerName: "PROVIDERS.Trading Account", resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: "providerTradingAccountCell" },
      { field: "strategyMode", headerName: "PROVIDERS.Strategy Mode", resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: "tagCell" },
      { field: "equity", headerName: "PROVIDERS.Equity", resizable: false },
      { field: "registerTime", headerName: "PROVIDERS.Registered", resizable: false, flex: 1 },
      { field: "actions", sortable: false, headerName: "", cellRenderer: ActionButtonStanAloneComponent, flex: 1, colId: "providerProfileRedirection" }
    ];
    this.setupGridConfig(colDefs);
  }
  setupGridConfig(colDefs) {
    this.gridConfig = {
      maxHeight: "400px",
      noDataWarnMessage: "There are no providers",
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
  getProviderDashboardData() {
    this.showPageLoader = true;
    this._webService.getProviderDashboardDetails().subscribe({
      next: (response) => {
        this.providersDashBoardData = {};
        this.providersDashBoardData = new ProviderDashboardUIModal(response);
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
  getProvidersTableData() {
    this.showGridLoader = true;
    let param = this.getProvdersParam();
    this._webService.getProviderData(param).subscribe({
      next: (response) => {
        this.providersTableData = [];
        response.items.forEach((obj) => this.providersTableData.push(new ProviderTableUIModal(obj)));
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
  getProvdersParam() {
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
    if (this.selectedFilters.nickName) {
      filterQuery += `contains(tolower(nickname), '${this.selectedFilters.nickName}') and `;
    }
    return filterQuery ? filterQuery.slice(0, -4) : "";
  }
  showErrorWarnMessage(msg) {
    const errorConfigObj = this.errorComponent?.config;
    errorConfigObj.message = msg ? msg : errorConfigObj.message;
    this.errorComponent?.openErrorSnackbar();
  }
  openNewProviderDialog() {
    this.beProviderDialog.open(BeProviderDialogStandAloneComponent, {
      panelClass: "beProvider-dialog"
    });
    this.beProviderDialog.afterAllClosed.subscribe(() => {
    });
  }
  toggleFilter() {
    this.filterEnabled = !this.filterEnabled;
  }
  recieveChildrenEmitter(event) {
    if (event["action"] == "provider_created") {
      let providerData = event.data;
      this._router.navigate([`/portal/providers/${providerData.id}`]);
      this.beProviderDialog.closeAll();
    }
  }
  refreshProviderDataList() {
    this.getProvidersTableData();
  }
  applyProvidersFilter() {
    if (this.showFilters) {
      this.showFilters = false;
      this.clearFilters();
    } else {
      this.showFilters = true;
    }
  }
  clearFilters() {
    this.resetFilter();
    this.getProvidersTableData();
  }
  resetFilter() {
    this.selectedFilters = { nickName: "", externalAccount: "", id: "", status: "Active" };
  }
  ngOnDestroy() {
    this._webService.unSubscribeOnWebDataChange("ProvidersStandAloneComponent");
  }
  static \u0275fac = function ProvidersStandAloneComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProvidersStandAloneComponent)(\u0275\u0275directiveInject(WebService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProvidersStandAloneComponent, selectors: [["app-providers"]], viewQuery: function ProvidersStandAloneComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(ShowErrorStandAloneComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.errorComponent = _t.first);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 2, consts: [["appearance", "outlined", 1, "section-card"], ["class", "section-card-content", 4, "ngIf"], ["class", "full-view-port-height d-flex justify-center align-center", 4, "ngIf"], [1, "section-card-content"], [1, "home-card"], [1, "header", "d-flex", "justify-space-between", "align-center"], [1, "header-title"], [1, "stats", "d-flex", "justify-space-between", "g-20"], [1, "stats-card"], [1, "stats-info"], ["class", "d-flex justify-space-between flex-column", 4, "ngFor", "ngForOf"], [1, "metrics-table"], [1, "header-buttons", "d-flex", "justify-space-between"], [1, "d-flex", "g-20", "justify-center", "align-center"], [1, "secondary-btn", 3, "click"], ["src", "../../../../assets/icons/filterIcon.svg"], ["class", "secondary-btn", 3, "click", 4, "ngIf"], [1, "d-flex", "g-20", "common-dropdown", "align-center"], [1, "refresh-btn", 3, "click"], [1, "primary-btn", 3, "click"], ["src", "../../../../assets/icons/plusIcon.png"], [3, "gridConfig", "gridData", "showGridLoader"], [1, "d-flex", "justify-space-between", "flex-column"], ["width", "20", "src", "../../../../assets/icons/clear-icon.svg"], ["matInput", "", "type", "number", 3, "ngModelChange", "ngModel"], ["matInput", "", "type", "text", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "selectionChange", "ngModel"], [3, "value"], ["src", "../../../../assets/icons/searchIcon.svg"], ["src", "../../../../assets/icons/rotateIcon.svg"], [1, "full-view-port-height", "d-flex", "justify-center", "align-center"], ["src", "../../../../assets/logo/ICM Logo Default 1.png"]], template: function ProvidersStandAloneComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "mat-card", 0);
      \u0275\u0275template(1, ProvidersStandAloneComponent_mat_card_content_1_Template, 71, 48, "mat-card-content", 1)(2, ProvidersStandAloneComponent_div_2_Template, 2, 0, "div", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "show-error-message");
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.showPageLoader);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showPageLoader);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, MatCardModule, MatCard, MatCardContent, MatSelectModule, MatFormField, MatLabel, MatSelect, MatOption, MatInputModule, MatInput, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgModel, TranslateModule, TranslatePipe, CommonAgGridStandAloneComponent, ShowErrorStandAloneComponent], styles: ["\n\n.stats-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.stats-info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.stats-subline[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .positive[_ngcontent-%COMP%] {\n  color: #027A48;\n}\n.stats-subline[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .negative[_ngcontent-%COMP%] {\n  color: #B42318;\n}\n  .common-dropdown .mdc-text-field {\n  background-color: var(--primaryWhite) !important;\n  border: 1px solid var(--border-color) !important;\n  border-bottom: 0px !important;\n  border-radius: 8px !important;\n  width: 150px;\n}\n  .common-dropdown .mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {\n  border-bottom-color: var(--border-color) !important;\n}\n  .common-dropdown .mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {\n  border-bottom-color: var(--border-color) !important;\n}\n  .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.refresh-btn[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: black;\n  border-radius: 8px;\n  font-weight: 500;\n  font-size: 18px;\n  border: 1px solid #D0D5DD;\n  padding: 12px 18px;\n  display: flex;\n  justify-content: space-between;\n  gap: 10px;\n  align-items: center;\n  cursor: pointer;\n  min-height: 56px;\n  transition:\n    background-color 0.3s linear,\n    border-radius 0.3s linear,\n    padding 0.3s linear,\n    width 0.3s linear;\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=providers.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProvidersStandAloneComponent, { className: "ProvidersStandAloneComponent", filePath: "src\\app\\web\\views\\providers\\providers.standalone.component.ts", lineNumber: 27 });
})();
export {
  ProvidersStandAloneComponent
};
//# sourceMappingURL=chunk-PEIKGTJE.js.map
