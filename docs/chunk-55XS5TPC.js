import {
  IcmLoadingOverlayDirective
} from "./chunk-XT7PDWCQ.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-YEQ6N72F.js";
import {
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle,
  MatError,
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
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MatOption,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  ShowErrorStandAloneComponent,
  Validators,
  ɵNgNoValidate
} from "./chunk-ZFOVCG2I.js";
import {
  ChangeDetectorRef,
  CommonModule,
  ConstantVariable,
  NgForOf,
  NgIf,
  TranslateModule,
  TranslatePipe,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-G46OV5IL.js";

// src/app/web/shared/dialogBox/create-provider-dialog/beProviderDialog.standalone.component.ts
function BeProviderDialogStandAloneComponent_mat_option_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const obj_r1 = ctx.$implicit;
    \u0275\u0275property("value", obj_r1.accountId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(obj_r1.tradingIdAndName);
  }
}
function BeProviderDialogStandAloneComponent_p_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "COMMON.SelectAvailTradeAccountForNewProvider"));
  }
}
function BeProviderDialogStandAloneComponent_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "login.FieldRequired"));
  }
}
function BeProviderDialogStandAloneComponent_p_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "PROVIDERS_PROFILE.Provider's name to be displayed for followers"));
  }
}
function BeProviderDialogStandAloneComponent_mat_error_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "login.FieldRequired"));
  }
}
function BeProviderDialogStandAloneComponent_mat_error_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "COMMON.Warn6CharMsg"));
  }
}
var BeProviderDialogStandAloneComponent = class _BeProviderDialogStandAloneComponent {
  dialogRef;
  fb;
  _webService;
  cdr;
  createproviderForm;
  tradingIdArr;
  showError = false;
  showLoader = false;
  errorComponent;
  IConstant;
  constructor(dialogRef, fb, _webService, cdr) {
    this.dialogRef = dialogRef;
    this.fb = fb;
    this._webService = _webService;
    this.cdr = cdr;
    this.createproviderForm = this.fb.group({
      accountId: ["", [Validators.required]],
      nickname: ["", [Validators.required, Validators.minLength(6)]]
    });
    this.IConstant = new ConstantVariable();
    this.getTradingAccountsDetails();
  }
  get getControl() {
    return this.createproviderForm.controls;
  }
  getTradingAccountsDetails() {
    let param = {
      scope: "Active"
    };
    this._webService.getTradingAccountData(param).subscribe({
      next: (response) => {
        this.tradingIdArr = response.items.map((o) => {
          return { tradingIdAndName: `${o.externalAccount} - ${o.externalName}`, accountId: o.id };
        });
      },
      error: (errorObj) => {
        this.showErrorWarnMessage(errorObj?.error?.errorMessage);
      }
    });
  }
  closeCreateProviderForm() {
    this.dialogRef.close();
  }
  showErrorWarnMessage(msg) {
    const errorConfigObj = this.errorComponent?.config;
    errorConfigObj.message = msg ? msg : errorConfigObj.message;
    this.errorComponent?.openErrorSnackbar();
  }
  createProviderUser() {
    if (this.createproviderForm.invalid) {
      this.showError = true;
      return;
    }
    this.showLoader = true;
    this.showError = false;
    let param = {
      accountId: this.getControl["accountId"].value,
      nickname: this.getControl["nickname"].value
    };
    this._webService.createProvider(param).subscribe({
      next: (response) => {
        this.showSuccessPopupMsg("Provider has been added");
        this._webService.emitOnWebDataChange({ action: "provider_created", data: response });
        this.showLoader = false;
      },
      error: (errorObj) => {
        this.showLoader = false;
        this.showErrorWarnMessage(this.IConstant.errorMessageObj[errorObj?.error?.errorCode]);
        this.cdr.detectChanges();
      }
    });
  }
  showSuccessPopupMsg(msg) {
    const errorConfigObj = this.errorComponent?.config;
    errorConfigObj.customStyle = "default-success-style";
    errorConfigObj.message = msg ? msg : errorConfigObj.message;
    this.errorComponent?.openErrorSnackbar();
  }
  static \u0275fac = function BeProviderDialogStandAloneComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BeProviderDialogStandAloneComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(WebService), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BeProviderDialogStandAloneComponent, selectors: [["beProvider-dialog"]], viewQuery: function BeProviderDialogStandAloneComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(ShowErrorStandAloneComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.errorComponent = _t.first);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 32, vars: 26, consts: [["mat-dialog-title", "", 1, "text-center"], [1, "text-center"], [3, "formGroup"], [1, "mat-typography"], [1, "common-field"], ["formControlName", "accountId"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "pb-10", 4, "ngIf"], ["type", "text", "matInput", "", "placeholder", "Provider 1", "formControlName", "nickname"], [1, "d-flex", "justify-center", "g-20"], [1, "secondary-btn", 3, "click"], ["type", "submit", 1, "primary-btn", 3, "click", "IcmLoadingOverlay"], [3, "value"], [1, "pb-10"]], template: function BeProviderDialogStandAloneComponent_Template(rf, ctx) {
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
      \u0275\u0275elementStart(12, "mat-select", 5);
      \u0275\u0275template(13, BeProviderDialogStandAloneComponent_mat_option_13_Template, 2, 2, "mat-option", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(14, BeProviderDialogStandAloneComponent_p_14_Template, 3, 3, "p", 7)(15, BeProviderDialogStandAloneComponent_mat_error_15_Template, 3, 3, "mat-error", 7);
      \u0275\u0275elementStart(16, "mat-form-field", 4)(17, "mat-label");
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "input", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275template(21, BeProviderDialogStandAloneComponent_p_21_Template, 3, 3, "p", 7)(22, BeProviderDialogStandAloneComponent_mat_error_22_Template, 3, 3, "mat-error", 7)(23, BeProviderDialogStandAloneComponent_mat_error_23_Template, 3, 3, "mat-error", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 9)(25, "button", 10);
      \u0275\u0275listener("click", function BeProviderDialogStandAloneComponent_Template_button_click_25_listener() {
        return ctx.closeCreateProviderForm();
      });
      \u0275\u0275text(26);
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "button", 11);
      \u0275\u0275listener("click", function BeProviderDialogStandAloneComponent_Template_button_click_28_listener() {
        return ctx.createProviderUser();
      });
      \u0275\u0275text(29);
      \u0275\u0275pipe(30, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(31, "show-error-message");
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 14, "HOME.New Provider"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 16, "COMMON.CreateNewProvider"));
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.createproviderForm);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 18, "SUBSCRIPTION.Trading account"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.tradingIdArr);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.showError || !(ctx.createproviderForm.controls["accountId"].errors == null ? null : ctx.createproviderForm.controls["accountId"].errors["required"]));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showError && (ctx.createproviderForm.controls["accountId"].errors == null ? null : ctx.createproviderForm.controls["accountId"].errors["required"]));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 20, "OFFERS.Nickname"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.showError || !(ctx.createproviderForm.controls["nickname"].errors == null ? null : ctx.createproviderForm.controls["nickname"].errors["required"]) && !(ctx.createproviderForm.controls["nickname"].errors == null ? null : ctx.createproviderForm.controls["nickname"].errors["minlength"]));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showError && (ctx.createproviderForm.controls["nickname"].errors == null ? null : ctx.createproviderForm.controls["nickname"].errors["required"]));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showError && (ctx.createproviderForm.controls["nickname"].errors == null ? null : ctx.createproviderForm.controls["nickname"].errors["minlength"]));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 22, "COMMON.Cancel"));
      \u0275\u0275advance(2);
      \u0275\u0275property("IcmLoadingOverlay", ctx.showLoader);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 24, "COMMON.Create"));
    }
  }, dependencies: [MatDialogModule, MatDialogTitle, MatDialogContent, MatInputModule, MatInput, MatFormField, MatLabel, MatError, MatSelectModule, MatSelect, MatOption, CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, ShowErrorStandAloneComponent, TranslateModule, TranslatePipe, IcmLoadingOverlayDirective], styles: ["\n\n  .beProvider-dialog {\n  width: 600px !important;\n  border-radius: 10px !important;\n}\n  .beProvider-dialog .mat-mdc-dialog-title {\n  margin: unset !important;\n  padding-bottom: 10px !important;\n}\n  .beProvider-dialog .mat-mdc-dialog-surface {\n  border-radius: 10px !important;\n  background: white !important;\n  padding: 20px !important;\n}\n  .beProvider-dialog .common-field {\n  width: 100% !important;\n}\n  .beProvider-dialog .common-field .mdc-text-field {\n  background-color: white;\n  border: 1px solid;\n  border-bottom: 0px;\n}\n  .beProvider-dialog .common-field .mdc-text-field textarea {\n  resize: none;\n}\n  .beProvider-dialog .common-field .mdc-text-field .mat-mdc-form-field-text-suffix {\n  font-size: 20px;\n}\n/*# sourceMappingURL=beProviderDialog.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BeProviderDialogStandAloneComponent, { className: "BeProviderDialogStandAloneComponent", filePath: "src\\app\\web\\shared\\dialogBox\\create-provider-dialog\\beProviderDialog.standalone.component.ts", lineNumber: 21 });
})();

export {
  BeProviderDialogStandAloneComponent
};
//# sourceMappingURL=chunk-55XS5TPC.js.map
