import {
  TypeCellRendererStandAloneComponent
} from "./chunk-JQKCEFXE.js";
import {
  CommonDialogStandAloneComponent
} from "./chunk-IAOGV6S5.js";
import {
  ActionButtonStanAloneComponent
} from "./chunk-XJWPAYL2.js";
import {
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
  NgIf,
  TranslateModule,
  TranslatePipe,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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

// src/app/web/views/account/account.standalone.component.ts
function AccountStandAloneComponent_mat_card_content_1_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function AccountStandAloneComponent_mat_card_content_1_button_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearFilters());
    });
    \u0275\u0275element(1, "img", 18);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.Clear"), " ");
  }
}
function AccountStandAloneComponent_mat_card_content_1_mat_form_field_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field")(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-select", 19);
    \u0275\u0275twoWayListener("ngModelChange", function AccountStandAloneComponent_mat_card_content_1_mat_form_field_19_Template_mat_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedAccountStatus, $event) || (ctx_r1.selectedAccountStatus = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("selectionChange", function AccountStandAloneComponent_mat_card_content_1_mat_form_field_19_Template_mat_select_selectionChange_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.refreshAccountDataList());
    });
    \u0275\u0275elementStart(5, "mat-option", 20);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-option", 20);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 6, "PROVIDERS_PROFILE.Scope"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedAccountStatus);
    \u0275\u0275advance();
    \u0275\u0275property("value", "Active");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 8, "COMMON.Active"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", "All");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 10, "COMMON.All"));
  }
}
function AccountStandAloneComponent_mat_card_content_1_Template(rf, ctx) {
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
    \u0275\u0275listener("click", function AccountStandAloneComponent_mat_card_content_1_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275element(14, "img", 11);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, AccountStandAloneComponent_mat_card_content_1_button_17_Template, 4, 3, "button", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 13);
    \u0275\u0275template(19, AccountStandAloneComponent_mat_card_content_1_mat_form_field_19_Template, 11, 12, "mat-form-field", 14);
    \u0275\u0275elementStart(20, "button", 15);
    \u0275\u0275listener("click", function AccountStandAloneComponent_mat_card_content_1_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.refreshAccountDataList());
    });
    \u0275\u0275element(21, "img", 16);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(24, "common-ag-grid", 17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 9, "ACCOUNTS.Accounts"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 11, "ACCOUNTS.List of accounts"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 13, "COMMON.Filters"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.showFilters);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.showFilters);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 15, "COMMON.Refresh"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("gridConfig", ctx_r1.gridConfig)("gridData", ctx_r1.accountGridData)("showGridLoader", ctx_r1.showGridLoader);
  }
}
function AccountStandAloneComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "img", 22);
    \u0275\u0275elementEnd();
  }
}
var AccountStandAloneComponent = class _AccountStandAloneComponent {
  _webService;
  accountGridData = [];
  selectedAccountStatus = "Active";
  showLoader = false;
  showGridLoader = false;
  showFilters = false;
  gridConfig;
  errorComponent;
  commonDialog = inject(MatDialog);
  hideAgGrid;
  constructor(_webService) {
    this._webService = _webService;
    this._webService.subscribeOnWebDataChange("AccountStandAloneComponent", (event) => {
      this.recieveChildrenEmitter(event);
    });
    this.getAccountsData("showPageLoader");
  }
  getAccountsData(loaderType) {
    this.toggleLoadingOverlay(loaderType, true);
    let param = {
      scope: this.selectedAccountStatus,
      $count: true
    };
    this._webService.getTradingAccountData(param).subscribe({
      next: (response) => {
        this.accountGridData = [];
        response.items.forEach((obj) => this.accountGridData.push(new TradingAccountUIModal(obj)));
        this.toggleLoadingOverlay(loaderType, false);
      },
      error: (errorObj) => {
        this.showErrorWarnMessage(errorObj?.error?.errorMessage);
      }
    });
  }
  toggleLoadingOverlay(loaderType, loadingFlag) {
    if (loaderType == "showPageLoader") {
      this.setupAccountGridConfig();
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
      noDataWarnMessage: "There are no accounts data",
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
  refreshAccountDataList() {
    this.getAccountsData("showGridLoader");
  }
  clearFilters() {
    this.selectedAccountStatus = "Active";
    this.refreshAccountDataList();
  }
  applyFilters() {
    if (this.showFilters) {
      this.showFilters = false;
      this.selectedAccountStatus !== "Active" ? this.clearFilters() : "";
    } else {
      this.showFilters = true;
    }
  }
  recieveChildrenEmitter(event) {
    if (event["action"] == "open_account_details_popup") {
      this.openBeTradingAccountPopup(event["data"]);
    }
  }
  openBeTradingAccountPopup(data) {
    this.commonDialog.open(CommonDialogStandAloneComponent, {
      panelClass: "common-dialog",
      data: this.prepareTradingAccountData(data)
    });
    this.commonDialog.afterAllClosed.subscribe((result) => {
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
    this._webService.unSubscribeOnWebDataChange("AccountStandAloneComponent");
  }
  static \u0275fac = function AccountStandAloneComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AccountStandAloneComponent)(\u0275\u0275directiveInject(WebService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccountStandAloneComponent, selectors: [["app-account"]], viewQuery: function AccountStandAloneComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(ShowErrorStandAloneComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.errorComponent = _t.first);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 2, consts: [["appearance", "outlined", 1, "section-card"], ["class", "section-card-content", 4, "ngIf"], ["class", "full-view-port-height d-flex justify-center align-center", 4, "ngIf"], [1, "section-card-content"], [1, "home-card"], [1, "header", "d-flex", "justify-space-between", "align-center"], [1, "header-title"], [1, "metrics-table"], [1, "header-buttons", "d-flex", "justify-space-between"], [1, "d-flex", "g-20", "justify-center", "align-center"], [1, "secondary-btn", 3, "click"], ["src", "../../../../assets/icons/filterIcon.svg"], ["class", "secondary-btn", 3, "click", 4, "ngIf"], [1, "d-flex", "g-20", "common-dropdown"], [4, "ngIf"], [1, "refresh-btn", 3, "click"], ["src", "../../../../assets/icons/rotateIcon.svg"], [3, "gridConfig", "gridData", "showGridLoader"], ["width", "20", "src", "../../../../assets/icons/clear-icon.svg"], [3, "ngModelChange", "selectionChange", "ngModel"], [3, "value"], [1, "full-view-port-height", "d-flex", "justify-center", "align-center"], ["src", "../../../../assets/logo/ICM Logo Default 1.png"]], template: function AccountStandAloneComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "mat-card", 0);
      \u0275\u0275template(1, AccountStandAloneComponent_mat_card_content_1_Template, 25, 17, "mat-card-content", 1)(2, AccountStandAloneComponent_div_2_Template, 2, 0, "div", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "show-error-message");
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.showLoader);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showLoader);
    }
  }, dependencies: [CommonModule, NgIf, ShowErrorStandAloneComponent, TranslateModule, TranslatePipe, MatCardModule, MatCard, MatCardContent, MatSelectModule, MatFormField, MatLabel, MatSelect, MatOption, FormsModule, NgControlStatus, NgModel, CommonAgGridStandAloneComponent], styles: ["\n\n  .common-dropdown .mdc-text-field {\n  background-color: var(--primaryWhite) !important;\n  border: 1px solid var(--border-color) !important;\n  border-bottom: 0px !important;\n  border-radius: 8px !important;\n  width: 150px;\n}\n  .common-dropdown .mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {\n  border-bottom-color: var(--border-color) !important;\n}\n  .common-dropdown .mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {\n  border-bottom-color: var(--border-color) !important;\n}\n  .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.refresh-btn[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: black;\n  border-radius: 8px;\n  font-weight: 500;\n  font-size: 18px;\n  border: 1px solid #D0D5DD;\n  padding: 12px 18px;\n  display: flex;\n  justify-content: space-between;\n  gap: 10px;\n  align-items: center;\n  cursor: pointer;\n  min-height: 56px;\n  transition:\n    background-color 0.3s linear,\n    border-radius 0.3s linear,\n    padding 0.3s linear,\n    width 0.3s linear;\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=account.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccountStandAloneComponent, { className: "AccountStandAloneComponent", filePath: "src\\app\\web\\views\\account\\account.standalone.component.ts", lineNumber: 24 });
})();
export {
  AccountStandAloneComponent
};
//# sourceMappingURL=chunk-TQGK3PTA.js.map
