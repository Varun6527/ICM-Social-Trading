import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-G46OV5IL.js";

// src/app/web/shared/type-cell-renderer/type-cell-renderer.standalone.component.ts
var TypeCellRendererStandAloneComponent = class _TypeCellRendererStandAloneComponent {
  value = "";
  valueFormatted = "";
  agInit(params) {
    this.value = params.value;
    this.valueFormatted = params.valueFormatted;
  }
  refresh(params) {
    this.value = params.value;
    this.valueFormatted = params.valueFormatted;
    return true;
  }
  static \u0275fac = function TypeCellRendererStandAloneComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TypeCellRendererStandAloneComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TypeCellRendererStandAloneComponent, selectors: [["status-cell-renderer"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 4, template: function TypeCellRendererStandAloneComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div")(1, "span");
      \u0275\u0275text(2);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classMapInterpolate1("tag ", ctx.value, "Tag");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.value);
    }
  }, styles: ["\n\n.tag[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  line-height: 2;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50%;\n  background: var(--primary-light-positive-color);\n  color: var(--primary-positive-color);\n  font-size: 13px;\n  font-weight: 400;\n}\n.activeTag[_ngcontent-%COMP%] {\n  background-color: rgba(132, 202, 129, 0.1882352941);\n  border: 1.5px solid rgba(70, 227, 114, 0.2);\n}\n.outOfStockTag[_ngcontent-%COMP%] {\n  background-color: rgba(255, 0, 0, 0.05);\n  color: rgb(234, 83, 83);\n  border: 1.5px solid rgba(255, 0, 0, 0.3);\n}\n.pausedTag[_ngcontent-%COMP%] {\n  background-color: rgba(202, 171, 112, 0.2117647059);\n}\n.activeCircle[_ngcontent-%COMP%] {\n  background-color: #6d9b7e;\n}\n.outOfStockCircle[_ngcontent-%COMP%] {\n  background-color: #ea5353;\n}\n.pausedCircle[_ngcontent-%COMP%] {\n  background-color: #a06d37;\n}\n/*# sourceMappingURL=type-cell-renderer.standalone.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TypeCellRendererStandAloneComponent, { className: "TypeCellRendererStandAloneComponent", filePath: "src\\app\\web\\shared\\type-cell-renderer\\type-cell-renderer.standalone.component.ts", lineNumber: 55 });
})();

export {
  TypeCellRendererStandAloneComponent
};
//# sourceMappingURL=chunk-JQKCEFXE.js.map
