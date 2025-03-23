import {
  MAT_DIALOG_DATA,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle
} from "./chunk-VQMCFLWH.js";
import {
  CommonModule,
  NgForOf,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  Router,
  RouterModule,
  TranslateModule,
  TranslatePipe,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-G46OV5IL.js";

// src/app/web/shared/dialogBox/common-dialog/common.dialog.standalone.component.ts
function CommonDialogStandAloneComponent_div_8_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const labelObj_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(labelObj_r1.value);
  }
}
function CommonDialogStandAloneComponent_div_8_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 12)(2, "div", 13)(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 14);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const labelObj_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275classMap(labelObj_r1.value.direction == "Deposit" ? "deposit" : "withdraw");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", labelObj_r1.value.direction == "Deposit" ? "<--" : "-->", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", labelObj_r1.value.amount, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(labelObj_r1.value.type);
  }
}
function CommonDialogStandAloneComponent_div_8_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 15);
    \u0275\u0275listener("click", function CommonDialogStandAloneComponent_div_8_ng_container_7_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const labelObj_r1 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.redirectToResultPage(labelObj_r1));
    });
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const labelObj_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", labelObj_r1.value, "");
  }
}
function CommonDialogStandAloneComponent_div_8_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 12)(2, "div", 16)(3, "a", 17);
    \u0275\u0275listener("click", function CommonDialogStandAloneComponent_div_8_ng_container_8_Template_a_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const labelObj_r1 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.redirectToSubscription(labelObj_r1.value));
    });
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 14);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const labelObj_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(labelObj_r1.value.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" #", labelObj_r1.value.subscriptionId, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("#", labelObj_r1.value.account, "/", labelObj_r1.value.server, "");
  }
}
function CommonDialogStandAloneComponent_div_8_ng_container_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 18)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const labelObj_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(labelObj_r1.value.name);
  }
}
function CommonDialogStandAloneComponent_div_8_ng_container_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "a", 15);
    \u0275\u0275listener("click", function CommonDialogStandAloneComponent_div_8_ng_container_9_Conditional_2_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const labelObj_r1 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.redirectToProvider(labelObj_r1.value));
    });
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 14);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const labelObj_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(labelObj_r1.value.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("#", labelObj_r1.value.account, "/", labelObj_r1.value.server, "");
  }
}
function CommonDialogStandAloneComponent_div_8_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CommonDialogStandAloneComponent_div_8_ng_container_9_Conditional_1_Template, 3, 1, "a", 18)(2, CommonDialogStandAloneComponent_div_8_ng_container_9_Conditional_2_Template, 6, 3, "div", 19);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const labelObj_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(labelObj_r1.value.ownerType != "Provider" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(labelObj_r1.value.ownerType == "Provider" ? 2 : -1);
  }
}
function CommonDialogStandAloneComponent_div_8_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 15);
    \u0275\u0275listener("click", function CommonDialogStandAloneComponent_div_8_ng_container_10_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const labelObj_r1 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.redirectToSubscriptionPosition(labelObj_r1.data));
    });
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const labelObj_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(labelObj_r1.value);
  }
}
function CommonDialogStandAloneComponent_div_8_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const labelObj_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(labelObj_r1.value);
  }
}
function CommonDialogStandAloneComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerStart(4, 8);
    \u0275\u0275template(5, CommonDialogStandAloneComponent_div_8_ng_container_5_Template, 3, 1, "ng-container", 9)(6, CommonDialogStandAloneComponent_div_8_ng_container_6_Template, 9, 6, "ng-container", 9)(7, CommonDialogStandAloneComponent_div_8_ng_container_7_Template, 4, 1, "ng-container", 9)(8, CommonDialogStandAloneComponent_div_8_ng_container_8_Template, 10, 4, "ng-container", 9)(9, CommonDialogStandAloneComponent_div_8_ng_container_9_Template, 3, 2, "ng-container", 9)(10, CommonDialogStandAloneComponent_div_8_ng_container_10_Template, 4, 1, "ng-container", 9)(11, CommonDialogStandAloneComponent_div_8_ng_container_11_Template, 3, 1, "ng-container", 10);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const labelObj_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 8, labelObj_r1.title));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngSwitch", labelObj_r1.type);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "tag");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "transaction_amount");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "trading_reason");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "sender");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "recipent");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "postionRedirection");
  }
}
var CommonDialogStandAloneComponent = class _CommonDialogStandAloneComponent {
  router;
  dialogRef;
  commonDialogData;
  constructor(router, dialogRef, commonDialogData) {
    this.router = router;
    this.dialogRef = dialogRef;
    this.commonDialogData = commonDialogData;
  }
  closeCommonDialogPopup() {
    this.dialogRef.close();
  }
  redirectToResultPage(labelObj) {
    this.closeCommonDialogPopup();
    this.router.navigate([labelObj.redirectionUrl]);
  }
  redirectToSubscription(senderObj) {
    this.closeCommonDialogPopup();
    if (senderObj.ownerType == "Provider") {
      this.router.navigate([`/portal/providers/${senderObj.providerId}/subscriptions/${senderObj.subscriptionId}`]);
    } else {
      this.router.navigate([`/portal/subscriptions/${senderObj.subscriptionId}`]);
    }
  }
  redirectToProvider(recipentObj) {
    if (recipentObj.ownerType == "Provider") {
      this.closeCommonDialogPopup();
      this.router.navigate([`/portal/providers/${recipentObj.id}`]);
    }
  }
  redirectToSubscriptionPosition(data) {
    this.closeCommonDialogPopup();
    this.router.navigate([`/portal/subscriptions/${data.subscriptionId}/positions/${data.positionId}`]);
  }
  static \u0275fac = function CommonDialogStandAloneComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CommonDialogStandAloneComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CommonDialogStandAloneComponent, selectors: [["common-dialog"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 10, consts: [["mat-dialog-title", "", 1, "text-center"], [1, "text-center"], [1, "mat-typography"], [1, "account-details-container"], ["class", "d-flex justify-space-between align-center", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-center", "g-20"], [1, "secondary-btn", 3, "click"], [1, "d-flex", "justify-space-between", "align-center"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "tag"], [1, "d-flex", "flex-column"], [1, "d-flex", "justify-left", "g-10", "align-center", "line-height-2"], [1, "line-height-1"], [1, "default-link", 3, "click"], [1, "d-flex", "justify-right", "g-5", "align-center", "line-height-2"], ["href", "javascript:void(0)", 1, "default-link", 3, "click"], [1, "default-link", "cursor-default"], [1, "d-flex", "justify-right", "g-5", "align-center", "line-height-2", "flex-column", "align-end"]], template: function CommonDialogStandAloneComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h2", 0);
      \u0275\u0275text(1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 1);
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "mat-dialog-content", 2)(7, "div", 3);
      \u0275\u0275template(8, CommonDialogStandAloneComponent_div_8_Template, 12, 10, "div", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 5)(10, "button", 6);
      \u0275\u0275listener("click", function CommonDialogStandAloneComponent_Template_button_click_10_listener() {
        return ctx.closeCommonDialogPopup();
      });
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 4, ctx.commonDialogData.mainTitle));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 6, ctx.commonDialogData.secondryTitle));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngForOf", ctx.commonDialogData.labelDetails);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 8, "COMMON.Cancel"), " ");
    }
  }, dependencies: [MatDialogModule, MatDialogTitle, MatDialogContent, CommonModule, NgForOf, NgSwitch, NgSwitchCase, NgSwitchDefault, TranslateModule, TranslatePipe, RouterModule], styles: ["\n\n  .common-dialog {\n  min-width: 600px !important;\n  border-radius: 10px !important;\n}\n  .common-dialog .mat-mdc-dialog-title {\n  margin: unset !important;\n  padding-bottom: 10px !important;\n}\n  .common-dialog .mat-mdc-dialog-surface {\n  border-radius: 10px !important;\n  background: white !important;\n  padding: 20px !important;\n}\n  .common-dialog .account-details-container {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  gap: 30px;\n  font-size: 20px;\n}\n  .common-dialog .tag {\n  border-radius: 8px;\n  display: inline-block;\n  line-height: 2;\n  padding: 0px 10px;\n  background: var(--primary-light-positive-color);\n  color: var(--primary-positive-color);\n  font-size: 17px;\n  font-weight: 400;\n}\n/*# sourceMappingURL=common.dialog.standalone.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CommonDialogStandAloneComponent, { className: "CommonDialogStandAloneComponent", filePath: "src\\app\\web\\shared\\dialogBox\\common-dialog\\common.dialog.standalone.component.ts", lineNumber: 52 });
})();

export {
  CommonDialogStandAloneComponent
};
//# sourceMappingURL=chunk-IAOGV6S5.js.map
