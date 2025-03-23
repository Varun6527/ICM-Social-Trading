import {
  CommonDialogStandAloneComponent
} from "./chunk-IAOGV6S5.js";
import {
  ActionButtonStanAloneComponent
} from "./chunk-XJWPAYL2.js";
import {
  MatTab,
  MatTabContent,
  MatTabGroup,
  MatTabsModule
} from "./chunk-IEUDD6M5.js";
import {
  MatInputModule
} from "./chunk-YEQ6N72F.js";
import {
  DealsUiModal,
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
  MatMenuModule,
  MatOption,
  NgControlStatus,
  NgModel,
  ShowErrorStandAloneComponent
} from "./chunk-ZFOVCG2I.js";
import {
  ActivatedRoute,
  CommonModule,
  ConstantVariable,
  CurrencyPipe,
  DatePipe,
  NgForOf,
  NgIf,
  Router,
  RouterLink,
  RouterModule,
  TranslateModule,
  TranslatePipe,
  inject,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
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
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction1,
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
import {
  __async
} from "./chunk-4OO5LSKA.js";

// src/app/web/views/positions/positions.standalone.component.ts
var _c0 = (a0) => ["/portal/providers", a0];
var _c1 = (a0) => ["/portal/subscriptions", a0];
function PositionsStandAloneComponent_mat_card_content_1_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "PROVIDERS_PROFILE.Position"), " ");
  }
}
function PositionsStandAloneComponent_mat_card_content_1_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "PROVIDERS_PROFILE.MetaTrader position ID"), " ");
  }
}
function PositionsStandAloneComponent_mat_card_content_1_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "h6");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p")(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "PROVIDERS_PROFILE.State"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.positionData.state);
  }
}
function PositionsStandAloneComponent_mat_card_content_1_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "h6");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p")(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "COMMON.Status"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.positionData.status);
  }
}
function PositionsStandAloneComponent_mat_card_content_1_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "h6");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p")(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "PROVIDERS_PROFILE.Symbol"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.positionData.symbol);
  }
}
function PositionsStandAloneComponent_mat_card_content_1_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "h6");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p")(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "PROVIDERS_PROFILE.Symbol"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.positionData.symbol);
  }
}
function PositionsStandAloneComponent_mat_card_content_1_Conditional_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "PROVIDERS_PROFILE.Provider position's close data"), " ");
  }
}
function PositionsStandAloneComponent_mat_card_content_1_Conditional_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "PROVIDERS_PROFILE.Follower position's close data"), " ");
  }
}
function PositionsStandAloneComponent_mat_card_content_1_div_163_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "h4");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 11)(9, "mat-card", 12)(10, "div", 13)(11, "h6");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p")(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 13)(18, "h6");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p")(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 13)(25, "h6");
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "p")(29, "span");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 8, "PROVIDERS_PROFILE.Copy data"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 10, "PROVIDERS_PROFILE.Position's copy data"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 12, "PROVIDERS_PROFILE.Copied volume"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.positionStatsData.copiedVolume);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 14, "PROVIDERS_PROFILE.Copied count"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.positionStatsData.copiedCount);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 16, "PROVIDERS_PROFILE.Closed count"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.positionStatsData.closedCount);
  }
}
function PositionsStandAloneComponent_mat_card_content_1_Conditional_230_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "HOME.Provider"), " ");
  }
}
function PositionsStandAloneComponent_mat_card_content_1_Conditional_231_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "TRANSACTIONS.Subscription"), " ");
  }
}
function PositionsStandAloneComponent_mat_card_content_1_div_232_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "h6");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 22)(6, "h6")(7, "a", 30)(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "HOME.Nickname"));
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c0, ctx_r1.providersData.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.providersData == null ? null : ctx_r1.providersData.nickname);
  }
}
function PositionsStandAloneComponent_mat_card_content_1_div_233_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "h6");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 22)(6, "h6")(7, "a", 30)(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "TRANSACTIONS.Subscription"));
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c1, ctx_r1.subscriptionData.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Subscription #", ctx_r1.subscriptionData.id, "");
  }
}
function PositionsStandAloneComponent_mat_card_content_1_mat_tab_253_ng_template_2_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function PositionsStandAloneComponent_mat_card_content_1_mat_tab_253_ng_template_2_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const tab_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearFilters(tab_r4));
    });
    \u0275\u0275element(1, "img", 40);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.Clear"), " ");
  }
}
function PositionsStandAloneComponent_mat_card_content_1_mat_tab_253_ng_template_2_Conditional_8_mat_form_field_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field")(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-select", 42);
    \u0275\u0275twoWayListener("ngModelChange", function PositionsStandAloneComponent_mat_card_content_1_mat_tab_253_ng_template_2_Conditional_8_mat_form_field_0_Template_mat_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r6);
      const tab_r4 = \u0275\u0275nextContext(3).$implicit;
      \u0275\u0275twoWayBindingSet(tab_r4.filters.type.entry, $event) || (tab_r4.filters.type.entry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(5, "mat-option", 43);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-option", 43);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-option", 43);
    \u0275\u0275text(12, "-");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const tab_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 7, "PROVIDERS_PROFILE.Entry"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", tab_r4.filters.type.entry);
    \u0275\u0275advance();
    \u0275\u0275property("value", "In");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 9, "PROVIDERS_PROFILE.In"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", "Out");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 11, "PROVIDERS_PROFILE.Out"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", void 0);
  }
}
function PositionsStandAloneComponent_mat_card_content_1_mat_tab_253_ng_template_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PositionsStandAloneComponent_mat_card_content_1_mat_tab_253_ng_template_2_Conditional_8_mat_form_field_0_Template, 13, 13, "mat-form-field", 41);
  }
  if (rf & 2) {
    const tab_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("ngIf", tab_r4.filters.type.hasOwnProperty("entry"));
  }
}
function PositionsStandAloneComponent_mat_card_content_1_mat_tab_253_ng_template_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 44);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "PROVIDERS_LIST.Search"), " ");
  }
}
function PositionsStandAloneComponent_mat_card_content_1_mat_tab_253_ng_template_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 45);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.Refresh"), " ");
  }
}
function PositionsStandAloneComponent_mat_card_content_1_mat_tab_253_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34)(2, "button", 35);
    \u0275\u0275listener("click", function PositionsStandAloneComponent_mat_card_content_1_mat_tab_253_ng_template_2_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const tab_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.applyFilters(tab_r4));
    });
    \u0275\u0275element(3, "img", 36);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, PositionsStandAloneComponent_mat_card_content_1_mat_tab_253_ng_template_2_button_6_Template, 4, 3, "button", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 38);
    \u0275\u0275template(8, PositionsStandAloneComponent_mat_card_content_1_mat_tab_253_ng_template_2_Conditional_8_Template, 1, 1, "mat-form-field");
    \u0275\u0275elementStart(9, "button", 35);
    \u0275\u0275listener("click", function PositionsStandAloneComponent_mat_card_content_1_mat_tab_253_ng_template_2_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r3);
      const tab_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.refreshDataList(tab_r4));
    });
    \u0275\u0275template(10, PositionsStandAloneComponent_mat_card_content_1_mat_tab_253_ng_template_2_Conditional_10_Template, 3, 3)(11, PositionsStandAloneComponent_mat_card_content_1_mat_tab_253_ng_template_2_Conditional_11_Template, 3, 3);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(12, "common-ag-grid", 39);
  }
  if (rf & 2) {
    const tab_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 7, "COMMON.Filters"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", tab_r4.filters.show);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(tab_r4.filters.show ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(true ? 10 : 11);
    \u0275\u0275advance(2);
    \u0275\u0275property("gridConfig", tab_r4.grid.config)("gridData", tab_r4.grid.data)("showGridLoader", tab_r4.grid.showLoader);
  }
}
function PositionsStandAloneComponent_mat_card_content_1_mat_tab_253_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-tab", 31);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275template(2, PositionsStandAloneComponent_mat_card_content_1_mat_tab_253_ng_template_2_Template, 13, 9, "ng-template", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r4 = ctx.$implicit;
    \u0275\u0275propertyInterpolate("label", \u0275\u0275pipeBind1(1, 1, tab_r4.label));
  }
}
function PositionsStandAloneComponent_mat_card_content_1_Template(rf, ctx) {
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
    \u0275\u0275elementStart(10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "div", 10)(14, "h4");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 11)(21, "mat-card", 12)(22, "div", 13)(23, "h6");
    \u0275\u0275template(24, PositionsStandAloneComponent_mat_card_content_1_Conditional_24_Template, 2, 3)(25, PositionsStandAloneComponent_mat_card_content_1_Conditional_25_Template, 2, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p")(27, "span");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(29, PositionsStandAloneComponent_mat_card_content_1_div_29_Template, 7, 4, "div", 14)(30, PositionsStandAloneComponent_mat_card_content_1_div_30_Template, 7, 4, "div", 14);
    \u0275\u0275elementStart(31, "div", 13)(32, "h6");
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "p")(36, "span");
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(38, PositionsStandAloneComponent_mat_card_content_1_div_38_Template, 7, 4, "div", 14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div", 9)(40, "div", 10)(41, "h4");
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "p");
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 11)(48, "mat-card", 12);
    \u0275\u0275template(49, PositionsStandAloneComponent_mat_card_content_1_div_49_Template, 7, 4, "div", 14);
    \u0275\u0275elementStart(50, "div", 13)(51, "h6");
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "p")(55, "span");
    \u0275\u0275text(56);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(57, "div", 13)(58, "h6");
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "p")(62, "span");
    \u0275\u0275text(63);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(64, "div", 13)(65, "h6");
    \u0275\u0275text(66);
    \u0275\u0275pipe(67, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "p")(69, "span");
    \u0275\u0275text(70);
    \u0275\u0275pipe(71, "currency");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(72, "div", 13)(73, "h6");
    \u0275\u0275text(74);
    \u0275\u0275pipe(75, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "p")(77, "span");
    \u0275\u0275text(78);
    \u0275\u0275pipe(79, "date");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(80, "div", 9)(81, "div", 10)(82, "h4");
    \u0275\u0275text(83);
    \u0275\u0275pipe(84, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "p");
    \u0275\u0275template(86, PositionsStandAloneComponent_mat_card_content_1_Conditional_86_Template, 2, 3)(87, PositionsStandAloneComponent_mat_card_content_1_Conditional_87_Template, 2, 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(88, "div", 11)(89, "mat-card", 12)(90, "div", 13)(91, "h6");
    \u0275\u0275text(92);
    \u0275\u0275pipe(93, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "p")(95, "span");
    \u0275\u0275text(96);
    \u0275\u0275pipe(97, "currency");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(98, "div", 13)(99, "h6");
    \u0275\u0275text(100);
    \u0275\u0275pipe(101, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "p")(103, "span");
    \u0275\u0275text(104);
    \u0275\u0275pipe(105, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(106, "div", 13)(107, "h6");
    \u0275\u0275text(108);
    \u0275\u0275pipe(109, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "p")(111, "span");
    \u0275\u0275text(112);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(113, "div", 9)(114, "div", 10)(115, "h4");
    \u0275\u0275text(116);
    \u0275\u0275pipe(117, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "p");
    \u0275\u0275text(119);
    \u0275\u0275pipe(120, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(121, "div", 11)(122, "mat-card", 12)(123, "div", 13)(124, "h6");
    \u0275\u0275text(125);
    \u0275\u0275pipe(126, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(127, "p")(128, "span");
    \u0275\u0275text(129);
    \u0275\u0275pipe(130, "currency");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(131, "div", 13)(132, "h6");
    \u0275\u0275text(133);
    \u0275\u0275pipe(134, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(135, "p")(136, "span");
    \u0275\u0275text(137);
    \u0275\u0275pipe(138, "currency");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(139, "div", 13)(140, "h6");
    \u0275\u0275text(141);
    \u0275\u0275pipe(142, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(143, "p")(144, "span");
    \u0275\u0275text(145);
    \u0275\u0275pipe(146, "currency");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(147, "div", 13)(148, "h6");
    \u0275\u0275text(149);
    \u0275\u0275pipe(150, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(151, "p")(152, "span");
    \u0275\u0275text(153);
    \u0275\u0275pipe(154, "currency");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(155, "div", 13)(156, "h6");
    \u0275\u0275text(157);
    \u0275\u0275pipe(158, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(159, "p")(160, "span");
    \u0275\u0275text(161);
    \u0275\u0275pipe(162, "currency");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275template(163, PositionsStandAloneComponent_mat_card_content_1_div_163_Template, 31, 18, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(164, "div", 16)(165, "div", 17)(166, "h4");
    \u0275\u0275text(167);
    \u0275\u0275pipe(168, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(169, "p");
    \u0275\u0275text(170);
    \u0275\u0275pipe(171, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(172, "hr");
    \u0275\u0275elementStart(173, "div", 18)(174, "mat-card", 12)(175, "div", 19)(176, "div", 5)(177, "h6");
    \u0275\u0275text(178);
    \u0275\u0275pipe(179, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(180, "div", 20)(181, "div", 21)(182, "h6");
    \u0275\u0275text(183);
    \u0275\u0275pipe(184, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(185, "div", 22)(186, "h6", 23);
    \u0275\u0275text(187);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(188, "div", 20)(189, "div", 21)(190, "h6");
    \u0275\u0275text(191);
    \u0275\u0275pipe(192, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(193, "div", 22)(194, "h6", 23);
    \u0275\u0275text(195);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(196, "div", 19)(197, "div", 5)(198, "h6");
    \u0275\u0275text(199);
    \u0275\u0275pipe(200, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(201, "a", 24);
    \u0275\u0275listener("click", function PositionsStandAloneComponent_mat_card_content_1_Template_a_click_201_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openBeTradingAccountPopup());
    });
    \u0275\u0275element(202, "img", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(203, "div", 20)(204, "div", 21)(205, "h6");
    \u0275\u0275text(206);
    \u0275\u0275pipe(207, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(208, "div", 22)(209, "h6");
    \u0275\u0275text(210);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(211, "div", 20)(212, "div", 21)(213, "h6");
    \u0275\u0275text(214);
    \u0275\u0275pipe(215, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(216, "div", 22)(217, "h6");
    \u0275\u0275text(218);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(219, "div", 20)(220, "div", 21)(221, "h6");
    \u0275\u0275text(222);
    \u0275\u0275pipe(223, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(224, "div", 22)(225, "h6", 23);
    \u0275\u0275text(226);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(227, "div", 19)(228, "div", 5)(229, "h6");
    \u0275\u0275template(230, PositionsStandAloneComponent_mat_card_content_1_Conditional_230_Template, 2, 3)(231, PositionsStandAloneComponent_mat_card_content_1_Conditional_231_Template, 2, 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(232, PositionsStandAloneComponent_mat_card_content_1_div_232_Template, 10, 7, "div", 26)(233, PositionsStandAloneComponent_mat_card_content_1_div_233_Template, 10, 7, "div", 26);
    \u0275\u0275elementStart(234, "div", 20)(235, "div", 21)(236, "h6");
    \u0275\u0275text(237);
    \u0275\u0275pipe(238, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(239, "div", 22)(240, "h6", 23);
    \u0275\u0275text(241);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(242, "div", 20)(243, "div", 21)(244, "h6");
    \u0275\u0275text(245);
    \u0275\u0275pipe(246, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(247, "div", 22)(248, "h6");
    \u0275\u0275text(249);
    \u0275\u0275pipe(250, "date");
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275elementStart(251, "div", 27)(252, "mat-tab-group", 28);
    \u0275\u0275listener("selectedTabChange", function PositionsStandAloneComponent_mat_card_content_1_Template_mat_tab_group_selectedTabChange_252_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTabChange($event));
    });
    \u0275\u0275template(253, PositionsStandAloneComponent_mat_card_content_1_mat_tab_253_Template, 3, 3, "mat-tab", 29);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(6, 66, "PROVIDERS_PROFILE.Position"), " #", ctx_r1.positionId, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 68, "PROVIDERS_PROFILE.Information about the position"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 70, "PROVIDERS_PROFILE.Common Information"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 72, "PROVIDERS_PROFILE.Common position's information"));
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.isProvider ? 24 : 25);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.positionData.position);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFollower);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFollower);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 74, "PROVIDERS_PROFILE.Untrack status"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.positionData.untrackStatus);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isProvider);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 76, "PROVIDERS_PROFILE.Opening Data"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 78, "PROVIDERS_PROFILE.Position's opening data"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.isFollower);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 80, "PROVIDERS_PROFILE.Direction"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.positionData.currentDirection);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(60, 82, "PROVIDERS_PROFILE.Open volume"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.positionData.openVolume);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(67, 84, "PROVIDERS_PROFILE.Open price"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(71, 86, ctx_r1.positionData.openPrice, "USD", "", ""));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(75, 91, "PROVIDERS_PROFILE.Open time"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(79, 93, ctx_r1.positionData.openTime, "M/d/yy, h:mm:ss a"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(84, 96, "PROVIDERS_PROFILE.Close Data"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.isProvider ? 86 : 87);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(93, 98, "PROVIDERS_PROFILE.Close price"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(97, 100, ctx_r1.positionData.closePrice, "USD", "", ""));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(101, 105, "PROVIDERS_PROFILE.Close time"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(105, 107, ctx_r1.positionData.closeTime, "M/d/yy, h:mm:ss a"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(109, 110, "PROVIDERS_PROFILE.Take Profit"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.positionData.takeProfit);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(117, 112, "PROVIDERS_PROFILE.Trading Result"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(120, 114, "PROVIDERS_PROFILE.Position's trading result"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(126, 116, "PROVIDERS_PROFILE.Trading Profit"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(130, 118, ctx_r1.positionData.totalProfit, "USD", "symbol"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(134, 122, "PROVIDERS_PROFILE.MetaTrader commission"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(138, 124, ctx_r1.positionData.commission, "USD", "symbol"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(142, 128, "PROVIDERS_PROFILE.Swaps"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(146, 130, ctx_r1.positionData.swaps, "USD", "symbol"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(150, 134, "PROVIDERS_PROFILE.Taxes"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(154, 136, ctx_r1.positionData.taxes, "USD", "symbol"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(158, 140, "PROVIDERS_PROFILE.Profit"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(162, 142, ctx_r1.positionData.profit, "USD", "symbol"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isProvider);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(168, 146, "PROVIDERS_PROFILE.Personal Info"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(171, 148, "PROVIDERS_PROFILE.Update your personal details here"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(179, 150, "PROVIDERS_PROFILE.Information"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(184, 152, "COMMON.State"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.positionData == null ? null : ctx_r1.positionData.state);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(192, 154, "COMMON.Status"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.positionData == null ? null : ctx_r1.positionData.status);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(200, 156, "PROVIDERS_PROFILE.Trading Account"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(207, 158, "PROVIDERS_PROFILE.MT name"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.tradeAccountData == null ? null : ctx_r1.tradeAccountData.tradingAccName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(215, 160, "PROVIDERS_PROFILE.MT login"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.tradeAccountData == null ? null : ctx_r1.tradeAccountData.tradingAccountNo);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(223, 162, "PROVIDERS_PROFILE.State"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u25CF ", ctx_r1.tradeAccountData == null ? null : ctx_r1.tradeAccountData.state, "");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.isProvider ? 230 : 231);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isProvider);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFollower);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(238, 164, "PROVIDERS_PROFILE.State"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.isProvider ? ctx_r1.providersData == null ? null : ctx_r1.providersData.state : ctx_r1.subscriptionData == null ? null : ctx_r1.subscriptionData.state);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(246, 166, "PROVIDERS_PROFILE.Updated (UTC)"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(250, 168, ctx_r1.positionData == null ? null : ctx_r1.positionData.updatedUtc, "MMMM d, y 'at' hh:mm:ss a"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.tabArrConfig);
  }
}
function PositionsStandAloneComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275element(1, "img", 47);
    \u0275\u0275elementEnd();
  }
}
var PositionsStandAloneComponent = class _PositionsStandAloneComponent {
  currencyPipe;
  _webService;
  route;
  _router;
  currentSelectedTabIndx = 0;
  tabArrConfig = [];
  providerId;
  positionId;
  subscriptionId;
  subscriptionData;
  accountId;
  showPageLoader = false;
  isProvider = false;
  isFollower = false;
  constantVariable = new ConstantVariable();
  beDealsDialog = inject(MatDialog);
  tradingDialog = inject(MatDialog);
  errorComponent;
  positionData = {};
  providersData = {};
  tradeAccountData = {};
  positionStatsData = {};
  constructor(currencyPipe, _webService, route, _router) {
    this.currencyPipe = currencyPipe;
    this._webService = _webService;
    this.route = route;
    this._router = _router;
    this.isProvider = this._webService.isProviderAccount;
    this.isFollower = this._webService.isSubscriptionAccount;
    this.route.paramMap.subscribe((params) => {
      this.providerId = params.get("providerId");
      this.positionId = params.get("positionId");
      this.subscriptionId = params.get("subscriptionId");
      this.getAllPositionPageData();
    });
    this._webService.subscribeOnWebDataChange("PositionsStandAloneComponent", (event) => {
      this.recieveChildrenEmitter(event);
    });
  }
  getAllPositionPageData() {
    return __async(this, null, function* () {
      this.showPageLoader = true;
      let result1 = yield this.getPositionData();
      if (this.isProvider) {
        let result2 = yield this.getPositionStatsData();
      }
      let result3 = yield this.getTradingAccountData();
      if (this.isProvider) {
        let result4 = yield this.getProviderData();
      } else {
        let result4 = yield this.getSubscriptionData();
      }
      this.setUpTabsConfig();
      this.getGridData(this.tabArrConfig[0]);
      this.showPageLoader = false;
    });
  }
  getPositionData() {
    return new Promise((resolve) => {
      let param = { positionId: this.positionId };
      let apiObseverable;
      if (this.isProvider) {
        apiObseverable = this._webService.getSinglePosotionData(param);
      } else {
        apiObseverable = this._webService.getSingleSubscriptionPositionData(param);
      }
      apiObseverable.subscribe({
        next: (response) => {
          this.positionData = response;
          this.providerId = this.positionData.providerId;
          this.accountId = this.positionData.accountId;
          resolve();
        },
        error: (errorObj) => {
          this.showErrorWarnMessage(errorObj?.error?.errorMessage);
          resolve();
        }
      });
    });
  }
  getTradingAccountData() {
    return new Promise((resolve) => {
      let param = { accountId: this.accountId };
      this._webService.getSingleTradingAccountData(param).subscribe({
        next: (response) => {
          this.tradeAccountData = new TradingAccountUIModal(response);
          resolve();
        },
        error: (errorObj) => {
          this.showErrorWarnMessage(errorObj?.error?.errorMessage);
          resolve();
        }
      });
    });
  }
  getProviderData() {
    return new Promise((resolve) => {
      let param = { providerId: this.providerId };
      this._webService.getSingleProviderData(param).subscribe({
        next: (response) => {
          this.providersData = response;
          resolve();
        },
        error: (errorObj) => {
          this.showErrorWarnMessage(errorObj?.error?.errorMessage);
          resolve();
        }
      });
    });
  }
  getSubscriptionData() {
    return new Promise((resolve) => {
      let param = { subscriptionId: this.subscriptionId };
      this._webService.getFollowerDataById(param).subscribe({
        next: (response) => {
          this.subscriptionData = response;
          resolve();
        },
        error: (errorObj) => {
          this.showErrorWarnMessage(errorObj?.error?.errorMessage);
          resolve();
        }
      });
    });
  }
  getPositionStatsData() {
    return new Promise((resolve) => {
      let param = { providerId: this.providerId, positionId: this.positionId };
      this._webService.getStatsData(param).subscribe({
        next: (response) => {
          this.positionStatsData = response;
          resolve();
        },
        error: (errorObj) => {
          this.showErrorWarnMessage(errorObj?.error?.errorMessage);
          resolve();
        }
      });
    });
  }
  setUpTabsConfig() {
    this.tabArrConfig = this.getProviderSubscriptionTabsConfig();
  }
  getProviderSubscriptionTabsConfig() {
    let arr = [];
    arr.push(this.getDealsTabConfigObj());
    return arr;
  }
  getDealsTabConfigObj() {
    let apiUrl = this.constantVariable?.http_Api_Url[this.isProvider ? "provider_profile" : "subscription_profile"].deals.replace(this.isProvider ? ":providerId" : ":subscriptionId", this.isProvider ? this.providerId : this.subscriptionId);
    return {
      label: "PROVIDERS_PROFILE.Deals",
      filters: {
        show: false,
        type: { entry: "" },
        clear: function() {
          this.type = { entry: "" };
        },
        positionData: this.positionData,
        getApiParams: function() {
          let param = {};
          let getFilterParam = () => {
            let filterQuery = "";
            if (this.type.entry) {
              filterQuery += `entry eq '${this.type.entry}' and `;
            }
            filterQuery += `position eq ${this.positionData.position} and `;
            return filterQuery;
          };
          param["$count"] = true;
          getFilterParam.apply(this) ? param["$filter"] = getFilterParam.apply(this).slice(0, -4) : "";
          return param;
        }
      },
      grid: this.getCommonGridDetails("deals", "There are no deals", DealsUiModal, apiUrl)
    };
  }
  getCommonGridDetails(gridType, warnMessage, uiModel, apiUrl, secondryModelData) {
    let commonColDef = this.getGridColDefs(gridType);
    return {
      apiUrl,
      colDef: commonColDef,
      config: this.getCommonGridConfig(commonColDef, warnMessage),
      data: [],
      showLoader: false,
      uiModel,
      uiModelSecondParamData: secondryModelData
    };
  }
  getCommonGridConfig(colDefs, warnMessage) {
    let gridConfig = {
      maxHeight: "400px",
      noDataWarnMessage: warnMessage,
      gridOptions: {},
      agGridTheme: "ag-theme-alpine",
      pageSizeDropdownArr: [5, 10, 15],
      initialSelectedPageSize: 5,
      columnDefination: colDefs,
      enablePagination: true,
      headerNameLangArr: colDefs.map((o) => o.headerName),
      rowModelType: "clientSide",
      rowHeight: void 0
    };
    return gridConfig;
  }
  getGridColDefs(gridType) {
    if (gridType == "deals") {
      if (this.isProvider) {
        return [
          { field: "dealKey", headerName: "PROVIDERS_PROFILE.Deal", resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: "dealsTitleCell" },
          { field: "entry", headerName: "PROVIDERS_PROFILE.Entry", sortable: false, resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: "tagCell" },
          { field: "symbol", headerName: "PROVIDERS_PROFILE.Symbol", resizable: false },
          { field: "volume", headerName: "PROVIDERS_PROFILE.Volume", resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: "dealsVolumeCell" },
          { field: "price", headerName: "PROVIDERS_PROFILE.Price", resizable: false },
          { field: "time", headerName: "PROVIDERS_PROFILE.Time", sort: "desc", resizable: false },
          { field: "actions", headerName: "", sortable: false, cellRenderer: ActionButtonStanAloneComponent, showPopupArraow: true, colId: "dealsPopup" }
        ];
      } else {
        return [
          { field: "dealKey", headerName: "PROVIDERS_PROFILE.Deal", resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: "dealsSubTitleCell" },
          { field: "status", headerName: "COMMON.Status", sortable: false, resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: "tagCell" },
          { field: "entry", headerName: "PROVIDERS_PROFILE.Entry", sortable: false, resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: "tagCell" },
          { field: "price", headerName: "PROVIDERS_PROFILE.Price", resizable: false },
          { field: "actions", headerName: "", sortable: false, cellRenderer: ActionButtonStanAloneComponent, showPopupArraow: true, colId: "dealsPopup" }
        ];
      }
    }
    return;
  }
  onTabChange(event) {
    this.currentSelectedTabIndx = event.index;
    this.getGridData(this.tabArrConfig[this.currentSelectedTabIndx]);
  }
  getGridData(tab) {
    let gridConfig = tab.grid;
    gridConfig.showLoader = true;
    let param = tab.filters.getApiParams();
    this._webService.getCommonGridData(gridConfig.apiUrl, param).subscribe({
      next: (response) => {
        let arr = [];
        response.items.forEach((obj) => arr.push(new gridConfig.uiModel(obj, gridConfig.uiModelSecondParamData)));
        gridConfig.data = arr;
        gridConfig.showLoader = false;
      },
      error: (errorObj) => {
        this.showErrorWarnMessage(errorObj?.error?.errorMessage);
        gridConfig.showLoader = false;
      }
    });
  }
  applyFilters(tab) {
    if (tab.filters.show) {
      tab.filters.show = false;
      this.clearFilters(tab);
    } else {
      tab.filters.show = true;
    }
  }
  clearFilters(tab) {
    tab.filters.clear();
    this.getGridData(tab);
  }
  refreshDataList(tab) {
    this.getGridData(tab);
  }
  showErrorWarnMessage(msg) {
    const errorConfigObj = this.errorComponent?.config;
    errorConfigObj.message = msg ? msg : errorConfigObj.message;
    this.errorComponent?.openErrorSnackbar();
  }
  recieveChildrenEmitter(event) {
    if (event["action"] == "open_deals_popup") {
      this.openDealsPopup(event["data"]);
    }
  }
  openDealsPopup(data) {
    this.beDealsDialog.open(CommonDialogStandAloneComponent, {
      panelClass: "common-dialog",
      data: this.isProvider ? this.prepareDealsData(data) : this.prepareSubscriptionDealsData(data)
    });
    this.beDealsDialog.afterAllClosed.subscribe((result) => {
    });
  }
  prepareDealsData(dealsData) {
    let commonDialogData = {
      mainTitle: "Info",
      secondryTitle: "Information about the provider's deal",
      labelDetails: [
        { title: "PROVIDERS_PROFILE.Deal", value: dealsData.dealKey },
        { title: "PROVIDERS_PROFILE.Position", value: dealsData.position },
        { title: "PROVIDERS_PROFILE.State", value: dealsData.state },
        { title: "PROVIDERS_PROFILE.Symbol", value: dealsData.symbol },
        { title: "PROVIDERS_PROFILE.Entry", value: dealsData.entry },
        { title: "PROVIDERS_PROFILE.Entry type", value: dealsData.entryType },
        { title: "PROVIDERS_PROFILE.Direction", value: dealsData.direction },
        { title: "PROVIDERS_PROFILE.Volume", value: dealsData.volume },
        { title: "PROVIDERS_PROFILE.Price", value: dealsData.price },
        { title: "PROVIDERS_PROFILE.Time", value: dealsData.time }
      ]
    };
    return commonDialogData;
  }
  prepareSubscriptionDealsData(dealsData) {
    let commonDialogData = {
      mainTitle: "PROVIDERS_PROFILE.Deal",
      secondryTitle: "PROVIDERS_PROFILE.Deal's details",
      labelDetails: [
        { title: "PROVIDERS_PROFILE.Deal", value: dealsData.dealKey },
        { title: "PROVIDERS_PROFILE.Source", value: dealsData.copyDealKey },
        { title: "PROVIDERS_PROFILE.Position", value: `${dealsData.position} #${dealsData.positionId}`, type: "postionRedirection", data: dealsData },
        { title: "ACCOUNTS.Type", value: dealsData.type },
        { title: "PROVIDERS_PROFILE.State", value: dealsData.state },
        { title: "COMMON.Status", value: dealsData.status },
        { title: "PROVIDERS_PROFILE.Symbol", value: dealsData.symbol },
        { title: "PROVIDERS_PROFILE.Entry", value: dealsData.entry },
        { title: "PROVIDERS_PROFILE.Entry type", value: dealsData.entryType },
        { title: "PROVIDERS_PROFILE.Direction", value: dealsData.direction },
        { title: "PROVIDERS_PROFILE.Volume", value: dealsData.volume },
        { title: "PROVIDERS_PROFILE.Price", value: dealsData.price },
        { title: "PROVIDERS_PROFILE.Time", value: dealsData.time },
        { title: "PROVIDERS_PROFILE.Profit", value: this.currencyPipe.transform(dealsData.profit, dealsData.currency, "symbol") },
        { title: "PROVIDERS_PROFILE.Error", value: dealsData.error },
        { title: "PROVIDERS_PROFILE.Attempts", value: dealsData.attempts }
      ]
    };
    if (!dealsData.error) {
      commonDialogData.labelDetails.splice(commonDialogData.labelDetails.length - 2, 1);
    }
    return commonDialogData;
  }
  openBeTradingAccountPopup() {
    this.tradingDialog.open(CommonDialogStandAloneComponent, {
      panelClass: "common-dialog",
      data: this.prepareTradingAccountData()
    });
    this.tradingDialog.afterAllClosed.subscribe((result) => {
    });
  }
  prepareTradingAccountData() {
    let tradingAccountDetails = this.tradeAccountData;
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
    this._webService.unSubscribeOnWebDataChange("PositionsStandAloneComponent");
  }
  static \u0275fac = function PositionsStandAloneComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PositionsStandAloneComponent)(\u0275\u0275directiveInject(CurrencyPipe), \u0275\u0275directiveInject(WebService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PositionsStandAloneComponent, selectors: [["app-position"]], viewQuery: function PositionsStandAloneComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(ShowErrorStandAloneComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.errorComponent = _t.first);
    }
  }, standalone: true, features: [\u0275\u0275ProvidersFeature([CurrencyPipe]), \u0275\u0275StandaloneFeature], decls: 3, vars: 2, consts: [["appearance", "outlined", 1, "section-card"], ["class", "section-card-content", 4, "ngIf"], ["class", "full-view-port-height d-flex justify-center align-center", 4, "ngIf"], [1, "section-card-content"], [1, "home-card"], [1, "header", "d-flex", "justify-space-between", "align-center"], [1, "header-title"], [1, "info-section", "d-flex", "justify-space-between"], [1, "info-section-left"], [1, "d-flex", "justify-space-between", "w-100"], [1, "info-section-left-items"], [1, "info-section-left-items", "info-section-left-items-card"], ["appearance", "outlined"], [1, "d-flex", "justify-space-between", "align-center"], ["class", "d-flex justify-space-between align-center", 4, "ngIf"], ["class", "d-flex justify-space-between w-100", 4, "ngIf"], [1, "info-section-right"], [1, "info-section-right-header"], [1, "info-section-right-card"], [1, "items"], [1, "d-flex", "justify-center", "items-main"], [1, "items-left"], [1, "items-right"], [1, "status-badge"], ["href", "javascript:void(0)", 1, "default-link", 3, "click"], ["src", "../../../../assets/icons/arrow-single.png"], ["class", "d-flex justify-center items-main", 4, "ngIf"], [1, "metrics-table"], ["mat-stretch-tabs", "false", "mat-align-tabs", "start", 1, "providerProfile-tabGroup", 3, "selectedTabChange"], [3, "label", 4, "ngFor", "ngForOf"], [1, "default-link", 3, "routerLink"], [3, "label"], ["matTabContent", ""], [1, "header-buttons", "d-flex", "justify-space-between", "pb-20", "g-20"], [1, "d-flex", "g-20", "justify-center", "align-center"], [1, "secondary-btn", 3, "click"], ["src", "../../../../assets/icons/filterIcon.svg"], ["class", "secondary-btn", 3, "click", 4, "ngIf"], [1, "d-flex", "g-20", "common-dropdown", "align-center", "flex-wrap", "justify-end"], [3, "gridConfig", "gridData", "showGridLoader"], ["width", "20", "src", "../../../../assets/icons/clear-icon.svg"], [4, "ngIf"], [3, "ngModelChange", "ngModel"], [3, "value"], ["src", "../../../../assets/icons/searchIcon.svg"], ["src", "../../../../assets/icons/rotateIcon.svg"], [1, "full-view-port-height", "d-flex", "justify-center", "align-center"], ["src", "../../../../assets/logo/ICM Logo Default 1.png"]], template: function PositionsStandAloneComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "mat-card", 0);
      \u0275\u0275template(1, PositionsStandAloneComponent_mat_card_content_1_Template, 254, 171, "mat-card-content", 1)(2, PositionsStandAloneComponent_div_2_Template, 2, 0, "div", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.showPageLoader);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showPageLoader);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, CurrencyPipe, DatePipe, MatMenuModule, CommonAgGridStandAloneComponent, RouterModule, RouterLink, FormsModule, NgControlStatus, NgModel, MatTabsModule, MatTabContent, MatTab, MatTabGroup, TranslateModule, TranslatePipe, MatSelectModule, MatFormField, MatLabel, MatSelect, MatOption, MatInputModule, MatCardModule, MatCard, MatCardContent], styles: ["\n\n.stats-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.stats-info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.stats-subline[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .positive[_ngcontent-%COMP%] {\n  color: #027A48;\n}\n.stats-subline[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .negative[_ngcontent-%COMP%] {\n  color: #B42318;\n}\n.info-section[_ngcontent-%COMP%] {\n  padding-block: 50px;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-left[_ngcontent-%COMP%] {\n  width: 70%;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-left[_ngcontent-%COMP%]   .info-section-left-items[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 15px;\n  height: fit-content;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-left[_ngcontent-%COMP%]   .info-section-left-items[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: unset;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-left[_ngcontent-%COMP%]   .info-section-left-items[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #667085;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-left[_ngcontent-%COMP%]   .info-section-left-items[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: unset;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-left[_ngcontent-%COMP%]   .info-section-left-items[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  font-size: 40px;\n  padding-top: 5px;\n  color: #D0D5DD;\n  font-weight: 100;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-left[_ngcontent-%COMP%]   .info-section-left-items-card[_ngcontent-%COMP%] {\n  border: 2px solid #EAECF0;\n  border-radius: 10px;\n  height: fit-content;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-left[_ngcontent-%COMP%]   .info-section-left-items-card[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%] {\n  border: none !important;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%] {\n  width: 25%;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%]   .info-section-right-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: unset;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%]   .info-section-right-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #667085;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%]   .info-section-right-header[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: unset;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  border-top: 1px solid #EAECF0;\n  margin-block: 20px;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%]   .info-section-right-card[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%]   .info-section-right-card[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%] {\n  padding-block: 5px;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%]   .info-section-right-card[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .items-main[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-block: 10px;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%]   .info-section-right-card[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .items-main[_ngcontent-%COMP%]   .items-left[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  width: 50%;\n  border: 1px solid #D0D5DD;\n  border-top-left-radius: 6px;\n  border-bottom-left-radius: 6px;\n  color: #667085;\n  font-weight: 400;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%]   .info-section-right-card[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .items-main[_ngcontent-%COMP%]   .items-right[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  width: 100%;\n  border: 1px solid #D0D5DD;\n  border-top-right-radius: 6px;\n  border-bottom-right-radius: 6px;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%]   .info-section-right-card[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .items-main[_ngcontent-%COMP%]   .items-right[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  background: #ECFDF3;\n  width: fit-content;\n  padding: 0px 10px;\n  border-radius: 6px;\n  color: #027A48;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%]   .info-section-right-card[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%] {\n  border: none !important;\n}\n  .providerProfile-tabGroup .mdc-tab__text-label {\n  font-size: 20px !important;\n  font-weight: 400;\n  color: #667085 !important;\n}\n  .providerProfile-tabGroup .mdc-tab {\n  padding: 0 50px !important;\n}\n  .common-dropdown .mdc-text-field {\n  background-color: var(--primaryWhite) !important;\n  border: 1px solid var(--border-color) !important;\n  border-bottom: 0px !important;\n  border-radius: 8px !important;\n  width: 150px;\n}\n  .common-dropdown .mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {\n  border-bottom-color: var(--border-color) !important;\n}\n  .common-dropdown .mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {\n  border-bottom-color: var(--border-color) !important;\n}\n  .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n/*# sourceMappingURL=positions.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PositionsStandAloneComponent, { className: "PositionsStandAloneComponent", filePath: "src\\app\\web\\views\\positions\\positions.standalone.component.ts", lineNumber: 29 });
})();
export {
  PositionsStandAloneComponent
};
//# sourceMappingURL=chunk-MCYTE5YG.js.map
