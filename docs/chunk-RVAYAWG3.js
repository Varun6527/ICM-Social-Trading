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
  MatInput,
  MatInputModule
} from "./chunk-YEQ6N72F.js";
import {
  TradingResultUiModal,
  TransactionHistoryUiModal
} from "./chunk-H2VRCKB7.js";
import {
  CommonAgGridStandAloneComponent,
  CommonCellRendererStandAloneComponent,
  MatDialog,
  MatFormField,
  MatLabel,
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
  MatMenuModule,
  NgControlStatus,
  NgModel,
  NumberValueAccessor,
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
  RouterLink,
  RouterModule,
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
  ɵɵpipeBind2,
  ɵɵpipeBind3,
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

// src/app/web/views/provider-subscription/provider-subscription.standalone.component.ts
var _c0 = (a0) => ["/portal/offers", a0];
function ProviderSubscriptionStandAloneComponent_mat_card_content_1_h6_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h6");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "PROVIDERS_PROFILE.Needs Activation"));
  }
}
function ProviderSubscriptionStandAloneComponent_mat_card_content_1_h6_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h6");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "PROVIDERS_PROFILE.Activated"));
  }
}
function ProviderSubscriptionStandAloneComponent_mat_card_content_1_h6_113_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h6");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "PROVIDERS_PROFILE.Suspended"));
  }
}
function ProviderSubscriptionStandAloneComponent_mat_card_content_1_mat_tab_125_ng_template_2_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function ProviderSubscriptionStandAloneComponent_mat_card_content_1_mat_tab_125_ng_template_2_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const tab_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearFilters(tab_r4));
    });
    \u0275\u0275element(1, "img", 36);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.Clear"), " ");
  }
}
function ProviderSubscriptionStandAloneComponent_mat_card_content_1_mat_tab_125_ng_template_2_Conditional_8_mat_form_field_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field")(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function ProviderSubscriptionStandAloneComponent_mat_card_content_1_mat_tab_125_ng_template_2_Conditional_8_mat_form_field_0_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r6);
      const tab_r4 = \u0275\u0275nextContext(3).$implicit;
      \u0275\u0275twoWayBindingSet(tab_r4.filters.type.id, $event) || (tab_r4.filters.type.id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "COMMON.Id"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", tab_r4.filters.type.id);
  }
}
function ProviderSubscriptionStandAloneComponent_mat_card_content_1_mat_tab_125_ng_template_2_Conditional_8_mat_form_field_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field")(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function ProviderSubscriptionStandAloneComponent_mat_card_content_1_mat_tab_125_ng_template_2_Conditional_8_mat_form_field_1_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r7);
      const tab_r4 = \u0275\u0275nextContext(3).$implicit;
      \u0275\u0275twoWayBindingSet(tab_r4.filters.type.resultId, $event) || (tab_r4.filters.type.resultId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "PROVIDERS_PROFILE.Result"), "#");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", tab_r4.filters.type.resultId);
  }
}
function ProviderSubscriptionStandAloneComponent_mat_card_content_1_mat_tab_125_ng_template_2_Conditional_8_mat_form_field_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field")(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function ProviderSubscriptionStandAloneComponent_mat_card_content_1_mat_tab_125_ng_template_2_Conditional_8_mat_form_field_2_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r8);
      const tab_r4 = \u0275\u0275nextContext(3).$implicit;
      \u0275\u0275twoWayBindingSet(tab_r4.filters.type.platformId, $event) || (tab_r4.filters.type.platformId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "TRANSACTIONS.MT order"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", tab_r4.filters.type.platformId);
  }
}
function ProviderSubscriptionStandAloneComponent_mat_card_content_1_mat_tab_125_ng_template_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProviderSubscriptionStandAloneComponent_mat_card_content_1_mat_tab_125_ng_template_2_Conditional_8_mat_form_field_0_Template, 5, 4, "mat-form-field", 23)(1, ProviderSubscriptionStandAloneComponent_mat_card_content_1_mat_tab_125_ng_template_2_Conditional_8_mat_form_field_1_Template, 5, 4, "mat-form-field", 23)(2, ProviderSubscriptionStandAloneComponent_mat_card_content_1_mat_tab_125_ng_template_2_Conditional_8_mat_form_field_2_Template, 5, 4, "mat-form-field", 23);
  }
  if (rf & 2) {
    const tab_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("ngIf", tab_r4.filters.type.hasOwnProperty("id"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", tab_r4.filters.type.hasOwnProperty("resultId"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", tab_r4.filters.type.hasOwnProperty("platformId"));
  }
}
function ProviderSubscriptionStandAloneComponent_mat_card_content_1_mat_tab_125_ng_template_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 38);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "PROVIDERS_LIST.Search"), " ");
  }
}
function ProviderSubscriptionStandAloneComponent_mat_card_content_1_mat_tab_125_ng_template_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 39);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.Refresh"), " ");
  }
}
function ProviderSubscriptionStandAloneComponent_mat_card_content_1_mat_tab_125_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30)(2, "button", 31);
    \u0275\u0275listener("click", function ProviderSubscriptionStandAloneComponent_mat_card_content_1_mat_tab_125_ng_template_2_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const tab_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.applyFilters(tab_r4));
    });
    \u0275\u0275element(3, "img", 32);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ProviderSubscriptionStandAloneComponent_mat_card_content_1_mat_tab_125_ng_template_2_button_6_Template, 4, 3, "button", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 34);
    \u0275\u0275template(8, ProviderSubscriptionStandAloneComponent_mat_card_content_1_mat_tab_125_ng_template_2_Conditional_8_Template, 3, 3);
    \u0275\u0275elementStart(9, "button", 31);
    \u0275\u0275listener("click", function ProviderSubscriptionStandAloneComponent_mat_card_content_1_mat_tab_125_ng_template_2_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r3);
      const tab_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.refreshDataList(tab_r4));
    });
    \u0275\u0275template(10, ProviderSubscriptionStandAloneComponent_mat_card_content_1_mat_tab_125_ng_template_2_Conditional_10_Template, 3, 3)(11, ProviderSubscriptionStandAloneComponent_mat_card_content_1_mat_tab_125_ng_template_2_Conditional_11_Template, 3, 3);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(12, "common-ag-grid", 35);
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
function ProviderSubscriptionStandAloneComponent_mat_card_content_1_mat_tab_125_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-tab", 27);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275template(2, ProviderSubscriptionStandAloneComponent_mat_card_content_1_mat_tab_125_ng_template_2_Template, 13, 9, "ng-template", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r4 = ctx.$implicit;
    \u0275\u0275propertyInterpolate("label", \u0275\u0275pipeBind1(1, 1, tab_r4.label));
  }
}
function ProviderSubscriptionStandAloneComponent_mat_card_content_1_Template(rf, ctx) {
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
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(28, "div", 9)(29, "div", 10)(30, "h4");
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "p");
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 11)(37, "mat-card", 12)(38, "div", 13)(39, "h6");
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "p")(43, "a", 14)(44, "span");
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(46, "div", 13)(47, "h6");
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "p");
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(52, "div", 9)(53, "div", 10)(54, "h4");
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "p");
    \u0275\u0275text(58);
    \u0275\u0275pipe(59, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 11)(61, "mat-card", 12)(62, "div", 13)(63, "h6");
    \u0275\u0275text(64);
    \u0275\u0275pipe(65, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "p");
    \u0275\u0275text(67);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "div", 13)(69, "h6");
    \u0275\u0275text(70);
    \u0275\u0275pipe(71, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "p");
    \u0275\u0275text(73);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 13)(75, "h6");
    \u0275\u0275text(76);
    \u0275\u0275pipe(77, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "p");
    \u0275\u0275text(79);
    \u0275\u0275pipe(80, "currency");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(81, "div", 15)(82, "div", 16)(83, "h4");
    \u0275\u0275text(84);
    \u0275\u0275pipe(85, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "p");
    \u0275\u0275text(87);
    \u0275\u0275pipe(88, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(89, "hr");
    \u0275\u0275elementStart(90, "div", 17)(91, "mat-card", 12)(92, "div", 18)(93, "div", 5)(94, "h6");
    \u0275\u0275text(95);
    \u0275\u0275pipe(96, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(97, "div", 19)(98, "div", 20)(99, "h6");
    \u0275\u0275text(100);
    \u0275\u0275pipe(101, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(102, "div", 21)(103, "h6", 22);
    \u0275\u0275text(104);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(105, "div", 19)(106, "div", 20)(107, "h6");
    \u0275\u0275text(108);
    \u0275\u0275pipe(109, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(110, "div", 21);
    \u0275\u0275template(111, ProviderSubscriptionStandAloneComponent_mat_card_content_1_h6_111_Template, 3, 3, "h6", 23)(112, ProviderSubscriptionStandAloneComponent_mat_card_content_1_h6_112_Template, 3, 3, "h6", 23)(113, ProviderSubscriptionStandAloneComponent_mat_card_content_1_h6_113_Template, 3, 3, "h6", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(114, "div", 19)(115, "div", 20)(116, "h6");
    \u0275\u0275text(117);
    \u0275\u0275pipe(118, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(119, "div", 21)(120, "h6");
    \u0275\u0275text(121);
    \u0275\u0275pipe(122, "date");
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275elementStart(123, "div", 24)(124, "mat-tab-group", 25);
    \u0275\u0275listener("selectedTabChange", function ProviderSubscriptionStandAloneComponent_mat_card_content_1_Template_mat_tab_group_selectedTabChange_124_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTabChange($event));
    });
    \u0275\u0275template(125, ProviderSubscriptionStandAloneComponent_mat_card_content_1_mat_tab_125_Template, 3, 3, "mat-tab", 26);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(6, 35, "SUBSCRIPTION.Subscription Profile"), " #", ctx_r1.subscriptionData.id, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 37, "SUBSCRIPTION.General information about the subscription"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 39, "SUBSCRIPTION.Subscription Strategy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 41, "PROVIDERS_PROFILE.Description of strategy"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 43, "SUBSCRIPTION.Volume scaling"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.subscriptionData.strategy.type);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 45, "SUBSCRIPTION.Offer"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 47, "PROVIDERS_PROFILE.Description of Offers"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 49, "SUBSCRIPTION.Title"));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(82, _c0, ctx_r1.offerId));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.offerData.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(49, 51, "SUBSCRIPTION.Performance fee"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.offerData.performance.fee, "% (", ctx_r1.offerData.performance.interval, ")");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(56, 53, "SUBSCRIPTION.Trading account"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(59, 55, "PROVIDERS_PROFILE.Description of Trading account platform"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(65, 57, "SUBSCRIPTION.MT name"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.subscriptionData.externalName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(71, 59, "SUBSCRIPTION.MT login"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.subscriptionData.externalAccount);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(77, 61, "SUBSCRIPTION.Equity"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(80, 63, ctx_r1.subscriptionData.equity, ctx_r1.subscriptionData.currency, "symbol"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(85, 67, "PROVIDERS_PROFILE.Personal Info"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(88, 69, "PROVIDERS_PROFILE.Update your personal details here"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(96, 71, "PROVIDERS_PROFILE.Information"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(101, 73, "COMMON.State"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u25CF ", ctx_r1.subscriptionData.state, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(109, 75, "COMMON.Status"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r1.subscriptionData.isActivated);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.subscriptionData.isActivated && ctx_r1.subscriptionData.activationStatus);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.subscriptionData.isActivated && !ctx_r1.subscriptionData.activationStatus);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(118, 77, "PROVIDERS_PROFILE.Registered"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(122, 79, ctx_r1.subscriptionData.registerTime, "M/d/yy, h:mm:ss a"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.tabArrConfig);
  }
}
function ProviderSubscriptionStandAloneComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275element(1, "img", 41);
    \u0275\u0275elementEnd();
  }
}
var ProviderSubscriptionStandAloneComponent = class _ProviderSubscriptionStandAloneComponent {
  _webService;
  route;
  currentSelectedTabIndx = 0;
  tabArrConfig = [];
  providerId;
  offerId;
  subscriptionId;
  showPageLoader = false;
  constantVariable = new ConstantVariable();
  beFeesDetailDialog = inject(MatDialog);
  errorComponent;
  providersData = [];
  offerData = {};
  subscriptionData = {};
  constructor(_webService, route) {
    this._webService = _webService;
    this.route = route;
    this.route.paramMap.subscribe((params) => {
      this.providerId = params.get("providerId");
      this.subscriptionId = params.get("subscriptionId");
      this.getAllProviderSubscriptionPageData();
    });
    this._webService.subscribeOnWebDataChange("ProviderSubscriptionStandAloneComponent", (event) => {
      this.recieveChildrenEmitter(event);
    });
  }
  getAllProviderSubscriptionPageData() {
    return __async(this, null, function* () {
      this.showPageLoader = true;
      let result1 = yield this.getSubscriptionData();
      let result2 = yield this.getProviderData();
      let result3 = yield this.getOfferData();
      this.setUpTabsConfig();
      this.getGridData(this.tabArrConfig[0]);
      this.showPageLoader = false;
    });
  }
  getSubscriptionData() {
    return new Promise((resolve) => {
      let param = {
        providerId: this.providerId,
        subscriptionId: this.subscriptionId
      };
      this._webService.getSubscriptionData(param).subscribe({
        next: (response) => {
          this.subscriptionData = response;
          this.providerId = this.subscriptionData.providerId;
          this.offerId = this.subscriptionData.offerId;
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
  getOfferData() {
    return new Promise((resolve) => {
      let param = { offerId: this.offerId };
      this._webService.getSingleOfferData(param).subscribe({
        next: (response) => {
          this.offerData = response;
          resolve();
        },
        error: (errorObj) => {
          this.showErrorWarnMessage(errorObj?.error?.errorMessage);
          resolve();
        },
        complete: () => {
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
    arr.push(this.getFeesTabConfig());
    if (this._webService.showSubscriptionsTradingResults) {
      arr.push(this.getResultTabConfig());
    }
    return arr;
  }
  getFeesTabConfig() {
    return {
      label: "PROVIDERS_PROFILE.Fees",
      filters: {
        show: false,
        type: { id: "", platformId: "" },
        clear: function() {
          this.type = { id: "", platformId: "" };
        },
        providerId: this.providerId,
        subscriptionId: this.subscriptionId,
        getApiParams: function() {
          let param = {};
          let getFilterParam = () => {
            let filterQuery = "";
            if (this.type.id) {
              filterQuery += `id eq ${this.type.id} and `;
            }
            if (this.type.platformId) {
              filterQuery += `platformId eq ${this.type.platformId} and `;
            }
            filterQuery += `ownerId eq ${this.providerId} and ownerType eq 'Provider' and counterpartyId eq ${this.subscriptionId} and `;
            return filterQuery;
          };
          param["$count"] = true;
          getFilterParam.apply(this) ? param["$filter"] = getFilterParam.apply(this).slice(0, -4) : "";
          return param;
        }
      },
      grid: this.getCommonGridDetails("fees", "There are no fees", TransactionHistoryUiModal, this.constantVariable?.http_Api_Url.transactionsHistory.get, this.providersData)
    };
  }
  getResultTabConfig() {
    let apiUrl = this.constantVariable?.http_Api_Url.webHomePage.follower.result.replace(":subscriptionId", this.subscriptionId);
    return {
      label: "PROVIDERS_PROFILE.Results",
      filters: {
        show: false,
        type: { resultId: "" },
        clear: function() {
          this.type = { resultId: "" };
        },
        providerId: this.providerId,
        subscriptionId: this.subscriptionId,
        getApiParams: function() {
          let param = {};
          let getFilterParam = () => {
            let filterQuery = "";
            if (this.type.resultId) {
              filterQuery += `id eq ${this.type.resultId} and `;
            }
            return filterQuery;
          };
          param["$count"] = true;
          getFilterParam.apply(this) ? param["$filter"] = getFilterParam.apply(this).slice(0, -4) : "";
          return param;
        }
      },
      grid: this.getCommonGridDetails("results", "There are no trading results", TradingResultUiModal, apiUrl, this.offerData)
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
    if (gridType == "fees") {
      return [
        { field: "transactionObj", headerName: "PROVIDERS_PROFILE.Fees", sort: "desc", cellRenderer: CommonCellRendererStandAloneComponent, resizable: false, colId: "transactionTitlePopup" },
        { field: "platformId", headerName: "TRANSACTIONS.MT order", resizable: false },
        { field: "transactionAmountObj", headerName: "REPORTS.Amount", cellRenderer: CommonCellRendererStandAloneComponent, resizable: false, colId: "transactionAmountViewDisplay" },
        { field: "processTime", headerName: "TRANSACTIONS.Processed", resizable: false },
        { field: "actions", headerName: "", cellRenderer: ActionButtonStanAloneComponent, sortable: false, colId: "transactionDetailsPopup", showPopupArraow: true, resizable: false }
      ];
    } else if (gridType == "results") {
      return [
        { field: "resultId", headerName: "PROVIDERS_PROFILE.Results", sort: "desc", cellRenderer: CommonCellRendererStandAloneComponent, resizable: false, colId: "resultIdCell" },
        { field: "offerTitle", headerName: "PROVIDERS_PROFILE.Offer", sortable: false, resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: "offerTitleCell" },
        { field: "startTime", headerName: "PROVIDERS_PROFILE.Start time", resizable: false },
        { field: "endTime", headerName: "PROVIDERS_PROFILE.End Time", resizable: false },
        { field: "amount", headerName: "PROVIDERS_PROFILE.Fee Amount", resizable: false },
        { field: "actions", headerName: "", cellRenderer: ActionButtonStanAloneComponent, sortable: false, colId: "tradingResultRedirection", resizable: false }
      ];
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
    if (event["action"] == "open_transact_details_popup") {
      this.openBeFeesDetailsPopup(event["data"]);
    }
  }
  openBeFeesDetailsPopup(data) {
    this.beFeesDetailDialog.open(CommonDialogStandAloneComponent, {
      panelClass: "common-dialog",
      data: this.prepareFeesData(data)
    });
    this.beFeesDetailDialog.afterAllClosed.subscribe((result) => {
    });
  }
  prepareFeesData(transactionHistoryDetails) {
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
        { title: "TRANSACTIONS.Sender", value: transactionHistoryDetails.senderObj, type: "sender" },
        { title: "TRANSACTIONS.Recipient", value: transactionHistoryDetails.reciepentObj, type: "recipent" },
        { title: "TRANSACTIONS.Processed", value: transactionHistoryDetails.processTime }
      ]
    };
    return commonDialogData;
  }
  ngOnDestroy() {
    this._webService.unSubscribeOnWebDataChange("ProviderSubscriptionStandAloneComponent");
  }
  static \u0275fac = function ProviderSubscriptionStandAloneComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProviderSubscriptionStandAloneComponent)(\u0275\u0275directiveInject(WebService), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProviderSubscriptionStandAloneComponent, selectors: [["app-provider-subscription"]], viewQuery: function ProviderSubscriptionStandAloneComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(ShowErrorStandAloneComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.errorComponent = _t.first);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 2, consts: [["appearance", "outlined", 1, "section-card"], ["class", "section-card-content", 4, "ngIf"], ["class", "full-view-port-height d-flex justify-center align-center", 4, "ngIf"], [1, "section-card-content"], [1, "home-card"], [1, "header", "d-flex", "justify-space-between", "align-center"], [1, "header-title"], [1, "info-section", "d-flex", "justify-space-between"], [1, "info-section-left"], [1, "d-flex", "justify-space-between", "w-100"], [1, "info-section-left-items"], [1, "info-section-left-items", "info-section-left-items-card"], ["appearance", "outlined"], [1, "d-flex", "justify-space-between", "align-center"], [1, "default-link", 3, "routerLink"], [1, "info-section-right"], [1, "info-section-right-header"], [1, "info-section-right-card"], [1, "items"], [1, "d-flex", "justify-center", "items-main"], [1, "items-left"], [1, "items-right"], [1, "status-badge"], [4, "ngIf"], [1, "metrics-table"], ["mat-stretch-tabs", "false", "mat-align-tabs", "start", 1, "providerProfile-tabGroup", 3, "selectedTabChange"], [3, "label", 4, "ngFor", "ngForOf"], [3, "label"], ["matTabContent", ""], [1, "header-buttons", "d-flex", "justify-space-between", "pb-20", "g-20"], [1, "d-flex", "g-20", "justify-center", "align-center"], [1, "secondary-btn", 3, "click"], ["src", "../../../../assets/icons/filterIcon.svg"], ["class", "secondary-btn", 3, "click", 4, "ngIf"], [1, "d-flex", "g-20", "common-dropdown", "align-center", "flex-wrap", "justify-end"], [3, "gridConfig", "gridData", "showGridLoader"], ["width", "20", "src", "../../../../assets/icons/clear-icon.svg"], ["matInput", "", "type", "number", 3, "ngModelChange", "ngModel"], ["src", "../../../../assets/icons/searchIcon.svg"], ["src", "../../../../assets/icons/rotateIcon.svg"], [1, "full-view-port-height", "d-flex", "justify-center", "align-center"], ["src", "../../../../assets/logo/ICM Logo Default 1.png"]], template: function ProviderSubscriptionStandAloneComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "mat-card", 0);
      \u0275\u0275template(1, ProviderSubscriptionStandAloneComponent_mat_card_content_1_Template, 126, 84, "mat-card-content", 1)(2, ProviderSubscriptionStandAloneComponent_div_2_Template, 2, 0, "div", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.showPageLoader);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showPageLoader);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, CurrencyPipe, DatePipe, CommonAgGridStandAloneComponent, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgModel, MatMenuModule, MatTabsModule, MatTabContent, MatTab, MatTabGroup, TranslateModule, TranslatePipe, MatSelectModule, MatFormField, MatLabel, MatInputModule, MatInput, MatCardModule, MatCard, MatCardContent, RouterModule, RouterLink], styles: ["\n\n.stats-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.stats-info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.stats-subline[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .positive[_ngcontent-%COMP%] {\n  color: #027A48;\n}\n.stats-subline[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .negative[_ngcontent-%COMP%] {\n  color: #B42318;\n}\n.info-section[_ngcontent-%COMP%] {\n  padding-block: 50px;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-left[_ngcontent-%COMP%] {\n  width: 70%;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  justify-content: space-between;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-left[_ngcontent-%COMP%]   .info-section-left-items[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 15px;\n  height: fit-content;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-left[_ngcontent-%COMP%]   .info-section-left-items[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: unset;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-left[_ngcontent-%COMP%]   .info-section-left-items[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #667085;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-left[_ngcontent-%COMP%]   .info-section-left-items[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: unset;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-left[_ngcontent-%COMP%]   .info-section-left-items[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  font-size: 40px;\n  padding-top: 5px;\n  color: #D0D5DD;\n  font-weight: 100;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-left[_ngcontent-%COMP%]   .info-section-left-items-card[_ngcontent-%COMP%] {\n  border: 2px solid #EAECF0;\n  border-radius: 10px;\n  height: fit-content;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-left[_ngcontent-%COMP%]   .info-section-left-items-card[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%] {\n  border: none !important;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%] {\n  width: 25%;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%]   .info-section-right-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: unset;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%]   .info-section-right-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #667085;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%]   .info-section-right-header[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: unset;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  border-top: 1px solid #EAECF0;\n  margin-block: 20px;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%]   .info-section-right-card[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%]   .info-section-right-card[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%] {\n  padding-block: 5px;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%]   .info-section-right-card[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .items-main[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-block: 10px;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%]   .info-section-right-card[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .items-main[_ngcontent-%COMP%]   .items-left[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  width: 50%;\n  border: 1px solid #D0D5DD;\n  border-top-left-radius: 6px;\n  border-bottom-left-radius: 6px;\n  color: #667085;\n  font-weight: 400;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%]   .info-section-right-card[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .items-main[_ngcontent-%COMP%]   .items-right[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  width: 100%;\n  border: 1px solid #D0D5DD;\n  border-top-right-radius: 6px;\n  border-bottom-right-radius: 6px;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%]   .info-section-right-card[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .items-main[_ngcontent-%COMP%]   .items-right[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  background: #ECFDF3;\n  width: fit-content;\n  padding: 0px 10px;\n  border-radius: 6px;\n  color: #027A48;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%]   .info-section-right-card[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%] {\n  border: none !important;\n}\n  .providerProfile-tabGroup .mdc-tab__text-label {\n  font-size: 20px !important;\n  font-weight: 400;\n  color: #667085 !important;\n}\n  .providerProfile-tabGroup .mdc-tab {\n  padding: 0 50px !important;\n}\n  .common-dropdown .mdc-text-field {\n  background-color: var(--primaryWhite) !important;\n  border: 1px solid var(--border-color) !important;\n  border-bottom: 0px !important;\n  border-radius: 8px !important;\n  width: 150px;\n}\n  .common-dropdown .mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {\n  border-bottom-color: var(--border-color) !important;\n}\n  .common-dropdown .mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {\n  border-bottom-color: var(--border-color) !important;\n}\n  .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n/*# sourceMappingURL=provider-subscription.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProviderSubscriptionStandAloneComponent, { className: "ProviderSubscriptionStandAloneComponent", filePath: "src\\app\\web\\views\\provider-subscription\\provider-subscription.standalone.component.ts", lineNumber: 28 });
})();
export {
  ProviderSubscriptionStandAloneComponent
};
//# sourceMappingURL=chunk-RVAYAWG3.js.map
