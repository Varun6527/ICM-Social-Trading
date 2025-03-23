import {
  MatExpansionModule
} from "./chunk-7KFQ5TEA.js";
import {
  DeleteOfferDataDialog
} from "./chunk-PDHMRZIQ.js";
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
  PositionUiModal,
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
  CurrencyPipe,
  DatePipe,
  LowerCasePipe,
  NgClass,
  NgForOf,
  NgIf,
  Router,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  inject,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
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

// src/app/web/shared/dialogBox/subscription-info-dialog/subscriptionInfoDialog.standalone.component.ts
var SubscriptionInfoDialog = class _SubscriptionInfoDialog {
  dialogRef;
  constructor(dialogRef) {
    this.dialogRef = dialogRef;
  }
  closeInfoForm() {
    this.dialogRef.close({});
  }
  static \u0275fac = function SubscriptionInfoDialog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SubscriptionInfoDialog)(\u0275\u0275directiveInject(MatDialogRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SubscriptionInfoDialog, selectors: [["subscription-info-dialog"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 22, vars: 18, consts: [["mat-dialog-title", "", 1, "text-center"], [1, "mat-typography"], [1, "warn-title"], [1, "d-flex", "justify-center", "g-20", "px-20"], [1, "secondary-btn", 3, "click"]], template: function SubscriptionInfoDialog_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h2", 0);
      \u0275\u0275text(1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "mat-dialog-content", 1)(4, "div", 2)(5, "p");
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "ol")(9, "li");
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "li");
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "li");
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(18, "div", 3)(19, "button", 4);
      \u0275\u0275listener("click", function SubscriptionInfoDialog_Template_button_click_19_listener() {
        return ctx.closeInfoForm();
      });
      \u0275\u0275text(20);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 6, "PROVIDERS_PROFILE.Attention"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(7, 8, "PROVIDERS_PROFILE.Don't forget to set up your copying options before activation"), ":");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(11, 10, "PROVIDERS_PROFILE.SubscriptionFirstWarnMsg"), ",");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(14, 12, "PROVIDERS_PROFILE.SubscriptionSecondWarnMsg"), ",");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(17, 14, "PROVIDERS_PROFILE.SubscriptionThirdWarnMsg"), ".");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 16, "PROVIDERS_PROFILE.OK"));
    }
  }, dependencies: [MatDialogModule, MatDialogTitle, MatDialogContent, CommonModule, TranslateModule, TranslatePipe], styles: ["\n\n  .info-dialog .warn-title {\n  font-size: 15px;\n  padding: 15px 10px;\n  background: var(--primaryWhite);\n  border-radius: initial;\n  border-width: 2px 5px;\n  border-style: dotted solid;\n  border-color: var(--warn-color);\n}\n  .info-dialog .warn-title ol {\n  padding-block: 20px;\n  padding-left: 15px;\n}\n/*# sourceMappingURL=subscriptionInfoDialog.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SubscriptionInfoDialog, { className: "SubscriptionInfoDialog", filePath: "src\\app\\web\\shared\\dialogBox\\subscription-info-dialog\\subscriptionInfoDialog.standalone.component.ts", lineNumber: 35 });
})();

// src/app/web/shared/dialogBox/active-or-deactive-subscription-dialog/activeOrDeactiveSubscriptionDialog.standalone.component.ts
function ActiveOrDeactiveSubscriptionDialog_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "PROVIDERS_PROFILE.Activate"), " ");
  }
}
function ActiveOrDeactiveSubscriptionDialog_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "PROVIDERS_PROFILE.Suspend"), " ");
  }
}
function ActiveOrDeactiveSubscriptionDialog_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "PROVIDERS_PROFILE.Activate copying of positions"), " ");
  }
}
function ActiveOrDeactiveSubscriptionDialog_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "PROVIDERS_PROFILE.Suspend copying of positions"), " ");
  }
}
function ActiveOrDeactiveSubscriptionDialog_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "PROVIDERS_PROFILE.New positions of the provider will start being copied"), " ");
  }
}
function ActiveOrDeactiveSubscriptionDialog_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "PROVIDERS_PROFILE.New positions copying will be suspended"), " ");
  }
}
function ActiveOrDeactiveSubscriptionDialog_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "PROVIDERS_PROFILE.Activate"), " ");
  }
}
function ActiveOrDeactiveSubscriptionDialog_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "PROVIDERS_PROFILE.Suspend"), " ");
  }
}
var ActiveOrDeactiveSubscriptionDialog = class _ActiveOrDeactiveSubscriptionDialog {
  dialogRef;
  data;
  _webService;
  modelType = "";
  subscriptionData;
  showLoader = false;
  errorComponent;
  IConstant = new ConstantVariable();
  constructor(dialogRef, data, _webService) {
    this.dialogRef = dialogRef;
    this.data = data;
    this._webService = _webService;
    this.subscriptionData = data.subscriptionData;
    this.modelType = data.modelType;
  }
  activeOrDeactiveSubscriber() {
    this.showLoader = true;
    let param = {
      subscriptionId: this.subscriptionData.id,
      activationStatus: this.modelType == "activate" ? true : false
    };
    this._webService.activateOrDeactivateSubscription(param).subscribe({
      next: (response) => {
        this.showSuccessPopupMsg("Subscription has been updated");
        this.dialogRef.close({ action: "refresh_subscription_data" });
        this.showLoader = false;
      },
      error: (errorObj) => {
        this.showLoader = false;
        this.showErrorWarnMessage(this.IConstant.errorMessageObj[errorObj?.error?.errorCode]);
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
  closeModal() {
    this.dialogRef.close({});
  }
  static \u0275fac = function ActiveOrDeactiveSubscriptionDialog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ActiveOrDeactiveSubscriptionDialog)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(WebService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ActiveOrDeactiveSubscriptionDialog, selectors: [["subscription-info-dialog"]], viewQuery: function ActiveOrDeactiveSubscriptionDialog_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(ShowErrorStandAloneComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.errorComponent = _t.first);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 18, vars: 11, consts: [["mat-dialog-title", "", 1, "text-center"], [1, "text-center"], [1, "mat-typography"], [1, "d-flex", "justify-center", "g-20", "px-20"], [1, "secondary-btn", 3, "click"], [1, "primary-btn", 3, "click", "IcmLoadingOverlay"]], template: function ActiveOrDeactiveSubscriptionDialog_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h2", 0);
      \u0275\u0275template(1, ActiveOrDeactiveSubscriptionDialog_Conditional_1_Template, 2, 3)(2, ActiveOrDeactiveSubscriptionDialog_Conditional_2_Template, 2, 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 1);
      \u0275\u0275template(4, ActiveOrDeactiveSubscriptionDialog_Conditional_4_Template, 2, 3)(5, ActiveOrDeactiveSubscriptionDialog_Conditional_5_Template, 2, 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "mat-dialog-content", 2)(7, "div");
      \u0275\u0275template(8, ActiveOrDeactiveSubscriptionDialog_Conditional_8_Template, 2, 3)(9, ActiveOrDeactiveSubscriptionDialog_Conditional_9_Template, 2, 3);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 3)(11, "button", 4);
      \u0275\u0275listener("click", function ActiveOrDeactiveSubscriptionDialog_Template_button_click_11_listener() {
        return ctx.closeModal();
      });
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "button", 5);
      \u0275\u0275listener("click", function ActiveOrDeactiveSubscriptionDialog_Template_button_click_14_listener() {
        return ctx.activeOrDeactiveSubscriber();
      });
      \u0275\u0275template(15, ActiveOrDeactiveSubscriptionDialog_Conditional_15_Template, 2, 3)(16, ActiveOrDeactiveSubscriptionDialog_Conditional_16_Template, 2, 3);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(17, "show-error-message");
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.modelType == "activate" ? 1 : ctx.modelType == "suspend" ? 2 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.modelType == "activate" ? 4 : ctx.modelType == "suspend" ? 5 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275classMap(ctx.modelType == "activate" ? "active-title" : "deactive-title");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.modelType == "activate" ? 8 : ctx.modelType == "suspend" ? 9 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 9, "COMMON.Cancel"));
      \u0275\u0275advance(2);
      \u0275\u0275property("IcmLoadingOverlay", ctx.showLoader);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.modelType == "activate" ? 15 : ctx.modelType == "suspend" ? 16 : -1);
    }
  }, dependencies: [MatDialogModule, MatDialogTitle, MatDialogContent, CommonModule, TranslateModule, TranslatePipe, IcmLoadingOverlayDirective, ShowErrorStandAloneComponent], styles: ["\n\n  .active-or-deactive-subscription-dialog {\n  width: 600px !important;\n  border-radius: 10px !important;\n}\n  .active-or-deactive-subscription-dialog .mat-mdc-dialog-title {\n  margin: unset !important;\n  padding-bottom: 10px !important;\n}\n  .active-or-deactive-subscription-dialog .mat-mdc-dialog-surface {\n  border-radius: 10px !important;\n  background: white !important;\n  padding: 20px !important;\n}\n  .active-or-deactive-subscription-dialog .common-field {\n  width: 100% !important;\n}\n  .active-or-deactive-subscription-dialog .common-field .mdc-text-field {\n  background-color: white;\n  border: 1px solid;\n  border-bottom: 0px;\n}\n  .active-or-deactive-subscription-dialog .common-field .mdc-text-field textarea {\n  resize: none;\n}\n  .active-or-deactive-subscription-dialog .common-field .mdc-text-field .mat-mdc-form-field-text-suffix {\n  font-size: 20px;\n}\n  .active-or-deactive-subscription-dialog .active-title {\n  font-size: 15px;\n  padding: 15px 10px;\n  background: var(--primaryWhite);\n  border-radius: initial;\n  border-width: 2px 5px;\n  border-style: dotted solid;\n  border-color: var(--primary-positive-color);\n}\n  .active-or-deactive-subscription-dialog .deactive-title {\n  font-size: 15px;\n  padding: 15px 10px;\n  background: var(--primaryWhite);\n  border-radius: initial;\n  border-width: 2px 5px;\n  border-style: dotted solid;\n  border-color: var(--error-message--container-color);\n}\n/*# sourceMappingURL=activeOrDeactiveSubscriptionDialog.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ActiveOrDeactiveSubscriptionDialog, { className: "ActiveOrDeactiveSubscriptionDialog", filePath: "src\\app\\web\\shared\\dialogBox\\active-or-deactive-subscription-dialog\\activeOrDeactiveSubscriptionDialog.standalone.component.ts", lineNumber: 53 });
})();

