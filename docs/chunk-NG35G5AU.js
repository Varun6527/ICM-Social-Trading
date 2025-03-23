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
  ProfitsUiModal,
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
  MatMenuModule,
  MatOption,
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
  Router,
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
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-G46OV5IL.js";
import {
  __async
} from "./chunk-4OO5LSKA.js";

// src/app/web/views/result/result.standalone.component.ts
var _c0 = (a0) => ["/portal/offers", a0];
function ResultStandAloneComponent_mat_card_content_1_mat_tab_259_ng_template_2_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function ResultStandAloneComponent_mat_card_content_1_mat_tab_259_ng_template_2_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const tab_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearFilters(tab_r4));
    });
    \u0275\u0275element(1, "img", 37);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.Clear"), " ");
  }
}
function ResultStandAloneComponent_mat_card_content_1_mat_tab_259_ng_template_2_Conditional_8_mat_form_field_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field")(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function ResultStandAloneComponent_mat_card_content_1_mat_tab_259_ng_template_2_Conditional_8_mat_form_field_0_Template_input_ngModelChange_4_listener($event) {
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
function ResultStandAloneComponent_mat_card_content_1_mat_tab_259_ng_template_2_Conditional_8_mat_form_field_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field")(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function ResultStandAloneComponent_mat_card_content_1_mat_tab_259_ng_template_2_Conditional_8_mat_form_field_1_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r7);
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
function ResultStandAloneComponent_mat_card_content_1_mat_tab_259_ng_template_2_Conditional_8_mat_form_field_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field")(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-select", 40);
    \u0275\u0275twoWayListener("ngModelChange", function ResultStandAloneComponent_mat_card_content_1_mat_tab_259_ng_template_2_Conditional_8_mat_form_field_2_Template_mat_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r8);
      const tab_r4 = \u0275\u0275nextContext(3).$implicit;
      \u0275\u0275twoWayBindingSet(tab_r4.filters.type.origin, $event) || (tab_r4.filters.type.origin = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(5, "mat-option", 41);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-option", 41);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-option", 41);
    \u0275\u0275text(12, "-");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const tab_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 7, "PROVIDERS_PROFILE.Origin"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", tab_r4.filters.type.origin);
    \u0275\u0275advance();
    \u0275\u0275property("value", "Position");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 9, "PROVIDERS_PROFILE.Position"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", "Custom");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 11, "REPORTS.Custom"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", void 0);
  }
}
function ResultStandAloneComponent_mat_card_content_1_mat_tab_259_ng_template_2_Conditional_8_mat_form_field_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field")(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function ResultStandAloneComponent_mat_card_content_1_mat_tab_259_ng_template_2_Conditional_8_mat_form_field_3_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r9);
      const tab_r4 = \u0275\u0275nextContext(3).$implicit;
      \u0275\u0275twoWayBindingSet(tab_r4.filters.type.uniqueId, $event) || (tab_r4.filters.type.uniqueId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "PROVIDERS_PROFILE.Position"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", tab_r4.filters.type.uniqueId);
  }
}
function ResultStandAloneComponent_mat_card_content_1_mat_tab_259_ng_template_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ResultStandAloneComponent_mat_card_content_1_mat_tab_259_ng_template_2_Conditional_8_mat_form_field_0_Template, 5, 4, "mat-form-field", 38)(1, ResultStandAloneComponent_mat_card_content_1_mat_tab_259_ng_template_2_Conditional_8_mat_form_field_1_Template, 5, 4, "mat-form-field", 38)(2, ResultStandAloneComponent_mat_card_content_1_mat_tab_259_ng_template_2_Conditional_8_mat_form_field_2_Template, 13, 13, "mat-form-field", 38)(3, ResultStandAloneComponent_mat_card_content_1_mat_tab_259_ng_template_2_Conditional_8_mat_form_field_3_Template, 5, 4, "mat-form-field", 38);
  }
  if (rf & 2) {
    const tab_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("ngIf", tab_r4.filters.type.hasOwnProperty("id"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", tab_r4.filters.type.hasOwnProperty("platformId"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", tab_r4.filters.type.hasOwnProperty("origin"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", tab_r4.filters.type.hasOwnProperty("uniqueId"));
  }
}
function ResultStandAloneComponent_mat_card_content_1_mat_tab_259_ng_template_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 42);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "PROVIDERS_LIST.Search"), " ");
  }
}
function ResultStandAloneComponent_mat_card_content_1_mat_tab_259_ng_template_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 43);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.Refresh"), " ");
  }
}
function ResultStandAloneComponent_mat_card_content_1_mat_tab_259_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31)(2, "button", 32);
    \u0275\u0275listener("click", function ResultStandAloneComponent_mat_card_content_1_mat_tab_259_ng_template_2_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const tab_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.applyFilters(tab_r4));
    });
    \u0275\u0275element(3, "img", 33);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ResultStandAloneComponent_mat_card_content_1_mat_tab_259_ng_template_2_button_6_Template, 4, 3, "button", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 35);
    \u0275\u0275template(8, ResultStandAloneComponent_mat_card_content_1_mat_tab_259_ng_template_2_Conditional_8_Template, 4, 4);
    \u0275\u0275elementStart(9, "button", 32);
    \u0275\u0275listener("click", function ResultStandAloneComponent_mat_card_content_1_mat_tab_259_ng_template_2_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r3);
      const tab_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.refreshDataList(tab_r4));
    });
    \u0275\u0275template(10, ResultStandAloneComponent_mat_card_content_1_mat_tab_259_ng_template_2_Conditional_10_Template, 3, 3)(11, ResultStandAloneComponent_mat_card_content_1_mat_tab_259_ng_template_2_Conditional_11_Template, 3, 3);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(12, "common-ag-grid", 36);
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
function ResultStandAloneComponent_mat_card_content_1_mat_tab_259_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-tab", 28);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275template(2, ResultStandAloneComponent_mat_card_content_1_mat_tab_259_ng_template_2_Template, 13, 9, "ng-template", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r4 = ctx.$implicit;
    \u0275\u0275propertyInterpolate("label", \u0275\u0275pipeBind1(1, 1, tab_r4.label));
  }
}
function ResultStandAloneComponent_mat_card_content_1_Template(rf, ctx) {
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
    \u0275\u0275elementStart(26, "p", 14)(27, "span");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 13)(30, "h6");
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "p", 14)(34, "span");
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 13)(37, "h6");
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "p", 14)(41, "span");
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 13)(44, "h6");
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "p");
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 13)(51, "h6");
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "p");
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "date");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(57, "div", 9)(58, "div", 10)(59, "h4");
    \u0275\u0275text(60);
    \u0275\u0275pipe(61, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "p");
    \u0275\u0275text(63);
    \u0275\u0275pipe(64, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 11)(66, "mat-card", 12)(67, "div", 13)(68, "h6");
    \u0275\u0275text(69);
    \u0275\u0275pipe(70, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "p");
    \u0275\u0275text(72);
    \u0275\u0275pipe(73, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 13)(75, "h6");
    \u0275\u0275text(76);
    \u0275\u0275pipe(77, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "p");
    \u0275\u0275text(79);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(80, "div", 9)(81, "div", 10)(82, "h4");
    \u0275\u0275text(83);
    \u0275\u0275pipe(84, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "p");
    \u0275\u0275text(86);
    \u0275\u0275pipe(87, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(88, "div", 11)(89, "mat-card", 12)(90, "div", 13)(91, "h6");
    \u0275\u0275text(92);
    \u0275\u0275pipe(93, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "p", 14)(95, "span");
    \u0275\u0275text(96);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(97, "div", 13)(98, "h6");
    \u0275\u0275text(99);
    \u0275\u0275pipe(100, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "p", 14)(102, "span");
    \u0275\u0275text(103);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(104, "div", 13)(105, "h6");
    \u0275\u0275text(106);
    \u0275\u0275pipe(107, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "p");
    \u0275\u0275text(109);
    \u0275\u0275pipe(110, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(111, "div", 13)(112, "h6");
    \u0275\u0275text(113);
    \u0275\u0275pipe(114, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(115, "p");
    \u0275\u0275text(116);
    \u0275\u0275pipe(117, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(118, "div", 13)(119, "h6");
    \u0275\u0275text(120);
    \u0275\u0275pipe(121, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(122, "p");
    \u0275\u0275text(123);
    \u0275\u0275pipe(124, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(125, "div", 13)(126, "h6");
    \u0275\u0275text(127);
    \u0275\u0275pipe(128, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(129, "p");
    \u0275\u0275text(130);
    \u0275\u0275pipe(131, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(132, "div", 13)(133, "h6");
    \u0275\u0275text(134);
    \u0275\u0275pipe(135, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(136, "p");
    \u0275\u0275text(137);
    \u0275\u0275pipe(138, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(139, "strong");
    \u0275\u0275text(140);
    \u0275\u0275pipe(141, "translate");
    \u0275\u0275pipe(142, "translate");
    \u0275\u0275pipe(143, "translate");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(144, "div", 15)(145, "div", 16)(146, "h4");
    \u0275\u0275text(147);
    \u0275\u0275pipe(148, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(149, "p");
    \u0275\u0275text(150);
    \u0275\u0275pipe(151, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(152, "hr");
    \u0275\u0275elementStart(153, "div", 17)(154, "mat-card", 12)(155, "div", 18)(156, "div", 5)(157, "h6");
    \u0275\u0275text(158);
    \u0275\u0275pipe(159, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(160, "div", 19)(161, "div", 20)(162, "h6");
    \u0275\u0275text(163);
    \u0275\u0275pipe(164, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(165, "div", 21)(166, "h6")(167, "a", 22)(168, "span");
    \u0275\u0275text(169);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(170, "div", 19)(171, "div", 20)(172, "h6");
    \u0275\u0275text(173);
    \u0275\u0275pipe(174, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(175, "div", 21)(176, "h6", 23);
    \u0275\u0275text(177);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(178, "div", 19)(179, "div", 20)(180, "h6");
    \u0275\u0275text(181);
    \u0275\u0275pipe(182, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(183, "div", 21)(184, "h6");
    \u0275\u0275text(185);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(186, "div", 19)(187, "div", 20)(188, "h6");
    \u0275\u0275text(189);
    \u0275\u0275pipe(190, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(191, "div", 21)(192, "h6", 23);
    \u0275\u0275text(193);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(194, "div", 18)(195, "div", 5)(196, "h6");
    \u0275\u0275text(197);
    \u0275\u0275pipe(198, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(199, "div", 19)(200, "div", 20)(201, "h6");
    \u0275\u0275text(202);
    \u0275\u0275pipe(203, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(204, "div", 21)(205, "h6")(206, "a", 24);
    \u0275\u0275listener("click", function ResultStandAloneComponent_mat_card_content_1_Template_a_click_206_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.redirectToSubscriptionPage());
    });
    \u0275\u0275elementStart(207, "span");
    \u0275\u0275text(208);
    \u0275\u0275pipe(209, "translate");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(210, "div", 19)(211, "div", 20)(212, "h6");
    \u0275\u0275text(213);
    \u0275\u0275pipe(214, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(215, "div", 21)(216, "h6")(217, "h6", 23);
    \u0275\u0275text(218);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(219, "div", 18)(220, "div", 5)(221, "h6");
    \u0275\u0275text(222);
    \u0275\u0275pipe(223, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(224, "div", 19)(225, "div", 20)(226, "h6");
    \u0275\u0275text(227);
    \u0275\u0275pipe(228, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(229, "div", 21)(230, "h6");
    \u0275\u0275text(231);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(232, "div", 19)(233, "div", 20)(234, "h6");
    \u0275\u0275text(235);
    \u0275\u0275pipe(236, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(237, "div", 21)(238, "h6");
    \u0275\u0275text(239);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(240, "div", 19)(241, "div", 20)(242, "h6");
    \u0275\u0275text(243);
    \u0275\u0275pipe(244, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(245, "div", 21)(246, "h6", 23);
    \u0275\u0275text(247);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(248, "div", 19)(249, "div", 20)(250, "h6");
    \u0275\u0275text(251);
    \u0275\u0275pipe(252, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(253, "div", 21)(254, "h6");
    \u0275\u0275text(255);
    \u0275\u0275pipe(256, "date");
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275elementStart(257, "div", 25)(258, "mat-tab-group", 26);
    \u0275\u0275listener("selectedTabChange", function ResultStandAloneComponent_mat_card_content_1_Template_mat_tab_group_selectedTabChange_258_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTabChange($event));
    });
    \u0275\u0275template(259, ResultStandAloneComponent_mat_card_content_1_mat_tab_259_Template, 3, 3, "mat-tab", 27);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(6, 68, "PROVIDERS_PROFILE.Result Profile"), " #", ctx_r1.resultData.id, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 70, "PROVIDERS_PROFILE.General information about the result"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 72, "PROVIDERS_PROFILE.Result"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 74, "PROVIDERS_PROFILE.Description of result"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 76, "PROVIDERS_PROFILE.State"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.resultData.state);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 78, "PROVIDERS_PROFILE.Readiness"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.resultData.readiness);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(39, 80, "PROVIDERS_PROFILE.Payment State"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.resultData.paymentState);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 82, "PROVIDERS_PROFILE.Start Time"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(49, 84, ctx_r1.resultData.startTime, "M/d/yy, h:mm:ss a"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 87, "PROVIDERS_PROFILE.End Time"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(56, 89, ctx_r1.resultData.endTime, "M/d/yy, h:mm:ss a"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(61, 92, "PROVIDERS_PROFILE.Result Fees"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(64, 94, "PROVIDERS_PROFILE.Description of result fees"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(70, 96, "REPORTS.Amount"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(73, 98, ctx_r1.resultData.amount, ctx_r1.resultData.currency, "symbol"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(77, 102, "PROVIDERS_PROFILE.Processed Percent"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.resultData.processedPercent, "% ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(84, 104, "PROVIDERS_PROFILE.Result Calculation"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(87, 106, "PROVIDERS_PROFILE.Description of result calculation"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(93, 108, "PROVIDERS_PROFILE.Result Mode"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.resultData.resultMode);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(100, 110, "PROVIDERS_PROFILE.Max Mode"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.resultData.maxMode);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(107, 112, "PROVIDERS_PROFILE.Max Profit"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(110, 114, ctx_r1.resultData.maxProfit, ctx_r1.resultData.currency, "symbol"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(114, 118, "PROVIDERS_PROFILE.Previous Max Profit"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(117, 120, ctx_r1.resultData.previousMaxProfit, ctx_r1.resultData.currency, "symbol"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(121, 124, "PROVIDERS_PROFILE.Floating Profit"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(124, 126, ctx_r1.resultData.floatingProfit, ctx_r1.resultData.currency, "symbol"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(128, 130, "PROVIDERS_PROFILE.Previous Floating Profit"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(131, 132, ctx_r1.resultData.previousFloatingProfit, ctx_r1.resultData.currency, "symbol"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(135, 136, "PROVIDERS_PROFILE.Result Profit"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(138, 138, ctx_r1.resultData.resultProfit, ctx_r1.resultData.currency, "symbol"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3("(", \u0275\u0275pipeBind1(141, 142, "PROVIDERS_PROFILE.Result Profit"), " = ", \u0275\u0275pipeBind1(142, 144, "PROVIDERS_PROFILE.Max Profit"), " - ", \u0275\u0275pipeBind1(143, 146, "PROVIDERS_PROFILE.Previous Max Profit"), ")");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(148, 148, "PROVIDERS_PROFILE.Personal Info"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(151, 150, "PROVIDERS_PROFILE.Update your personal details here"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(159, 152, "PROVIDERS_PROFILE.Offer"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(164, 154, "PROVIDERS_PROFILE.Title"));
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(183, _c0, ctx_r1.offerId));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.offerData.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(174, 156, "PROVIDERS_PROFILE.Interval"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.offerData.performance.interval);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(182, 158, "PROVIDERS_LIST.Fee"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.offerData.performance.fee, "%");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(190, 160, "PROVIDERS_PROFILE.State"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.offerData.state);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(198, 162, "TRANSACTIONS.Subscription"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(203, 164, "REPORTS.Name"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(209, 166, "TRANSACTIONS.Subscription"), " #", ctx_r1.subscriptionId, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(214, 168, "PROVIDERS_PROFILE.State"), "State");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.offerData.state);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(223, 170, "TRANSACTIONS.Account"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(228, 172, "PROVIDERS_PROFILE.MT name"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.subscriptionData.externalName, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(236, 174, "PROVIDERS_PROFILE.MT login"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.subscriptionData.externalAccount, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(244, 176, "PROVIDERS_PROFILE.State"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.subscriptionData.state, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(252, 178, "PROVIDERS_PROFILE.Updated (UTC)"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(256, 180, ctx_r1.resultData.updatedUtc, "MMMM d, y 'at' hh:mm:ss a"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.tabArrConfig);
  }
}
function ResultStandAloneComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "img", 45);
    \u0275\u0275elementEnd();
  }
}
var ResultStandAloneComponent = class _ResultStandAloneComponent {
  _webService;
  route;
  _router;
  currentSelectedTabIndx = 0;
  tabArrConfig = [];
  providerId;
  offerId;
  subscriptionId;
  resultId;
  showPageLoader = false;
  constantVariable = new ConstantVariable();
  beFeesDetailDialog = inject(MatDialog);
  errorComponent;
  providersData = {};
  offerData = {};
  subscriptionData = {};
  resultData = {};
  constructor(_webService, route, _router) {
    this._webService = _webService;
    this.route = route;
    this._router = _router;
    this.route.paramMap.subscribe((params) => {
      this.providerId = params.get("providerId");
      this.subscriptionId = params.get("subscriptionId");
      this.resultId = params.get("resultId");
      this.getAllSubscriptionResultPageData();
    });
    this._webService.subscribeOnWebDataChange("ResultStandAloneComponent", (event) => {
      this.recieveChildrenEmitter(event);
    });
  }
  getAllSubscriptionResultPageData() {
    return __async(this, null, function* () {
      this.showPageLoader = true;
      let result1 = yield this.getResultData();
      let result2 = yield this.getSubscriptionData();
      let result3 = yield this.getProviderData();
      let result4 = yield this.getOfferData();
      this.setUpTabsConfig();
      this.getGridData(this.tabArrConfig[0]);
      this.showPageLoader = false;
    });
  }
  getResultData() {
    return new Promise((resolve) => {
      let param = { resultId: this.resultId };
      this._webService.getSingleResultData(param).subscribe({
        next: (response) => {
          this.resultData = response;
          this.subscriptionId = this.resultData.subscriptionId;
          this.offerId = this.resultData.offerId;
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
      let param = {
        providerId: this.providerId,
        subscriptionId: this.subscriptionId
      };
      this._webService.getSubscriptionData(param).subscribe({
        next: (response) => {
          this.subscriptionData = response;
          this.providerId = this.subscriptionData.providerId;
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
    arr.push(this.getProfitTabConfig(), this.getFeesTabConfig());
    return arr;
  }
  getProfitTabConfig() {
    let url = this.constantVariable?.http_Api_Url.webHomePage.follower.profits.replace(":resultId", this.resultId);
    return {
      label: "PROVIDERS_PROFILE.Profits",
      filters: {
        show: false,
        type: { origin: "", uniqueId: "" },
        clear: function() {
          this.type = { origin: "", uniqueId: "" };
        },
        getApiParams: function() {
          let param = {};
          let getFilterParam = () => {
            let filterQuery = "";
            if (this.type.origin) {
              filterQuery += `origin eq '${this.type.origin}' and `;
            }
            if (this.type.uniqueId) {
              filterQuery += `uniqueId eq '${this.type.uniqueId}' and `;
            }
            return filterQuery;
          };
          param["$count"] = true;
          getFilterParam.apply(this) ? param["$filter"] = getFilterParam.apply(this).slice(0, -4) : "";
          return param;
        }
      },
      grid: this.getCommonGridDetails("profits", "There are no profits", ProfitsUiModal, url)
    };
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
        resultId: this.resultId,
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
            filterQuery += `reasonId eq ${this.resultId} and `;
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
    } else if (gridType == "profits") {
      return [
        { field: "id", headerName: "COMMON.Id", sort: "desc", resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: "profitId", valueFormatter: (params) => `#${params.value}` },
        { field: "finalProfit", headerName: "PROVIDERS_PROFILE.Final Profit", resizable: false },
        { field: "origin", headerName: "PROVIDERS_PROFILE.Origin", resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: "tagCell" },
        { field: "position", headerName: "PROVIDERS_PROFILE.Position", resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: "profitPositionCell" },
        { field: "processTime", headerName: "PROVIDERS_PROFILE.Process Time", resizable: false }
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
        { title: "TRANSACTIONS.Trading result", value: transactionHistoryDetails.senderObj.reasonId, type: "trading_reason", redirectionUrl: `/portal/providers/${transactionHistoryDetails.senderObj.providerId}/subscriptions/${transactionHistoryDetails.senderObj.subscriptionId}/results/${transactionHistoryDetails.senderObj.reasonId}` },
        { title: "TRANSACTIONS.Sender", value: transactionHistoryDetails.senderObj, type: "sender" },
        { title: "TRANSACTIONS.Processed", value: transactionHistoryDetails.processTime }
      ]
    };
    return commonDialogData;
  }
  redirectToSubscriptionPage() {
    this._router.navigate([`/portal/providers/${this.providerId}/subscriptions/${this.subscriptionId}`]);
  }
  ngOnDestroy() {
    this._webService.unSubscribeOnWebDataChange("ResultStandAloneComponent");
  }
  static \u0275fac = function ResultStandAloneComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResultStandAloneComponent)(\u0275\u0275directiveInject(WebService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResultStandAloneComponent, selectors: [["app-result"]], viewQuery: function ResultStandAloneComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(ShowErrorStandAloneComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.errorComponent = _t.first);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 2, consts: [["appearance", "outlined", 1, "section-card"], ["class", "section-card-content", 4, "ngIf"], ["class", "full-view-port-height d-flex justify-center align-center", 4, "ngIf"], [1, "section-card-content"], [1, "home-card"], [1, "header", "d-flex", "justify-space-between", "align-center"], [1, "header-title"], [1, "info-section", "d-flex", "justify-space-between"], [1, "info-section-left"], [1, "d-flex", "justify-space-between", "w-100"], [1, "info-section-left-items"], [1, "info-section-left-items", "info-section-left-items-card"], ["appearance", "outlined"], [1, "d-flex", "justify-space-between", "align-center"], [1, "tag"], [1, "info-section-right"], [1, "info-section-right-header"], [1, "info-section-right-card"], [1, "items"], [1, "d-flex", "justify-center", "items-main"], [1, "items-left"], [1, "items-right"], [1, "default-link", 3, "routerLink"], [1, "status-badge"], ["href", "javascript:void(0)", 1, "default-link", 3, "click"], [1, "metrics-table"], ["mat-stretch-tabs", "false", "mat-align-tabs", "start", 1, "providerProfile-tabGroup", 3, "selectedTabChange"], [3, "label", 4, "ngFor", "ngForOf"], [3, "label"], ["matTabContent", ""], [1, "header-buttons", "d-flex", "justify-space-between", "pb-20", "g-20"], [1, "d-flex", "g-20", "justify-center", "align-center"], [1, "secondary-btn", 3, "click"], ["src", "../../../../assets/icons/filterIcon.svg"], ["class", "secondary-btn", 3, "click", 4, "ngIf"], [1, "d-flex", "g-20", "common-dropdown", "align-center", "flex-wrap", "justify-end"], [3, "gridConfig", "gridData", "showGridLoader"], ["width", "20", "src", "../../../../assets/icons/clear-icon.svg"], [4, "ngIf"], ["matInput", "", "type", "number", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel"], [3, "value"], ["src", "../../../../assets/icons/searchIcon.svg"], ["src", "../../../../assets/icons/rotateIcon.svg"], [1, "full-view-port-height", "d-flex", "justify-center", "align-center"], ["src", "../../../../assets/logo/ICM Logo Default 1.png"]], template: function ResultStandAloneComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "mat-card", 0);
      \u0275\u0275template(1, ResultStandAloneComponent_mat_card_content_1_Template, 260, 185, "mat-card-content", 1)(2, ResultStandAloneComponent_div_2_Template, 2, 0, "div", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.showPageLoader);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showPageLoader);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, CurrencyPipe, DatePipe, CommonAgGridStandAloneComponent, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgModel, MatMenuModule, MatTabsModule, MatTabContent, MatTab, MatTabGroup, TranslateModule, TranslatePipe, MatSelectModule, MatFormField, MatLabel, MatSelect, MatOption, MatInputModule, MatInput, MatCardModule, MatCard, MatCardContent, RouterModule, RouterLink], styles: ["\n\n.stats-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.stats-info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.stats-subline[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .positive[_ngcontent-%COMP%] {\n  color: #027A48;\n}\n.stats-subline[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .negative[_ngcontent-%COMP%] {\n  color: #B42318;\n}\n.info-section[_ngcontent-%COMP%] {\n  padding-block: 50px;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-left[_ngcontent-%COMP%] {\n  width: 70%;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-left[_ngcontent-%COMP%]   .info-section-left-items[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 15px;\n  height: fit-content;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-left[_ngcontent-%COMP%]   .info-section-left-items[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: unset;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-left[_ngcontent-%COMP%]   .info-section-left-items[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #667085;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-left[_ngcontent-%COMP%]   .info-section-left-items[_ngcontent-%COMP%]   p.tag[_ngcontent-%COMP%] {\n  background: #ECFDF3;\n  width: fit-content;\n  padding: 0px 10px;\n  border-radius: 6px;\n  color: #027A48;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-left[_ngcontent-%COMP%]   .info-section-left-items[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: unset;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-left[_ngcontent-%COMP%]   .info-section-left-items[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  font-size: 40px;\n  padding-top: 5px;\n  color: #D0D5DD;\n  font-weight: 100;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-left[_ngcontent-%COMP%]   .info-section-left-items-card[_ngcontent-%COMP%] {\n  border: 2px solid #EAECF0;\n  border-radius: 10px;\n  height: fit-content;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-left[_ngcontent-%COMP%]   .info-section-left-items-card[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%] {\n  border: none !important;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%] {\n  width: 25%;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%]   .info-section-right-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: unset;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%]   .info-section-right-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #667085;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%]   .info-section-right-header[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: unset;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  border-top: 1px solid #EAECF0;\n  margin-block: 20px;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%]   .info-section-right-card[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%]   .info-section-right-card[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%] {\n  padding-block: 5px;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%]   .info-section-right-card[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .items-main[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-block: 10px;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%]   .info-section-right-card[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .items-main[_ngcontent-%COMP%]   .items-left[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  width: 50%;\n  border: 1px solid #D0D5DD;\n  border-top-left-radius: 6px;\n  border-bottom-left-radius: 6px;\n  color: #667085;\n  font-weight: 400;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%]   .info-section-right-card[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .items-main[_ngcontent-%COMP%]   .items-right[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  width: 100%;\n  border: 1px solid #D0D5DD;\n  border-top-right-radius: 6px;\n  border-bottom-right-radius: 6px;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%]   .info-section-right-card[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .items-main[_ngcontent-%COMP%]   .items-right[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  background: #ECFDF3;\n  width: fit-content;\n  padding: 0px 10px;\n  border-radius: 6px;\n  color: #027A48;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%]   .info-section-right-card[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%] {\n  border: none !important;\n}\n  .providerProfile-tabGroup .mdc-tab__text-label {\n  font-size: 20px !important;\n  font-weight: 400;\n  color: #667085 !important;\n}\n  .providerProfile-tabGroup .mdc-tab {\n  padding: 0 50px !important;\n}\n  .common-dropdown .mdc-text-field {\n  background-color: var(--primaryWhite) !important;\n  border: 1px solid var(--border-color) !important;\n  border-bottom: 0px !important;\n  border-radius: 8px !important;\n  width: 150px;\n}\n  .common-dropdown .mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {\n  border-bottom-color: var(--border-color) !important;\n}\n  .common-dropdown .mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {\n  border-bottom-color: var(--border-color) !important;\n}\n  .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n/*# sourceMappingURL=result.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResultStandAloneComponent, { className: "ResultStandAloneComponent", filePath: "src\\app\\web\\views\\result\\result.standalone.component.ts", lineNumber: 28 });
})();
export {
  ResultStandAloneComponent
};
//# sourceMappingURL=chunk-NG35G5AU.js.map
