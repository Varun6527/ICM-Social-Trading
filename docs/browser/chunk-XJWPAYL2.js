import {
  WebService
} from "./chunk-5MDTIDYM.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-ZFOVCG2I.js";
import {
  CommonModule,
  NgIf,
  Router,
  RouterModule,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-G46OV5IL.js";

// src/app/web/shared/action-button/action-button.standalone.component.ts
function ActionButtonStanAloneComponent_Conditional_0_img_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 5);
  }
}
function ActionButtonStanAloneComponent_Conditional_0_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 6);
  }
}
function ActionButtonStanAloneComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 2);
    \u0275\u0275listener("click", function ActionButtonStanAloneComponent_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onActionClick());
    });
    \u0275\u0275template(1, ActionButtonStanAloneComponent_Conditional_0_img_1_Template, 1, 0, "img", 3)(2, ActionButtonStanAloneComponent_Conditional_0_img_2_Template, 1, 0, "img", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.params.colDef.showPopupArraow);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.params.colDef.showPopupArraow);
  }
}
function ActionButtonStanAloneComponent_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function ActionButtonStanAloneComponent_Conditional_1_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onActionBtnClick("copy"));
    });
    \u0275\u0275element(1, "img", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 10);
    \u0275\u0275listener("click", function ActionButtonStanAloneComponent_Conditional_1_Conditional_4_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onActionBtnClick("edit"));
    });
    \u0275\u0275element(5, "img", 12);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 10);
    \u0275\u0275listener("click", function ActionButtonStanAloneComponent_Conditional_1_Conditional_4_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onActionBtnClick("delete"));
    });
    \u0275\u0275element(9, "img", 13);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "PROVIDERS_LIST.Copy"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 5, "COMMON.Edit"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 7, "PROVIDERS_PROFILE.Delete"));
  }
}
function ActionButtonStanAloneComponent_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function ActionButtonStanAloneComponent_Conditional_1_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onActionBtnClick("edit"));
    });
    \u0275\u0275element(1, "img", 12);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 10);
    \u0275\u0275listener("click", function ActionButtonStanAloneComponent_Conditional_1_Conditional_5_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onActionBtnClick("delete"));
    });
    \u0275\u0275element(5, "img", 13);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "COMMON.Edit"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 4, "PROVIDERS_PROFILE.Delete"), " ");
  }
}
function ActionButtonStanAloneComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275element(1, "img", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "mat-menu", 9, 0);
    \u0275\u0275template(4, ActionButtonStanAloneComponent_Conditional_1_Conditional_4_Template, 12, 9)(5, ActionButtonStanAloneComponent_Conditional_1_Conditional_5_Template, 8, 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const actionMenu_r5 = \u0275\u0275reference(3);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("matMenuTriggerFor", actionMenu_r5);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.params.colDef.colId == "offerJoinActionCell" ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.params.colDef.colId == "agentActionCell" || ctx_r1.params.colDef.colId == "riskCell" ? 5 : -1);
  }
}
var ActionButtonStanAloneComponent = class _ActionButtonStanAloneComponent {
  router;
  _webService;
  constructor(router, _webService) {
    this.router = router;
    this._webService = _webService;
  }
  params;
  // AG Grid passes the row data into this method
  agInit(params) {
    this.params = params;
  }
  onActionBtnClick(type) {
    if (this.params.colDef.colId == "offerJoinActionCell") {
      if (type == "copy") {
        this._webService.emitOnWebDataChange({ action: "copy_offer_join_link", data: this.params.data });
      } else if (type == "edit") {
        this._webService.emitOnWebDataChange({ action: "edit_offer_join_link", data: this.params.data });
      } else if (type == "delete") {
        this._webService.emitOnWebDataChange({ action: "delete_offer_join_link", data: this.params.data });
      }
    } else if (this.params.colDef.colId == "agentActionCell") {
      if (type == "edit") {
        this._webService.emitOnWebDataChange({ action: "update_agent_data", data: this.params.data });
      } else if (type == "delete") {
        this._webService.emitOnWebDataChange({ action: "delete_agent_data", data: this.params.data });
      }
    } else if (this.params.colDef.colId == "riskCell") {
      if (type == "edit") {
        this._webService.emitOnWebDataChange({ action: "update_risk_data", data: this.params.data });
      } else if (type == "delete") {
        this._webService.emitOnWebDataChange({ action: "delete_risk_data", data: this.params.data });
      }
    }
  }
  onActionClick() {
    if (this.params.colDef.colId == "providerProfileRedirection") {
      this.router.navigate([`/portal/providers/${this.params.data.providerId}`]);
    } else if (this.params.colDef.colId == "followerProfileRedirection") {
      this.router.navigate([`/portal/subscriptions/${this.params.data.followerId ? this.params.data.followerId : this.params.data.id}`]);
    } else if (this.params.colDef.colId == "accountDetailsPopup") {
      this._webService.emitOnWebDataChange({ action: "open_account_details_popup", data: this.params.data });
    } else if (this.params.colDef.colId == "transactionDetailsPopup") {
      this._webService.emitOnWebDataChange({ action: "open_transact_details_popup", data: this.params.data });
    } else if (this.params.colDef.colId == "offerRedirection") {
      this.router.navigate([`/portal/offers/${this.params.data.offerId}`]);
    } else if (this.params.colDef.colId == "providerSubscriptionRedirection") {
      this.router.navigate([`/portal/providers/${this.params.data.providerId}/subscriptions/${this.params.data.subscriptionId}`]);
    } else if (this.params.colDef.colId == "positionRedirection") {
      this.router.navigate([`/portal/providers/${this.params.data.providerId}/positions/${this.params.data.positionId}`]);
    } else if (this.params.colDef.colId == "dealsPopup") {
      this._webService.emitOnWebDataChange({ action: "open_deals_popup", data: this.params.data });
    } else if (this.params.colDef.colId == "tradingResultRedirection") {
      this.router.navigate([`/portal/providers/${this.params.data.providerId}/subscriptions/${this.params.data.subscriptionId}/results/${this.params.data.resultId}`]);
    } else if (this.params.colDef.colId == "positionSubscriptionRedirection") {
      this.router.navigate([`/portal/subscriptions/${this.params.data.subscriptionId}/positions/${this.params.data.positionId}`]);
    }
  }
  static \u0275fac = function ActionButtonStanAloneComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ActionButtonStanAloneComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(WebService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ActionButtonStanAloneComponent, selectors: [["app-action-button"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 1, consts: [["actionMenu", "matMenu"], [1, "tableActionBtn"], [1, "tableActionBtn", 3, "click"], ["src", ".././../../../assets/icons/arrowIcon.png", 4, "ngIf"], ["src", ".././../../../assets/icons/arrow-single.png", 4, "ngIf"], ["src", ".././../../../assets/icons/arrowIcon.png"], ["src", ".././../../../assets/icons/arrow-single.png"], [1, "tableActionBtn", 3, "matMenuTriggerFor"], ["src", ".././../../../assets/icons/three-dots.png", "width", "20"], [1, "actionMenu"], ["mat-menu-item", "", 3, "click"], ["width", "20", "src", ".././../../../assets/icons/copy.png"], ["width", "20", "src", ".././../../../assets/icons/pencil.png"], ["width", "20", "src", ".././../../../assets/icons/trashIcon.png"]], template: function ActionButtonStanAloneComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ActionButtonStanAloneComponent_Conditional_0_Template, 3, 2, "button", 1)(1, ActionButtonStanAloneComponent_Conditional_1_Template, 6, 3);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.params.colDef.colId !== "offerJoinActionCell" && ctx.params.colDef.colId !== "agentActionCell" && ctx.params.colDef.colId !== "riskCell" ? 0 : 1);
    }
  }, dependencies: [CommonModule, NgIf, RouterModule, MatMenuModule, MatMenu, MatMenuItem, MatMenuTrigger, TranslateModule, TranslatePipe], styles: ["\n\n.tableActionBtn[_ngcontent-%COMP%] {\n  padding: 15px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  width: 80px;\n  transition:\n    background-color 0.3s linear,\n    border-radius 0.3s linear,\n    padding 0.3s linear,\n    width 0.3s linear;\n}\n.tableActionBtn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(227, 227, 227, 0.5882352941);\n  border-radius: 6px;\n}\n  .actionMenu .mat-mdc-menu-panel {\n  background-color: var(--mat-select-panel-background-color);\n}\n  .actionMenu .mat-mdc-menu-content {\n  min-height: 100px;\n  max-height: 250px;\n  background-color: var(--mat-select-panel-background-color);\n}\n  .actionMenu .mat-mdc-menu-item {\n  padding-left: 20px;\n  padding-right: 20px;\n  background-color: var(--mat-select-panel-background-color);\n}\n  .actionMenu .mat-mdc-menu-item .mat-mdc-menu-item-text {\n  font-size: 17px !important;\n  display: flex;\n  gap: 20px;\n  align-items: center;\n}\n/*# sourceMappingURL=action-button.standalone.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ActionButtonStanAloneComponent, { className: "ActionButtonStanAloneComponent", filePath: "src\\app\\web\\shared\\action-button\\action-button.standalone.component.ts", lineNumber: 77 });
})();

export {
  ActionButtonStanAloneComponent
};
//# sourceMappingURL=chunk-XJWPAYL2.js.map