// src/app/web/shared/dialogBox/create-update-risk-dialog/createUpdateRisk.standalone.component.ts
function CreateUpdateRiskDialog_p_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "PROVIDERS_PROFILE.A measure that is compared to the level to perform the automatic action"), " ");
  }
}
function CreateUpdateRiskDialog_mat_error_23_Template(rf, ctx) {
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
function CreateUpdateRiskDialog_p_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "PROVIDERS_PROFILE.Agent fee paid as a percent of all fees to be received by provider"), " ");
  }
}
function CreateUpdateRiskDialog_mat_error_32_Template(rf, ctx) {
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
function CreateUpdateRiskDialog_mat_error_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "PROVIDERS_PROFILE.Value must be greater than 0"), " ");
  }
}
function CreateUpdateRiskDialog_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("value", "Keep");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, "PROVIDERS_PROFILE.Keep"));
  }
}
function CreateUpdateRiskDialog_Conditional_46_p_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "PROVIDERS_PROFILE.Keep: do not perform any action on subscription."), " ");
  }
}
function CreateUpdateRiskDialog_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CreateUpdateRiskDialog_Conditional_46_p_3_Template, 3, 3, "p", 17);
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 18);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 4, "PROVIDERS_PROFILE.Actions in case the specified threshold is reached."), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r0.createRiskForm.controls["parameter"] == null ? null : ctx_r0.createRiskForm.controls["parameter"].value) == "FloatingLoss");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 6, "PROVIDERS_PROFILE.Suspend: suspend subscription."), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 8, "PROVIDERS_PROFILE.Unsubscribe: unsubscribe from provider."), " ");
  }
}
function CreateUpdateRiskDialog_mat_error_47_Template(rf, ctx) {
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
function CreateUpdateRiskDialog_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("value", "CloseAll");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, "PROVIDERS_PROFILE.Close all"));
  }
}
function CreateUpdateRiskDialog_Conditional_54_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("value", "CloseUnprofitable");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, "PROVIDERS_PROFILE.Close unprofitable"));
  }
}
function CreateUpdateRiskDialog_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-option", 6);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, CreateUpdateRiskDialog_Conditional_54_Conditional_6_Template, 3, 4, "mat-option", 6);
    \u0275\u0275elementStart(7, "mat-option", 6);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("value", "KeepAll");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 7, "PROVIDERS_PROFILE.Keep all"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", "CloseAll");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 9, "PROVIDERS_PROFILE.Close all"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.createRiskForm.controls["parameter"].value == "FloatingLoss" ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("value", "CloseAllUnprofitable");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 11, "PROVIDERS_PROFILE.Close all unprofitable"));
  }
}
function CreateUpdateRiskDialog_Conditional_55_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "PROVIDERS_PROFILE.Close all: close all copied positions."), "");
  }
}
function CreateUpdateRiskDialog_Conditional_55_Conditional_4_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "PROVIDERS_PROFILE.Close unprofitable Msg"), ". ");
  }
}
function CreateUpdateRiskDialog_Conditional_55_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, CreateUpdateRiskDialog_Conditional_55_Conditional_4_Conditional_6_Template, 3, 3, "p");
    \u0275\u0275elementStart(7, "p", 18);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 4, "PROVIDERS_PROFILE.Keep all: do not perform any action on copied position."));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 6, "PROVIDERS_PROFILE.Close all: close all copied positions."));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.createRiskForm.controls["parameter"].value == "FloatingLoss" ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(9, 8, "PROVIDERS_PROFILE.Close all unprofitable: close all copies with loss"), ".");
  }
}
function CreateUpdateRiskDialog_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CreateUpdateRiskDialog_Conditional_55_Conditional_3_Template, 3, 3, "p")(4, CreateUpdateRiskDialog_Conditional_55_Conditional_4_Template, 10, 10);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "PROVIDERS_PROFILE.Actions in case the specified threshold is reached."), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.createRiskForm.controls["subscriptionAction"].value == "Unsubscribe" ? 3 : 4);
  }
}
function CreateUpdateRiskDialog_mat_error_56_Template(rf, ctx) {
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
function CreateUpdateRiskDialog_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "COMMON.Create"), " ");
  }
}
function CreateUpdateRiskDialog_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "COMMON.Save Changes"), " ");
  }
}
var CreateUpdateRiskDialog = class _CreateUpdateRiskDialog {
  data;
  dialogRef;
  fb;
  _webService;
  cdr;
  createRiskForm;
  subscriptionData = {};
  riskFormData = {};
  tempRiskFormData = {};
  riskData = [];
  isUpdate;
  showError = false;
  showLoader = false;
  errorComponent;
  IConstant = new ConstantVariable();
  constructor(data, dialogRef, fb, _webService, cdr) {
    this.data = data;
    this.dialogRef = dialogRef;
    this.fb = fb;
    this._webService = _webService;
    this.cdr = cdr;
    this.subscriptionData = data.subscriptionData;
    this.riskData = data.riskData;
    this.isUpdate = data.isUpdate;
    this.createRiskForm = this.fb.group({
      parameter: ["", [Validators.required]],
      threshold: ["", [Validators.required, Validators.min(1)]],
      subscriptionAction: ["", [Validators.required]],
      tradingAction: ["", [Validators.required]]
    });
    this.setRiskFormData();
    this.listenValueChanges();
  }
  listenValueChanges() {
    this.createRiskForm.get("parameter")?.valueChanges.subscribe((value) => {
      if (value) {
        this.createRiskForm.patchValue({
          subscriptionAction: "",
          tradingAction: ""
        }, { emitEvent: false });
      }
    });
    this.createRiskForm.get("subscriptionAction")?.valueChanges.subscribe((value) => {
      if (value) {
        this.createRiskForm.patchValue({
          tradingAction: ""
        }, { emitEvent: false });
      }
    });
  }
  setRiskFormData() {
    if (this.isUpdate) {
      this.riskFormData = JSON.parse(JSON.stringify(this.data.riskFormData));
      this.tempRiskFormData = JSON.parse(JSON.stringify(this.data.riskFormData));
      this.createRiskForm.get("parameter")?.setValue(this.riskFormData.parameter);
      this.createRiskForm.get("threshold")?.setValue(this.riskFormData.threshold);
      this.createRiskForm.get("subscriptionAction")?.setValue(this.riskFormData.subscriptionAction);
      this.createRiskForm.get("tradingAction")?.setValue(this.riskFormData.tradingAction);
      this.createRiskForm.get("parameter")?.updateValueAndValidity();
      this.createRiskForm.get("threshold")?.updateValueAndValidity();
      this.createRiskForm.get("subscriptionAction")?.updateValueAndValidity();
      this.createRiskForm.get("tradingAction")?.updateValueAndValidity();
    }
  }
  get getControl() {
    return this.createRiskForm.controls;
  }
  createOrUpdateRisk() {
    if (this.createRiskForm.invalid) {
      this.showError = true;
      return;
    }
    this.showLoader = true;
    this.showError = false;
    let param = this.getRiskParamObj();
    this._webService.createOrUpdateRiskData(param).subscribe({
      next: (response) => {
        this.showSuccessPopupMsg("Subscription has been updated");
        this.dialogRef.close({ action: "refresh_risk_data" });
        this.showLoader = false;
      },
      error: (errorObj) => {
        this.showLoader = false;
        this.showErrorWarnMessage(this.IConstant.errorMessageObj[errorObj?.error?.errorCode]);
        this.cdr.detectChanges();
      }
    });
  }
  getRiskParamObj() {
    let param = {
      rules: JSON.parse(JSON.stringify(this.riskData ? this.riskData : []))
    };
    let obj = {
      parameter: this.getControl["parameter"].value,
      threshold: this.getControl["threshold"].value,
      subscriptionAction: this.getControl["subscriptionAction"].value,
      tradingAction: this.getControl["tradingAction"].value
    };
    if (!this.isUpdate) {
      param["rules"].push(obj);
    } else {
      let indx = this.riskData.findIndex((o) => o.parameter == this.tempRiskFormData.parameter);
      param["rules"].splice(indx, 1, obj);
    }
    param["subscriptionId"] = this.subscriptionData.id;
    return param;
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
  closeDialog() {
    this.dialogRef.close({});
  }
  static \u0275fac = function CreateUpdateRiskDialog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CreateUpdateRiskDialog)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(WebService), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreateUpdateRiskDialog, selectors: [["create-update-risk-dialog"]], viewQuery: function CreateUpdateRiskDialog_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(ShowErrorStandAloneComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.errorComponent = _t.first);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 65, vars: 55, consts: [["mat-dialog-title", "", 1, "text-center"], [1, "text-center"], [3, "formGroup"], [1, "mat-typography"], [1, "common-field"], ["formControlName", "parameter"], [3, "value"], ["class", "pb-10", 4, "ngIf"], ["type", "number", "matInput", "", "placeholder", "100", "formControlName", "threshold"], ["matTextSuffix", ""], ["formControlName", "subscriptionAction"], ["formControlName", "tradingAction"], [1, "d-flex", "justify-center", "g-20"], [1, "secondary-btn", 3, "click"], ["type", "submit", 1, "primary-btn", 3, "click", "IcmLoadingOverlay"], [1, "pb-10"], [1, "pt-10"], [4, "ngIf"], [1, "px-10"]], template: function CreateUpdateRiskDialog_Template(rf, ctx) {
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
      \u0275\u0275elementStart(12, "mat-select", 5)(13, "mat-option", 6);
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "mat-option", 6);
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "mat-option", 6);
      \u0275\u0275text(20);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(22, CreateUpdateRiskDialog_p_22_Template, 3, 3, "p", 7)(23, CreateUpdateRiskDialog_mat_error_23_Template, 3, 3, "mat-error", 7);
      \u0275\u0275elementStart(24, "mat-form-field", 4)(25, "mat-label");
      \u0275\u0275text(26);
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(28, "input", 8);
      \u0275\u0275elementStart(29, "span", 9);
      \u0275\u0275text(30, "$");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(31, CreateUpdateRiskDialog_p_31_Template, 3, 3, "p", 7)(32, CreateUpdateRiskDialog_mat_error_32_Template, 3, 3, "mat-error", 7)(33, CreateUpdateRiskDialog_mat_error_33_Template, 3, 3, "mat-error", 7);
      \u0275\u0275elementStart(34, "mat-form-field", 4)(35, "mat-label");
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "mat-select", 10);
      \u0275\u0275template(39, CreateUpdateRiskDialog_Conditional_39_Template, 3, 4, "mat-option", 6);
      \u0275\u0275elementStart(40, "mat-option", 6);
      \u0275\u0275text(41);
      \u0275\u0275pipe(42, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "mat-option", 6);
      \u0275\u0275text(44);
      \u0275\u0275pipe(45, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(46, CreateUpdateRiskDialog_Conditional_46_Template, 10, 10)(47, CreateUpdateRiskDialog_mat_error_47_Template, 3, 3, "mat-error", 7);
      \u0275\u0275elementStart(48, "mat-form-field", 4)(49, "mat-label");
      \u0275\u0275text(50);
      \u0275\u0275pipe(51, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "mat-select", 11);
      \u0275\u0275template(53, CreateUpdateRiskDialog_Conditional_53_Template, 3, 4, "mat-option", 6)(54, CreateUpdateRiskDialog_Conditional_54_Template, 10, 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(55, CreateUpdateRiskDialog_Conditional_55_Template, 5, 4)(56, CreateUpdateRiskDialog_mat_error_56_Template, 3, 3, "mat-error", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "div", 12)(58, "button", 13);
      \u0275\u0275listener("click", function CreateUpdateRiskDialog_Template_button_click_58_listener() {
        return ctx.closeDialog();
      });
      \u0275\u0275text(59);
      \u0275\u0275pipe(60, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "button", 14);
      \u0275\u0275listener("click", function CreateUpdateRiskDialog_Template_button_click_61_listener() {
        return ctx.createOrUpdateRisk();
      });
      \u0275\u0275template(62, CreateUpdateRiskDialog_Conditional_62_Template, 2, 3)(63, CreateUpdateRiskDialog_Conditional_63_Template, 2, 3);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(64, "show-error-message");
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 31, "PROVIDERS_PROFILE.Risk Management"), "\n");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 33, "PROVIDERS_PROFILE.Setting up the subscription's acceptable risks"), "\n");
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.createRiskForm);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 35, "PROVIDERS_PROFILE.Parameter"));
      \u0275\u0275advance(3);
      \u0275\u0275property("value", "TotalLoss");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 37, "PROVIDERS_PROFILE.Total loss"));
      \u0275\u0275advance(2);
      \u0275\u0275property("value", "TotalProfit");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 39, "PROVIDERS_PROFILE.Total profit"));
      \u0275\u0275advance(2);
      \u0275\u0275property("value", "FloatingLoss");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 41, "PROVIDERS_PROFILE.Floating loss"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.showError || !(ctx.createRiskForm.controls["parameter"].errors == null ? null : ctx.createRiskForm.controls["parameter"].errors["required"]));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showError && (ctx.createRiskForm.controls["parameter"].errors == null ? null : ctx.createRiskForm.controls["parameter"].errors["required"]));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 43, "PROVIDERS_PROFILE.Threshold"));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", !ctx.showError || !(ctx.createRiskForm.controls["threshold"].errors == null ? null : ctx.createRiskForm.controls["threshold"].errors["required"]) && !(ctx.createRiskForm.controls["threshold"].errors == null ? null : ctx.createRiskForm.controls["threshold"].errors["min"]));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showError && (ctx.createRiskForm.controls["threshold"].errors == null ? null : ctx.createRiskForm.controls["threshold"].errors["required"]));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showError && (ctx.createRiskForm.controls["threshold"].errors == null ? null : ctx.createRiskForm.controls["threshold"].errors["min"]));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 45, "PROVIDERS_PROFILE.Subscription Action"));
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.createRiskForm.controls["parameter"].value == "FloatingLoss" ? 39 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("value", "Suspend");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(42, 47, "PROVIDERS_PROFILE.Suspend"));
      \u0275\u0275advance(2);
      \u0275\u0275property("value", "Unsubscribe");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(45, 49, "PROVIDERS_PROFILE.Unsubscribe"));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.showError || !(ctx.createRiskForm.controls["subscriptionAction"].errors == null ? null : ctx.createRiskForm.controls["subscriptionAction"].errors["required"]) ? 46 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showError && (ctx.createRiskForm.controls["subscriptionAction"].errors == null ? null : ctx.createRiskForm.controls["subscriptionAction"].errors["required"]));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(51, 51, "PROVIDERS_PROFILE.Trading Action"));
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.createRiskForm.controls["subscriptionAction"].value == "Unsubscribe" ? 53 : 54);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.showError || !(ctx.createRiskForm.controls["tradingAction"].errors == null ? null : ctx.createRiskForm.controls["tradingAction"].errors["required"]) ? 55 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showError && (ctx.createRiskForm.controls["tradingAction"].errors == null ? null : ctx.createRiskForm.controls["tradingAction"].errors["required"]));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(60, 53, "COMMON.Cancel"));
      \u0275\u0275advance(2);
      \u0275\u0275property("IcmLoadingOverlay", ctx.showLoader);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isUpdate ? 62 : 63);
    }
  }, dependencies: [MatDialogModule, MatDialogTitle, MatDialogContent, MatInputModule, MatInput, MatFormField, MatLabel, MatError, MatSuffix, MatSelectModule, MatSelect, MatOption, CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, ShowErrorStandAloneComponent, TranslateModule, TranslatePipe, IcmLoadingOverlayDirective], styles: ["\n\n  .create-update-risk-dialog {\n  width: 600px !important;\n  border-radius: 10px !important;\n}\n  .create-update-risk-dialog .mat-mdc-dialog-title {\n  margin: unset !important;\n  padding-bottom: 10px !important;\n}\n  .create-update-risk-dialog .mat-mdc-dialog-surface {\n  border-radius: 10px !important;\n  background: white !important;\n  padding: 20px !important;\n}\n  .create-update-risk-dialog .common-field {\n  width: 100% !important;\n}\n  .create-update-risk-dialog .common-field .mdc-text-field {\n  background-color: white;\n  border: 1px solid;\n  border-bottom: 0px;\n}\n  .create-update-risk-dialog .common-field .mdc-text-field textarea {\n  resize: none;\n}\n  .create-update-risk-dialog .common-field .mdc-text-field .mat-mdc-form-field-text-suffix {\n  font-size: 20px;\n}\n/*# sourceMappingURL=createUpdateRisk.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreateUpdateRiskDialog, { className: "CreateUpdateRiskDialog", filePath: "src\\app\\web\\shared\\dialogBox\\create-update-risk-dialog\\createUpdateRisk.standalone.component.ts", lineNumber: 20 });
})();

