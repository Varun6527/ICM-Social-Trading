import {
  StatusBtnRendererComponent
} from "./chunk-DAHACZEA.js";
import {
  MatAccordion,
  MatExpansionModule,
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from "./chunk-7KFQ5TEA.js";
import {
  ArchiveDialog
} from "./chunk-WVOT52BY.js";
import {
  ProviderFollowerHeaderCardsStandaloneComponent
} from "./chunk-LRP7QKMI.js";
import "./chunk-2UBV3CDC.js";
import {
  IcmLoadingOverlayDirective
} from "./chunk-XT7PDWCQ.js";
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
  DealsUiModal,
  OfferDetailsUIModel,
  PositionUiModal,
  SubscriptionUiModal,
  TradingAccountUIModal,
  TransactionHistoryUiModal
} from "./chunk-H2VRCKB7.js";
import {
  CommonAgGridStandAloneComponent,
  CommonCellRendererStandAloneComponent,
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle,
  MatError,
  MatFormField,
  MatLabel,
  MatSelect,
  MatSelectModule,
  MatSuffix
} from "./chunk-VQMCFLWH.js";
import {
  WebService
} from "./chunk-5MDTIDYM.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MatCard,
  MatCardContent,
  MatCardModule,
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
  MatOption,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NumberValueAccessor,
  ReactiveFormsModule,
  ShowErrorStandAloneComponent,
  Validators,
  ɵNgNoValidate
} from "./chunk-ZFOVCG2I.js";
import {
  ActivatedRoute,
  ChangeDetectorRef,
  CommonModule,
  ConstantVariable,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf,
  Router,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-G46OV5IL.js";
import {
  __async
} from "./chunk-4OO5LSKA.js";

// src/app/web/shared/dialogBox/provider-common-info-dialog/providerCommonInfoDialog.standalone.component.ts
function ProviderCommonInfoDialog_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "PROVIDERS_PROFILE.Common Information"), " ");
  }
}
function ProviderCommonInfoDialog_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "PROVIDERS_PROFILE.Strategy"), " ");
  }
}
function ProviderCommonInfoDialog_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "PROVIDERS_PROFILE.Personal details of account"), " ");
  }
}
function ProviderCommonInfoDialog_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "PROVIDERS_PROFILE.Provider's common settings"), " ");
  }
}
function ProviderCommonInfoDialog_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "PROVIDERS_PROFILE.Provider's settings of publishing deals"), " ");
  }
}
function ProviderCommonInfoDialog_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "PROVIDERS_PROFILE.Description of trading strategy by its owner"), " ");
  }
}
function ProviderCommonInfoDialog_Conditional_10_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "PROVIDERS_PROFILE.Provider's name to be displayed for followers"), "");
  }
}
function ProviderCommonInfoDialog_Conditional_10_mat_error_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "login.FieldRequired"));
  }
}
function ProviderCommonInfoDialog_Conditional_10_mat_error_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "COMMON.Warn6CharMsg"));
  }
}
function ProviderCommonInfoDialog_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 7)(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ProviderCommonInfoDialog_Conditional_10_p_5_Template, 3, 3, "p", 9)(6, ProviderCommonInfoDialog_Conditional_10_mat_error_6_Template, 3, 3, "mat-error", 9)(7, ProviderCommonInfoDialog_Conditional_10_mat_error_7_Template, 3, 3, "mat-error", 9);
    \u0275\u0275elementStart(8, "mat-form-field", 7)(9, "mat-label");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-select", 10)(13, "mat-option", 11);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "mat-option", 11);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "p", 12);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 10, "OFFERS.Nickname"), " *");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r0.showError || !(ctx_r0.providerCommonInfoForm.controls["nickname"].errors == null ? null : ctx_r0.providerCommonInfoForm.controls["nickname"].errors["required"]) && !(ctx_r0.providerCommonInfoForm.controls["nickname"].errors == null ? null : ctx_r0.providerCommonInfoForm.controls["nickname"].errors["minlength"]));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showError && (ctx_r0.providerCommonInfoForm.controls["nickname"].errors == null ? null : ctx_r0.providerCommonInfoForm.controls["nickname"].errors["required"]));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showError && (ctx_r0.providerCommonInfoForm.controls["nickname"].errors == null ? null : ctx_r0.providerCommonInfoForm.controls["nickname"].errors["minlength"]));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(11, 12, "PROVIDERS_PROFILE.Show account name"), " *");
    \u0275\u0275advance(3);
    \u0275\u0275property("value", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 14, "COMMON.Enabled"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 16, "COMMON.Disabled"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 18, "PROVIDERS_PROFILE.Show account name in the provider profile in the ratings"));
  }
}
function ProviderCommonInfoDialog_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 7)(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-select", 13)(5, "mat-option", 11);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-option", 11);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "p", 12);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "mat-form-field", 7)(15, "mat-label");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "mat-select", 14)(19, "mat-option", 11);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "mat-option", 11);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "p", 12);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 12, "PROVIDERS_PROFILE.Hide stops"), " *");
    \u0275\u0275advance(3);
    \u0275\u0275property("value", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 14, "PROVIDERS_PROFILE.Hide"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 16, "PROVIDERS_PROFILE.Share"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 18, "PROVIDERS_PROFILE.Allow copying stop-levels of provider's trades into follower's trades"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(17, 20, "PROVIDERS_PROFILE.Strategy Mode"), " *");
    \u0275\u0275advance(3);
    \u0275\u0275property("value", "OutOnly");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 22, "PROVIDERS_PROFILE.Out only"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", "All");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 24, "COMMON.All"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 26, "PROVIDERS_PROFILE.Restriction of publishing deals depending on entering the market"));
  }
}
function ProviderCommonInfoDialog_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 7)(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 12);
    \u0275\u0275text(6, "Provider's brief description visible publicly");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-accordion")(8, "mat-expansion-panel", 16)(9, "mat-expansion-panel-header")(10, "mat-panel-title");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "p");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "mat-form-field", 7)(16, "mat-label");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "textarea", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 12);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "mat-accordion")(24, "mat-expansion-panel", 16)(25, "mat-expansion-panel-header")(26, "mat-panel-title");
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "p");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 7, "PROVIDERS_PROFILE.Summary"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 9, "PROVIDERS_PROFILE.Summary preview"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.providerCommonInfoForm.controls["summary"].value);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 11, "PROVIDERS_PROFILE.Notes"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 13, "PROVIDERS_PROFILE.Provider's description (verbose) visible publicly"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 15, "PROVIDERS_PROFILE.Notes preview"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.providerCommonInfoForm.controls["notes"].value);
  }
}
var ProviderCommonInfoDialog = class _ProviderCommonInfoDialog {
  data;
  dialogRef;
  fb;
  _webService;
  providerCommonInfoForm;
  providerData;
  modelType = "";
  showError = false;
  showLoader = false;
  errorComponent;
  IConstant = new ConstantVariable();
  constructor(data, dialogRef, fb, _webService) {
    this.data = data;
    this.dialogRef = dialogRef;
    this.fb = fb;
    this._webService = _webService;
    this.providerData = data.providerData;
    this.modelType = data.modelType;
    this.providerCommonInfoForm = this.fb.group({
      nickname: [""],
      showAccountName: [false],
      summary: [""],
      notes: [""],
      hideStops: [false],
      mode: [""]
    });
    this.setProviderFormData();
    console.log(data);
  }
  get getControl() {
    return this.providerCommonInfoForm.controls;
  }
  getProviderParamObj() {
    let param = {};
    if (this.modelType == "common_info") {
      param["additional"] = this.providerData.additional;
      param["nickname"] = this.getControl["nickname"].value;
      param["additional"]["showAccountName"] = this.getControl["showAccountName"].value;
      param["visibility"] = this.providerData.visibility;
    } else if (this.modelType == "personal_details") {
      param["additional"] = this.providerData.additional;
      param["additional"]["summary"] = this.getControl["summary"].value;
      param["additional"]["notes"] = this.getControl["notes"].value;
    } else if (this.modelType == "strategy_details") {
      param["strategy"] = this.providerData.strategy;
      param["strategy"]["hideStops"] = this.getControl["hideStops"].value;
      param["strategy"]["mode"] = this.getControl["mode"].value;
    }
    param["providerId"] = this.providerData.id;
    return param;
  }
  updateProviderDetails() {
    if (this.providerCommonInfoForm.invalid) {
      this.showError = true;
      return;
    }
    this.showLoader = true;
    this.showError = false;
    let param = this.getProviderParamObj();
    this._webService.updateProviderData(param).subscribe({
      next: (response) => {
        this.showSuccessPopupMsg("Provider has been updated");
        this.dialogRef.close({ action: "refresh_provider_data" });
        this.showLoader = false;
      },
      error: (errorObj) => {
        this.showLoader = false;
        this.showErrorWarnMessage(this.IConstant.errorMessageObj[errorObj?.error?.errorCode]);
      }
    });
  }
  setProviderFormData() {
    if (this.modelType == "common_info") {
      this.providerCommonInfoForm.patchValue({
        nickname: this.providerData.nickname,
        showAccountName: this.providerData.additional.showAccountName
      });
      this.getControl["nickname"].setValidators([Validators.required, Validators.minLength(6)]);
      this.getControl["nickname"].updateValueAndValidity();
    } else if (this.modelType == "personal_details") {
      this.providerCommonInfoForm.patchValue({
        summary: this.providerData.additional.summary,
        notes: this.providerData.additional.notes
      });
    } else if (this.modelType == "strategy_details") {
      this.providerCommonInfoForm.patchValue({
        hideStops: this.providerData.strategy.hideStops,
        mode: this.providerData.strategy.mode
      });
    }
    this.providerCommonInfoForm.updateValueAndValidity();
  }
  showErrorWarnMessage(msg) {
    const errorConfigObj = this.errorComponent?.config;
    errorConfigObj.message = msg ? msg : errorConfigObj.message;
    this.errorComponent?.openErrorSnackbar();
  }
  showSuccessPopupMsg(msg) {
    const errorConfigObj = this.errorComponent?.config;
    errorConfigObj.customStyle = "default-success-style";
    errorConfigObj.message = msg ? msg : errorConfigObj.message;
    this.errorComponent?.openErrorSnackbar();
  }
  closeProviderInfoForm() {
    this.dialogRef.close({});
  }
  static \u0275fac = function ProviderCommonInfoDialog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProviderCommonInfoDialog)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(WebService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProviderCommonInfoDialog, selectors: [["provider-commongInfo-dialog"]], viewQuery: function ProviderCommonInfoDialog_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(ShowErrorStandAloneComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.errorComponent = _t.first);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 21, vars: 17, consts: [["mat-dialog-title", "", 1, "text-center"], [1, "text-center"], [3, "formGroup"], [1, "mat-typography"], [1, "d-flex", "justify-center", "g-20"], [1, "secondary-btn", 3, "click"], ["type", "submit", 1, "primary-btn", 3, "click", "IcmLoadingOverlay"], [1, "common-field"], ["type", "text", "matInput", "", "placeholder", "Provider 1", "formControlName", "nickname"], ["class", "pb-10", 4, "ngIf"], ["formControlName", "showAccountName"], [3, "value"], [1, "pb-10"], ["formControlName", "hideStops"], ["formControlName", "mode"], ["type", "text", "matInput", "", "placeholder", "Summary", "formControlName", "summary"], ["hideToggle", ""], ["matInput", "", "formControlName", "notes", "rows", "3"]], template: function ProviderCommonInfoDialog_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h2", 0);
      \u0275\u0275template(1, ProviderCommonInfoDialog_Conditional_1_Template, 2, 3)(2, ProviderCommonInfoDialog_Conditional_2_Template, 2, 3)(3, ProviderCommonInfoDialog_Conditional_3_Template, 2, 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 1);
      \u0275\u0275template(5, ProviderCommonInfoDialog_Conditional_5_Template, 2, 3)(6, ProviderCommonInfoDialog_Conditional_6_Template, 2, 3)(7, ProviderCommonInfoDialog_Conditional_7_Template, 2, 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "form", 2)(9, "mat-dialog-content", 3);
      \u0275\u0275template(10, ProviderCommonInfoDialog_Conditional_10_Template, 22, 20)(11, ProviderCommonInfoDialog_Conditional_11_Template, 28, 28)(12, ProviderCommonInfoDialog_Conditional_12_Template, 31, 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 4)(14, "button", 5);
      \u0275\u0275listener("click", function ProviderCommonInfoDialog_Template_button_click_14_listener() {
        return ctx.closeProviderInfoForm();
      });
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "button", 6);
      \u0275\u0275listener("click", function ProviderCommonInfoDialog_Template_button_click_17_listener() {
        return ctx.updateProviderDetails();
      });
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(20, "show-error-message");
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.modelType == "common_info" ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.modelType == "strategy_details" ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.modelType == "personal_details" ? 3 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.modelType == "common_info" ? 5 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.modelType == "strategy_details" ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.modelType == "personal_details" ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.providerCommonInfoForm);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.modelType == "common_info" ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.modelType == "strategy_details" ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.modelType == "personal_details" ? 12 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 13, "COMMON.Cancel"));
      \u0275\u0275advance(2);
      \u0275\u0275property("IcmLoadingOverlay", ctx.showLoader);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 15, "COMMON.Save Changes"));
    }
  }, dependencies: [MatDialogModule, MatDialogTitle, MatDialogContent, MatInputModule, MatInput, MatFormField, MatLabel, MatError, MatExpansionModule, MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, MatSelectModule, MatSelect, MatOption, CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, ShowErrorStandAloneComponent, TranslateModule, TranslatePipe, IcmLoadingOverlayDirective], styles: ["\n\n  .providerProfile-commonInfo {\n  width: 600px !important;\n  border-radius: 10px !important;\n}\n  .providerProfile-commonInfo .mat-mdc-dialog-title {\n  margin: unset !important;\n  padding-bottom: 10px !important;\n}\n  .providerProfile-commonInfo .mat-mdc-dialog-surface {\n  border-radius: 10px !important;\n  background: white !important;\n  padding: 20px !important;\n}\n  .providerProfile-commonInfo .common-field {\n  width: 100% !important;\n}\n  .providerProfile-commonInfo .common-field .mdc-text-field {\n  background-color: white;\n  border: 1px solid;\n  border-bottom: 0px;\n}\n  .providerProfile-commonInfo .common-field .mdc-text-field textarea {\n  resize: none;\n}\n  .providerProfile-commonInfo .common-field .mdc-text-field .mat-mdc-form-field-text-suffix {\n  font-size: 20px;\n}\n  .mat-expansion-panel {\n  background-color: white !important;\n  border-radius: 8px 8px 0px 0px !important;\n  margin-bottom: 15px !important;\n  border: 1px solid;\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=providerCommonInfoDialog.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProviderCommonInfoDialog, { className: "ProviderCommonInfoDialog", filePath: "src\\app\\web\\shared\\dialogBox\\provider-common-info-dialog\\providerCommonInfoDialog.standalone.component.ts", lineNumber: 22 });
})();

