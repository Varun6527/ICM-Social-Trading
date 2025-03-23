import {
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate
} from "./chunk-G46OV5IL.js";

// src/app/web/shared/status-btn-renderer/status-btn-renderer.component.ts
function StatusBtnRendererComponent_Conditional_1_img_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 4);
  }
}
function StatusBtnRendererComponent_Conditional_1_img_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 5);
  }
}
function StatusBtnRendererComponent_Conditional_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 6);
  }
}
function StatusBtnRendererComponent_Conditional_1_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 7);
  }
}
function StatusBtnRendererComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StatusBtnRendererComponent_Conditional_1_img_0_Template, 1, 0, "img", 0)(1, StatusBtnRendererComponent_Conditional_1_img_1_Template, 1, 0, "img", 1)(2, StatusBtnRendererComponent_Conditional_1_img_2_Template, 1, 0, "img", 2)(3, StatusBtnRendererComponent_Conditional_1_img_3_Template, 1, 0, "img", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r0.params.data.isActivated && ctx_r0.params.data.state == "Active" && ctx_r0.params.value);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.params.data.isActivated && ctx_r0.params.data.state == "Active" && !ctx_r0.params.value);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.params.data.isActivated && ctx_r0.params.data.state == "Archived");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.params.data.isActivated && ctx_r0.params.data.state == "Active");
  }
}
function StatusBtnRendererComponent_Conditional_2_img_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 4);
  }
}
function StatusBtnRendererComponent_Conditional_2_img_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 6);
  }
}
function StatusBtnRendererComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StatusBtnRendererComponent_Conditional_2_img_0_Template, 1, 0, "img", 0)(1, StatusBtnRendererComponent_Conditional_2_img_1_Template, 1, 0, "img", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r0.params.value == true || ctx_r0.params.value == "Active");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.params.value == false || ctx_r0.params.value == "Expired");
  }
}
var StatusBtnRendererComponent = class _StatusBtnRendererComponent {
  params;
  agInit(params) {
    this.params = params;
  }
  static \u0275fac = function StatusBtnRendererComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StatusBtnRendererComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StatusBtnRendererComponent, selectors: [["app-status-btn-renderer"]], decls: 3, vars: 1, consts: [["height", "25", "width", "25", "src", "../../../../assets/icons/Check icon.png", 4, "ngIf"], ["height", "25", "width", "25", "src", "../../../../assets/icons/pause-button.png", 4, "ngIf"], ["height", "25", "width", "25", "src", "../../../../assets/icons/cancelIcon.png", 4, "ngIf"], ["height", "25", "width", "25", "src", "../../../../assets/icons/redSettingsIcon.png", 4, "ngIf"], ["height", "25", "width", "25", "src", "../../../../assets/icons/Check icon.png"], ["height", "25", "width", "25", "src", "../../../../assets/icons/pause-button.png"], ["height", "25", "width", "25", "src", "../../../../assets/icons/cancelIcon.png"], ["height", "25", "width", "25", "src", "../../../../assets/icons/redSettingsIcon.png"]], template: function StatusBtnRendererComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div");
      \u0275\u0275template(1, StatusBtnRendererComponent_Conditional_1_Template, 4, 4)(2, StatusBtnRendererComponent_Conditional_2_Template, 2, 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.params.colDef.colId == "activityCell" ? 1 : 2);
    }
  }, dependencies: [NgIf], styles: ["\n\n.status[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.inactiveIcon[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 25px;\n}\n/*# sourceMappingURL=status-btn-renderer.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StatusBtnRendererComponent, { className: "StatusBtnRendererComponent", filePath: "src\\app\\web\\shared\\status-btn-renderer\\status-btn-renderer.component.ts", lineNumber: 10 });
})();

export {
  StatusBtnRendererComponent
};
//# sourceMappingURL=chunk-DAHACZEA.js.map