// src/app/web/shared/dialogBox/subscription-common-info-dialog/subscriptionCommonInfoDialog.standalone.component.ts
function SubscriptionCommonInfoDialog_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "PROVIDERS_PROFILE.Provider Filters"), " ");
  }
}
function SubscriptionCommonInfoDialog_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "SUBSCRIPTION.Subscription Strategy"), " ");
  }
}
function SubscriptionCommonInfoDialog_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "PROVIDERS_PROFILE.Correction"), " ");
  }
}
function SubscriptionCommonInfoDialog_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "PROVIDERS_PROFILE.Setting up initial filters for provider's original trades"), " ");
  }
}
function SubscriptionCommonInfoDialog_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "PROVIDERS_PROFILE.Setting up the difference between source and copied trades"), " ");
  }
}
function SubscriptionCommonInfoDialog_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "PROVIDERS_PROFILE.Final processing of copies' parameters"), " ");
  }
}
function SubscriptionCommonInfoDialog_Conditional_10_p_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "PROVIDERS_PROFILE.Provider deals of only specified direction will be copied"), " ");
  }
}
function SubscriptionCommonInfoDialog_Conditional_10_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "login.FieldRequired"), "");
  }
}
function SubscriptionCommonInfoDialog_Conditional_10_p_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "PROVIDERS_PROFILE.New provider deals with volumes lower than the specified will not be copied"), " ");
  }
}
function SubscriptionCommonInfoDialog_Conditional_10_mat_error_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "PROVIDERS_PROFILE.Value must be greater than 0"), "");
  }
}
function SubscriptionCommonInfoDialog_Conditional_10_mat_error_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "PROVIDERS_PROFILE.Wrong value"), " ");
  }
}
function SubscriptionCommonInfoDialog_Conditional_10_p_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "PROVIDERS_PROFILE.New provider deals with volumes equal or higher than the specified will not be copied"), " ");
  }
}
function SubscriptionCommonInfoDialog_Conditional_10_mat_error_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "PROVIDERS_PROFILE.Value must be greater than 0"), "");
  }
}
function SubscriptionCommonInfoDialog_Conditional_10_mat_error_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "PROVIDERS_PROFILE.Wrong value"), " ");
  }
}
function SubscriptionCommonInfoDialog_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 7)(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-select", 8)(5, "mat-option", 9);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-option", 9);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-option", 9);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(14, SubscriptionCommonInfoDialog_Conditional_10_p_14_Template, 3, 3, "p", 10)(15, SubscriptionCommonInfoDialog_Conditional_10_mat_error_15_Template, 3, 3, "mat-error", 10);
    \u0275\u0275elementStart(16, "mat-form-field", 7)(17, "mat-label");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, SubscriptionCommonInfoDialog_Conditional_10_p_21_Template, 3, 3, "p", 10)(22, SubscriptionCommonInfoDialog_Conditional_10_mat_error_22_Template, 3, 3, "mat-error", 10)(23, SubscriptionCommonInfoDialog_Conditional_10_mat_error_23_Template, 3, 3, "mat-error", 10);
    \u0275\u0275elementStart(24, "mat-form-field", 7)(25, "mat-label");
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "input", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, SubscriptionCommonInfoDialog_Conditional_10_p_29_Template, 3, 3, "p", 10)(30, SubscriptionCommonInfoDialog_Conditional_10_mat_error_30_Template, 3, 3, "mat-error", 10)(31, SubscriptionCommonInfoDialog_Conditional_10_mat_error_31_Template, 3, 3, "mat-error", 10);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 17, "PROVIDERS_PROFILE.Direction"));
    \u0275\u0275advance(3);
    \u0275\u0275property("value", "All");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 19, "COMMON.All"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", "Buy");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 21, "PROVIDERS_PROFILE.Buy"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", "Sell");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 23, "PROVIDERS_PROFILE.Sell"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.showError || !(ctx_r0.subscriptionCommonInfoForm.controls["direction"].errors == null ? null : ctx_r0.subscriptionCommonInfoForm.controls["direction"].errors["required"]));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showError && (ctx_r0.subscriptionCommonInfoForm.controls["direction"].errors == null ? null : ctx_r0.subscriptionCommonInfoForm.controls["direction"].errors["required"]));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 25, "PROVIDERS_PROFILE.Minimum lots"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r0.showError || !(ctx_r0.subscriptionCommonInfoForm.controls["minimumLot"].errors == null ? null : ctx_r0.subscriptionCommonInfoForm.controls["minimumLot"].errors["min"]) && !(ctx_r0.subscriptionCommonInfoForm.controls["minimumLot"].errors == null ? null : ctx_r0.subscriptionCommonInfoForm.controls["minimumLot"].errors["wrongValue"]));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showError && (ctx_r0.subscriptionCommonInfoForm.controls["minimumLot"].errors == null ? null : ctx_r0.subscriptionCommonInfoForm.controls["minimumLot"].errors["min"]));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showError && (ctx_r0.subscriptionCommonInfoForm.controls["minimumLot"].errors == null ? null : ctx_r0.subscriptionCommonInfoForm.controls["minimumLot"].errors["wrongValue"]));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 27, "PROVIDERS_PROFILE.Maximum lots"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r0.showError || !(ctx_r0.subscriptionCommonInfoForm.controls["maximumLot"].errors == null ? null : ctx_r0.subscriptionCommonInfoForm.controls["maximumLot"].errors["min"]) && !(ctx_r0.subscriptionCommonInfoForm.controls["maximumLot"].errors == null ? null : ctx_r0.subscriptionCommonInfoForm.controls["maximumLot"].errors["wrongValue"]));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showError && (ctx_r0.subscriptionCommonInfoForm.controls["maximumLot"].errors == null ? null : ctx_r0.subscriptionCommonInfoForm.controls["maximumLot"].errors["min"]));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showError && (ctx_r0.subscriptionCommonInfoForm.controls["maximumLot"].errors == null ? null : ctx_r0.subscriptionCommonInfoForm.controls["maximumLot"].errors["wrongValue"]));
  }
}
function SubscriptionCommonInfoDialog_Conditional_11_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 16)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "em");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, ". ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 17)(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementStart(17, "em");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, ". ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 7, "PROVIDERS_PROFILE.Multiply"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" - ", \u0275\u0275pipeBind1(5, 9, "PROVIDERS_PROFILE.A copy's volume is equal to the provider's original volume multiplied by the"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 11, "PROVIDERS_PROFILE.Volume multiplier"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 13, "PROVIDERS_PROFILE.Fixed"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" - ", \u0275\u0275pipeBind1(15, 15, "PROVIDERS_PROFILE.Copies' volumes"), " ", \u0275\u0275pipeBind1(16, 17, "PROVIDERS_PROFILE.are always equal to the specified"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(19, 19, "PROVIDERS_PROFILE.Copies' volumes"), ".");
  }
}
function SubscriptionCommonInfoDialog_Conditional_11_mat_error_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "login.FieldRequired"), " ");
  }
}
function SubscriptionCommonInfoDialog_Conditional_11_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "PROVIDERS_PROFILE.Volume multiplier"), " ");
  }
}
function SubscriptionCommonInfoDialog_Conditional_11_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "PROVIDERS_PROFILE.Copies' volumes"), " ");
  }
}
function SubscriptionCommonInfoDialog_Conditional_11_p_18_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "PROVIDERS_PROFILE.Number to multiply the provider's volume by for a copy"), " ");
  }
}
function SubscriptionCommonInfoDialog_Conditional_11_p_18_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "PROVIDERS_PROFILE.Volume to be opened on each copy"), " ");
  }
}
function SubscriptionCommonInfoDialog_Conditional_11_p_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275template(1, SubscriptionCommonInfoDialog_Conditional_11_p_18_Conditional_1_Template, 2, 3)(2, SubscriptionCommonInfoDialog_Conditional_11_p_18_Conditional_2_Template, 2, 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.subscriptionCommonInfoForm.controls["type"].value == "Multiply" ? 1 : 2);
  }
}
function SubscriptionCommonInfoDialog_Conditional_11_mat_error_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "PROVIDERS_PROFILE.Value must be greater than 0"), " ");
  }
}
function SubscriptionCommonInfoDialog_Conditional_11_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "login.FieldRequired"), " ");
  }
}
function SubscriptionCommonInfoDialog_Conditional_11_Conditional_21_p_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "PROVIDERS_PROFILE.Provider deals of only specified direction will be copied"), " ");
  }
}
function SubscriptionCommonInfoDialog_Conditional_11_Conditional_21_mat_error_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "login.FieldRequired"), " ");
  }
}
function SubscriptionCommonInfoDialog_Conditional_11_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 7)(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-select", 18)(5, "mat-option", 9);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-option", 9);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(11, SubscriptionCommonInfoDialog_Conditional_11_Conditional_21_p_11_Template, 3, 3, "p", 10)(12, SubscriptionCommonInfoDialog_Conditional_11_Conditional_21_mat_error_12_Template, 3, 3, "mat-error", 10);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 7, "PROVIDERS_PROFILE.Minimum Volume Handling"));
    \u0275\u0275advance(3);
    \u0275\u0275property("value", "Skip");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 9, "PROVIDERS_PROFILE.Skip"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", "MinLot");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 11, "PROVIDERS_PROFILE.MinLot"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.showError || !(ctx_r0.subscriptionCommonInfoForm.controls["minVolumeHandling"].errors == null ? null : ctx_r0.subscriptionCommonInfoForm.controls["minVolumeHandling"].errors["required"]));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showError && (ctx_r0.subscriptionCommonInfoForm.controls["minVolumeHandling"].errors == null ? null : ctx_r0.subscriptionCommonInfoForm.controls["minVolumeHandling"].errors["required"]));
  }
}
function SubscriptionCommonInfoDialog_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 7)(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-select", 14)(5, "mat-option", 9);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-option", 9);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(11, SubscriptionCommonInfoDialog_Conditional_11_Conditional_11_Template, 21, 21)(12, SubscriptionCommonInfoDialog_Conditional_11_mat_error_12_Template, 3, 3, "mat-error", 10);
    \u0275\u0275elementStart(13, "mat-form-field", 7)(14, "mat-label");
    \u0275\u0275template(15, SubscriptionCommonInfoDialog_Conditional_11_Conditional_15_Template, 2, 3)(16, SubscriptionCommonInfoDialog_Conditional_11_Conditional_16_Template, 2, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, SubscriptionCommonInfoDialog_Conditional_11_p_18_Template, 3, 1, "p", 10)(19, SubscriptionCommonInfoDialog_Conditional_11_mat_error_19_Template, 3, 3, "mat-error", 10)(20, SubscriptionCommonInfoDialog_Conditional_11_mat_error_20_Template, 3, 3, "mat-error", 10)(21, SubscriptionCommonInfoDialog_Conditional_11_Conditional_21_Template, 13, 13);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 12, "SUBSCRIPTION.Volume scaling"));
    \u0275\u0275advance(3);
    \u0275\u0275property("value", "Multiply");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 14, "PROVIDERS_PROFILE.Multiply"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", "Fixed");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 16, "PROVIDERS_PROFILE.Fixed"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r0.showError || !(ctx_r0.subscriptionCommonInfoForm.controls["type"].errors == null ? null : ctx_r0.subscriptionCommonInfoForm.controls["type"].errors["required"]) ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showError && (ctx_r0.subscriptionCommonInfoForm.controls["type"].errors == null ? null : ctx_r0.subscriptionCommonInfoForm.controls["type"].errors["required"]));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.subscriptionCommonInfoForm.controls["type"].value == "Multiply" ? 15 : 16);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r0.showError || !(ctx_r0.subscriptionCommonInfoForm.controls["riskRatio"].errors == null ? null : ctx_r0.subscriptionCommonInfoForm.controls["riskRatio"].errors["min"]) && !(ctx_r0.subscriptionCommonInfoForm.controls["riskRatio"].errors == null ? null : ctx_r0.subscriptionCommonInfoForm.controls["riskRatio"].errors["required"]));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showError && (ctx_r0.subscriptionCommonInfoForm.controls["riskRatio"].errors == null ? null : ctx_r0.subscriptionCommonInfoForm.controls["riskRatio"].errors["min"]));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showError && (ctx_r0.subscriptionCommonInfoForm.controls["riskRatio"].errors == null ? null : ctx_r0.subscriptionCommonInfoForm.controls["riskRatio"].errors["required"]));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.subscriptionCommonInfoForm.controls["type"].value == "Multiply" ? 21 : -1);
  }
}
function SubscriptionCommonInfoDialog_Conditional_12_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "PROVIDERS_PROFILE.The maximum volume to be copied"), " ");
  }
}
function SubscriptionCommonInfoDialog_Conditional_12_mat_error_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "PROVIDERS_PROFILE.Value must be greater than 0"), " ");
  }
}
function SubscriptionCommonInfoDialog_Conditional_12_Conditional_7_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 17);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 4, "PROVIDERS_PROFILE.Risk Factor Hint"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 6, "PROVIDERS_PROFILE.Scale down: The resulting volume of the copy will be equal to Max open volume"), " . ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(8, 8, "PROVIDERS_PROFILE.Skip"), ": ", \u0275\u0275pipeBind1(9, 10, "PROVIDERS_PROFILE.The copy will not be opened"), " . ");
  }
}
function SubscriptionCommonInfoDialog_Conditional_12_Conditional_7_mat_error_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "login.FieldRequired"), " ");
  }
}
function SubscriptionCommonInfoDialog_Conditional_12_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 7)(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-select", 20)(5, "mat-option", 9);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-option", 9);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(11, SubscriptionCommonInfoDialog_Conditional_12_Conditional_7_Conditional_11_Template, 10, 12)(12, SubscriptionCommonInfoDialog_Conditional_12_Conditional_7_mat_error_12_Template, 3, 3, "mat-error", 10);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 7, "PROVIDERS_PROFILE.Action"));
    \u0275\u0275advance(3);
    \u0275\u0275property("value", "Skip");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 9, "PROVIDERS_PROFILE.Skip"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", "ScaleDown");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 11, "PROVIDERS_PROFILE.Scale down"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r0.showError || !(ctx_r0.subscriptionCommonInfoForm.controls["action"].errors == null ? null : ctx_r0.subscriptionCommonInfoForm.controls["action"].errors["required"]) ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showError && (ctx_r0.subscriptionCommonInfoForm.controls["action"].errors == null ? null : ctx_r0.subscriptionCommonInfoForm.controls["action"].errors["required"]));
  }
}
function SubscriptionCommonInfoDialog_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 7)(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SubscriptionCommonInfoDialog_Conditional_12_p_5_Template, 3, 3, "p", 10)(6, SubscriptionCommonInfoDialog_Conditional_12_mat_error_6_Template, 3, 3, "mat-error", 10)(7, SubscriptionCommonInfoDialog_Conditional_12_Conditional_7_Template, 13, 13);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "PROVIDERS_PROFILE.Max open volume"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r0.showError || !(ctx_r0.subscriptionCommonInfoForm.controls["riskFactor"].errors == null ? null : ctx_r0.subscriptionCommonInfoForm.controls["riskFactor"].errors["min"]));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showError && (ctx_r0.subscriptionCommonInfoForm.controls["riskFactor"].errors == null ? null : ctx_r0.subscriptionCommonInfoForm.controls["riskFactor"].errors["min"]));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.subscriptionCommonInfoForm.controls["riskFactor"].value ? 7 : -1);
  }
}
var SubscriptionCommonInfoDialog = class _SubscriptionCommonInfoDialog {
  data;
  dialogRef;
  fb;
  _webService;
  subscriptionCommonInfoForm;
  subscriptionData;
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
    this.subscriptionData = data.subscriptionData;
    this.modelType = data.modelType;
    this.subscriptionCommonInfoForm = this.fb.group({
      direction: [""],
      minimumLot: [""],
      maximumLot: [""],
      type: [""],
      riskRatio: [""],
      minVolumeHandling: [""],
      riskFactor: [""],
      action: [""]
    });
    this.setFollowerFormData();
  }
  get getControl() {
    return this.subscriptionCommonInfoForm.controls;
  }
  getFollowerParamObj() {
    let param = {};
    if (this.modelType == "filters") {
      param["filters"] = JSON.parse(JSON.stringify(this.subscriptionData.filters || {}));
      param["filters"]["direction"] = this.getControl["direction"].value;
      param["filters"]["minimumLot"] = this.getControl["minimumLot"].value || null;
      param["filters"]["maximumLot"] = this.getControl["maximumLot"].value || null;
    } else if (this.modelType == "strategy") {
      param["strategy"] = JSON.parse(JSON.stringify(this.subscriptionData.strategy || {}));
      param["strategy"]["type"] = this.getControl["type"].value;
      param["strategy"]["riskRatio"] = this.getControl["riskRatio"].value;
      delete param["strategy"]["minVolumeHandling"];
      if (param["strategy"]["type"] == "Multiply") {
        param["strategy"]["minVolumeHandling"] = this.getControl["minVolumeHandling"].value;
      }
    } else if (this.modelType == "correction") {
      param["correction"] = JSON.parse(JSON.stringify(this.subscriptionData.correction || {}));
      param["correction"]["riskFactor"] = this.getControl["riskFactor"].value || null;
      delete param["correction"]["action"];
      if (param["correction"]["riskFactor"]) {
        param["correction"]["action"] = this.getControl["action"].value;
      }
    }
    param["subscriptionId"] = this.subscriptionData.id;
    return param;
  }
  updateFollowerDetails() {
    if (this.subscriptionCommonInfoForm.invalid) {
      this.showError = true;
      return;
    }
    this.showLoader = true;
    this.showError = false;
    let param = this.getFollowerParamObj();
    this._webService.updateFollowerDataById(param).subscribe({
      next: (response) => {
        this.showSuccessPopupMsg("Subscription has been updated");
        this.dialogRef.close({ action: "refresh_subscription_data" });
        this.showLoader = false;
      },
      error: (errorObj) => {
        this.showLoader = false;
        this.showErrorWarnMessage(this.IConstant.errorMessageObj[errorObj?.error?.errorCode]);
      }
    });
  }
  minAndMaxValidationForLot() {
    return (control) => {
      const form = control?.parent;
      if (!form)
        return null;
      let minValue = form.get("minimumLot")?.value || "";
      let maxValue = form.get("maximumLot")?.value || "";
      if (minValue && maxValue && (minValue > maxValue || minValue == maxValue || maxValue < minValue)) {
        return { wrongValue: true };
      }
      return null;
    };
  }
  minVolumeHandlingValidator() {
    return (control) => {
      const form = control?.parent;
      if (!form)
        return null;
      let type = form.get("type")?.value || 0;
      let minVolumeHandling = form.get("minVolumeHandling")?.value || "";
      if (type == "Multiply" && !minVolumeHandling) {
        return { required: true };
      }
      return null;
    };
  }
  riskActionValidators() {
    return (control) => {
      const form = control?.parent;
      if (!form)
        return null;
      let riskFactor = form.get("riskFactor")?.value || "";
      if (riskFactor) {
        const actionControl = form.get("action");
        if (actionControl) {
          actionControl.setValidators([Validators.required]);
          actionControl.updateValueAndValidity();
        }
        return null;
      }
      return null;
    };
  }
  setFollowerFormData() {
    if (this.modelType == "filters") {
      this.subscriptionCommonInfoForm.patchValue({
        direction: this.subscriptionData.filters.direction,
        minimumLot: this.subscriptionData.filters.minimumLot,
        maximumLot: this.subscriptionData.filters.maximumLot
      });
      this.getControl["direction"].setValidators([Validators.required]);
      this.getControl["minimumLot"].setValidators([Validators.min(1), this.minAndMaxValidationForLot()]);
      this.getControl["maximumLot"].setValidators([Validators.min(1), this.minAndMaxValidationForLot()]);
      this.getControl["direction"].updateValueAndValidity();
      this.getControl["minimumLot"].updateValueAndValidity();
      this.getControl["maximumLot"].updateValueAndValidity();
    } else if (this.modelType == "strategy") {
      this.subscriptionCommonInfoForm.patchValue({
        type: this.subscriptionData.strategy.type,
        riskRatio: this.subscriptionData.strategy.riskRatio,
        minVolumeHandling: this.subscriptionData.strategy.minVolumeHandling
      });
      this.getControl["type"].setValidators([Validators.required]);
      this.getControl["riskRatio"].setValidators([Validators.required, Validators.min(1)]);
      this.getControl["minVolumeHandling"].setValidators([this.minVolumeHandlingValidator()]);
      this.getControl["type"].updateValueAndValidity();
      this.getControl["riskRatio"].updateValueAndValidity();
      this.getControl["minVolumeHandling"].updateValueAndValidity();
    } else if (this.modelType == "correction") {
      this.subscriptionCommonInfoForm.patchValue({
        riskFactor: this.subscriptionData.correction.riskFactor,
        action: this.subscriptionData.correction.action
      });
      this.getControl["riskFactor"].setValidators([Validators.min(1), this.riskActionValidators()]);
      this.getControl["riskFactor"].updateValueAndValidity();
    }
    this.subscriptionCommonInfoForm.updateValueAndValidity();
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
  closeFollowerInfoForm() {
    this.dialogRef.close({});
  }
  static \u0275fac = function SubscriptionCommonInfoDialog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SubscriptionCommonInfoDialog)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(WebService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SubscriptionCommonInfoDialog, selectors: [["subscription-commongInfo-dialog"]], viewQuery: function SubscriptionCommonInfoDialog_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(ShowErrorStandAloneComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.errorComponent = _t.first);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 21, vars: 17, consts: [["mat-dialog-title", "", 1, "text-center"], [1, "text-center"], [3, "formGroup"], [1, "mat-typography"], [1, "d-flex", "justify-center", "g-20"], [1, "secondary-btn", 3, "click"], ["type", "submit", 1, "primary-btn", 3, "click", "IcmLoadingOverlay"], [1, "common-field"], ["formControlName", "direction"], [3, "value"], ["class", "pb-10", 4, "ngIf"], ["type", "number", "matInput", "", "placeholder", "1", "formControlName", "minimumLot"], ["type", "number", "matInput", "", "placeholder", "10", "formControlName", "maximumLot"], [1, "pb-10"], ["formControlName", "type"], ["type", "number", "matInput", "", "placeholder", "1", "formControlName", "riskRatio"], [1, "pt-10"], [1, "px-10"], ["formControlName", "minVolumeHandling"], ["type", "number", "matInput", "", "placeholder", "0.01", "formControlName", "riskFactor"], ["formControlName", "action"]], template: function SubscriptionCommonInfoDialog_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h2", 0);
      \u0275\u0275template(1, SubscriptionCommonInfoDialog_Conditional_1_Template, 2, 3)(2, SubscriptionCommonInfoDialog_Conditional_2_Template, 2, 3)(3, SubscriptionCommonInfoDialog_Conditional_3_Template, 2, 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 1);
      \u0275\u0275template(5, SubscriptionCommonInfoDialog_Conditional_5_Template, 2, 3)(6, SubscriptionCommonInfoDialog_Conditional_6_Template, 2, 3)(7, SubscriptionCommonInfoDialog_Conditional_7_Template, 2, 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "form", 2)(9, "mat-dialog-content", 3);
      \u0275\u0275template(10, SubscriptionCommonInfoDialog_Conditional_10_Template, 32, 29)(11, SubscriptionCommonInfoDialog_Conditional_11_Template, 22, 18)(12, SubscriptionCommonInfoDialog_Conditional_12_Template, 8, 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 4)(14, "button", 5);
      \u0275\u0275listener("click", function SubscriptionCommonInfoDialog_Template_button_click_14_listener() {
        return ctx.closeFollowerInfoForm();
      });
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "button", 6);
      \u0275\u0275listener("click", function SubscriptionCommonInfoDialog_Template_button_click_17_listener() {
        return ctx.updateFollowerDetails();
      });
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(20, "show-error-message");
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.modelType == "filters" ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.modelType == "strategy" ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.modelType == "correction" ? 3 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.modelType == "filters" ? 5 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.modelType == "strategy" ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.modelType == "correction" ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.subscriptionCommonInfoForm);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.modelType == "filters" ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.modelType == "strategy" ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.modelType == "correction" ? 12 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 13, "COMMON.Cancel"));
      \u0275\u0275advance(2);
      \u0275\u0275property("IcmLoadingOverlay", ctx.showLoader);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 15, "COMMON.Save Changes"));
    }
  }, dependencies: [MatDialogModule, MatDialogTitle, MatDialogContent, MatInputModule, MatInput, MatFormField, MatLabel, MatError, MatExpansionModule, MatSelectModule, MatSelect, MatOption, CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, ShowErrorStandAloneComponent, TranslateModule, TranslatePipe, IcmLoadingOverlayDirective], styles: ["\n\n  .subscriptionProfile-commonInfo {\n  width: 600px !important;\n  border-radius: 10px !important;\n}\n  .subscriptionProfile-commonInfo .mat-mdc-dialog-title {\n  margin: unset !important;\n  padding-bottom: 10px !important;\n}\n  .subscriptionProfile-commonInfo .mat-mdc-dialog-surface {\n  border-radius: 10px !important;\n  background: white !important;\n  padding: 20px !important;\n}\n  .subscriptionProfile-commonInfo .common-field {\n  width: 100% !important;\n}\n  .subscriptionProfile-commonInfo .common-field .mdc-text-field {\n  background-color: white;\n  border: 1px solid;\n  border-bottom: 0px;\n}\n  .subscriptionProfile-commonInfo .common-field .mdc-text-field textarea {\n  resize: none;\n}\n  .subscriptionProfile-commonInfo .common-field .mdc-text-field .mat-mdc-form-field-text-suffix {\n  font-size: 20px;\n}\n/*# sourceMappingURL=subscriptionCommonInfoDialog.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SubscriptionCommonInfoDialog, { className: "SubscriptionCommonInfoDialog", filePath: "src\\app\\web\\shared\\dialogBox\\subscription-common-info-dialog\\subscriptionCommonInfoDialog.standalone.component.ts", lineNumber: 22 });
})();