// src/app/web/shared/dialogBox/create-offer-dialog/createOfferDialog.standalone.component.ts
function CreateOfferDialog_p_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "PROVIDERS_PROFILE.The offer's title"), "");
  }
}
function CreateOfferDialog_mat_error_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(2, 1, "login.FieldRequired"), " ");
  }
}
function CreateOfferDialog_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "COMMON.Warn6CharMsg"));
  }
}
function CreateOfferDialog_p_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p", 16);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(1, 1, "PROVIDERS_PROFILE.OfferVisibility"), \u0275\u0275sanitizeHtml);
  }
}
function CreateOfferDialog_mat_error_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "login.FieldRequired"), " ");
  }
}
function CreateOfferDialog_p_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "PROVIDERS_PROFILE.OfferPerformanceFeeHint"), " ");
  }
}
function CreateOfferDialog_mat_error_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "login.FieldRequired"), " ");
  }
}
function CreateOfferDialog_mat_error_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "PROVIDERS_PROFILE.Should have between 0 to 100 value"), " ");
  }
}
function CreateOfferDialog_Conditional_39_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const interval_r1 = ctx.$implicit;
    \u0275\u0275property("value", interval_r1.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(interval_r1.viewValue);
  }
}
function CreateOfferDialog_Conditional_39_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "PROVIDERS_PROFILE.The periodicity of performance fee payments by followers"), " ");
  }
}
function CreateOfferDialog_Conditional_39_mat_error_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "login.FieldRequired"), " ");
  }
}
function CreateOfferDialog_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 4)(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-select", 17);
    \u0275\u0275template(5, CreateOfferDialog_Conditional_39_mat_option_5_Template, 2, 2, "mat-option", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, CreateOfferDialog_Conditional_39_p_6_Template, 3, 3, "p", 6)(7, CreateOfferDialog_Conditional_39_mat_error_7_Template, 3, 3, "mat-error", 6);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "PROVIDERS_PROFILE.Interval"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.intervalArr);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.showError || !(ctx_r1.createOfferForm.controls["interval"].errors == null ? null : ctx_r1.createOfferForm.controls["interval"].errors["required"]));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showError && (ctx_r1.createOfferForm.controls["interval"].errors == null ? null : ctx_r1.createOfferForm.controls["interval"].errors["required"]));
  }
}
var CreateOfferDialog = class _CreateOfferDialog {
  providerId;
  dialogRef;
  fb;
  _webService;
  cdr;
  createOfferForm;
  showError = false;
  showLoader = false;
  intervalArr = [];
  errorComponent;
  IConstant = new ConstantVariable();
  constructor(providerId, dialogRef, fb, _webService, cdr) {
    this.providerId = providerId;
    this.dialogRef = dialogRef;
    this.fb = fb;
    this._webService = _webService;
    this.cdr = cdr;
    this.createOfferForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(6)]],
      visibility: ["", Validators.required],
      fee: ["", Validators.required],
      interval: [""]
    });
    this.setInterValArr();
    this.setCustomValidationForInterval();
  }
  setCustomValidationForInterval() {
    this.createOfferForm.get("fee")?.valueChanges.subscribe((value) => {
      console.log(value);
      if (value > 0) {
        this.createOfferForm.get("interval")?.setValidators([Validators.required]);
        this.createOfferForm.get("interval")?.updateValueAndValidity();
      } else {
        this.createOfferForm.get("interval")?.setValue("");
        this.createOfferForm.get("interval")?.clearValidators();
        this.createOfferForm.get("interval")?.updateValueAndValidity();
      }
    });
  }
  setInterValArr() {
    let intervalArr = this._webService.userPermissionConfig.provider.performanceFeeIntervalRights;
    this.intervalArr = Object.keys(intervalArr).filter((key) => intervalArr[key].length > 0).map((key) => {
      const value = key.replace("allow", "").replace("Interval", "");
      return { value, viewValue: value };
    });
  }
  get getControl() {
    return this.createOfferForm.controls;
  }
  getOfferParamObj() {
    let param = {};
    param["providerId"] = this.providerId;
    param["name"] = this.getControl["name"].value;
    param["visibility"] = this.getControl["visibility"].value;
    param["performance"] = {};
    if (this.getControl["fee"].value > 0) {
      param["performance"]["interval"] = this.getControl["interval"].value;
      param["performance"]["fee"] = this.getControl["fee"].value;
    } else {
      param["performance"]["fee"] = this.getControl["fee"].value;
    }
    return param;
  }
  createOfferForProvider() {
    if (this.createOfferForm.invalid) {
      this.showError = true;
      return;
    }
    this.showLoader = true;
    this.showError = false;
    let param = this.getOfferParamObj();
    this._webService.createOffersDetails(param).subscribe({
      next: (response) => {
        this.showSuccessPopupMsg("Offer has been added");
        this.dialogRef.close({ action: "redirect_to_offer_page", offerId: response.id });
        this.showLoader = false;
      },
      error: (errorObj) => {
        this.showLoader = false;
        this.showErrorWarnMessage(this.IConstant.errorMessageObj[errorObj?.error?.errorCode]);
        this.cdr.detectChanges();
      }
    });
  }
  showErrorWarnMessage(msg) {
    const errorConfigObj = this.errorComponent?.config;
    errorConfigObj.message = msg ? msg : errorConfigObj.message;
    this.errorComponent?.openErrorSnackbar();
  }
  showSuccessPopupMsg(msg) {
    const errorConfigObj = this.errorComponent?.config;
    errorConfigObj.customStyle = "default-success-style";
    errorConfigObj.message = msg ? msg : errorConfigObj.message;
    this.errorComponent?.openErrorSnackbar();
  }
  closeProviderInfoForm() {
    this.dialogRef.close({});
  }
  static \u0275fac = function CreateOfferDialog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CreateOfferDialog)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(WebService), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreateOfferDialog, selectors: [["create-offer-dialog"]], viewQuery: function CreateOfferDialog_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(ShowErrorStandAloneComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.errorComponent = _t.first);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 48, vars: 40, consts: [["mat-dialog-title", "", 1, "text-center"], [1, "text-center"], [3, "formGroup"], [1, "mat-typography"], [1, "common-field"], ["type", "text", "matInput", "", "placeholder", "Offer 1", "formControlName", "name"], ["class", "pb-10", 4, "ngIf"], ["formControlName", "visibility"], [3, "value"], ["class", "pb-10", 3, "innerHTML", 4, "ngIf"], ["type", "number", "min", "0", "max", "100", "matInput", "", "placeholder", "1", "formControlName", "fee"], ["matTextSuffix", ""], [1, "d-flex", "justify-center", "g-20"], [1, "secondary-btn", 3, "click"], ["type", "submit", 1, "primary-btn", 3, "click", "IcmLoadingOverlay"], [1, "pb-10"], [1, "pb-10", 3, "innerHTML"], ["formControlName", "interval"], [3, "value", 4, "ngFor", "ngForOf"]], template: function CreateOfferDialog_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h2", 0);
      \u0275\u0275text(1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 1);
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "form", 2)(7, "mat-dialog-content", 3)(8, "mat-form-field", 4)(9, "mat-label");
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(12, "input", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275template(13, CreateOfferDialog_p_13_Template, 3, 3, "p", 6)(14, CreateOfferDialog_mat_error_14_Template, 3, 3, "mat-error", 6)(15, CreateOfferDialog_mat_error_15_Template, 3, 3, "mat-error", 6);
      \u0275\u0275elementStart(16, "mat-form-field", 4)(17, "mat-label");
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "mat-select", 7)(21, "mat-option", 8);
      \u0275\u0275text(22);
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "mat-option", 8);
      \u0275\u0275text(25);
      \u0275\u0275pipe(26, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(27, CreateOfferDialog_p_27_Template, 2, 3, "p", 9)(28, CreateOfferDialog_mat_error_28_Template, 3, 3, "mat-error", 6);
      \u0275\u0275elementStart(29, "mat-form-field", 4)(30, "mat-label");
      \u0275\u0275text(31);
      \u0275\u0275pipe(32, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(33, "input", 10);
      \u0275\u0275elementStart(34, "span", 11);
      \u0275\u0275text(35, "%");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(36, CreateOfferDialog_p_36_Template, 3, 3, "p", 6)(37, CreateOfferDialog_mat_error_37_Template, 3, 3, "mat-error", 6)(38, CreateOfferDialog_mat_error_38_Template, 3, 3, "mat-error", 6)(39, CreateOfferDialog_Conditional_39_Template, 8, 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 12)(41, "button", 13);
      \u0275\u0275listener("click", function CreateOfferDialog_Template_button_click_41_listener() {
        return ctx.closeProviderInfoForm();
      });
      \u0275\u0275text(42);
      \u0275\u0275pipe(43, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "button", 14);
      \u0275\u0275listener("click", function CreateOfferDialog_Template_button_click_44_listener() {
        return ctx.createOfferForProvider();
      });
      \u0275\u0275text(45);
      \u0275\u0275pipe(46, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(47, "show-error-message");
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 22, "PROVIDERS_PROFILE.New Offer"), "\n");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 24, "PROVIDERS_PROFILE.Create a new offer"), "\n");
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.createOfferForm);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 26, "PROVIDERS_PROFILE.Title"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.showError || !(ctx.createOfferForm.controls["name"].errors == null ? null : ctx.createOfferForm.controls["name"].errors["required"]) && !(ctx.createOfferForm.controls["name"].errors == null ? null : ctx.createOfferForm.controls["name"].errors["minlength"]));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showError && (ctx.createOfferForm.controls["name"].errors == null ? null : ctx.createOfferForm.controls["name"].errors["required"]));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showError && (ctx.createOfferForm.controls["name"].errors == null ? null : ctx.createOfferForm.controls["name"].errors["minlength"]));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 28, "PROVIDERS_PROFILE.Visibility"));
      \u0275\u0275advance(3);
      \u0275\u0275property("value", "Public");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 30, "PROVIDERS_PROFILE.Public"));
      \u0275\u0275advance(2);
      \u0275\u0275property("value", "Private");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 32, "PROVIDERS_PROFILE.Private"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.showError || !(ctx.createOfferForm.controls["visibility"].errors == null ? null : ctx.createOfferForm.controls["visibility"].errors["required"]));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showError && (ctx.createOfferForm.controls["visibility"].errors == null ? null : ctx.createOfferForm.controls["visibility"].errors["required"]));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 34, "OFFERS.Performance fee"));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", !ctx.showError || !(ctx.createOfferForm.controls["fee"].errors == null ? null : ctx.createOfferForm.controls["fee"].errors["required"]) && !((ctx.createOfferForm.controls["fee"].errors == null ? null : ctx.createOfferForm.controls["fee"].errors["min"]) || (ctx.createOfferForm.controls["fee"].errors == null ? null : ctx.createOfferForm.controls["fee"].errors["max"])));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showError && (ctx.createOfferForm.controls["fee"].errors == null ? null : ctx.createOfferForm.controls["fee"].errors["required"]));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showError && ((ctx.createOfferForm.controls["fee"].errors == null ? null : ctx.createOfferForm.controls["fee"].errors["min"]) || (ctx.createOfferForm.controls["fee"].errors == null ? null : ctx.createOfferForm.controls["fee"].errors["max"])));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.createOfferForm.controls["fee"].value > 0 ? 39 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 36, "COMMON.Cancel"));
      \u0275\u0275advance(2);
      \u0275\u0275property("IcmLoadingOverlay", ctx.showLoader);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 38, "COMMON.Create"));
    }
  }, dependencies: [MatDialogModule, MatDialogTitle, MatDialogContent, MatInputModule, MatInput, MatFormField, MatLabel, MatError, MatSuffix, MatSelectModule, MatSelect, MatOption, CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, MaxValidator, FormGroupDirective, FormControlName, ShowErrorStandAloneComponent, TranslateModule, TranslatePipe, IcmLoadingOverlayDirective], styles: ["\n\n  .createinfo-dialog {\n  width: 600px !important;\n  border-radius: 10px !important;\n}\n  .createinfo-dialog .mat-mdc-dialog-title {\n  margin: unset !important;\n  padding-bottom: 10px !important;\n}\n  .createinfo-dialog .mat-mdc-dialog-surface {\n  border-radius: 10px !important;\n  background: white !important;\n  padding: 20px !important;\n}\n  .createinfo-dialog .common-field {\n  width: 100% !important;\n}\n  .createinfo-dialog .common-field .mdc-text-field {\n  background-color: white;\n  border: 1px solid;\n  border-bottom: 0px;\n}\n  .createinfo-dialog .common-field .mdc-text-field textarea {\n  resize: none;\n}\n  .createinfo-dialog .common-field .mdc-text-field .mat-mdc-form-field-text-suffix {\n  font-size: 20px;\n}\n/*# sourceMappingURL=createOfferDialog.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreateOfferDialog, { className: "CreateOfferDialog", filePath: "src\\app\\web\\shared\\dialogBox\\create-offer-dialog\\createOfferDialog.standalone.component.ts", lineNumber: 21 });
})();

