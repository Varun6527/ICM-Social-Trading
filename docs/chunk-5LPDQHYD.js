import {
  CommonDialogStandAloneComponent
} from "./chunk-IAOGV6S5.js";
import {
  ActionButtonStanAloneComponent
} from "./chunk-XJWPAYL2.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-YEQ6N72F.js";
import {
  TransactionHistoryUiModal
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
  NgIf,
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

// src/app/web/views/transactions/transactions.standalone.component.ts
function TransactionsStandAloneComponent_mat_card_content_1_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function TransactionsStandAloneComponent_mat_card_content_1_button_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearFilters());
    });
    \u0275\u0275element(1, "img", 16);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.Clear"), " ");
  }
}
function TransactionsStandAloneComponent_mat_card_content_1_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field")(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 17);
    \u0275\u0275twoWayListener("ngModelChange", function TransactionsStandAloneComponent_mat_card_content_1_Conditional_19_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedFilters.id, $event) || (ctx_r1.selectedFilters.id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "mat-form-field")(6, "mat-label");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 17);
    \u0275\u0275twoWayListener("ngModelChange", function TransactionsStandAloneComponent_mat_card_content_1_Conditional_19_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedFilters.externalAccount, $event) || (ctx_r1.selectedFilters.externalAccount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "mat-form-field")(11, "mat-label");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 17);
    \u0275\u0275twoWayListener("ngModelChange", function TransactionsStandAloneComponent_mat_card_content_1_Conditional_19_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedFilters.platformId, $event) || (ctx_r1.selectedFilters.platformId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "mat-form-field")(16, "mat-label");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-select", 18);
    \u0275\u0275twoWayListener("ngModelChange", function TransactionsStandAloneComponent_mat_card_content_1_Conditional_19_Template_mat_select_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedFilters.ownerType, $event) || (ctx_r1.selectedFilters.ownerType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(20, "mat-option", 19);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "mat-option", 19);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 12, "COMMON.Id"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedFilters.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 14, "TRANSACTIONS.Account"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedFilters.externalAccount);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 16, "TRANSACTIONS.MT order"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedFilters.platformId);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 18, "TRANSACTIONS.Role"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedFilters.ownerType);
    \u0275\u0275advance();
    \u0275\u0275property("value", "Provider");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 20, "HOME.Provider"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", "Subscription");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 22, "TRANSACTIONS.Subscription"));
  }
}
function TransactionsStandAloneComponent_mat_card_content_1_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "PROVIDERS_LIST.Search"), " ");
  }
}
function TransactionsStandAloneComponent_mat_card_content_1_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 21);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.Refresh"), " ");
  }
}
function TransactionsStandAloneComponent_mat_card_content_1_Template(rf, ctx) {
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
    \u0275\u0275elementStart(10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "button", 10);
    \u0275\u0275listener("click", function TransactionsStandAloneComponent_mat_card_content_1_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyTransactFilter());
    });
    \u0275\u0275element(14, "img", 11);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, TransactionsStandAloneComponent_mat_card_content_1_button_17_Template, 4, 3, "button", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 13);
    \u0275\u0275template(19, TransactionsStandAloneComponent_mat_card_content_1_Conditional_19_Template, 26, 24);
    \u0275\u0275elementStart(20, "button", 14);
    \u0275\u0275listener("click", function TransactionsStandAloneComponent_mat_card_content_1_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.refreshTransactDataList());
    });
    \u0275\u0275template(21, TransactionsStandAloneComponent_mat_card_content_1_Conditional_21_Template, 3, 3)(22, TransactionsStandAloneComponent_mat_card_content_1_Conditional_22_Template, 3, 3);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "common-ag-grid", 15);
    \u0275\u0275listener("emitToParent", function TransactionsStandAloneComponent_mat_card_content_1_Template_common_ag_grid_emitToParent_23_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.recieveChildrenEmitter($event));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 9, "TRANSACTIONS.Transaction History"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 11, "TRANSACTIONS.List of fee payments"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 13, "COMMON.Filters"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.showFilters);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.showFilters ? 19 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.selectedFilters.ownerType || ctx_r1.selectedFilters.platformId || ctx_r1.selectedFilters.externalAccount || ctx_r1.selectedFilters.id ? 21 : 22);
    \u0275\u0275advance(2);
    \u0275\u0275property("gridConfig", ctx_r1.gridConfig)("gridData", ctx_r1.transactionGridData)("showGridLoader", ctx_r1.showGridLoader);
  }
}
function TransactionsStandAloneComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275element(1, "img", 23);
    \u0275\u0275elementEnd();
  }
}
var TransactionsStandAloneComponent = class _TransactionsStandAloneComponent {
  _webService;
  transactionGridData = [];
  showLoader = false;
  showGridLoader = false;
  gridConfig;
  showFilters;
  selectedFilters = { ownerType: "", platformId: "", externalAccount: "", id: "" };
  sortApiKey = { transactionTitlePopup: "id", externalAccount: "externalAccount", platformId: "platformId", transactionAmountViewDisplay: "amount", processTime: "processTime" };
  errorComponent;
  beTradeAccDetailDialog = inject(MatDialog);
  hideAgGrid;
  gridApiObj;
  constructor(_webService) {
    this._webService = _webService;
    this._webService.subscribeOnWebDataChange("TransactionsStandAloneComponent", (event) => {
      this.recieveChildrenEmitter(event);
    });
    this.setupTransactionGridConfig();
  }
  getTransactionsData(event) {
    let param = this.getParamsForTransactApi(event.params.request);
    this._webService.getTransactionPageData(param).subscribe({
      next: (response) => {
        this.transactionGridData = [];
        response.transactHistory.items.forEach((obj) => this.transactionGridData.push(new TransactionHistoryUiModal(obj, response.providerData)));
        this.sendDataToAgGrid(true, event, response.transactHistory.count, this.transactionGridData);
      },
      error: (errorObj) => {
        this.sendDataToAgGrid(false, event, 0, []);
        this.showErrorWarnMessage(errorObj?.error?.errorMessage);
      }
    });
  }
  getParamsForTransactApi(requestParam) {
    let param = {};
    param["$count"] = true;
    param["$top"] = requestParam.endRow;
    param["$skip"] = requestParam.startRow;
    this.getOrderByQuery(requestParam.sortModel) ? param["$orderby"] = this.getOrderByQuery(requestParam.sortModel) : "";
    this.getFilterQuery() ? param["$filter"] = this.getFilterQuery() : "";
    return param;
  }
  getFilterQuery() {
    let filterQuery = "";
    if (this.selectedFilters.ownerType) {
      filterQuery += `ownerType eq '${this.selectedFilters.ownerType}' and `;
    }
    if (this.selectedFilters.platformId) {
      filterQuery += `platformId eq ${this.selectedFilters.platformId} and `;
    }
    if (this.selectedFilters.externalAccount) {
      filterQuery += `externalAccount eq ${this.selectedFilters.externalAccount} and `;
    }
    if (this.selectedFilters.id) {
      filterQuery += `id eq ${this.selectedFilters.id} and `;
    }
    return filterQuery ? filterQuery.slice(0, -4) : "";
  }
  getOrderByQuery(sortModel) {
    if (sortModel.length == 0)
      return;
    let sortQuery = "";
    sortModel.forEach((obj) => {
      sortQuery += `${this.sortApiKey[obj.colId]} ${obj.sort},`;
    });
    return sortQuery.slice(0, -1);
  }
  sendDataToAgGrid(status, event, count, transactionGridData) {
    let serverResponse = {
      status,
      data: transactionGridData,
      rowCount: count
    };
    event.callback(serverResponse);
  }
  applyTransactFilter() {
    if (this.showFilters) {
      this.showFilters = false;
      this.clearFilters();
    } else {
      this.showFilters = true;
    }
  }
  clearFilters() {
    this.resetFilter();
    this.gridApiObj.refreshServerSide();
  }
  refreshTransactDataList() {
    this.gridApiObj.refreshServerSide();
  }
  resetFilter() {
    this.selectedFilters = { ownerType: "", platformId: "", externalAccount: "", id: "" };
  }
  toggleLoadingOverlay(loaderType, loadingFlag) {
    if (loaderType == "showPageLoader") {
      this.setupTransactionGridConfig();
      this.showLoader = loadingFlag;
    } else if (loaderType == "showGridLoader") {
      this.showGridLoader = loadingFlag;
    }
  }
  showErrorWarnMessage(msg) {
    const errorConfigObj = this.errorComponent?.config;
    errorConfigObj.message = msg ? msg : errorConfigObj.message;
    this.errorComponent?.openErrorSnackbar();
  }
  setupTransactionGridConfig() {
    let colDefs = [
      { field: "transactionObj", headerName: "TRANSACTIONS.Transaction", cellRenderer: CommonCellRendererStandAloneComponent, resizable: false, width: 150, suppressSizeToFit: true, colId: "transactionTitlePopup" },
      { field: "externalAccount", headerName: "TRANSACTIONS.Account", resizable: false, width: 150, suppressSizeToFit: true },
      { field: "platformId", headerName: "TRANSACTIONS.MT order", resizable: false, width: 150, suppressSizeToFit: true },
      { field: "transactionAmountObj", headerName: "REPORTS.Amount", cellRenderer: CommonCellRendererStandAloneComponent, resizable: false, width: 150, colId: "transactionAmountViewDisplay", suppressSizeToFit: true },
      { field: "senderObj", headerName: "TRANSACTIONS.Sender", resizable: false, width: 150, sortable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: "transactionsenderAction", suppressSizeToFit: true },
      { field: "reciepentObj", headerName: "TRANSACTIONS.Recipient", resizable: false, width: 150, sortable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: "transactionRecipientAction", suppressSizeToFit: true },
      { field: "processTime", headerName: "TRANSACTIONS.Processed", resizable: false, width: 200, suppressSizeToFit: true },
      { field: "actions", headerName: "", cellRenderer: ActionButtonStanAloneComponent, sortable: false, colId: "transactionDetailsPopup", showPopupArraow: true, resizable: false }
    ];
    this.setupGridConfig(colDefs);
  }
  setupGridConfig(colDefs) {
    this.gridConfig = {
      maxHeight: "400px",
      noDataWarnMessage: "There are no transactions",
      gridOptions: {},
      agGridTheme: "ag-theme-alpine",
      pageSizeDropdownArr: [25, 50, 100],
      initialSelectedPageSize: 25,
      columnDefination: colDefs,
      enablePagination: true,
      headerNameLangArr: colDefs.map((o) => o.headerName),
      rowModelType: "serverSide",
      rowHeight: void 0
    };
  }
  recieveChildrenEmitter(event) {
    if (event["action"] == "open_transact_details_popup") {
      this.openBeTransactDetailsPopup(event["data"]);
    } else if (event["action"] == "get_server_side_data") {
      this.getTransactionsData(event);
    } else if (event["action"] == "set_grid_api_obj") {
      this.gridApiObj = event["data"];
    }
  }
  openBeTransactDetailsPopup(data) {
    this.beTradeAccDetailDialog.open(CommonDialogStandAloneComponent, {
      panelClass: "common-dialog",
      data: this.prepareTransactHistoryData(data)
    });
    this.beTradeAccDetailDialog.afterAllClosed.subscribe((result) => {
    });
  }
  prepareTransactHistoryData(transactionHistoryDetails) {
    let commonDialogData = {
      mainTitle: "TRANSACTIONS.Transaction",
      secondryTitle: "TRANSACTIONS.InfoAboutTransact",
      labelDetails: [
        { title: "COMMON.State", value: transactionHistoryDetails.transactionObj.state },
        { title: "SUBSCRIPTION.Trading account", value: transactionHistoryDetails.externalAccount },
        { title: "TRANSACTIONS.MT order", value: transactionHistoryDetails.platformId },
        { title: "TRANSACTIONS.Requested amount", value: transactionHistoryDetails.transactionAmountObj, type: "transaction_amount" },
        { title: "TRANSACTIONS.Processed amount", value: transactionHistoryDetails.processedAmountObj, type: "transaction_amount" },
        { title: "TRANSACTIONS.Reason", value: transactionHistoryDetails.transactionObj.reason },
        { title: "TRANSACTIONS.Trading result", value: transactionHistoryDetails.senderObj.reasonId, type: "trading_reason", redirectionUrl: `/portal/providers/${transactionHistoryDetails.senderObj.providerId}/subscriptions/${transactionHistoryDetails.senderObj.subscriptionId}/results/${transactionHistoryDetails.senderObj.reasonId}` },
        { title: "TRANSACTIONS.Sender", value: transactionHistoryDetails.senderObj, type: "sender" },
        { title: "TRANSACTIONS.Recipient", value: transactionHistoryDetails.reciepentObj, type: "recipent" },
        { title: "TRANSACTIONS.Processed", value: transactionHistoryDetails.processTime }
      ]
    };
    if (transactionHistoryDetails.senderObj.ownerType != "Provider") {
      commonDialogData.labelDetails.splice(6, 1);
    }
    return commonDialogData;
  }
  ngOnDestroy() {
    this._webService.unSubscribeOnWebDataChange("TransactionsStandAloneComponent");
  }
  static \u0275fac = function TransactionsStandAloneComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TransactionsStandAloneComponent)(\u0275\u0275directiveInject(WebService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TransactionsStandAloneComponent, selectors: [["app-transactions"]], viewQuery: function TransactionsStandAloneComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(ShowErrorStandAloneComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.errorComponent = _t.first);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 2, consts: [["appearance", "outlined", 1, "section-card"], ["class", "section-card-content", 4, "ngIf"], ["class", "full-view-port-height d-flex justify-center align-center", 4, "ngIf"], [1, "section-card-content"], [1, "home-card"], [1, "header", "d-flex", "justify-space-between", "align-center"], [1, "header-title"], [1, "metrics-table"], [1, "header-buttons", "d-flex", "justify-space-between"], [1, "d-flex", "g-20", "justify-center", "align-center"], [1, "secondary-btn", 3, "click"], ["src", "../../../../assets/icons/filterIcon.svg"], ["class", "secondary-btn", 3, "click", 4, "ngIf"], [1, "d-flex", "g-20", "common-dropdown", "align-center"], [1, "refresh-btn", 3, "click"], [3, "emitToParent", "gridConfig", "gridData", "showGridLoader"], ["width", "20", "src", "../../../../assets/icons/clear-icon.svg"], ["matInput", "", "type", "number", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel"], [3, "value"], ["src", "../../../../assets/icons/searchIcon.svg"], ["src", "../../../../assets/icons/rotateIcon.svg"], [1, "full-view-port-height", "d-flex", "justify-center", "align-center"], ["src", "../../../../assets/logo/ICM Logo Default 1.png"]], template: function TransactionsStandAloneComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "mat-card", 0);
      \u0275\u0275template(1, TransactionsStandAloneComponent_mat_card_content_1_Template, 24, 15, "mat-card-content", 1)(2, TransactionsStandAloneComponent_div_2_Template, 2, 0, "div", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "show-error-message");
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.showLoader);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showLoader);
    }
  }, dependencies: [CommonModule, NgIf, ShowErrorStandAloneComponent, TranslateModule, TranslatePipe, MatCardModule, MatCard, MatCardContent, MatSelectModule, MatFormField, MatLabel, MatSelect, MatOption, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgModel, CommonAgGridStandAloneComponent, MatInputModule, MatInput], styles: ["\n\n  .common-dropdown .mdc-text-field {\n  background-color: var(--primaryWhite) !important;\n  border: 1px solid var(--border-color) !important;\n  border-bottom: 0px !important;\n  border-radius: 8px !important;\n  width: 150px;\n}\n  .common-dropdown .mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {\n  border-bottom-color: var(--border-color) !important;\n}\n  .common-dropdown .mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {\n  border-bottom-color: var(--border-color) !important;\n}\n  .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.refresh-btn[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: black;\n  border-radius: 8px;\n  font-weight: 500;\n  font-size: 18px;\n  border: 1px solid #D0D5DD;\n  padding: 12px 18px;\n  display: flex;\n  justify-content: space-between;\n  gap: 10px;\n  align-items: center;\n  cursor: pointer;\n  min-height: 56px;\n  transition:\n    background-color 0.3s linear,\n    border-radius 0.3s linear,\n    padding 0.3s linear,\n    width 0.3s linear;\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=transactions.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TransactionsStandAloneComponent, { className: "TransactionsStandAloneComponent", filePath: "src\\app\\web\\views\\transactions\\transactions.standalone.component.ts", lineNumber: 25 });
})();

export {
  TransactionsStandAloneComponent
};
//# sourceMappingURL=chunk-5LPDQHYD.js.map