// src/app/web/views/subscriptions/subscriptions.component.ts
var _c0 = (a0) => ({ "btn-disable": a0 });
function SubscriptionsStandAloneComponent_mat_card_content_1_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "PROVIDERS_PROFILE.Suspend"), " ");
  }
}
function SubscriptionsStandAloneComponent_mat_card_content_1_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "PROVIDERS_PROFILE.Activate"), " ");
  }
}
function SubscriptionsStandAloneComponent_mat_card_content_1_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "lowercase");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(3, 4, "PROVIDERS_PROFILE.Suspended since"), ": ", \u0275\u0275pipeBind2(4, 6, ctx_r1.subscriptionData.suspension.timeUtc, "M/d/yy"), "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(7, 9, "PROVIDERS_PROFILE.Suspension reason: Subscription was suspended by the"), " ", \u0275\u0275pipeBind1(8, 11, ctx_r1.subscriptionData.suspension.reason), ".");
  }
}
function SubscriptionsStandAloneComponent_mat_card_content_1_div_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "h6");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "PROVIDERS_PROFILE.Minimum Volume Handling"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r1.subscriptionData == null ? null : ctx_r1.subscriptionData.strategy == null ? null : ctx_r1.subscriptionData.strategy.minVolumeHandling) ? ctx_r1.subscriptionData == null ? null : ctx_r1.subscriptionData.strategy == null ? null : ctx_r1.subscriptionData.strategy.minVolumeHandling : "-");
  }
}
function SubscriptionsStandAloneComponent_mat_card_content_1_Conditional_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate3(" ", ctx_r1.subscriptionData == null ? null : ctx_r1.subscriptionData.correction.action, " ", (ctx_r1.subscriptionData == null ? null : ctx_r1.subscriptionData.correction.action) == "Scale down" ? "from" : "to", " ", ctx_r1.subscriptionData == null ? null : ctx_r1.subscriptionData.correction.riskFactor, " lot(s) ");
  }
}
function SubscriptionsStandAloneComponent_mat_card_content_1_Conditional_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " - ");
  }
}
function SubscriptionsStandAloneComponent_mat_card_content_1_p_124_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 49);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "PROVIDERS_PROFILE.Email Not Exist Warn Msg"), " ");
  }
}
function SubscriptionsStandAloneComponent_mat_card_content_1_img_148_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 50);
  }
}
function SubscriptionsStandAloneComponent_mat_card_content_1_img_149_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 51);
  }
}
function SubscriptionsStandAloneComponent_mat_card_content_1_div_150_p_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 54);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "PROVIDERS_PROFILE.SuspendActiveMsg"));
  }
}
function SubscriptionsStandAloneComponent_mat_card_content_1_div_150_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 55);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "PROVIDERS_PROFILE.SuspendDeActiveMsg"));
  }
}
function SubscriptionsStandAloneComponent_mat_card_content_1_div_150_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275template(1, SubscriptionsStandAloneComponent_mat_card_content_1_div_150_p_1_Template, 3, 3, "p", 52)(2, SubscriptionsStandAloneComponent_mat_card_content_1_div_150_p_2_Template, 3, 3, "p", 53);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.subscriptionData.activationStatus);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.subscriptionData.activationStatus);
  }
}
function SubscriptionsStandAloneComponent_mat_card_content_1_div_164_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 37)(2, "h6");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 38)(6, "h6", 42);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "PROVIDERS_PROFILE.Archive reason"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.subscriptionData == null ? null : ctx_r1.subscriptionData.archiveReason);
  }
}
function SubscriptionsStandAloneComponent_mat_card_content_1_Conditional_181_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, ctx_r1.subscriptionData == null ? null : ctx_r1.subscriptionData.activation == null ? null : ctx_r1.subscriptionData.activation.timeUtc, "M/d/yy, h:mm:ss a"), " ");
  }
}
function SubscriptionsStandAloneComponent_mat_card_content_1_Conditional_182_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " - ");
  }
}
function SubscriptionsStandAloneComponent_mat_card_content_1_mat_tab_269_ng_template_2_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 60);
    \u0275\u0275listener("click", function SubscriptionsStandAloneComponent_mat_card_content_1_mat_tab_269_ng_template_2_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const tab_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearFilters(tab_r4));
    });
    \u0275\u0275element(1, "img", 64);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.Clear"), " ");
  }
}
function SubscriptionsStandAloneComponent_mat_card_content_1_mat_tab_269_ng_template_2_Conditional_8_mat_form_field_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field")(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function SubscriptionsStandAloneComponent_mat_card_content_1_mat_tab_269_ng_template_2_Conditional_8_mat_form_field_0_Template_input_ngModelChange_4_listener($event) {
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
function SubscriptionsStandAloneComponent_mat_card_content_1_mat_tab_269_ng_template_2_Conditional_8_mat_form_field_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field")(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function SubscriptionsStandAloneComponent_mat_card_content_1_mat_tab_269_ng_template_2_Conditional_8_mat_form_field_1_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r7);
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
function SubscriptionsStandAloneComponent_mat_card_content_1_mat_tab_269_ng_template_2_Conditional_8_mat_form_field_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field")(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-select", 67);
    \u0275\u0275twoWayListener("ngModelChange", function SubscriptionsStandAloneComponent_mat_card_content_1_mat_tab_269_ng_template_2_Conditional_8_mat_form_field_2_Template_mat_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r8);
      const tab_r4 = \u0275\u0275nextContext(3).$implicit;
      \u0275\u0275twoWayBindingSet(tab_r4.filters.type.posState, $event) || (tab_r4.filters.type.posState = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(5, "mat-option", 68);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-option", 68);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-option", 68);
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
function SubscriptionsStandAloneComponent_mat_card_content_1_mat_tab_269_ng_template_2_Conditional_8_mat_form_field_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field")(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 69);
    \u0275\u0275twoWayListener("ngModelChange", function SubscriptionsStandAloneComponent_mat_card_content_1_mat_tab_269_ng_template_2_Conditional_8_mat_form_field_3_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r9);
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
function SubscriptionsStandAloneComponent_mat_card_content_1_mat_tab_269_ng_template_2_Conditional_8_mat_form_field_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field")(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-select", 67);
    \u0275\u0275twoWayListener("ngModelChange", function SubscriptionsStandAloneComponent_mat_card_content_1_mat_tab_269_ng_template_2_Conditional_8_mat_form_field_4_Template_mat_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r10);
      const tab_r4 = \u0275\u0275nextContext(3).$implicit;
      \u0275\u0275twoWayBindingSet(tab_r4.filters.type.entry, $event) || (tab_r4.filters.type.entry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(5, "mat-option", 68);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-option", 68);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-option", 68);
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
function SubscriptionsStandAloneComponent_mat_card_content_1_mat_tab_269_ng_template_2_Conditional_8_mat_form_field_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field")(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 69);
    \u0275\u0275twoWayListener("ngModelChange", function SubscriptionsStandAloneComponent_mat_card_content_1_mat_tab_269_ng_template_2_Conditional_8_mat_form_field_5_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r11);
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
function SubscriptionsStandAloneComponent_mat_card_content_1_mat_tab_269_ng_template_2_Conditional_8_mat_form_field_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field")(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function SubscriptionsStandAloneComponent_mat_card_content_1_mat_tab_269_ng_template_2_Conditional_8_mat_form_field_6_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r12);
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
function SubscriptionsStandAloneComponent_mat_card_content_1_mat_tab_269_ng_template_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SubscriptionsStandAloneComponent_mat_card_content_1_mat_tab_269_ng_template_2_Conditional_8_mat_form_field_0_Template, 5, 4, "mat-form-field", 65)(1, SubscriptionsStandAloneComponent_mat_card_content_1_mat_tab_269_ng_template_2_Conditional_8_mat_form_field_1_Template, 5, 4, "mat-form-field", 65)(2, SubscriptionsStandAloneComponent_mat_card_content_1_mat_tab_269_ng_template_2_Conditional_8_mat_form_field_2_Template, 13, 13, "mat-form-field", 65)(3, SubscriptionsStandAloneComponent_mat_card_content_1_mat_tab_269_ng_template_2_Conditional_8_mat_form_field_3_Template, 5, 4, "mat-form-field", 65)(4, SubscriptionsStandAloneComponent_mat_card_content_1_mat_tab_269_ng_template_2_Conditional_8_mat_form_field_4_Template, 13, 13, "mat-form-field", 65)(5, SubscriptionsStandAloneComponent_mat_card_content_1_mat_tab_269_ng_template_2_Conditional_8_mat_form_field_5_Template, 5, 4, "mat-form-field", 65)(6, SubscriptionsStandAloneComponent_mat_card_content_1_mat_tab_269_ng_template_2_Conditional_8_mat_form_field_6_Template, 5, 4, "mat-form-field", 65);
  }
  if (rf & 2) {
    const tab_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("ngIf", tab_r4.filters.type.hasOwnProperty("id"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", tab_r4.filters.type.hasOwnProperty("position"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", tab_r4.filters.type.hasOwnProperty("posState"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", tab_r4.filters.type.hasOwnProperty("dealKey"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", tab_r4.filters.type.hasOwnProperty("entry"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", tab_r4.filters.type.hasOwnProperty("symbol"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", tab_r4.filters.type.hasOwnProperty("platformId"));
  }
}
function SubscriptionsStandAloneComponent_mat_card_content_1_mat_tab_269_ng_template_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 70);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "PROVIDERS_LIST.Search"), " ");
  }
}
function SubscriptionsStandAloneComponent_mat_card_content_1_mat_tab_269_ng_template_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 71);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.Refresh"), " ");
  }
}
function SubscriptionsStandAloneComponent_mat_card_content_1_mat_tab_269_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58)(1, "div", 59)(2, "button", 60);
    \u0275\u0275listener("click", function SubscriptionsStandAloneComponent_mat_card_content_1_mat_tab_269_ng_template_2_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const tab_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.applyFilters(tab_r4));
    });
    \u0275\u0275element(3, "img", 61);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, SubscriptionsStandAloneComponent_mat_card_content_1_mat_tab_269_ng_template_2_button_6_Template, 4, 3, "button", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 63);
    \u0275\u0275template(8, SubscriptionsStandAloneComponent_mat_card_content_1_mat_tab_269_ng_template_2_Conditional_8_Template, 7, 7);
    \u0275\u0275elementStart(9, "button", 60);
    \u0275\u0275listener("click", function SubscriptionsStandAloneComponent_mat_card_content_1_mat_tab_269_ng_template_2_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r3);
      const tab_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.refreshDataList(tab_r4));
    });
    \u0275\u0275template(10, SubscriptionsStandAloneComponent_mat_card_content_1_mat_tab_269_ng_template_2_Conditional_10_Template, 3, 3)(11, SubscriptionsStandAloneComponent_mat_card_content_1_mat_tab_269_ng_template_2_Conditional_11_Template, 3, 3);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(12, "common-ag-grid", 30);
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
function SubscriptionsStandAloneComponent_mat_card_content_1_mat_tab_269_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-tab", 56);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275template(2, SubscriptionsStandAloneComponent_mat_card_content_1_mat_tab_269_ng_template_2_Template, 13, 9, "ng-template", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r4 = ctx.$implicit;
    \u0275\u0275propertyInterpolate("label", \u0275\u0275pipeBind1(1, 1, tab_r4.label));
  }
}
function SubscriptionsStandAloneComponent_mat_card_content_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card-content", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "h5");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 8);
    \u0275\u0275element(11, "img", 9);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "mat-menu", 10, 0)(16, "button", 11);
    \u0275\u0275listener("click", function SubscriptionsStandAloneComponent_mat_card_content_1_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openActiveOrDeactiveSubscriptionDialog(ctx_r1.subscriptionData.activationStatus ? "suspend" : "activate"));
    });
    \u0275\u0275element(17, "img", 12);
    \u0275\u0275template(18, SubscriptionsStandAloneComponent_mat_card_content_1_Conditional_18_Template, 2, 3)(19, SubscriptionsStandAloneComponent_mat_card_content_1_Conditional_19_Template, 2, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 11);
    \u0275\u0275listener("click", function SubscriptionsStandAloneComponent_mat_card_content_1_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openSubscriberArchiveModal());
    });
    \u0275\u0275element(21, "img", 13);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(24, "provider-follower-header-cards", 14);
    \u0275\u0275template(25, SubscriptionsStandAloneComponent_mat_card_content_1_div_25_Template, 9, 13, "div", 15);
    \u0275\u0275elementStart(26, "div", 16)(27, "div", 17)(28, "div", 18)(29, "div", 19)(30, "h4");
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "p");
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 20);
    \u0275\u0275listener("click", function SubscriptionsStandAloneComponent_mat_card_content_1_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCommonInfoDialog("filters"));
    });
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 21)(40, "mat-card", 22)(41, "div", 23)(42, "h6");
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "p");
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 23)(48, "h6");
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "p");
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 23)(54, "h6");
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "p");
    \u0275\u0275text(58);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(59, "div", 18)(60, "div", 19)(61, "h4");
    \u0275\u0275text(62);
    \u0275\u0275pipe(63, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "p");
    \u0275\u0275text(65);
    \u0275\u0275pipe(66, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "button", 20);
    \u0275\u0275listener("click", function SubscriptionsStandAloneComponent_mat_card_content_1_Template_button_click_67_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCommonInfoDialog("strategy"));
    });
    \u0275\u0275text(68);
    \u0275\u0275pipe(69, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 21)(71, "mat-card", 22)(72, "div", 23)(73, "h6");
    \u0275\u0275text(74);
    \u0275\u0275pipe(75, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "p");
    \u0275\u0275text(77);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "div", 23)(79, "h6");
    \u0275\u0275text(80);
    \u0275\u0275pipe(81, "translate");
    \u0275\u0275pipe(82, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "p");
    \u0275\u0275text(84);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(85, SubscriptionsStandAloneComponent_mat_card_content_1_div_85_Template, 6, 4, "div", 24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(86, "div", 18)(87, "div", 19)(88, "h4");
    \u0275\u0275text(89);
    \u0275\u0275pipe(90, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "p");
    \u0275\u0275text(92);
    \u0275\u0275pipe(93, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "button", 20);
    \u0275\u0275listener("click", function SubscriptionsStandAloneComponent_mat_card_content_1_Template_button_click_94_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCommonInfoDialog("correction"));
    });
    \u0275\u0275text(95);
    \u0275\u0275pipe(96, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(97, "div", 21)(98, "mat-card", 22)(99, "div", 23)(100, "h6");
    \u0275\u0275text(101);
    \u0275\u0275pipe(102, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "p");
    \u0275\u0275template(104, SubscriptionsStandAloneComponent_mat_card_content_1_Conditional_104_Template, 1, 3)(105, SubscriptionsStandAloneComponent_mat_card_content_1_Conditional_105_Template, 1, 0);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(106, "div", 18)(107, "div", 19)(108, "h4");
    \u0275\u0275text(109);
    \u0275\u0275pipe(110, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "p");
    \u0275\u0275text(112);
    \u0275\u0275pipe(113, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(114, "div", 19)(115, "div", 25)(116, "div", 26)(117, "button", 27);
    \u0275\u0275listener("click", function SubscriptionsStandAloneComponent_mat_card_content_1_Template_button_click_117_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCreateOrUpdateRiskModal(false));
    });
    \u0275\u0275element(118, "img", 28);
    \u0275\u0275text(119);
    \u0275\u0275pipe(120, "translate");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(121, "div")(122, "div", 29);
    \u0275\u0275element(123, "common-ag-grid", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(124, SubscriptionsStandAloneComponent_mat_card_content_1_p_124_Template, 3, 3, "p", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(125, "div", 32)(126, "div", 33)(127, "h4");
    \u0275\u0275text(128);
    \u0275\u0275pipe(129, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "p");
    \u0275\u0275text(131);
    \u0275\u0275pipe(132, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(133, "hr");
    \u0275\u0275elementStart(134, "div", 34)(135, "mat-card", 22)(136, "div", 35)(137, "div", 6)(138, "h6");
    \u0275\u0275text(139);
    \u0275\u0275pipe(140, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(141, "div", 36)(142, "div", 37)(143, "h6");
    \u0275\u0275text(144);
    \u0275\u0275pipe(145, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(146, "div", 38)(147, "h6");
    \u0275\u0275template(148, SubscriptionsStandAloneComponent_mat_card_content_1_img_148_Template, 1, 0, "img", 39)(149, SubscriptionsStandAloneComponent_mat_card_content_1_img_149_Template, 1, 0, "img", 40);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(150, SubscriptionsStandAloneComponent_mat_card_content_1_div_150_Template, 3, 2, "div", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(151, "div", 35)(152, "div", 6)(153, "h6");
    \u0275\u0275text(154);
    \u0275\u0275pipe(155, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(156, "div", 36)(157, "div", 37)(158, "h6");
    \u0275\u0275text(159);
    \u0275\u0275pipe(160, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(161, "div", 38)(162, "h6", 42);
    \u0275\u0275text(163);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(164, SubscriptionsStandAloneComponent_mat_card_content_1_div_164_Template, 8, 4, "div", 41);
    \u0275\u0275elementStart(165, "div", 36)(166, "div", 37)(167, "h6");
    \u0275\u0275text(168);
    \u0275\u0275pipe(169, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(170, "div", 38)(171, "h6");
    \u0275\u0275text(172);
    \u0275\u0275pipe(173, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(174, "div", 36)(175, "div", 37)(176, "h6");
    \u0275\u0275text(177);
    \u0275\u0275pipe(178, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(179, "div", 38)(180, "h6");
    \u0275\u0275template(181, SubscriptionsStandAloneComponent_mat_card_content_1_Conditional_181_Template, 2, 4)(182, SubscriptionsStandAloneComponent_mat_card_content_1_Conditional_182_Template, 1, 0);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(183, "div", 35)(184, "div", 6)(185, "h6");
    \u0275\u0275text(186);
    \u0275\u0275pipe(187, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(188, "div", 36)(189, "div", 37)(190, "h6");
    \u0275\u0275text(191);
    \u0275\u0275pipe(192, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(193, "div", 38)(194, "h6");
    \u0275\u0275text(195);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(196, "div", 36)(197, "div", 37)(198, "h6");
    \u0275\u0275text(199);
    \u0275\u0275pipe(200, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(201, "div", 38)(202, "h6");
    \u0275\u0275text(203);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(204, "div", 35)(205, "div", 6)(206, "h6");
    \u0275\u0275text(207);
    \u0275\u0275pipe(208, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(209, "a", 43);
    \u0275\u0275listener("click", function SubscriptionsStandAloneComponent_mat_card_content_1_Template_a_click_209_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openBeTradingAccountPopup());
    });
    \u0275\u0275element(210, "img", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(211, "div", 36)(212, "div", 37)(213, "h6");
    \u0275\u0275text(214);
    \u0275\u0275pipe(215, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(216, "div", 38)(217, "h6");
    \u0275\u0275text(218);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(219, "div", 36)(220, "div", 37)(221, "h6");
    \u0275\u0275text(222);
    \u0275\u0275pipe(223, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(224, "div", 38)(225, "h6");
    \u0275\u0275text(226);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(227, "div", 36)(228, "div", 37)(229, "h6");
    \u0275\u0275text(230);
    \u0275\u0275pipe(231, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(232, "div", 38)(233, "h6", 42);
    \u0275\u0275text(234);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(235, "div", 35)(236, "div", 6)(237, "h6");
    \u0275\u0275text(238);
    \u0275\u0275pipe(239, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(240, "div", 36)(241, "div", 37)(242, "h6");
    \u0275\u0275text(243);
    \u0275\u0275pipe(244, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(245, "div", 38)(246, "h6");
    \u0275\u0275text(247);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(248, "div", 35)(249, "div", 36)(250, "div", 37)(251, "h6");
    \u0275\u0275text(252);
    \u0275\u0275pipe(253, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(254, "div", 38)(255, "h6");
    \u0275\u0275text(256);
    \u0275\u0275pipe(257, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(258, "div", 36)(259, "div", 37)(260, "h6");
    \u0275\u0275text(261);
    \u0275\u0275pipe(262, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(263, "div", 38)(264, "h6");
    \u0275\u0275text(265);
    \u0275\u0275pipe(266, "date");
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275elementStart(267, "div", 45)(268, "mat-tab-group", 46);
    \u0275\u0275listener("selectedTabChange", function SubscriptionsStandAloneComponent_mat_card_content_1_Template_mat_tab_group_selectedTabChange_268_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTabChange($event));
    });
    \u0275\u0275template(269, SubscriptionsStandAloneComponent_mat_card_content_1_mat_tab_269_Template, 3, 3, "mat-tab", 47);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const actions_r13 = \u0275\u0275reference(15);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(6, 82, "SUBSCRIPTION.Subscription Profile"), " #", ctx_r1.subscriptionData == null ? null : ctx_r1.subscriptionData.id, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 84, "SUBSCRIPTION.General information about the subscription"));
    \u0275\u0275advance(2);
    \u0275\u0275property("matMenuTriggerFor", actions_r13)("ngClass", \u0275\u0275pureFunction1(175, _c0, ctx_r1.subscriptionData.state == "Archived"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 86, "COMMON.Actions"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275propertyInterpolate1("src", "../../../../assets/icons/", ctx_r1.subscriptionData.activationStatus ? "remove-icon" : "add-icon", ".png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.subscriptionData.activationStatus ? 18 : 19);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 88, "PROVIDERS_PROFILE.Unsubscribe"), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("getDataById", true)("id", ctx_r1.subscriptionId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.subscriptionData.isActivated && !ctx_r1.subscriptionData.activationStatus && ctx_r1.subscriptionData.state !== "Archived");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 90, "PROVIDERS_PROFILE.Provider Filters"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 92, "PROVIDERS_PROFILE.Setting up initial filters for provider's original trades"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(177, _c0, ctx_r1.subscriptionData.state == "Archived"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(38, 94, "COMMON.Edit"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(44, 96, "PROVIDERS_PROFILE.Direction"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r1.subscriptionData == null ? null : ctx_r1.subscriptionData.filters.direction) ? ctx_r1.subscriptionData == null ? null : ctx_r1.subscriptionData.filters.direction : "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(50, 98, "PROVIDERS_PROFILE.Minimum lots"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r1.subscriptionData == null ? null : ctx_r1.subscriptionData.filters == null ? null : ctx_r1.subscriptionData.filters.minimumLot) ? ctx_r1.subscriptionData == null ? null : ctx_r1.subscriptionData.filters == null ? null : ctx_r1.subscriptionData.filters.minimumLot : "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(56, 100, "PROVIDERS_PROFILE.Maximum lots"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r1.subscriptionData == null ? null : ctx_r1.subscriptionData.filters == null ? null : ctx_r1.subscriptionData.filters.maximumLot) ? ctx_r1.subscriptionData == null ? null : ctx_r1.subscriptionData.filters == null ? null : ctx_r1.subscriptionData.filters.maximumLot : "-");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(63, 102, "SUBSCRIPTION.Subscription Strategy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(66, 104, "PROVIDERS_PROFILE.Setting up the difference between source and copied trades"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(179, _c0, ctx_r1.subscriptionData.state == "Archived"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(69, 106, "COMMON.Edit"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(75, 108, "SUBSCRIPTION.Volume scaling"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r1.subscriptionData == null ? null : ctx_r1.subscriptionData.strategy.type) ? ctx_r1.subscriptionData == null ? null : ctx_r1.subscriptionData.strategy.type : "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r1.subscriptionData == null ? null : ctx_r1.subscriptionData.strategy.type) == "Fixed" ? \u0275\u0275pipeBind1(81, 110, "PROVIDERS_PROFILE.Copies' volumes") : \u0275\u0275pipeBind1(82, 112, "PROVIDERS_PROFILE.Volume multiplier"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((ctx_r1.subscriptionData == null ? null : ctx_r1.subscriptionData.strategy == null ? null : ctx_r1.subscriptionData.strategy.riskRatio) ? ctx_r1.subscriptionData == null ? null : ctx_r1.subscriptionData.strategy == null ? null : ctx_r1.subscriptionData.strategy.riskRatio : "-");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.subscriptionData == null ? null : ctx_r1.subscriptionData.strategy.type) == "Multiply");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(90, 114, "PROVIDERS_PROFILE.Correction"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(93, 116, "PROVIDERS_PROFILE.Final processing of copies' parameters"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(181, _c0, ctx_r1.subscriptionData.state == "Archived"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(96, 118, "COMMON.Edit"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(102, 120, "PROVIDERS_PROFILE.Excess volume processing"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional((ctx_r1.subscriptionData == null ? null : ctx_r1.subscriptionData.correction.riskFactor) ? 104 : 105);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(110, 122, "PROVIDERS_PROFILE.Risk Management"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(113, 124, "PROVIDERS_PROFILE.Setting up the subscription's acceptable risks"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(183, _c0, ctx_r1.subscriptionData.state == "Archived"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(120, 126, "COMMON.Create"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("gridConfig", ctx_r1.riskGridConfig)("gridData", ctx_r1.riskGridData)("showGridLoader", ctx_r1.showRiskGridLoder);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isEmailExist && ctx_r1.subscriptionData.state !== "Archived");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(129, 128, "PROVIDERS_PROFILE.Personal Info"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(132, 130, "PROVIDERS_PROFILE.Update your personal details here"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(140, 132, "COMMON.Status"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(145, 134, "PROVIDERS_PROFILE.Copy new positions"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.subscriptionData.activationStatus);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.subscriptionData.activationStatus);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.subscriptionData.state !== "Archived");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(155, 136, "COMMON.Info"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(160, 138, "COMMON.State"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u25CF ", ctx_r1.subscriptionData == null ? null : ctx_r1.subscriptionData.state, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.subscriptionData.state == "Archived");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(169, 140, "HOME.Registered"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(173, 142, ctx_r1.subscriptionData == null ? null : ctx_r1.subscriptionData.registerTime, "M/d/yy, h:mm:ss a"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(178, 145, "PROVIDERS_PROFILE.Activated"));
    \u0275\u0275advance(4);
    \u0275\u0275conditional((ctx_r1.subscriptionData == null ? null : ctx_r1.subscriptionData.activation == null ? null : ctx_r1.subscriptionData.activation.timeUtc) ? 181 : 182);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(187, 147, "PROVIDERS_PROFILE.Offer"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(192, 149, "PROVIDERS_PROFILE.Title"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.offerData == null ? null : ctx_r1.offerData.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(200, 151, "OFFERS.Performance fee"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r1.subscriptionData == null ? null : ctx_r1.subscriptionData.performance.fee, "% (", ctx_r1.subscriptionData == null ? null : ctx_r1.subscriptionData.performance.interval, ")");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(208, 153, "PROVIDERS_PROFILE.Trading Account"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(215, 155, "PROVIDERS_PROFILE.MT name"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.tradeAccountData == null ? null : ctx_r1.tradeAccountData.tradingAccName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(223, 157, "PROVIDERS_PROFILE.MT login"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.tradeAccountData == null ? null : ctx_r1.tradeAccountData.tradingAccountNo);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(231, 159, "PROVIDERS_PROFILE.State"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u25CF ", ctx_r1.tradeAccountData == null ? null : ctx_r1.tradeAccountData.state, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(239, 161, "HOME.Provider"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(244, 163, "HOME.Nickname"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.providerData == null ? null : ctx_r1.providerData.nickname);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(253, 165, "PROVIDERS_PROFILE.Created (UTC)"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(257, 167, ctx_r1.subscriptionData == null ? null : ctx_r1.subscriptionData.createdUtc, "MMMM d, y 'at' hh:mm:ss a"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(262, 170, "PROVIDERS_PROFILE.Updated (UTC)"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(266, 172, ctx_r1.subscriptionData == null ? null : ctx_r1.subscriptionData.updatedUtc, "MMMM d, y 'at' hh:mm:ss a"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.tabArrConfig);
  }
}
function SubscriptionsStandAloneComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275element(1, "img", 73);
    \u0275\u0275elementEnd();
  }
}
var SubscriptionsStandAloneComponent = class _SubscriptionsStandAloneComponent {
  currencyPipe;
  router;
  translate;
  _webService;
  route;
  subscriptionId;
  subscriptionData;
  providerId;
  providerData;
  accountId;
  tradeAccountData;
  offerData;
  offerId;
  showPageLoader = false;
  showRiskGridLoder = false;
  riskGridConfig = {};
  riskGridData = [];
  tabArrConfig = [];
  constantVariable = new ConstantVariable();
  currentSelectedTabIndx = 0;
  isEmailExist = false;
  errorComponent;
  tradingDialog = inject(MatDialog);
  commonInfoDialog = inject(MatDialog);
  beFeesDetailDialog = inject(MatDialog);
  beDealsDialog = inject(MatDialog);
  createOrUpdateRiskDialog = inject(MatDialog);
  subscriptionArchiveDialog = inject(MatDialog);
  subscriptionInfoDialog = inject(MatDialog);
  activeOrDeactiveSubscriptionDialog = inject(MatDialog);
  deleteRiskDataDialog = inject(MatDialog);
  constructor(currencyPipe, router, translate, _webService, route) {
    this.currencyPipe = currencyPipe;
    this.router = router;
    this.translate = translate;
    this._webService = _webService;
    this.route = route;
    this.route.paramMap.subscribe((params) => {
      this.subscriptionId = params.get("subscriptionId");
      this.getAllSubscriptionProfilePageData();
    });
    this._webService.subscribeOnWebDataChange("SubscriptionsStandAloneComponent", (event) => {
      this.recieveChildrenEmitter(event);
    });
  }
  getAllSubscriptionProfilePageData() {
    return __async(this, null, function* () {
      this.showPageLoader = true;
      let result1 = yield this.getSubscriptionProfileData();
      let result2 = yield this.getProviderData();
      let result3 = yield this.getTradingAccountData();
      let result4 = yield this.getOfferData();
      this.setupRiskGridConfig();
      let result5 = yield this.getRiskData();
      this.setUpTabsConfig();
      this.getGridData(this.tabArrConfig[0]);
      this.showPageLoader = false;
      this.openImportantInfoPopup();
    });
  }
  openImportantInfoPopup() {
    if (this.subscriptionData.state !== "Archived") {
      if (this.subscriptionData.activationHistory == "New" && !this.subscriptionData.isActivated) {
        const dialogRef = this.subscriptionInfoDialog.open(SubscriptionInfoDialog, {
          panelClass: "info-dialog"
        });
        dialogRef.afterClosed().subscribe((event) => {
          this.recieveChildrenEmitter(event);
        });
      }
    }
  }
  setUpTabsConfig() {
    this.tabArrConfig = this.getSubscriptionProfileTabsConfig();
  }
  getSubscriptionProfileTabsConfig() {
    let arr = [];
    arr.push(this.getPositionTabConfigObj(), this.getDealsTabConfigObj(), this.getFeesTabConfig());
    return arr;
  }
  getPositionTabConfigObj() {
    let apiUrl = this.constantVariable?.http_Api_Url.subscription_profile.position.replace(":subscriptionId", this.subscriptionId);
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
    let apiUrl = this.constantVariable?.http_Api_Url.subscription_profile.deals.replace(":subscriptionId", this.subscriptionId);
    return {
      label: "PROVIDERS_PROFILE.Deals",
      filters: {
        show: false,
        type: { dealKey: "", entry: "", symbol: "" },
        clear: function() {
          this.type = { dealKey: "", entry: "", symbol: "" };
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
            filterQuery += `ownerId eq ${this.subscriptionId} and ownerType eq 'Subscription' and `;
            return filterQuery;
          };
          param["$count"] = true;
          getFilterParam.apply(this) ? param["$filter"] = getFilterParam.apply(this).slice(0, -4) : "";
          return param;
        }
      },
      grid: this.getCommonGridDetails("fees", "There are no fees", TransactionHistoryUiModal, this.constantVariable?.http_Api_Url.transactionsHistory.get, this.providerData)
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
  getClientDetails() {
    this._webService.getClientDetails().subscribe({
      next: (response) => {
        this.isEmailExist = response.settings.email ? true : false;
      },
      error: (errorObj) => {
        this.showErrorWarnMessage(errorObj?.error?.errorMessage);
      }
    });
  }
  getSubscriptionProfileData() {
    return new Promise((resolve) => {
      let param = { subscriptionId: this.subscriptionId };
      this._webService.getFollowerDataById(param).subscribe({
        next: (response) => {
          this.subscriptionData = response;
          this.providerId = response.providerId;
          this.accountId = response.accountId;
          this.offerId = response.offerId;
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
      this._webService.getProviderDataById(param).subscribe({
        next: (response) => {
          this.providerData = response;
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
  getOfferData() {
    return new Promise((resolve) => {
      let param = { offerId: this.offerId };
      this._webService.getBriefOfferDataById(param).subscribe({
        next: (response) => {
          this.offerData = response;
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
  setupRiskGridConfig() {
    let colDefs = this.getGridColDefs("risk");
    this.riskGridConfig = this.getCommonGridConfig(colDefs, "No rules are added");
  }
  getRiskData() {
    return new Promise((resolve) => {
      this.showRiskGridLoder = true;
      let param = {
        subscriptionId: this.subscriptionId
      };
      this._webService.getAllRiskData(param).subscribe({
        next: (response) => {
          this.riskGridData = response.rules;
          this.showRiskGridLoder = false;
          resolve();
        },
        error: (errorObj) => {
          this.showRiskGridLoder = false;
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
    if (gridType == "risk") {
      return [
        { field: "threshold", headerName: "Parameter", resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: "thresHoldCell" },
        { field: "subscriptionAction", headerName: "Actions", resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: "subscriptionActionCell" },
        { field: "actions", headerName: "", sortable: false, cellRenderer: ActionButtonStanAloneComponent, colId: "riskCell", resizable: false }
      ];
    } else if (gridType == "position") {
      return [
        { field: "position", headerName: "PROVIDERS_PROFILE.Position", resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: "positionSubscriptionNameCell" },
        { field: "copyPosition", headerName: "PROVIDERS_PROFILE.Source", resizable: false },
        { field: "status", headerName: "COMMON.Status", resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: "tagCell" },
        { field: "symbol", headerName: "PROVIDERS_PROFILE.Symbol", resizable: false },
        { field: "openTime", headerName: "PROVIDERS_PROFILE.Open Time", sort: "desc", resizable: false },
        { field: "volume", headerName: "PROVIDERS_PROFILE.Volume", resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: "positionVolumeCell" },
        { field: "profit", headerName: "PROVIDERS_PROFILE.Profit", resizable: false },
        { field: "closeTime", headerName: "PROVIDERS_PROFILE.Close Time", resizable: false },
        { field: "actions", headerName: "", sortable: false, cellRenderer: ActionButtonStanAloneComponent, resizable: false, colId: "positionSubscriptionRedirection" }
      ];
    } else if (gridType == "deals") {
      return [
        { field: "dealKey", headerName: "PROVIDERS_PROFILE.Deal", resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: "dealsTitleCell" },
        { field: "position", headerName: "PROVIDERS_PROFILE.Position", resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: "dealSubscriptionPositionCell" },
        { field: "status", headerName: "COMMON.Status", sortable: false, resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: "tagCell" },
        { field: "copyDealKey", headerName: "PROVIDERS_PROFILE.Source", resizable: false },
        { field: "entry", headerName: "PROVIDERS_PROFILE.Entry", sortable: false, resizable: false, cellRenderer: CommonCellRendererStandAloneComponent, colId: "tagCell" },
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
  recieveChildrenEmitter(event) {
    if (event["action"] == "open_transact_details_popup") {
      this.openBeFeesDetailsPopup(event["data"]);
    } else if (event["action"] == "open_deals_popup") {
      this.openDealsPopup(event["data"]);
    } else if (event["action"] == "refresh_subscription_data") {
      this.refreshSubscriptionData();
    } else if (event["action"] == "update_risk_data") {
      this.openCreateOrUpdateRiskModal(true, event.data);
    } else if (event["action"] == "update_user_email") {
      this.isEmailExist = event.email ? true : false;
    } else if (event["action"] == "redirect_to_subscription_page") {
      this.router.navigate(["/portal/subscriptions"]);
    } else if (event["action"] == "refresh_risk_data") {
      this.refreshRiskData();
    } else if (event["action"] == "delete_risk_data") {
      this.deleteRiskData(event["data"]);
    }
  }
  refreshSubscriptionData() {
    return __async(this, null, function* () {
      let result = yield this.getSubscriptionProfileData();
    });
  }
  refreshRiskData() {
    return __async(this, null, function* () {
      let result = yield this.getRiskData();
    });
  }
  openBeTradingAccountPopup() {
    this.tradingDialog.open(CommonDialogStandAloneComponent, {
      panelClass: "common-dialog",
      data: this.prepareTradingAccountData()
    });
    this.tradingDialog.afterAllClosed.subscribe((result) => {
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
    const dialogRef = this.commonInfoDialog.open(SubscriptionCommonInfoDialog, {
      panelClass: "subscriptionProfile-commonInfo",
      data: { subscriptionData: this.subscriptionData, modelType }
    });
    dialogRef.afterClosed().subscribe((event) => {
      this.recieveChildrenEmitter(event);
    });
  }
  openCreateOrUpdateRiskModal(isUpdate, formData) {
    const dialogRef = this.createOrUpdateRiskDialog.open(CreateUpdateRiskDialog, {
      panelClass: "create-update-risk-dialog",
      data: { subscriptionData: this.subscriptionData, isUpdate, riskData: this.riskGridData, riskFormData: formData }
    });
    dialogRef.afterClosed().subscribe((event) => {
      this.recieveChildrenEmitter(event);
    });
  }
  openSubscriberArchiveModal() {
    const dialogRef = this.subscriptionArchiveDialog.open(ArchiveDialog, {
      panelClass: "archive-dialog",
      data: { subscriptionData: this.subscriptionData, modelType: "subscription" }
    });
    dialogRef.afterClosed().subscribe((event) => {
      this.recieveChildrenEmitter(event);
    });
  }
  openActiveOrDeactiveSubscriptionDialog(modelType) {
    const dialogRef = this.activeOrDeactiveSubscriptionDialog.open(ActiveOrDeactiveSubscriptionDialog, {
      panelClass: "active-or-deactive-subscription-dialog",
      data: { subscriptionData: this.subscriptionData, modelType }
    });
    dialogRef.afterClosed().subscribe((event) => {
      this.recieveChildrenEmitter(event);
    });
  }
  deleteRiskData(modelData) {
    const dialogRef = this.deleteRiskDataDialog.open(DeleteOfferDataDialog, {
      panelClass: "delete-offer-dialog",
      data: { subscriptionData: this.subscriptionData, modelType: "risk", modelData, riskData: this.riskGridData }
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
    this._webService.unSubscribeOnWebDataChange("SubscriptionsStandAloneComponent");
  }
  static \u0275fac = function SubscriptionsStandAloneComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SubscriptionsStandAloneComponent)(\u0275\u0275directiveInject(CurrencyPipe), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(WebService), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SubscriptionsStandAloneComponent, selectors: [["app-subscriptions"]], viewQuery: function SubscriptionsStandAloneComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(ShowErrorStandAloneComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.errorComponent = _t.first);
    }
  }, standalone: true, features: [\u0275\u0275ProvidersFeature([CurrencyPipe]), \u0275\u0275StandaloneFeature], decls: 4, vars: 2, consts: [["actions", "matMenu"], ["appearance", "outlined", 1, "section-card"], ["class", "section-card-content", 4, "ngIf"], ["class", "full-view-port-height d-flex justify-center align-center", 4, "ngIf"], [1, "section-card-content"], [1, "home-card"], [1, "header", "d-flex", "justify-space-between", "align-center"], [1, "header-title"], [1, "primary-btn", "action-btn", 3, "matMenuTriggerFor", "ngClass"], ["src", "../../../../assets/icons/actions.png"], [1, "actions-menu"], ["mat-menu-item", "", 3, "click"], ["width", "20", "height", "20", 3, "src"], ["src", "../../../../assets/icons/trashIcon.png", "width", "20", "height", "20"], [3, "getDataById", "id"], ["class", "d-flex flex-column email-not-exist-container", 4, "ngIf"], [1, "info-section", "d-flex", "justify-space-between"], [1, "info-section-left"], [1, "d-flex", "justify-space-between", "w-100"], [1, "info-section-left-items"], [1, "edit-btn", "info-section-btn", 3, "click", "ngClass"], [1, "info-section-left-items", "info-section-left-items-card"], ["appearance", "outlined"], [1, "d-flex", "justify-space-between", "g-20", "align-center"], ["class", "d-flex justify-space-between g-20 align-center", 4, "ngIf"], [1, "d-flex", "justify-right", "g-10"], [1, "d-flex", "justify-center", "g-10", "align-stretch"], [1, "primary-btn", 3, "click", "ngClass"], ["src", "../../../../assets/icons/plusIcon.png"], [1, "table"], [3, "gridConfig", "gridData", "showGridLoader"], ["class", "email-not-exist-container", 4, "ngIf"], [1, "info-section-right"], [1, "info-section-right-header"], [1, "info-section-right-card"], [1, "items"], [1, "d-flex", "justify-center", "items-main"], [1, "items-left"], [1, "items-right"], ["height", "25", "width", "25", "src", "../../../../assets/icons/Check icon.png", 4, "ngIf"], ["height", "25", "width", "25", "src", "../../../../assets/icons/cancelIcon.png", 4, "ngIf"], ["class", "d-flex justify-center items-main", 4, "ngIf"], [1, "status-badge"], ["href", "javascript:void(0)", 1, "default-link", 3, "click"], ["src", "../../../../assets/icons/arrow-single.png"], [1, "metrics-table"], ["mat-stretch-tabs", "false", "mat-align-tabs", "start", 1, "providerProfile-tabGroup", 3, "selectedTabChange"], [3, "label", 4, "ngFor", "ngForOf"], [1, "d-flex", "flex-column", "email-not-exist-container"], [1, "email-not-exist-container"], ["height", "25", "width", "25", "src", "../../../../assets/icons/Check icon.png"], ["height", "25", "width", "25", "src", "../../../../assets/icons/cancelIcon.png"], ["class", "activated-container", 4, "ngIf"], ["class", "not-activated-container", 4, "ngIf"], [1, "activated-container"], [1, "not-activated-container"], [3, "label"], ["matTabContent", ""], [1, "header-buttons", "d-flex", "justify-space-between", "pb-20", "g-20"], [1, "d-flex", "g-20", "justify-center", "align-center"], [1, "secondary-btn", 3, "click"], ["src", "../../../../assets/icons/filterIcon.svg"], ["class", "secondary-btn", 3, "click", 4, "ngIf"], [1, "d-flex", "g-20", "common-dropdown", "align-center", "flex-wrap", "justify-end"], ["width", "20", "src", "../../../../assets/icons/clear-icon.svg"], [4, "ngIf"], ["matInput", "", "type", "number", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel"], [3, "value"], ["matInput", "", "type", "text", 3, "ngModelChange", "ngModel"], ["src", "../../../../assets/icons/searchIcon.svg"], ["src", "../../../../assets/icons/rotateIcon.svg"], [1, "full-view-port-height", "d-flex", "justify-center", "align-center"], ["src", "../../../../assets/logo/ICM Logo Default 1.png"]], template: function SubscriptionsStandAloneComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "mat-card", 1);
      \u0275\u0275template(1, SubscriptionsStandAloneComponent_mat_card_content_1_Template, 270, 185, "mat-card-content", 2)(2, SubscriptionsStandAloneComponent_div_2_Template, 2, 0, "div", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "show-error-message");
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.showPageLoader);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showPageLoader);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, LowerCasePipe, DatePipe, CommonAgGridStandAloneComponent, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgModel, ShowErrorStandAloneComponent, ProviderFollowerHeaderCardsStandaloneComponent, MatMenuModule, MatMenu, MatMenuItem, MatMenuTrigger, MatTabsModule, MatTabContent, MatTab, MatTabGroup, TranslateModule, TranslatePipe, MatSelectModule, MatFormField, MatLabel, MatSelect, MatOption, MatInputModule, MatInput, MatCardModule, MatCard, MatCardContent], styles: ["\n\n.stats-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.stats-info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.stats-subline[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .positive[_ngcontent-%COMP%] {\n  color: #027A48;\n}\n.stats-subline[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .negative[_ngcontent-%COMP%] {\n  color: #B42318;\n}\n.info-section[_ngcontent-%COMP%] {\n  padding-block: 50px;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-left[_ngcontent-%COMP%] {\n  width: 70%;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-left[_ngcontent-%COMP%]   .info-section-left-items[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 15px;\n  height: fit-content;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-left[_ngcontent-%COMP%]   .info-section-left-items[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: unset;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-left[_ngcontent-%COMP%]   .info-section-left-items[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #667085;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-left[_ngcontent-%COMP%]   .info-section-left-items[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: unset;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-left[_ngcontent-%COMP%]   .info-section-left-items[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  font-size: 40px;\n  padding-top: 5px;\n  color: #D0D5DD;\n  font-weight: 100;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-left[_ngcontent-%COMP%]   .info-section-left-items-card[_ngcontent-%COMP%] {\n  border: 2px solid #EAECF0;\n  border-radius: 10px;\n  height: fit-content;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-left[_ngcontent-%COMP%]   .info-section-left-items-card[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%] {\n  border: none !important;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%] {\n  width: 25%;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%]   .info-section-right-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: unset;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%]   .info-section-right-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #667085;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%]   .info-section-right-header[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: unset;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  border-top: 1px solid #EAECF0;\n  margin-block: 20px;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%]   .info-section-right-card[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%]   .info-section-right-card[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%] {\n  padding-block: 5px;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%]   .info-section-right-card[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .items-main[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-block: 10px;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%]   .info-section-right-card[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .items-main[_ngcontent-%COMP%]   .activated-container[_ngcontent-%COMP%] {\n  font-size: 15px;\n  padding: 15px 10px;\n  background: var(--primaryWhite);\n  border-radius: initial;\n  border-width: 2px 5px;\n  border-style: dotted solid;\n  border-color: var(--primary-positive-color);\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%]   .info-section-right-card[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .items-main[_ngcontent-%COMP%]   .not-activated-container[_ngcontent-%COMP%] {\n  font-size: 15px;\n  padding: 15px 10px;\n  background: var(--primaryWhite);\n  border-radius: initial;\n  border-width: 2px 5px;\n  border-style: dotted solid;\n  border-color: var(--error-message--container-color);\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%]   .info-section-right-card[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .items-main[_ngcontent-%COMP%]   .items-left[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  width: 50%;\n  border: 1px solid #D0D5DD;\n  border-top-left-radius: 6px;\n  border-bottom-left-radius: 6px;\n  color: #667085;\n  font-weight: 400;\n  display: flex;\n  align-items: center;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%]   .info-section-right-card[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .items-main[_ngcontent-%COMP%]   .items-right[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  width: 100%;\n  border: 1px solid #D0D5DD;\n  border-top-right-radius: 6px;\n  border-bottom-right-radius: 6px;\n  display: flex;\n  align-items: center;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%]   .info-section-right-card[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .items-main[_ngcontent-%COMP%]   .items-right[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  background: #ECFDF3;\n  width: fit-content;\n  padding: 0px 10px;\n  border-radius: 6px;\n  color: #027A48;\n}\n.info-section[_ngcontent-%COMP%]   .info-section-right[_ngcontent-%COMP%]   .info-section-right-card[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%] {\n  border: none !important;\n}\n  .providerProfile-tabGroup .mdc-tab__text-label {\n  font-size: 20px !important;\n  font-weight: 400;\n  color: #667085 !important;\n}\n  .providerProfile-tabGroup .mdc-tab {\n  padding: 0 50px !important;\n}\n  .actions-menu .mat-mdc-menu-panel {\n  background-color: white !important;\n}\n  .actions-menu .mat-mdc-menu-content {\n  background-color: white !important;\n}\n  .actions-menu .mat-mdc-menu-item {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n  .actions-menu .mat-mdc-menu-item .mat-mdc-menu-item-text {\n  font-size: 17px !important;\n  display: flex;\n  gap: 20px;\n  align-items: center;\n}\n  .common-dropdown .mdc-text-field {\n  background-color: var(--primaryWhite) !important;\n  border: 1px solid var(--border-color) !important;\n  border-bottom: 0px !important;\n  border-radius: 8px !important;\n  width: 150px;\n}\n  .common-dropdown .mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {\n  border-bottom-color: var(--border-color) !important;\n}\n  .common-dropdown .mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {\n  border-bottom-color: var(--border-color) !important;\n}\n  .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.email-not-exist-container[_ngcontent-%COMP%] {\n  margin-top: 50px !important;\n  font-size: 15px;\n  padding: 15px 10px;\n  background: var(--primaryWhite);\n  border-radius: initial;\n  border-width: 2px 5px;\n  border-style: dotted solid;\n  border-color: var(--error-message--container-color);\n}\n/*# sourceMappingURL=subscriptions.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SubscriptionsStandAloneComponent, { className: "SubscriptionsStandAloneComponent", filePath: "src\\app\\web\\views\\subscriptions\\subscriptions.component.ts", lineNumber: 36 });
})();
export {
  SubscriptionsStandAloneComponent
};
//# sourceMappingURL=chunk-UZYJUQIH.js.map