// src/app/web/shared/dialogBox/shared-link-dialog/sharedLinkDialog.standalone.component.ts
function SharedLinkDialog_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "PROVIDERS_PROFILE.Add Shared Link"), " ");
  }
}
function SharedLinkDialog_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "PROVIDERS_PROFILE.Delete shared link"), " ");
  }
}
function SharedLinkDialog_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "PROVIDERS_PROFILE.Create Shared Link Description"), " ");
  }
}
function SharedLinkDialog_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "PROVIDERS_PROFILE.Delete the existing shared link"), " ");
  }
}
function SharedLinkDialog_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "PROVIDERS_PROFILE.Do you really want to create a new shared link?"), " ");
  }
}
function SharedLinkDialog_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "PROVIDERS_PROFILE.Delete Shared Link Main Description"), " ");
  }
}
function SharedLinkDialog_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "COMMON.Create"), " ");
  }
}
function SharedLinkDialog_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "PROVIDERS_PROFILE.Delete"), " ");
  }
}
var SharedLinkDialog = class _SharedLinkDialog {
  providerData;
  dialogRef;
  _webService;
  cdr;
  showLoader = false;
  errorComponent;
  IConstant = new ConstantVariable();
  isCreateSharedLink;
  constructor(providerData, dialogRef, _webService, cdr) {
    this.providerData = providerData;
    this.dialogRef = dialogRef;
    this._webService = _webService;
    this.cdr = cdr;
    this.isCreateSharedLink = this.providerData.sharedProfile.sharedKey ? false : true;
  }
  createOrDeleteSharedLink() {
    this.showLoader = true;
    let param = {
      providerId: this.providerData.id
    };
    let apiObseverable = "";
    if (this.isCreateSharedLink) {
      apiObseverable = this._webService.createSharedLink(param);
    } else {
      apiObseverable = this._webService.deleteSharedLink(param);
    }
    apiObseverable.subscribe({
      next: (response) => {
        this.showSuccessPopupMsg("Provider has been updated");
        this.dialogRef.close({ action: "refresh_provider_data" });
        this.showLoader = false;
      },
      error: (errorObj) => {
        this.showLoader = false;
        this.showErrorWarnMessage(this.IConstant.errorMessageObj[errorObj?.error?.errorCode]);
        this.cdr.detectChanges();
      }
    });
  }
  showErrorWarnMessage(msg) {
    const errorConfigObj = this.errorComponent?.config;
    errorConfigObj.message = msg ? msg : errorConfigObj.message;
    this.errorComponent?.openErrorSnackbar();
  }
  showSuccessPopupMsg(msg) {
    const errorConfigObj = this.errorComponent?.config;
    errorConfigObj.customStyle = "default-success-style";
    errorConfigObj.message = msg ? msg : errorConfigObj.message;
    this.errorComponent?.openErrorSnackbar();
  }
  closeProviderInfoForm() {
    this.dialogRef.close({});
  }
  static \u0275fac = function SharedLinkDialog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SharedLinkDialog)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(WebService), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SharedLinkDialog, selectors: [["shared-link-dialog"]], viewQuery: function SharedLinkDialog_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(ShowErrorStandAloneComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.errorComponent = _t.first);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 18, vars: 8, consts: [["mat-dialog-title", "", 1, "text-center"], [1, "text-center"], [1, "mat-typography"], [1, "warn-title"], [1, "d-flex", "justify-center", "g-20"], [1, "secondary-btn", 3, "click"], ["type", "submit", 1, "primary-btn", 3, "click", "IcmLoadingOverlay"]], template: function SharedLinkDialog_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h2", 0);
      \u0275\u0275template(1, SharedLinkDialog_Conditional_1_Template, 2, 3)(2, SharedLinkDialog_Conditional_2_Template, 2, 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 1);
      \u0275\u0275template(4, SharedLinkDialog_Conditional_4_Template, 2, 3)(5, SharedLinkDialog_Conditional_5_Template, 2, 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "mat-dialog-content", 2)(7, "p", 3);
      \u0275\u0275template(8, SharedLinkDialog_Conditional_8_Template, 2, 3)(9, SharedLinkDialog_Conditional_9_Template, 2, 3);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 4)(11, "button", 5);
      \u0275\u0275listener("click", function SharedLinkDialog_Template_button_click_11_listener() {
        return ctx.closeProviderInfoForm();
      });
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "button", 6);
      \u0275\u0275listener("click", function SharedLinkDialog_Template_button_click_14_listener() {
        return ctx.createOrDeleteSharedLink();
      });
      \u0275\u0275template(15, SharedLinkDialog_Conditional_15_Template, 2, 3)(16, SharedLinkDialog_Conditional_16_Template, 2, 3);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(17, "show-error-message");
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCreateSharedLink ? 1 : 2);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isCreateSharedLink ? 4 : 5);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.isCreateSharedLink ? 8 : 9);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 6, "COMMON.Cancel"));
      \u0275\u0275advance(2);
      \u0275\u0275property("IcmLoadingOverlay", ctx.showLoader);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCreateSharedLink ? 15 : 16);
    }
  }, dependencies: [MatDialogModule, MatDialogTitle, MatDialogContent, CommonModule, ShowErrorStandAloneComponent, TranslateModule, TranslatePipe, IcmLoadingOverlayDirective], styles: ["\n\n  .shared-link-dialog {\n  width: 600px !important;\n  border-radius: 10px !important;\n}\n  .shared-link-dialog .mat-mdc-dialog-title {\n  margin: unset !important;\n  padding-bottom: 10px !important;\n}\n  .shared-link-dialog .mat-mdc-dialog-surface {\n  border-radius: 10px !important;\n  background: white !important;\n  padding: 20px !important;\n}\n  .shared-link-dialog .common-field {\n  width: 100% !important;\n}\n  .shared-link-dialog .common-field .mdc-text-field {\n  background-color: white;\n  border: 1px solid;\n  border-bottom: 0px;\n}\n  .shared-link-dialog .common-field .mdc-text-field textarea {\n  resize: none;\n}\n  .shared-link-dialog .common-field .mdc-text-field .mat-mdc-form-field-text-suffix {\n  font-size: 20px;\n}\n  .shared-link-dialog .warn-title {\n  font-size: 15px;\n  padding: 15px 10px;\n  background: var(--primaryWhite);\n  border-radius: initial;\n  border-width: 2px 5px;\n  border-style: dotted solid;\n  border-color: var(--primaryBlack);\n}\n/*# sourceMappingURL=sharedLinkDialog.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SharedLinkDialog, { className: "SharedLinkDialog", filePath: "src\\app\\web\\shared\\dialogBox\\shared-link-dialog\\sharedLinkDialog.standalone.component.ts", lineNumber: 18 });
})();

