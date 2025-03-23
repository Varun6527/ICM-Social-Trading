import {
  BaseLanguageTranslationComponent,
  MatIconModule
} from "./chunk-IN7YTLUY.js";
import {
  AuthService
} from "./chunk-GZS32W6K.js";
import {
  FormBuilder,
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  ReactiveFormsModule,
  ShowErrorStandAloneComponent
} from "./chunk-ZFOVCG2I.js";
import {
  CommonModule,
  Router,
  TranslateModule,
  TranslateService,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵqueryRefresh,
  ɵɵtext,
  ɵɵviewQuery
} from "./chunk-G46OV5IL.js";
import "./chunk-4OO5LSKA.js";

// src/app/auth/register/provider/provider.standalone.component.ts
var RegisterProviderStandAloneComponent = class _RegisterProviderStandAloneComponent extends BaseLanguageTranslationComponent {
  router;
  translate;
  fb;
  _authService;
  registerProviderForm;
  showLoginFormError = false;
  errorMessageConfig;
  errorComponent;
  constructor(router, translate, fb, _authService) {
    super(translate, _authService);
    this.router = router;
    this.translate = translate;
    this.fb = fb;
    this._authService = _authService;
  }
  static \u0275fac = function RegisterProviderStandAloneComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegisterProviderStandAloneComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterProviderStandAloneComponent, selectors: [["register-provider"]], viewQuery: function RegisterProviderStandAloneComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(ShowErrorStandAloneComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.errorComponent = _t.first);
    }
  }, standalone: true, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature], decls: 3, vars: 0, template: function RegisterProviderStandAloneComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h1");
      \u0275\u0275text(1, "Provider Registration");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2, "show-error-message");
    }
  }, dependencies: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatMenuModule, TranslateModule, ReactiveFormsModule, ShowErrorStandAloneComponent] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterProviderStandAloneComponent, { className: "RegisterProviderStandAloneComponent", filePath: "src\\app\\auth\\register\\provider\\provider.standalone.component.ts", lineNumber: 26 });
})();
export {
  RegisterProviderStandAloneComponent
};
//# sourceMappingURL=chunk-BDJMJOBD.js.map
