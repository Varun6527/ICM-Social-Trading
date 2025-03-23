import {
  IcmLoadingOverlayDirective
} from "./chunk-XT7PDWCQ.js";
import {
  MAT_DIALOG_DATA,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle
} from "./chunk-VQMCFLWH.js";
import {
  WebService
} from "./chunk-5MDTIDYM.js";
import {
  ShowErrorStandAloneComponent
} from "./chunk-ZFOVCG2I.js";
import {
  ChangeDetectorRef,
  CommonModule,
  ConstantVariable,
  DatePipe,
  TranslateModule,
  TranslatePipe,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-G46OV5IL.js";

// src/app/web/shared/dialogBox/delete-offer-data/deleteOfferDataDialog.standalone.component.ts
function DeleteOfferDataDialog_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(1, 2, "PROVIDERS_PROFILE.Delete"), " ", \u0275\u0275pipeBind1(2, 4, "PROVIDERS_PROFILE.Additional Agent"), " ");
  }
}
function DeleteOfferDataDialog_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(1, 2, "PROVIDERS_PROFILE.Delete"), " ", \u0275\u0275pipeBind1(2, 4, "PROVIDERS_PROFILE.Join Link"), " ");
  }
}
function DeleteOfferDataDialog_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "PROVIDERS_PROFILE.Delete"), " ");
  }
}
function DeleteOfferDataDialog_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "PROVIDERS_PROFILE.Delete the additional agent"), " ");
  }
}
function DeleteOfferDataDialog_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "PROVIDERS_PROFILE.Delete the offer's join link"), " ");
  }
}
function DeleteOfferDataDialog_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "PROVIDERS_PROFILE.Delete the risk rule"), " ");
  }
}
function DeleteOfferDataDialog_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 7)(7, "div");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "COMMON.Agent"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.modelData.externalAccount);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 6, "PROVIDERS_PROFILE.Share"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.modelData.share);
  }
}
function DeleteOfferDataDialog_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 7)(7, "div");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "COMMON.Key"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.modelData.key);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 6, "OFFERS.Expiration"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 8, ctx_r0.modelData.expiration, "M/d/yy"));
  }
}
function DeleteOfferDataDialog_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 7)(7, "div");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 7)(13, "div");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 7)(19, "div");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 8, "PROVIDERS_PROFILE.Parameter"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.modelData.parameter);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 10, "PROVIDERS_PROFILE.Threshold"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.modelData.threshold);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 12, "PROVIDERS_PROFILE.Trading Action"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.modelData.tradingAction);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 14, "PROVIDERS_PROFILE.Subscription Action"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.modelData.subscriptionAction);
  }
}
var DeleteOfferDataDialog = class _DeleteOfferDataDialog {
  data;
  dialogRef;
  _webService;
  cdr;
  showLoader = false;
  offerData = {};
  riskData;
  modelType = "";
  modelData = {};
  subscriptionData;
  errorComponent;
  IConstant = new ConstantVariable();
  constructor(data, dialogRef, _webService, cdr) {
    this.data = data;
    this.dialogRef = dialogRef;
    this._webService = _webService;
    this.cdr = cdr;
    this.modelType = this.data.modelType;
    this.modelData = this.data.modelData;
    this.offerData = this.data.offerData;
    this.subscriptionData = this.data.subscriptionData;
    this.riskData = this.data.riskData;
  }
  deleteOfferData() {
    this.showLoader = true;
    let param = this.getParamOfDeleteOfferData(), apiObseverable, successMsg = "", eventMsg = "";
    if (this.modelType == "agent" || this.modelType == "joinLink") {
      apiObseverable = this._webService.updateOfferData(param);
      successMsg = "Offer has been updated";
      eventMsg = "refresh_offer_data";
    } else if (this.modelType == "risk") {
      apiObseverable = this._webService.createOrUpdateRiskData(param);
      successMsg = "Subscription has been updated";
      eventMsg = "refresh_risk_data";
    }
    apiObseverable?.subscribe({
      next: (response) => {
        this.showSuccessPopupMsg(successMsg);
        this.dialogRef.close({ action: eventMsg });
        this.showLoader = false;
      },
      error: (errorObj) => {
        this.showLoader = false;
        this.showErrorWarnMessage(this.IConstant.errorMessageObj[errorObj?.error?.errorCode]);
        this.cdr.detectChanges();
      }
    });
  }
  getParamOfDeleteOfferData() {
    let param = {};
    if (this.modelType == "agent") {
      param["additionalAgents"] = JSON.parse(JSON.stringify(this.offerData.additionalAgents));
      param["additionalAgents"]["chain"] = param["additionalAgents"]["chain"].filter((o) => o.externalAccount != this.modelData.externalAccount);
      param["offerId"] = this.offerData.id;
    } else if (this.modelType == "joinLink") {
      param["registration"] = JSON.parse(JSON.stringify(this.offerData.registration));
      param["registration"]["links"] = param["registration"]["links"].filter((o) => o.key != this.modelData.key);
      param["offerId"] = this.offerData.id;
    } else if (this.modelType == "risk") {
      param["rules"] = JSON.parse(JSON.stringify(this.riskData));
      param["rules"] = param["rules"].filter((obj) => obj.parameter !== this.modelData.parameter);
      param["subscriptionId"] = this.subscriptionData.id;
    }
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
  closeDeleteInfoForm() {
    this.dialogRef.close({});
  }
  static \u0275fac = function DeleteOfferDataDialog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DeleteOfferDataDialog)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(WebService), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeleteOfferDataDialog, selectors: [["delete-offer-dialog"]], viewQuery: function DeleteOfferDataDialog_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(ShowErrorStandAloneComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.errorComponent = _t.first);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 21, vars: 12, consts: [["mat-dialog-title", "", 1, "text-center"], [1, "text-center"], [1, "mat-typography"], [1, "archive-details-container"], [1, "d-flex", "justify-center", "g-20"], [1, "secondary-btn", 3, "click"], ["type", "submit", 1, "primary-btn", 3, "click", "IcmLoadingOverlay"], [1, "d-flex", "justify-space-between", "align-center"]], template: function DeleteOfferDataDialog_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h2", 0);
      \u0275\u0275template(1, DeleteOfferDataDialog_Conditional_1_Template, 3, 6)(2, DeleteOfferDataDialog_Conditional_2_Template, 3, 6)(3, DeleteOfferDataDialog_Conditional_3_Template, 2, 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 1);
      \u0275\u0275template(5, DeleteOfferDataDialog_Conditional_5_Template, 2, 3)(6, DeleteOfferDataDialog_Conditional_6_Template, 2, 3)(7, DeleteOfferDataDialog_Conditional_7_Template, 2, 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "mat-dialog-content", 2)(9, "div", 3);
      \u0275\u0275template(10, DeleteOfferDataDialog_Conditional_10_Template, 12, 8)(11, DeleteOfferDataDialog_Conditional_11_Template, 13, 11)(12, DeleteOfferDataDialog_Conditional_12_Template, 24, 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 4)(14, "button", 5);
      \u0275\u0275listener("click", function DeleteOfferDataDialog_Template_button_click_14_listener() {
        return ctx.closeDeleteInfoForm();
      });
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "button", 6);
      \u0275\u0275listener("click", function DeleteOfferDataDialog_Template_button_click_17_listener() {
        return ctx.deleteOfferData();
      });
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(20, "show-error-message");
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.modelType == "agent" ? 1 : ctx.modelType == "joinLink" ? 2 : ctx.modelType == "risk" ? 3 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.modelType == "agent" ? 5 : ctx.modelType == "joinLink" ? 6 : ctx.modelType == "risk" ? 7 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.modelType == "agent" ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.modelType == "joinLink" ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.modelType == "risk" ? 12 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 8, "COMMON.Cancel"));
      \u0275\u0275advance(2);
      \u0275\u0275property("IcmLoadingOverlay", ctx.showLoader);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 10, "PROVIDERS_PROFILE.Delete"));
    }
  }, dependencies: [MatDialogModule, MatDialogTitle, MatDialogContent, CommonModule, DatePipe, ShowErrorStandAloneComponent, TranslateModule, TranslatePipe, IcmLoadingOverlayDirective], styles: ["\n\n  .delete-offer-dialog {\n  width: 600px !important;\n  border-radius: 10px !important;\n}\n  .delete-offer-dialog .mat-mdc-dialog-title {\n  margin: unset !important;\n  padding-bottom: 10px !important;\n}\n  .delete-offer-dialog .mat-mdc-dialog-surface {\n  border-radius: 10px !important;\n  background: white !important;\n  padding: 20px !important;\n}\n  .delete-offer-dialog .common-field {\n  width: 100% !important;\n}\n  .delete-offer-dialog .common-field .mdc-text-field {\n  background-color: white;\n  border: 1px solid;\n  border-bottom: 0px;\n}\n  .delete-offer-dialog .common-field .mdc-text-field textarea {\n  resize: none;\n}\n  .delete-offer-dialog .common-field .mdc-text-field .mat-mdc-form-field-text-suffix {\n  font-size: 20px;\n}\n.archive-details-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  gap: 30px;\n  font-size: 20px;\n}\n/*# sourceMappingURL=deleteOfferDataDialog.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeleteOfferDataDialog, { className: "DeleteOfferDataDialog", filePath: "src\\app\\web\\shared\\dialogBox\\delete-offer-data\\deleteOfferDataDialog.standalone.component.ts", lineNumber: 18 });
})();

export {
  DeleteOfferDataDialog
};
//# sourceMappingURL=chunk-PDHMRZIQ.js.map