// src/app/web/shared/dialogBox/upload-avatar-dialog/uploadAvatarDialog.standalone.component.ts
var _c0 = (a0) => ({ "disabled": a0 });
function UploadAvatarDialog_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "img", 15);
    \u0275\u0275elementEnd();
  }
}
function UploadAvatarDialog_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "img", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.tempPathUrl, \u0275\u0275sanitizeUrl);
  }
}
function UploadAvatarDialog_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "img", 16);
    \u0275\u0275elementStart(2, "button", 18);
    \u0275\u0275listener("click", function UploadAvatarDialog_div_9_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteAvatar());
    });
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.avatarPath, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("IcmLoadingOverlay", ctx_r1.showLoader);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "PROVIDERS_PROFILE.Delete"));
  }
}
var UploadAvatarDialog = class _UploadAvatarDialog {
  data;
  dialogRef;
  _webService;
  cdr;
  showLoader = false;
  providerData = {};
  fileObject;
  avatarPath = "";
  tempPathUrl;
  errorComponent;
  IConstant = new ConstantVariable();
  constructor(data, dialogRef, _webService, cdr) {
    this.data = data;
    this.dialogRef = dialogRef;
    this._webService = _webService;
    this.cdr = cdr;
    this.providerData = this.data.providerData;
    this.setAvatarData();
  }
  setAvatarData() {
    if (this.providerData.public.avatarPath) {
      let path = `${this._webService.getFileServerUrl()}${this.IConstant.providerAvatarPath}${this.providerData.public.avatarPath}`;
      this.avatarPath = path;
    } else {
      this.avatarPath = "";
    }
  }
  onFileSelected(event) {
    const file = event.target.files[0];
    if (file) {
      this.avatarPath = "";
      this.tempPathUrl = URL.createObjectURL(file);
      this.fileObject = file;
    }
  }
  deleteAvatar() {
    this.showLoader = true;
    let param = {
      providerId: this.providerData.id,
      public: {}
    };
    this._webService.updateProviderData(param).subscribe({
      next: (response) => {
        this.showSuccessPopupMsg("Provider has been updated");
        this._webService.emitOnWebDataChange({ action: "refresh_provider_image" });
        this.dialogRef.close({ action: "refresh_provider_data" });
        this.showLoader = false;
      },
      error: (errorObj) => {
        this.showLoader = false;
        this.showErrorWarnMessage(this.IConstant.errorMessageObj[errorObj?.error?.errorCode]);
        this.cdr.detectChanges();
      }
    });
  }
  uploadAvatar() {
    this.showLoader = true;
    let param = {
      providerId: this.providerData.id,
      file: this.fileObject
    };
    this._webService.uploadAvatar(param).subscribe({
      next: (response) => {
        this.showSuccessPopupMsg("Provider has been updated");
        this._webService.emitOnWebDataChange({ action: "refresh_provider_image" });
        this.dialogRef.close({ action: "refresh_provider_data" });
        this.showLoader = false;
      },
      error: (errorObj) => {
        this.showLoader = false;
        this.showErrorWarnMessage(this.IConstant.errorMessageObj[errorObj?.error?.errorCode]);
        this.cdr.detectChanges();
      }
    });
  }
  showErrorWarnMessage(msg) {
    const errorConfigObj = this.errorComponent?.config;
    errorConfigObj.message = msg ? msg : errorConfigObj.message;
    this.errorComponent?.openErrorSnackbar();
  }
  showSuccessPopupMsg(msg) {
    const errorConfigObj = this.errorComponent?.config;
    errorConfigObj.customStyle = "default-success-style";
    errorConfigObj.message = msg ? msg : errorConfigObj.message;
    this.errorComponent?.openErrorSnackbar();
  }
  closeUploadAvatarForm() {
    this.dialogRef.close({});
  }
  static \u0275fac = function UploadAvatarDialog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UploadAvatarDialog)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(WebService), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UploadAvatarDialog, selectors: [["upload-avatar-dialog"]], viewQuery: function UploadAvatarDialog_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(ShowErrorStandAloneComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.errorComponent = _t.first);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 27, vars: 22, consts: [["fileInput", ""], ["mat-dialog-title", "", 1, "text-center"], [1, "text-center"], [1, "mat-typography"], ["class", "d-flex justify-center align-center pb-20", 4, "ngIf"], ["class", "d-flex justify-center align-center pb-20 g-20 flex-column", 4, "ngIf"], [1, "common-field", 3, "click"], ["type", "text", "readonly", "", "matInput", "", "disabled", "true"], ["matTextSuffix", ""], ["src", "../../../../../assets/icons/upload-icon.png", "width", "30", "height", "30"], [1, "d-flex", "justify-center", "g-20"], [1, "secondary-btn", 3, "click"], ["type", "submit", 1, "primary-btn", 3, "click", "ngClass", "IcmLoadingOverlay"], ["hidden", "", "type", "file", "accept", "image/*", 3, "change"], [1, "d-flex", "justify-center", "align-center", "pb-20"], ["src", "../../../../../assets/icons/default-big-user-profile.png", "width", "250"], [2, "max-width", "100%", 3, "src"], [1, "d-flex", "justify-center", "align-center", "pb-20", "g-20", "flex-column"], [1, "secondary-btn", "warn", 3, "click", "IcmLoadingOverlay"]], template: function UploadAvatarDialog_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "h2", 1);
      \u0275\u0275text(1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 2);
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "mat-dialog-content", 3);
      \u0275\u0275template(7, UploadAvatarDialog_div_7_Template, 2, 0, "div", 4)(8, UploadAvatarDialog_div_8_Template, 2, 1, "div", 4)(9, UploadAvatarDialog_div_9_Template, 5, 5, "div", 5);
      \u0275\u0275elementStart(10, "mat-form-field", 6);
      \u0275\u0275listener("click", function UploadAvatarDialog_Template_mat_form_field_click_10_listener() {
        \u0275\u0275restoreView(_r1);
        const fileInput_r4 = \u0275\u0275reference(25);
        return \u0275\u0275resetView(fileInput_r4.click());
      });
      \u0275\u0275elementStart(11, "mat-label");
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(14, "input", 7);
      \u0275\u0275elementStart(15, "span", 8);
      \u0275\u0275element(16, "img", 9);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "div", 10)(18, "button", 11);
      \u0275\u0275listener("click", function UploadAvatarDialog_Template_button_click_18_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeUploadAvatarForm());
      });
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "button", 12);
      \u0275\u0275listener("click", function UploadAvatarDialog_Template_button_click_21_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.uploadAvatar());
      });
      \u0275\u0275text(22);
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "input", 13, 0);
      \u0275\u0275listener("change", function UploadAvatarDialog_Template_input_change_24_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFileSelected($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(26, "show-error-message");
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 10, "PROVIDERS_PROFILE.Avatar"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 12, "PROVIDERS_PROFILE.Avatar settings"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.avatarPath && !ctx.fileObject);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.fileObject);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.avatarPath);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.fileObject ? ctx.fileObject.name : \u0275\u0275pipeBind1(13, 14, "PROVIDERS_PROFILE.File"));
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 16, "COMMON.Cancel"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(20, _c0, !ctx.fileObject))("IcmLoadingOverlay", ctx.showLoader);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 18, "PROVIDERS_PROFILE.Upload"));
    }
  }, dependencies: [MatDialogModule, MatDialogTitle, MatDialogContent, CommonModule, NgClass, NgIf, MatInputModule, MatInput, MatFormField, MatLabel, MatSuffix, ShowErrorStandAloneComponent, TranslateModule, TranslatePipe, IcmLoadingOverlayDirective], styles: ["\n\n  .upload-avatar-dialog {\n  width: 700px !important;\n  border-radius: 10px !important;\n}\n  .upload-avatar-dialog .mat-mdc-dialog-title {\n  margin: unset !important;\n  padding-bottom: 10px !important;\n}\n  .upload-avatar-dialog .mat-mdc-dialog-surface {\n  border-radius: 10px !important;\n  background: white !important;\n  padding: 20px !important;\n}\n  .upload-avatar-dialog .common-field {\n  width: 100% !important;\n}\n  .upload-avatar-dialog .common-field .mdc-text-field {\n  background-color: white;\n  border: 1px solid;\n  border-bottom: 0px;\n}\n  .upload-avatar-dialog .common-field .mdc-text-field textarea {\n  resize: none;\n}\n  .upload-avatar-dialog .common-field .mdc-text-field .mat-mdc-form-field-text-suffix {\n  font-size: 20px;\n}\n.secondary-btn.warn[_ngcontent-%COMP%] {\n  background-color: var(--error-message--container-color);\n  color: var(--primaryWhite);\n  border: none;\n}\n.disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  pointer-events: none;\n}\n/*# sourceMappingURL=uploadAvatarDialog.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UploadAvatarDialog, { className: "UploadAvatarDialog", filePath: "src\\app\\web\\shared\\dialogBox\\upload-avatar-dialog\\uploadAvatarDialog.standalone.component.ts", lineNumber: 19 });
})();

// src/app/web/views/provider-profile/provider-profile.standalone.component.ts
var _c02 = (a0) => ({ "btn-disable": a0 });
function ProviderProfileStandAloneComponent_mat_card_content_1_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "PROVIDERS_PROFILE.Delete shared link"), " ");
  }
}
function ProviderProfileStandAloneComponent_mat_card_content_1_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "PROVIDERS_PROFILE.Create shared link"), " ");
  }
}
function ProviderProfileStandAloneComponent_mat_card_content_1_mat_tab_245_ng_template_2_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function ProviderProfileStandAloneComponent_mat_card_content_1_mat_tab_245_ng_template_2_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const tab_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearFilters(tab_r4));
    });
    \u0275\u0275element(1, "img", 58);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.Clear"), " ");
  }
}
function ProviderProfileStandAloneComponent_mat_card_content_1_mat_tab_245_ng_template_2_Conditional_8_mat_form_field_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field")(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 60);
    \u0275\u0275twoWayListener("ngModelChange", function ProviderProfileStandAloneComponent_mat_card_content_1_mat_tab_245_ng_template_2_Conditional_8_mat_form_field_0_Template_input_ngModelChange_4_listener($event) {
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
function ProviderProfileStandAloneComponent_mat_card_content_1_mat_tab_245_ng_template_2_Conditional_8_mat_form_field_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "mat-option", 63);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const offer_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("value", offer_r8.offerId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(offer_r8.offerTitle);
  }
}
function ProviderProfileStandAloneComponent_mat_card_content_1_mat_tab_245_ng_template_2_Conditional_8_mat_form_field_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field")(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-select", 61);
    \u0275\u0275twoWayListener("ngModelChange", function ProviderProfileStandAloneComponent_mat_card_content_1_mat_tab_245_ng_template_2_Conditional_8_mat_form_field_1_Template_mat_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r7);
      const tab_r4 = \u0275\u0275nextContext(3).$implicit;
      \u0275\u0275twoWayBindingSet(tab_r4.filters.type.offerId, $event) || (tab_r4.filters.type.offerId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(5, ProviderProfileStandAloneComponent_mat_card_content_1_mat_tab_245_ng_template_2_Conditional_8_mat_form_field_1_ng_container_5_Template, 3, 2, "ng-container", 62);
    \u0275\u0275elementStart(6, "mat-option", 63);
    \u0275\u0275text(7, "-");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const tab_r4 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "PROVIDERS_PROFILE.Offer"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", tab_r4.filters.type.offerId);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.offerGridData);
    \u0275\u0275advance();
    \u0275\u0275property("value", void 0);
  }
}
function ProviderProfileStandAloneComponent_mat_card_content_1_mat_tab_245_ng_template_2_Conditional_8_mat_form_field_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field")(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-select", 61);
    \u0275\u0275twoWayListener("ngModelChange", function ProviderProfileStandAloneComponent_mat_card_content_1_mat_tab_245_ng_template_2_Conditional_8_mat_form_field_2_Template_mat_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r9);
      const tab_r4 = \u0275\u0275nextContext(3).$implicit;
      \u0275\u0275twoWayBindingSet(tab_r4.filters.type.activationStatus, $event) || (tab_r4.filters.type.activationStatus = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(5, "mat-option", 63);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-option", 63);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-option", 63);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "mat-option", 63);
    \u0275\u0275text(15, "-");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const tab_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 9, "PROVIDERS_PROFILE.Activation Status"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", tab_r4.filters.type.activationStatus);
    \u0275\u0275advance();
    \u0275\u0275property("value", "needsactivation");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 11, "PROVIDERS_PROFILE.Needs Activation"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", "activated");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 13, "PROVIDERS_PROFILE.Activated"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", "suspended");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 15, "PROVIDERS_PROFILE.Suspended"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", void 0);
  }
}
function ProviderProfileStandAloneComponent_mat_card_content_1_mat_tab_245_ng_template_2_Conditional_8_mat_form_field_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field")(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 60);
    \u0275\u0275twoWayListener("ngModelChange", function ProviderProfileStandAloneComponent_mat_card_content_1_mat_tab_245_ng_template_2_Conditional_8_mat_form_field_3_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r10);
      const tab_r4 = \u0275\u0275nextContext(3).$implicit;
      \u0275\u0275twoWayBindingSet(tab_r4.filters.type.externalAccount, $event) || (tab_r4.filters.type.externalAccount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "PROVIDERS_PROFILE.Trading Account"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", tab_r4.filters.type.externalAccount);
  }
}
function ProviderProfileStandAloneComponent_mat_card_content_1_mat_tab_245_ng_template_2_Conditional_8_mat_form_field_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field")(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 60);
    \u0275\u0275twoWayListener("ngModelChange", function ProviderProfileStandAloneComponent_mat_card_content_1_mat_tab_245_ng_template_2_Conditional_8_mat_form_field_4_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r11);
      const tab_r4 = \u0275\u0275nextContext(3).$implicit;
      \u0275\u0275twoWayBindingSet(tab_r4.filters.type.agent, $event) || (tab_r4.filters.type.agent = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "COMMON.Agent"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", tab_r4.filters.type.agent);
  }
}
function ProviderProfileStandAloneComponent_mat_card_content_1_mat_tab_245_ng_template_2_Conditional_8_mat_form_field_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field")(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-select", 61);
    \u0275\u0275twoWayListener("ngModelChange", function ProviderProfileStandAloneComponent_mat_card_content_1_mat_tab_245_ng_template_2_Conditional_8_mat_form_field_5_Template_mat_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r12);
      const tab_r4 = \u0275\u0275nextContext(3).$implicit;
      \u0275\u0275twoWayBindingSet(tab_r4.filters.type.scope, $event) || (tab_r4.filters.type.scope = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(5, "mat-option", 63);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-option", 63);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const tab_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 6, "PROVIDERS_PROFILE.Scope"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", tab_r4.filters.type.scope);
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
function ProviderProfileStandAloneComponent_mat_card_content_1_mat_tab_245_ng_template_2_Conditional_8_mat_form_field_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field")(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 60);
    \u0275\u0275twoWayListener("ngModelChange", function ProviderProfileStandAloneComponent_mat_card_content_1_mat_tab_245_ng_template_2_Conditional_8_mat_form_field_6_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r13);
      const tab_r4 = \u0275\u0275nextContext(3).$implicit;
      \u0275\u0275twoWayBindingSet(tab_r4.filters.type.position, $event) || (tab_r4.filters.type.position = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "PROVIDERS_PROFILE.Position"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", tab_r4.filters.type.position);
  }
}
function ProviderProfileStandAloneComponent_mat_card_content_1_mat_tab_245_ng_template_2_Conditional_8_mat_form_field_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field")(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-select", 61);
    \u0275\u0275twoWayListener("ngModelChange", function ProviderProfileStandAloneComponent_mat_card_content_1_mat_tab_245_ng_template_2_Conditional_8_mat_form_field_7_Template_mat_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r14);
      const tab_r4 = \u0275\u0275nextContext(3).$implicit;
      \u0275\u0275twoWayBindingSet(tab_r4.filters.type.posState, $event) || (tab_r4.filters.type.posState = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(5, "mat-option", 63);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-option", 63);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-option", 63);
    \u0275\u0275text(12, "-");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const tab_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 7, "PROVIDERS_PROFILE.State"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", tab_r4.filters.type.posState);
    \u0275\u0275advance();
    \u0275\u0275property("value", "Tracking");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 9, "PROVIDERS_PROFILE.Tracking"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", "Processed");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 11, "TRANSACTIONS.Processed"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", void 0);
  }
}
function ProviderProfileStandAloneComponent_mat_card_content_1_mat_tab_245_ng_template_2_Conditional_8_mat_form_field_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field")(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 64);
    \u0275\u0275twoWayListener("ngModelChange", function ProviderProfileStandAloneComponent_mat_card_content_1_mat_tab_245_ng_template_2_Conditional_8_mat_form_field_8_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r15);
      const tab_r4 = \u0275\u0275nextContext(3).$implicit;
      \u0275\u0275twoWayBindingSet(tab_r4.filters.type.dealKey, $event) || (tab_r4.filters.type.dealKey = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "PROVIDERS_PROFILE.Deal"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", tab_r4.filters.type.dealKey);
  }
}
function ProviderProfileStandAloneComponent_mat_card_content_1_mat_tab_245_ng_template_2_Conditional_8_mat_form_field_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field")(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-select", 61);
    \u0275\u0275twoWayListener("ngModelChange", function ProviderProfileStandAloneComponent_mat_card_content_1_mat_tab_245_ng_template_2_Conditional_8_mat_form_field_9_Template_mat_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r16);
      const tab_r4 = \u0275\u0275nextContext(3).$implicit;
      \u0275\u0275twoWayBindingSet(tab_r4.filters.type.dealState, $event) || (tab_r4.filters.type.dealState = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(5, "mat-option", 63);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-option", 63);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-option", 63);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "mat-option", 63);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-option", 63);
    \u0275\u0275text(18, "-");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const tab_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 11, "PROVIDERS_PROFILE.State"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", tab_r4.filters.type.dealState);
    \u0275\u0275advance();
    \u0275\u0275property("value", "Pending");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 13, "PROVIDERS_PROFILE.Pending"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", "Processing");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 15, "PROVIDERS_PROFILE.Processing"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", "Processed");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 17, "TRANSACTIONS.Processed"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", "Error");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 19, "PROVIDERS_PROFILE.Error"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", void 0);
  }
}
function ProviderProfileStandAloneComponent_mat_card_content_1_mat_tab_245_ng_template_2_Conditional_8_mat_form_field_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field")(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-select", 61);
    \u0275\u0275twoWayListener("ngModelChange", function ProviderProfileStandAloneComponent_mat_card_content_1_mat_tab_245_ng_template_2_Conditional_8_mat_form_field_10_Template_mat_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r17);
      const tab_r4 = \u0275\u0275nextContext(3).$implicit;
      \u0275\u0275twoWayBindingSet(tab_r4.filters.type.entry, $event) || (tab_r4.filters.type.entry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(5, "mat-option", 63);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-option", 63);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-option", 63);
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
function ProviderProfileStandAloneComponent_mat_card_content_1_mat_tab_245_ng_template_2_Conditional_8_mat_form_field_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field")(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 64);
    \u0275\u0275twoWayListener("ngModelChange", function ProviderProfileStandAloneComponent_mat_card_content_1_mat_tab_245_ng_template_2_Conditional_8_mat_form_field_11_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r18);
      const tab_r4 = \u0275\u0275nextContext(3).$implicit;
      \u0275\u0275twoWayBindingSet(tab_r4.filters.type.symbol, $event) || (tab_r4.filters.type.symbol = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "PROVIDERS_PROFILE.Symbol"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", tab_r4.filters.type.symbol);
  }
}
function ProviderProfileStandAloneComponent_mat_card_content_1_mat_tab_245_ng_template_2_Conditional_8_mat_form_field_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field")(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 60);
    \u0275\u0275twoWayListener("ngModelChange", function ProviderProfileStandAloneComponent_mat_card_content_1_mat_tab_245_ng_template_2_Conditional_8_mat_form_field_12_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r19);
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
function ProviderProfileStandAloneComponent_mat_card_content_1_mat_tab_245_ng_template_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProviderProfileStandAloneComponent_mat_card_content_1_mat_tab_245_ng_template_2_Conditional_8_mat_form_field_0_Template, 5, 4, "mat-form-field", 59)(1, ProviderProfileStandAloneComponent_mat_card_content_1_mat_tab_245_ng_template_2_Conditional_8_mat_form_field_1_Template, 8, 6, "mat-form-field", 59)(2, ProviderProfileStandAloneComponent_mat_card_content_1_mat_tab_245_ng_template_2_Conditional_8_mat_form_field_2_Template, 16, 17, "mat-form-field", 59)(3, ProviderProfileStandAloneComponent_mat_card_content_1_mat_tab_245_ng_template_2_Conditional_8_mat_form_field_3_Template, 5, 4, "mat-form-field", 59)(4, ProviderProfileStandAloneComponent_mat_card_content_1_mat_tab_245_ng_template_2_Conditional_8_mat_form_field_4_Template, 5, 4, "mat-form-field", 59)(5, ProviderProfileStandAloneComponent_mat_card_content_1_mat_tab_245_ng_template_2_Conditional_8_mat_form_field_5_Template, 11, 12, "mat-form-field", 59)(6, ProviderProfileStandAloneComponent_mat_card_content_1_mat_tab_245_ng_template_2_Conditional_8_mat_form_field_6_Template, 5, 4, "mat-form-field", 59)(7, ProviderProfileStandAloneComponent_mat_card_content_1_mat_tab_245_ng_template_2_Conditional_8_mat_form_field_7_Template, 13, 13, "mat-form-field", 59)(8, ProviderProfileStandAloneComponent_mat_card_content_1_mat_tab_245_ng_template_2_Conditional_8_mat_form_field_8_Template, 5, 4, "mat-form-field", 59)(9, ProviderProfileStandAloneComponent_mat_card_content_1_mat_tab_245_ng_template_2_Conditional_8_mat_form_field_9_Template, 19, 21, "mat-form-field", 59)(10, ProviderProfileStandAloneComponent_mat_card_content_1_mat_tab_245_ng_template_2_Conditional_8_mat_form_field_10_Template, 13, 13, "mat-form-field", 59)(11, ProviderProfileStandAloneComponent_mat_card_content_1_mat_tab_245_ng_template_2_Conditional_8_mat_form_field_11_Template, 5, 4, "mat-form-field", 59)(12, ProviderProfileStandAloneComponent_mat_card_content_1_mat_tab_245_ng_template_2_Conditional_8_mat_form_field_12_Template, 5, 4, "mat-form-field", 59);
  }
  if (rf & 2) {
    const tab_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("ngIf", tab_r4.filters.type.hasOwnProperty("id"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", tab_r4.filters.type.hasOwnProperty("offerId"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", tab_r4.filters.type.hasOwnProperty("activationStatus"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", tab_r4.filters.type.hasOwnProperty("externalAccount"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", tab_r4.filters.type.hasOwnProperty("agent"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", tab_r4.filters.type.hasOwnProperty("scope"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", tab_r4.filters.type.hasOwnProperty("position"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", tab_r4.filters.type.hasOwnProperty("posState"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", tab_r4.filters.type.hasOwnProperty("dealKey"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", tab_r4.filters.type.hasOwnProperty("dealState"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", tab_r4.filters.type.hasOwnProperty("entry"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", tab_r4.filters.type.hasOwnProperty("symbol"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", tab_r4.filters.type.hasOwnProperty("platformId"));
  }
}
function ProviderProfileStandAloneComponent_mat_card_content_1_mat_tab_245_ng_template_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 65);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "PROVIDERS_LIST.Search"), " ");
  }
}
function ProviderProfileStandAloneComponent_mat_card_content_1_mat_tab_245_ng_template_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 33);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.Refresh"), " ");
  }
}
function ProviderProfileStandAloneComponent_mat_card_content_1_mat_tab_245_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53)(1, "div", 54)(2, "button", 32);
    \u0275\u0275listener("click", function ProviderProfileStandAloneComponent_mat_card_content_1_mat_tab_245_ng_template_2_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const tab_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.applyFilters(tab_r4));
    });
    \u0275\u0275element(3, "img", 55);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ProviderProfileStandAloneComponent_mat_card_content_1_mat_tab_245_ng_template_2_button_6_Template, 4, 3, "button", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 57);
    \u0275\u0275template(8, ProviderProfileStandAloneComponent_mat_card_content_1_mat_tab_245_ng_template_2_Conditional_8_Template, 13, 13);
    \u0275\u0275elementStart(9, "button", 32);
    \u0275\u0275listener("click", function ProviderProfileStandAloneComponent_mat_card_content_1_mat_tab_245_ng_template_2_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r3);
      const tab_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.refreshDataList(tab_r4));
    });
    \u0275\u0275template(10, ProviderProfileStandAloneComponent_mat_card_content_1_mat_tab_245_ng_template_2_Conditional_10_Template, 3, 3)(11, ProviderProfileStandAloneComponent_mat_card_content_1_mat_tab_245_ng_template_2_Conditional_11_Template, 3, 3);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(12, "common-ag-grid", 37);
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
function ProviderProfileStandAloneComponent_mat_card_content_1_mat_tab_245_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-tab", 51);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275template(2, ProviderProfileStandAloneComponent_mat_card_content_1_mat_tab_245_ng_template_2_Template, 13, 9, "ng-template", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r4 = ctx.$implicit;
    \u0275\u0275propertyInterpolate("label", \u0275\u0275pipeBind1(1, 1, tab_r4.label));
  }
}
function ProviderProfileStandAloneComponent_mat_card_content_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card-content", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "h5");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 8);
    \u0275\u0275element(10, "img", 9);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-menu", 10, 0)(15, "button", 11);
    \u0275\u0275listener("click", function ProviderProfileStandAloneComponent_mat_card_content_1_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openUploadAvatarModal());
    });
    \u0275\u0275element(16, "img", 12);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 11);
    \u0275\u0275listener("click", function ProviderProfileStandAloneComponent_mat_card_content_1_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openSharedLinkModal());
    });
    \u0275\u0275element(20, "img", 13);
    \u0275\u0275template(21, ProviderProfileStandAloneComponent_mat_card_content_1_Conditional_21_Template, 2, 3)(22, ProviderProfileStandAloneComponent_mat_card_content_1_Conditional_22_Template, 2, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 11);
    \u0275\u0275listener("click", function ProviderProfileStandAloneComponent_mat_card_content_1_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openProviderArchiveModal());
    });
    \u0275\u0275element(24, "img", 14);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(27, "provider-follower-header-cards", 15);
    \u0275\u0275elementStart(28, "div", 16)(29, "div", 17)(30, "div", 18)(31, "div", 19)(32, "h4");
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "p");
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "button", 20);
    \u0275\u0275listener("click", function ProviderProfileStandAloneComponent_mat_card_content_1_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCommonInfoDialog("common_info"));
    });
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 21)(42, "mat-card", 22)(43, "div", 23)(44, "h6");
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "p");
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 23)(50, "h6");
    \u0275\u0275text(51);
    \u0275\u0275pipe(52, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "p");
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(55, "div", 18)(56, "div", 19)(57, "h4");
    \u0275\u0275text(58);
    \u0275\u0275pipe(59, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "p");
    \u0275\u0275text(61);
    \u0275\u0275pipe(62, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "button", 20);
    \u0275\u0275listener("click", function ProviderProfileStandAloneComponent_mat_card_content_1_Template_button_click_63_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCommonInfoDialog("personal_details"));
    });
    \u0275\u0275text(64);
    \u0275\u0275pipe(65, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div", 21)(67, "mat-card", 22)(68, "div", 23)(69, "h6");
    \u0275\u0275text(70);
    \u0275\u0275pipe(71, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "p");
    \u0275\u0275text(73);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 23)(75, "h6");
    \u0275\u0275text(76);
    \u0275\u0275pipe(77, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "p");
    \u0275\u0275text(79);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(80, "div", 18)(81, "div", 19)(82, "h4");
    \u0275\u0275text(83);
    \u0275\u0275pipe(84, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "p");
    \u0275\u0275text(86);
    \u0275\u0275pipe(87, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "button", 20);
    \u0275\u0275listener("click", function ProviderProfileStandAloneComponent_mat_card_content_1_Template_button_click_88_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCommonInfoDialog("strategy_details"));
    });
    \u0275\u0275text(89);
    \u0275\u0275pipe(90, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(91, "div", 21)(92, "mat-card", 22)(93, "div", 23)(94, "h6");
    \u0275\u0275text(95);
    \u0275\u0275pipe(96, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "p");
    \u0275\u0275text(98);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(99, "div", 23)(100, "h6");
    \u0275\u0275text(101);
    \u0275\u0275pipe(102, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "p");
    \u0275\u0275text(104);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(105, "div", 18)(106, "div", 19)(107, "h4");
    \u0275\u0275text(108);
    \u0275\u0275pipe(109, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "p");
    \u0275\u0275text(111);
    \u0275\u0275pipe(112, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "button", 24);
    \u0275\u0275text(114);
    \u0275\u0275pipe(115, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(116, "div", 21)(117, "mat-card", 22)(118, "div", 23)(119, "h6");
    \u0275\u0275text(120);
    \u0275\u0275pipe(121, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(122, "p");
    \u0275\u0275text(123);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(124, "div", 18)(125, "div", 19)(126, "h4");
    \u0275\u0275text(127);
    \u0275\u0275pipe(128, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(129, "p");
    \u0275\u0275text(130);
    \u0275\u0275pipe(131, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(132, "div", 19)(133, "div", 25)(134, "div", 26)(135, "mat-form-field")(136, "mat-label");
    \u0275\u0275text(137);
    \u0275\u0275pipe(138, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(139, "mat-select", 27);
    \u0275\u0275twoWayListener("ngModelChange", function ProviderProfileStandAloneComponent_mat_card_content_1_Template_mat_select_ngModelChange_139_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedOfferState, $event) || (ctx_r1.selectedOfferState = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("selectionChange", function ProviderProfileStandAloneComponent_mat_card_content_1_Template_mat_select_selectionChange_139_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.refreshOffersList());
    });
    \u0275\u0275elementStart(140, "mat-option", 28);
    \u0275\u0275text(141);
    \u0275\u0275pipe(142, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(143, "mat-option", 29);
    \u0275\u0275text(144);
    \u0275\u0275pipe(145, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(146, "div")(147, "h4", 30);
    \u0275\u0275text(148, "|");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(149, "div", 31)(150, "button", 32);
    \u0275\u0275listener("click", function ProviderProfileStandAloneComponent_mat_card_content_1_Template_button_click_150_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.refreshOffersList());
    });
    \u0275\u0275element(151, "img", 33);
    \u0275\u0275text(152);
    \u0275\u0275pipe(153, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(154, "button", 34);
    \u0275\u0275listener("click", function ProviderProfileStandAloneComponent_mat_card_content_1_Template_button_click_154_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCreateOfferModal());
    });
    \u0275\u0275element(155, "img", 35);
    \u0275\u0275text(156);
    \u0275\u0275pipe(157, "translate");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(158, "div")(159, "div", 36);
    \u0275\u0275element(160, "common-ag-grid", 37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(161, "div", 38)(162, "div", 39)(163, "h4");
    \u0275\u0275text(164);
    \u0275\u0275pipe(165, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(166, "p");
    \u0275\u0275text(167);
    \u0275\u0275pipe(168, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(169, "hr");
    \u0275\u0275elementStart(170, "div", 40)(171, "mat-card", 22)(172, "div", 41)(173, "div", 6)(174, "h6");
    \u0275\u0275text(175);
    \u0275\u0275pipe(176, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(177, "div", 42)(178, "div", 43)(179, "h6");
    \u0275\u0275text(180);
    \u0275\u0275pipe(181, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(182, "div", 44)(183, "h6", 45);
    \u0275\u0275text(184);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(185, "div", 42)(186, "div", 43)(187, "h6");
    \u0275\u0275text(188);
    \u0275\u0275pipe(189, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(190, "div", 44)(191, "h6");
    \u0275\u0275text(192);
    \u0275\u0275pipe(193, "date");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(194, "div", 41)(195, "div", 6)(196, "h6");
    \u0275\u0275text(197);
    \u0275\u0275pipe(198, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(199, "a", 46);
    \u0275\u0275listener("click", function ProviderProfileStandAloneComponent_mat_card_content_1_Template_a_click_199_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openBeTradingAccountPopup());
    });
    \u0275\u0275element(200, "img", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(201, "div", 42)(202, "div", 43)(203, "h6");
    \u0275\u0275text(204);
    \u0275\u0275pipe(205, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(206, "div", 44)(207, "h6");
    \u0275\u0275text(208);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(209, "div", 42)(210, "div", 43)(211, "h6");
    \u0275\u0275text(212);
    \u0275\u0275pipe(213, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(214, "div", 44)(215, "h6");
    \u0275\u0275text(216);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(217, "div", 42)(218, "div", 43)(219, "h6");
    \u0275\u0275text(220);
    \u0275\u0275pipe(221, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(222, "div", 44)(223, "h6", 45);
    \u0275\u0275text(224);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(225, "div", 42)(226, "div", 43)(227, "h6");
    \u0275\u0275text(228);
    \u0275\u0275pipe(229, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(230, "div", 44)(231, "h6");
    \u0275\u0275text(232);
    \u0275\u0275pipe(233, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(234, "div", 42)(235, "div", 43)(236, "h6");
    \u0275\u0275text(237);
    \u0275\u0275pipe(238, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(239, "div", 44)(240, "h6");
    \u0275\u0275text(241);
    \u0275\u0275pipe(242, "date");
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275elementStart(243, "div", 48)(244, "mat-tab-group", 49);
    \u0275\u0275listener("selectedTabChange", function ProviderProfileStandAloneComponent_mat_card_content_1_Template_mat_tab_group_selectedTabChange_244_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTabChange($event));
    });
    \u0275\u0275template(245, ProviderProfileStandAloneComponent_mat_card_content_1_mat_tab_245_Template, 3, 3, "mat-tab", 50);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const actions_r20 = \u0275\u0275reference(14);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.providersData == null ? null : ctx_r1.providersData.nickname);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 73, "PROVIDERS_PROFILE.Provider's profile and sharing settings"));
    \u0275\u0275advance(2);
    \u0275\u0275property("matMenuTriggerFor", actions_r20)("ngClass", \u0275\u0275pureFunction1(164, _c02, ctx_r1.providersData.state == "Archived"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 75, "COMMON.Actions"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 77, "PROVIDERS_PROFILE.Update Avatar"));
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate1("src", "../../../../assets/icons/", ctx_r1.providersData.sharedProfile.sharedKey ? "remove-icon" : "add-icon", ".png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.providersData.sharedProfile.sharedKey ? 21 : 22);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 79, "COMMON.Archive"), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("getDataById", true)("id", ctx_r1.providerId);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 81, "PROVIDERS_PROFILE.Common Information"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 83, "PROVIDERS_PROFILE.Provider's common settings"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(166, _c02, ctx_r1.providersData.state == "Archived"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(40, 85, "COMMON.Edit"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 87, "PROVIDERS_PROFILE.Nickname"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.providersData == null ? null : ctx_r1.providersData.nickname);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(52, 89, "PROVIDERS_PROFILE.Show account name"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.providersData == null ? null : ctx_r1.providersData.additional == null ? null : ctx_r1.providersData.additional.showAccountName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(59, 91, "PROVIDERS_PROFILE.Personal details of account"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(62, 93, "PROVIDERS_PROFILE.Description of trading strategy by its owner"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(168, _c02, ctx_r1.providersData.state == "Archived"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(65, 95, "COMMON.Edit"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(71, 97, "PROVIDERS_PROFILE.Summary"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r1.providersData == null ? null : ctx_r1.providersData.additional == null ? null : ctx_r1.providersData.additional.summary) ? ctx_r1.providersData == null ? null : ctx_r1.providersData.additional == null ? null : ctx_r1.providersData.additional.summary : "No summary");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(77, 99, "PROVIDERS_PROFILE.Notes"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r1.providersData == null ? null : ctx_r1.providersData.additional == null ? null : ctx_r1.providersData.additional.notes) ? ctx_r1.providersData == null ? null : ctx_r1.providersData.additional == null ? null : ctx_r1.providersData.additional.notes : "No notes");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(84, 101, "PROVIDERS_PROFILE.Strategy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(87, 103, "PROVIDERS_PROFILE.Provider's settings of publishing deals"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(170, _c02, ctx_r1.providersData.state == "Archived"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(90, 105, "COMMON.Edit"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(96, 107, "PROVIDERS_PROFILE.Hide stops"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.providersData == null ? null : ctx_r1.providersData.strategy == null ? null : ctx_r1.providersData.strategy.hideStops);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(102, 109, "PROVIDERS_PROFILE.Strategy Mode"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r1.providersData == null ? null : ctx_r1.providersData.strategy == null ? null : ctx_r1.providersData.strategy.mode) == "OutOnly" ? "Out only" : "All");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(109, 111, "PROVIDERS_PROFILE.Finance"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(112, 113, "PROVIDERS_PROFILE.Provider's finance settings"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(172, _c02, ctx_r1.providersData.state == "Archived"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(115, 115, "COMMON.Edit"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(121, 117, "PROVIDERS_PROFILE.Fee receiver account"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.providersData == null ? null : ctx_r1.providersData.externalName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(128, 119, "PROVIDERS_PROFILE.Offers"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(131, 121, "PROVIDERS_PROFILE.Sets of subscription conditions"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(138, 123, "PROVIDERS_PROFILE.Scope"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedOfferState);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(142, 125, "COMMON.Active"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(145, 127, "COMMON.All"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(153, 129, "COMMON.Refresh"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(174, _c02, ctx_r1.providersData.state == "Archived"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(157, 131, "COMMON.Create"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("gridConfig", ctx_r1.offerGridConfig)("gridData", ctx_r1.offerGridData)("showGridLoader", ctx_r1.showOfferGridLoder);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(165, 133, "PROVIDERS_PROFILE.Personal Info"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(168, 135, "PROVIDERS_PROFILE.Update your personal details here"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(176, 137, "PROVIDERS_PROFILE.Information"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(181, 139, "COMMON.State"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u25CF ", ctx_r1.providersData == null ? null : ctx_r1.providersData.state, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(189, 141, "PROVIDERS_PROFILE.Registered"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(193, 143, ctx_r1.providersData == null ? null : ctx_r1.providersData.registerTime, "M/d/yy, h:mm:ss a"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(198, 146, "PROVIDERS_PROFILE.Trading Account"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(205, 148, "PROVIDERS_PROFILE.MT name"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.tradeAccountData == null ? null : ctx_r1.tradeAccountData.tradingAccName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(213, 150, "PROVIDERS_PROFILE.MT login"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.tradeAccountData == null ? null : ctx_r1.tradeAccountData.tradingAccountNo);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(221, 152, "PROVIDERS_PROFILE.State"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u25CF ", ctx_r1.tradeAccountData == null ? null : ctx_r1.tradeAccountData.state, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(229, 154, "PROVIDERS_PROFILE.Created (UTC)"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(233, 156, ctx_r1.providersData == null ? null : ctx_r1.providersData.createdUtc, "MMMM d, y 'at' hh:mm:ss a"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(238, 159, "PROVIDERS_PROFILE.Updated (UTC)"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(242, 161, ctx_r1.providersData == null ? null : ctx_r1.providersData.updatedUtc, "MMMM d, y 'at' hh:mm:ss a"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.tabArrConfig);
  }
}
function ProviderProfileStandAloneComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275element(1, "img", 67);
    \u0275\u0275elementEnd();
  }
}
var ProviderProfileStandAloneComponent = class _ProviderProfileStandAloneComponent {
  router;
  translate;
  _webService;
  route;
  providersData;
  tradeAccountData;
  providerId;
  showPageLoader = false;
  selectedOfferState = "Active";
  showOfferGridLoder = false;
  offerGridConfig = {};
  offerGridData = [];
  tabArrConfig = [];
  constantVariable = new ConstantVariable();
  currentSelectedTabIndx = 0;
  errorComponent;
  tradingDialog = inject(MatDialog);
  commonInfoDialog = inject(MatDialog);
  beFeesDetailDialog = inject(MatDialog);
  beDealsDialog = inject(MatDialog);
  createOfferDialog = inject(MatDialog);
  providerArchiveDialog = inject(MatDialog);
  sharedLinkDialog = inject(MatDialog);
  constructor(router, translate, _webService, route) {
    this.router = router;
    this.translate = translate;
    this._webService = _webService;
    this.route = route;
    this.route.paramMap.subscribe((params) => {
      this.providerId = params.get("providerId");
      this.getAllProviderProfilePageData();
    });
    this._webService.subscribeOnWebDataChange("ProviderProfileStandAloneComponent", (event) => {
      this.recieveChildrenEmitter(event);
    });
  }
  getAllProviderProfilePageData() {
    return __async(this, null, function* () {
      this.showPageLoader = true;
      let result1 = yield this.getProviderProfileData();
      this.setupOffersGridConfig();
      let result2 = yield this.getOffersData();
      this.setUpTabsConfig();
      this.getGridData(this.tabArrConfig[0]);
      this.showPageLoader = false;
    });
  }
  setUpTabsConfig() {
    this.tabArrConfig = this.getProviderProfileTabsConfig();
  }
  getProviderProfileTabsConfig() {
    let arr = [];
    arr.push(this.getSubscriptionTabConfigObj(), this.getPositionTabConfigObj(), this.getDealsTabConfigObj(), this.getFeesTabConfig());
    return arr;
  }
  getSubscriptionTabConfigObj() {
    let apiUrl = this.constantVariable?.http_Api_Url.provider_profile.subscriptions.replace(":providerId", this.providerId);
    return {
      label: "PROVIDERS_PROFILE.Subscriptions",
      filters: {
        show: false,
        type: { id: "", offerId: "", activationStatus: "", externalAccount: "", agent: "", scope: "Active" },
        clear: function() {
          this.type = { id: "", offerId: "", activationStatus: "", externalAccount: "", agent: "", scope: "Active" };
        },
        getApiParams: function() {
          let param = {};
          let getFilterParam = () => {
            let filterQuery = "";
            if (this.type.id) {
              filterQuery += `id eq ${this.type.id} and `;
            }
            if (this.type.offerId) {
              filterQuery += `offerId eq ${this.type.offerId} and `;
            }
            if (this.type.agent) {
              filterQuery += `agent eq ${this.type.agent} and `;
            }
            if (this.type.externalAccount) {
              filterQuery += `externalAccount eq ${this.type.externalAccount} and `;
            }
            if (this.type.activationStatus) {
              let isActivated = this.type.activationStatus == "needsactivation" ? false : true;
              let activationStatus = this.type.activationStatus == "activated" ? true : false;
              filterQuery += `(isActivated eq ${isActivated} and activationStatus eq ${activationStatus}) and `;
            }
            return filterQuery;
          };
          param["$count"] = true;
          param["scope"] = this.type.scope;
          getFilterParam.apply(this) ? param["$filter"] = getFilterParam.apply(this).slice(0, -4) : "";
          return param;
        }
      },
      grid: this.getCommonGridDetails("subscription", "There are no subscription", SubscriptionUiModal, apiUrl, this.offerGridData)
    };
  }
  getPositionTabConfigObj() {
    let apiUrl = this.constantVariable?.http_Api_Url.provider_profile.position.replace(":providerId", this.providerId);
    return {
      label: "PROVIDERS_PROFILE.Positions",
      filters: {
        show: false,
        type: { position: "", posState: "", symbol: "" },
        clear: function() {
          this.type = { position: "", posState: "", symbol: "" };
        },
        getApiParams: function() {
          let param = {};
          let getFilterParam = () => {
            let filterQuery = "";
            if (this.type.posState) {
              filterQuery += `state eq '${this.type.posState}' and `;
            }
            if (this.type.symbol) {
              filterQuery += `contains(tolower(symbol), '${this.type.symbol}') and `;
            }
            if (this.type.position) {
              filterQuery += `position eq ${this.type.position} and `;
            }
            return filterQuery;
          };
          param["$count"] = true;
          getFilterParam.apply(this) ? param["$filter"] = getFilterParam.apply(this).slice(0, -4) : "";
          return param;
        }
      },
      grid: this.getCommonGridDetails("position", "There are no position", PositionUiModal, apiUrl)
    };
  }
  getDealsTabConfigObj() {
    let apiUrl = this.constantVariable?.http_Api_Url.provider_profile.deals.replace(":providerId", this.providerId);
    return {
      label: "PROVIDERS_PROFILE.Deals",
      filters: {
        show: false,
        type: { dealKey: "", dealState: "", entry: "", symbol: "" },
        clear: function() {
          this.type = { dealKey: "", dealState: "", entry: "", symbol: "" };
        },
        getApiParams: function() {
          let param = {};
          let getFilterParam = () => {
            let filterQuery = "";
            if (this.type.dealKey) {
              filterQuery += `dealKey eq '${this.type.dealKey}' and `;
            }
            if (this.type.entry) {
              filterQuery += `entry eq '${this.type.entry}' and `;
            }
            if (this.type.dealState) {
              filterQuery += `state eq '${this.type.dealState}' and `;
            }
            if (this.type.symbol) {
              filterQuery += `symbol eq '${this.type.symbol}' and `;
            }
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
            filterQuery += `ownerId eq ${this.providerId} and ownerType eq 'Provider' and `;
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
  getProviderProfileData() {
    return new Promise((resolve) => {
      let param = { providerId: this.providerId };
      this._webService.getProviderProfilePageData(param).subscribe({
        next: (result) => {
          this.providersData = result.providerData;
          this.tradeAccountData = new TradingAccountUIModal(result.tradeAccountData);
          resolve();
        },
        error: (errorObj) => {
          this.showErrorWarnMessage(errorObj?.error?.errorMessage);
          resolve();
        }
      });
    });
  }
  showErrorWarnMessage(msg) {
    const errorConfigObj = this.errorComponent?.config;
    errorConfigObj.message = msg ? msg : errorConfigObj.message;
    this.errorComponent?.openErrorSnackbar();
  }
  setupOffersGridConfig() {
    let colDefs = this.getGridColDefs("offers");
    this.offerGridConfig = this.getCommonGridConfig(colDefs, "There are no offers data");
  }
  getOffersData() {
    return new Promise((resolve) => {
      this.showOfferGridLoder = true;
      let param = {
        providerId: this.providerId,
        $count: true,
        scope: this.selectedOfferState
      };
      this._webService.getOffersDetails(param).subscribe({
        next: (response) => {
          this.offerGridData = [];
          response.items.forEach((obj) => this.offerGridData.push(new OfferDetailsUIModel(obj)));
          this.showOfferGridLoder = false;
          resolve();
        },
        error: (errorObj) => {
          this.showOfferGridLoder = false;
          this.showErrorWarnMessage(errorObj?.error?.errorMessage);
          resolve();
        },
        complete: () => {
          resolve();
        }
      });
    });
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
  getCommonGridParam(filters) {
    console.log(filters);
  }
  refreshOffersList() {
    return __async(this, null, function* () {
      let result = yield this.getOffersData();
    });
  }
  onTabChange(event) {
    this.currentSelectedTabIndx = event.index;
    this.getGridData(this.tabArrConfig[this.currentSelectedTabIndx]);
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
  getGridColDefs(gridType) {
    if (gridType == "offers") {
      return [
        { field: "offerId", sort: "desc", headerName: "PROVIDERS_PROFILE.Title", resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: "offerCell" },
        { field: "visibility", headerName: "PROVIDERS_PROFILE.Visibility", resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: "tagCell" },
        { field: "subscriptionCount", sortable: false, headerName: "PROVIDERS_PROFILE.Subscriptions", resizable: false },
        { field: "joinLinksCount", sortable: false, headerName: "PROVIDERS_PROFILE.Join Links", resizable: false },
        { field: "actions", headerName: "", sortable: false, cellRenderer: ActionButtonStanAloneComponent, colId: "offerRedirection", resizable: false }
      ];
    } else if (gridType == "subscription") {
      return [
        { field: "subscriptionId", headerName: "REPORTS.Name", resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: "providerSubscriptionNameCell" },
        { field: "isActivated", sortable: false, headerName: "COMMON.Status", resizable: false, cellRenderer: StatusBtnRendererComponent },
        { field: "volume", sortable: false, headerName: "PROVIDERS_PROFILE.Volume Scaling", resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: "tagCell" },
        { field: "offerTitle", sortable: false, headerName: "PROVIDERS_PROFILE.Offer", resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: "offerTitleCell" },
        { field: "tradingAccountNo", sortable: false, headerName: "PROVIDERS_PROFILE.Trading Account", resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: "providerTradingAccountCell" },
        { field: "equity", sortable: false, headerName: "PROVIDERS_PROFILE.Equity", resizable: false },
        { field: "registerTime", headerName: "PROVIDERS_PROFILE.Registered", sort: "desc", resizable: false },
        { field: "actions", headerName: "", sortable: false, cellRenderer: ActionButtonStanAloneComponent, colId: "providerSubscriptionRedirection", resizable: false }
      ];
    } else if (gridType == "position") {
      return [
        { field: "position", headerName: "PROVIDERS_PROFILE.Position", resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: "positionNameCell" },
        { field: "status", headerName: "COMMON.Status", resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: "tagCell" },
        { field: "symbol", headerName: "PROVIDERS_PROFILE.Symbol", resizable: false },
        { field: "openTime", headerName: "PROVIDERS_PROFILE.Open Time", sort: "desc", resizable: false },
        { field: "volume", headerName: "PROVIDERS_PROFILE.Volume", resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: "positionVolumeCell" },
        { field: "profit", headerName: "PROVIDERS_PROFILE.Profit", resizable: false },
        { field: "closeTime", headerName: "PROVIDERS_PROFILE.Close Time", resizable: false },
        { field: "actions", headerName: "", sortable: false, cellRenderer: ActionButtonStanAloneComponent, resizable: false, colId: "positionRedirection" }
      ];
    } else if (gridType == "deals") {
      return [
        { field: "dealKey", headerName: "PROVIDERS_PROFILE.Deal", resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: "dealsTitleCell" },
        { field: "entry", headerName: "PROVIDERS_PROFILE.Entry", sortable: false, resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: "tagCell" },
        { field: "position", headerName: "PROVIDERS_PROFILE.Position", resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: "dealPositionCell" },
        { field: "symbol", headerName: "PROVIDERS_PROFILE.Symbol", resizable: false },
        { field: "volume", headerName: "PROVIDERS_PROFILE.Volume", resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: "dealsVolumeCell" },
        { field: "price", headerName: "PROVIDERS_PROFILE.Price", resizable: false },
        { field: "time", headerName: "PROVIDERS_PROFILE.Time", sort: "desc", resizable: false },
        { field: "actions", headerName: "", sortable: false, cellRenderer: ActionButtonStanAloneComponent, showPopupArraow: true, colId: "dealsPopup" }
      ];
    } else if (gridType == "fees") {
      return [
        { field: "transactionObj", headerName: "PROVIDERS_PROFILE.Fees", sort: "desc", cellRenderer: CommonCellRendererStandAloneComponent, resizable: false, colId: "transactionTitlePopup" },
        { field: "platformId", headerName: "TRANSACTIONS.MT order", resizable: false, suppressSizeToFit: true },
        { field: "transactionAmountObj", headerName: "REPORTS.Amount", cellRenderer: CommonCellRendererStandAloneComponent, resizable: false, colId: "transactionAmountViewDisplay" },
        { field: "senderObj", headerName: "TRANSACTIONS.Sender", resizable: false, sortable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: "transactionsenderAction" },
        { field: "processTime", headerName: "TRANSACTIONS.Processed", resizable: false },
        { field: "actions", headerName: "", cellRenderer: ActionButtonStanAloneComponent, sortable: false, colId: "transactionDetailsPopup", showPopupArraow: true, resizable: false }
      ];
    }
    return;
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
  recieveChildrenEmitter(event) {
    if (event["action"] == "open_transact_details_popup") {
      this.openBeFeesDetailsPopup(event["data"]);
    } else if (event["action"] == "open_deals_popup") {
      this.openDealsPopup(event["data"]);
    } else if (event["action"] == "refresh_provider_data") {
      this.refreshProviderData();
    } else if (event["action"] == "redirect_to_offer_page") {
      this.router.navigate([`/portal/offers/${event.offerId}`]);
    } else if (event["action"] == "redirect_to_provider_page") {
      this.router.navigate(["/portal/providers"]);
    }
  }
  refreshProviderData() {
    return __async(this, null, function* () {
      let result = yield this.getProviderProfileData();
    });
  }
  openDealsPopup(data) {
    this.beDealsDialog.open(CommonDialogStandAloneComponent, {
      panelClass: "common-dialog",
      data: this.prepareDealsData(data)
    });
    this.beDealsDialog.afterAllClosed.subscribe((result) => {
    });
  }
  openBeFeesDetailsPopup(data) {
    this.beFeesDetailDialog.open(CommonDialogStandAloneComponent, {
      panelClass: "common-dialog",
      data: this.prepareFeesData(data)
    });
    this.beFeesDetailDialog.afterAllClosed.subscribe((result) => {
    });
  }
  openCommonInfoDialog(modelType) {
    const dialogRef = this.commonInfoDialog.open(ProviderCommonInfoDialog, {
      panelClass: "providerProfile-commonInfo",
      data: { providerData: this.providersData, modelType }
    });
    dialogRef.afterClosed().subscribe((event) => {
      this.recieveChildrenEmitter(event);
    });
  }
  openCreateOfferModal() {
    const dialogRef = this.createOfferDialog.open(CreateOfferDialog, {
      panelClass: "createinfo-dialog",
      data: this.providerId
    });
    dialogRef.afterClosed().subscribe((event) => {
      this.recieveChildrenEmitter(event);
    });
  }
  openProviderArchiveModal() {
    const dialogRef = this.providerArchiveDialog.open(ArchiveDialog, {
      panelClass: "archive-dialog",
      data: { providerData: this.providersData, modelType: "provider" }
    });
    dialogRef.afterClosed().subscribe((event) => {
      this.recieveChildrenEmitter(event);
    });
  }
  openSharedLinkModal() {
    const dialogRef = this.sharedLinkDialog.open(SharedLinkDialog, {
      panelClass: "shared-link-dialog",
      data: this.providersData
    });
    dialogRef.afterClosed().subscribe((event) => {
      this.recieveChildrenEmitter(event);
    });
  }
  openUploadAvatarModal() {
    const dialogRef = this.sharedLinkDialog.open(UploadAvatarDialog, {
      panelClass: "upload-avatar-dialog",
      data: { providerData: this.providersData }
    });
    dialogRef.afterClosed().subscribe((event) => {
      this.recieveChildrenEmitter(event);
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
  prepareDealsData(dealsData) {
    let commonDialogData = {
      mainTitle: "COMMON.Info",
      secondryTitle: "PROVIDERS_PROFILE.Information about the provider's deal",
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
  ngOnDestroy() {
    this._webService.unSubscribeOnWebDataChange("ProviderProfileStandAloneComponent");
  }
  static \u0275fac = function ProviderProfileStandAloneComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProviderProfileStandAloneComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(WebService), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProviderProfileStandAloneComponent, selectors: [["app-provider-profile"]], viewQuery: function ProviderProfileStandAloneComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(ShowErrorStandAloneComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.errorComponent = _t.first);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 2, consts: [["actions", "matMenu"], ["appearance", "outlined", 1, "section-card"], ["class", "section-card-content", 4, "ngIf"], ["class", "full-view-port-height d-flex justify-center align-center", 4, "ngIf"], [1, "section-card-content"], [1, "home-card"], [1, "header", "d-flex", "justify-space-between", "align-center"], [1, "header-title"], [1, "primary-btn", "action-btn", 3, "matMenuTriggerFor", "ngClass"], ["src", "../../../../assets/icons/actions.png"], [1, "actions-menu"], ["mat-menu-item", "", 3, "click"], ["src", "../../../../assets/icons/cameraIcon.png", "width", "20", "height", "20"], ["width", "20", "height", "20", 3, "src"], ["src", "../../../../assets/icons/trashIcon.png", "width", "20", "height", "20"], [3, "getDataById", "id"], [1, "info-section", "d-flex", "justify-space-between"], [1, "info-section-left"], [1, "d-flex", "justify-space-between", "w-100"], [1, "info-section-left-items"], [1, "edit-btn", "info-section-btn", 3, "click", "ngClass"], [1, "info-section-left-items", "info-section-left-items-card"], ["appearance", "outlined"], [1, "d-flex", "justify-space-between", "g-20", "align-center"], [1, "edit-btn", "info-section-btn", 3, "ngClass"], [1, "d-flex", "justify-space-between", "g-10"], [1, "d-flex", "g-20", "common-dropdown", "align-center"], [3, "ngModelChange", "selectionChange", "ngModel"], ["value", "Active"], ["value", "all"], [1, "divider"], [1, "d-flex", "justify-center", "g-10", "align-stretch"], [1, "secondary-btn", 3, "click"], ["src", "../../../../assets/icons/rotateIcon.svg"], [1, "primary-btn", 3, "click", "ngClass"], ["src", "../../../../assets/icons/plusIcon.png"], [1, "table"], [3, "gridConfig", "gridData", "showGridLoader"], [1, "info-section-right"], [1, "info-section-right-header"], [1, "info-section-right-card"], [1, "items"], [1, "d-flex", "justify-center", "items-main"], [1, "items-left"], [1, "items-right"], [1, "status-badge"], ["href", "javascript:void(0)", 1, "default-link", 3, "click"], ["src", "../../../../assets/icons/arrow-single.png"], [1, "metrics-table"], ["mat-stretch-tabs", "false", "mat-align-tabs", "start", 1, "providerProfile-tabGroup", 3, "selectedTabChange"], [3, "label", 4, "ngFor", "ngForOf"], [3, "label"], ["matTabContent", ""], [1, "header-buttons", "d-flex", "justify-space-between", "pb-20", "g-20"], [1, "d-flex", "g-20", "justify-center", "align-center"], ["src", "../../../../assets/icons/filterIcon.svg"], ["class", "secondary-btn", 3, "click", 4, "ngIf"], [1, "d-flex", "g-20", "common-dropdown", "align-center", "flex-wrap", "justify-end"], ["width", "20", "src", "../../../../assets/icons/clear-icon.svg"], [4, "ngIf"], ["matInput", "", "type", "number", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel"], [4, "ngFor", "ngForOf"], [3, "value"], ["matInput", "", "type", "text", 3, "ngModelChange", "ngModel"], ["src", "../../../../assets/icons/searchIcon.svg"], [1, "full-view-port-height", "d-flex", "justify-center", "align-center"], ["src", "../../../../assets/logo/ICM Logo Default 1.png"]], template: function ProviderProfileStandAloneComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "mat-card", 1);
      \u0275\u0275template(1, ProviderProfileStandAloneComponent_mat_card_content_1_Template, 246, 176, "mat-card-content", 2)(2, ProviderProfileStandAloneComponent_div_2_Template, 2, 0, "div", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "show-error-message");
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.showPageLoader);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showPageLoader);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DatePipe, CommonAgGridStandAloneComponent, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgModel, ShowErrorStandAloneComponent, ProviderFollowerHeaderCardsStandaloneComponent, MatMenuModule, MatMenu, MatMenuItem, MatMenuTrigger, MatTabsModule, MatTabContent, MatTab, MatTabGroup, TranslateModule, TranslatePipe, MatSelectModule, MatFormField, MatLabel, MatSelect, MatOption, MatInputModule, MatInput, MatCardModule, MatCard, MatCardContent], styles: ["\n\n.stats-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.stats-info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.stats-subline[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .positive[_ngcontent-%COMP%] {\n  color: #027A48;\n}\n.stats-subline[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .negative[_ngcontent-%COMP%] {\n  color: #B42318;\n}\n.info-section[_ngcontent-%COMP%] {\n  padding-block: 50px;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-left[_ngcontent-%COMP%] {\n  width: 70%;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-left[_ngcontent-%COMP%]   .info-section-left-items[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 15px;\n  height: fit-content;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-left[_ngcontent-%COMP%]   .info-section-left-items[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: unset;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-left[_ngcontent-%COMP%]   .info-section-left-items[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #667085;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-left[_ngcontent-%COMP%]   .info-section-left-items[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: unset;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-left[_ngcontent-%COMP%]   .info-section-left-items[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  font-size: 40px;\n  padding-top: 5px;\n  color: #D0D5DD;\n  font-weight: 100;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-left[_ngcontent-%COMP%]   .info-section-left-items-card[_ngcontent-%COMP%] {\n  border: 2px solid #EAECF0;\n  border-radius: 10px;\n  height: fit-content;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-left[_ngcontent-%COMP%]   .info-section-left-items-card[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%] {\n  border: none !important;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%] {\n  width: 25%;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%]   .info-section-right-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: unset;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%]   .info-section-right-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #667085;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%]   .info-section-right-header[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: unset;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  border-top: 1px solid #EAECF0;\n  margin-block: 20px;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%]   .info-section-right-card[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%]   .info-section-right-card[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%] {\n  padding-block: 5px;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%]   .info-section-right-card[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .items-main[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-block: 10px;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%]   .info-section-right-card[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .items-main[_ngcontent-%COMP%]   .items-left[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  width: 50%;\n  border: 1px solid #D0D5DD;\n  border-top-left-radius: 6px;\n  border-bottom-left-radius: 6px;\n  color: #667085;\n  font-weight: 400;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%]   .info-section-right-card[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .items-main[_ngcontent-%COMP%]   .items-right[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  width: 100%;\n  border: 1px solid #D0D5DD;\n  border-top-right-radius: 6px;\n  border-bottom-right-radius: 6px;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%]   .info-section-right-card[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .items-main[_ngcontent-%COMP%]   .items-right[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  background: #ECFDF3;\n  width: fit-content;\n  padding: 0px 10px;\n  border-radius: 6px;\n  color: #027A48;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%]   .info-section-right-card[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%] {\n  border: none !important;\n}\n  .providerProfile-tabGroup .mdc-tab__text-label {\n  font-size: 20px !important;\n  font-weight: 400;\n  color: #667085 !important;\n}\n  .providerProfile-tabGroup .mdc-tab {\n  padding: 0 50px !important;\n}\n  .actions-menu .mat-mdc-menu-panel {\n  background-color: white !important;\n}\n  .actions-menu .mat-mdc-menu-content {\n  background-color: white !important;\n}\n  .actions-menu .mat-mdc-menu-item {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n  .actions-menu .mat-mdc-menu-item .mat-mdc-menu-item-text {\n  font-size: 17px !important;\n  display: flex;\n  gap: 20px;\n  align-items: center;\n}\n  .common-dropdown .mdc-text-field {\n  background-color: var(--primaryWhite) !important;\n  border: 1px solid var(--border-color) !important;\n  border-bottom: 0px !important;\n  border-radius: 8px !important;\n  width: 150px;\n}\n  .common-dropdown .mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {\n  border-bottom-color: var(--border-color) !important;\n}\n  .common-dropdown .mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {\n  border-bottom-color: var(--border-color) !important;\n}\n  .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n/*# sourceMappingURL=provider-profile.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProviderProfileStandAloneComponent, { className: "ProviderProfileStandAloneComponent", filePath: "src\\app\\web\\views\\provider-profile\\provider-profile.standalone.component.ts", lineNumber: 35 });
})();
export {
  ProviderProfileStandAloneComponent
};
//# sourceMappingURL=chunk-MC4756PA.js.map
