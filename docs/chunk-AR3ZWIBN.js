import {
  BaseLanguageTranslationComponent,
  MatIconModule
} from "./chunk-IN7YTLUY.js";
import {
  AuthService
} from "./chunk-GZS32W6K.js";
import {
  IcmLoadingOverlayDirective
} from "./chunk-XT7PDWCQ.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MatButton,
  MatButtonModule,
  MatCard,
  MatCardContent,
  MatCardModule,
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  ShowErrorStandAloneComponent,
  Validators,
  ɵNgNoValidate
} from "./chunk-ZFOVCG2I.js";
import {
  ActivatedRoute,
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  Router,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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
  ɵɵproperty,
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
  ɵɵviewQuery
} from "./chunk-G46OV5IL.js";
import "./chunk-4OO5LSKA.js";

// src/app/auth/login/login.standalone.component.ts
var _c0 = (a0) => ({ "show-error": a0 });
function LoginStandAloneComponent_button_10_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const lang_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", lang_r3.displayLabel, ") ");
  }
}
function LoginStandAloneComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function LoginStandAloneComponent_button_10_Template_button_click_0_listener() {
      const lang_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectLanguage(lang_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275template(2, LoginStandAloneComponent_button_10_ng_container_2_Template, 2, 1, "ng-container", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lang_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", lang_r3.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", lang_r3.code !== "en");
  }
}
function LoginStandAloneComponent_label_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 34);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "login.TradingAccountId"));
  }
}
function LoginStandAloneComponent_label_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 35);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "login.FieldRequired"), " ");
  }
}
function LoginStandAloneComponent_label_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 34);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "login.TradingAccountPassword"));
  }
}
function LoginStandAloneComponent_label_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 35);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "login.FieldRequired"), " ");
  }
}
var LoginStandAloneComponent = class _LoginStandAloneComponent extends BaseLanguageTranslationComponent {
  activatedRoute;
  router;
  translate;
  fb;
  _authService;
  loginForm;
  showLoginFormError = false;
  errorComponent;
  redirectUrl;
  showLoader;
  constructor(activatedRoute, router, translate, fb, _authService) {
    super(translate, _authService);
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.translate = translate;
    this.fb = fb;
    this._authService = _authService;
    this.loginForm = this.fb.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required]]
    });
    this.activatedRoute.queryParams.subscribe((params) => {
      this.redirectUrl = params["redirectUrl"];
    });
  }
  get getControl() {
    return this.loginForm.controls;
  }
  checkLength() {
    let userIdVal = this.getControl["username"].value;
    if (userIdVal?.toString().length > 16) {
      userIdVal = userIdVal.toString().slice(0, 16);
      this.getControl["username"].setValue(parseInt(userIdVal));
      this.getControl["username"].updateValueAndValidity();
    }
  }
  loginUser() {
    if (this.loginForm.invalid) {
      this.showLoginFormError = true;
      return;
    }
    this.showLoader = true;
    let param = {
      username: this.getControl["username"].value,
      password: this.getControl["password"].value,
      grant_type: "password"
    };
    this._authService.loginUser(param).subscribe({
      next: (result) => {
        this._authService.tokenObject = result;
        this.router.navigate([this.redirectUrl ? this.redirectUrl : "./portal"]);
      },
      error: (errorObj) => {
        console.error(errorObj?.error?.error_description);
        this.showErrorWarnMessage(errorObj?.error?.error_description);
        this.showLoader = false;
      }
    });
  }
  showErrorWarnMessage(msg) {
    const errorConfigObj = this.errorComponent?.config;
    errorConfigObj.message = "Wrong login or password. Use login and password from MetaTrader server";
    this.errorComponent?.openErrorSnackbar();
  }
  static \u0275fac = function LoginStandAloneComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginStandAloneComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginStandAloneComponent, selectors: [["app-login"]], viewQuery: function LoginStandAloneComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(ShowErrorStandAloneComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.errorComponent = _t.first);
    }
  }, standalone: true, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature], decls: 78, vars: 54, consts: [["languageMenu", "matMenu"], [1, "login-screen"], [1, "login-card"], [1, "login-card-header"], [1, "button-row"], [1, "theme-btn"], ["src", "../../../assets/icons/sun.png"], [1, "flag-btn", 3, "matMenuTriggerFor"], ["height", "24", "width", "24", 3, "src"], [1, "languageMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["src", "../../../assets/logo/ICM Logo Default 1.png", 1, "login-logo"], [1, "login-text-content"], ["id", "clientLoginForm", 3, "ngSubmit", "formGroup"], [1, "login-form"], [1, "login-form-content", 3, "ngClass"], [1, "input-div"], [1, "lb-title"], ["type", "number", "formControlName", "username", 3, "input"], ["class", "lb-detail", 4, "ngIf"], ["class", "lb-detail warn-msg", 4, "ngIf"], ["type", "password", "formControlName", "password"], [1, "login-form-actions"], [1, "remember-me"], ["type", "checkbox"], [1, "forgot-password"], [1, "login-form-button"], ["mat-flat-button", "", "type", "submit", 3, "IcmLoadingOverlay"], [1, "register"], [1, "login-form-footer"], ["href", "https://track.icmcapital.com/?t=copytrading&lang=en"], ["href", "https://clients.icmcapital.mu/auth/login"], ["mat-menu-item", "", 3, "click"], [4, "ngIf"], [1, "lb-detail"], [1, "lb-detail", "warn-msg"]], template: function LoginStandAloneComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "mat-card", 2)(2, "div", 3)(3, "div", 4)(4, "button", 5);
      \u0275\u0275element(5, "img", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "button", 7);
      \u0275\u0275element(7, "img", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "mat-menu", 9, 0);
      \u0275\u0275template(10, LoginStandAloneComponent_button_10_Template, 3, 2, "button", 10);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "mat-card-content");
      \u0275\u0275element(12, "img", 11);
      \u0275\u0275elementStart(13, "div", 12)(14, "h4");
      \u0275\u0275text(15, "Social Trading");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "p");
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "p");
      \u0275\u0275text(20);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "form", 13);
      \u0275\u0275listener("ngSubmit", function LoginStandAloneComponent_Template_form_ngSubmit_22_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.loginUser());
      });
      \u0275\u0275elementStart(23, "div", 14)(24, "div", 15)(25, "div", 16)(26, "label", 17);
      \u0275\u0275text(27);
      \u0275\u0275pipe(28, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "input", 18);
      \u0275\u0275listener("input", function LoginStandAloneComponent_Template_input_input_29_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.checkLength());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(30, LoginStandAloneComponent_label_30_Template, 3, 3, "label", 19)(31, LoginStandAloneComponent_label_31_Template, 3, 3, "label", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 15)(33, "div", 16)(34, "label", 17);
      \u0275\u0275text(35);
      \u0275\u0275pipe(36, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(37, "input", 21);
      \u0275\u0275template(38, LoginStandAloneComponent_label_38_Template, 3, 3, "label", 19)(39, LoginStandAloneComponent_label_39_Template, 3, 3, "label", 20);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(40, "div", 22)(41, "div", 23);
      \u0275\u0275element(42, "input", 24);
      \u0275\u0275elementStart(43, "p");
      \u0275\u0275text(44);
      \u0275\u0275pipe(45, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "div", 25)(47, "p");
      \u0275\u0275text(48);
      \u0275\u0275pipe(49, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(50, "div", 26)(51, "a")(52, "button", 27);
      \u0275\u0275text(53);
      \u0275\u0275pipe(54, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(55, "div", 22)(56, "div", 28)(57, "p");
      \u0275\u0275text(58);
      \u0275\u0275pipe(59, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "div", 28)(61, "p");
      \u0275\u0275text(62);
      \u0275\u0275pipe(63, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(64, "div", 29)(65, "p");
      \u0275\u0275text(66);
      \u0275\u0275pipe(67, "translate");
      \u0275\u0275elementStart(68, "a", 30);
      \u0275\u0275text(69);
      \u0275\u0275pipe(70, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "p");
      \u0275\u0275text(72);
      \u0275\u0275pipe(73, "translate");
      \u0275\u0275elementStart(74, "a", 31);
      \u0275\u0275text(75);
      \u0275\u0275pipe(76, "translate");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275element(77, "show-error-message");
    }
    if (rf & 2) {
      const languageMenu_r5 = \u0275\u0275reference(9);
      \u0275\u0275advance(6);
      \u0275\u0275property("matMenuTriggerFor", languageMenu_r5);
      \u0275\u0275advance();
      \u0275\u0275property("src", "../../../assets/icons/" + ctx.selectedLangObj.icon, \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.languages);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 24, "login.Client portal"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 26, "login.Register"));
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.loginForm);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(50, _c0, ctx.showLoginFormError && (ctx.loginForm.controls["username"].errors == null ? null : ctx.loginForm.controls["username"].errors["required"])));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 28, "login.Username"), " * ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.showLoginFormError || !(ctx.loginForm.controls["username"].errors == null ? null : ctx.loginForm.controls["username"].errors["required"]));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showLoginFormError && (ctx.loginForm.controls["username"].errors == null ? null : ctx.loginForm.controls["username"].errors["required"]));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(52, _c0, ctx.showLoginFormError && (ctx.loginForm.controls["password"].errors == null ? null : ctx.loginForm.controls["password"].errors["required"])));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(36, 30, "login.Password"), " * ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.showLoginFormError || !(ctx.loginForm.controls["password"].errors == null ? null : ctx.loginForm.controls["password"].errors["required"]));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showLoginFormError && (ctx.loginForm.controls["password"].errors == null ? null : ctx.loginForm.controls["password"].errors["required"]));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(45, 32, "login.Remember30days"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(49, 34, "login.ForgotPassword"));
      \u0275\u0275advance(4);
      \u0275\u0275property("IcmLoadingOverlay", ctx.showLoader);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(54, 36, "login.Log In"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(59, 38, "login.RegisterProvider"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(63, 40, "login.RegisterFollower"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(67, 42, "login.RegisterICMAccount"), ". ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(70, 44, "login.Clickhere"), "! ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(73, 46, "login.ExistingICMAccount"), ". ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(76, 48, "login.Clickhere"), "! ");
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, MatCardModule, MatCard, MatCardContent, MatButtonModule, MatButton, MatIconModule, MatMenuModule, MatMenu, MatMenuItem, MatMenuTrigger, TranslateModule, TranslatePipe, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, ShowErrorStandAloneComponent, IcmLoadingOverlayDirective], styles: ["\n\n.login-screen[_ngcontent-%COMP%] {\n  padding: 50px;\n}\n.login-card-header[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-bottom: 2px solid #F0F0F0;\n}\n.login-card-header[_ngcontent-%COMP%]   .button-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n}\n.login-card-header[_ngcontent-%COMP%]   .button-row[_ngcontent-%COMP%]   .theme-btn[_ngcontent-%COMP%] {\n  box-shadow: unset !important;\n  border-radius: 8px;\n  background: white;\n  border: 1px solid var(--primaryBlue);\n  width: 70px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.login-card-header[_ngcontent-%COMP%]   .button-row[_ngcontent-%COMP%]   .flag-btn[_ngcontent-%COMP%] {\n  box-shadow: unset !important;\n  border-radius: 8px;\n  background: var(--primaryBlue);\n  width: 70px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: unset;\n  cursor: pointer;\n}\n.login-card[_ngcontent-%COMP%] {\n  width: 450px;\n  min-height: 800px;\n  display: block;\n  margin: 0 auto;\n  border-radius: 8px;\n  background-color: white;\n}\n.login-logo[_ngcontent-%COMP%] {\n  display: block;\n  width: 120px;\n  margin: 0 auto;\n  padding-top: 25px;\n}\n.login-text-content[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-block: 20px;\n}\n.login-text-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: unset !important;\n  font-size: 30px;\n  font-weight: 500;\n}\n.login-text-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: unset !important;\n  color: #667085;\n  padding: 10px;\n}\n.login-form[_ngcontent-%COMP%] {\n  padding: 25px;\n}\n.login-form-content[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n.login-form-content[_ngcontent-%COMP%]   .input-div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.login-form-content[_ngcontent-%COMP%]   .input-div[_ngcontent-%COMP%]   .lb-title[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  color: #344054;\n  font-size: 14px;\n}\n.login-form-content[_ngcontent-%COMP%]   .input-div[_ngcontent-%COMP%]   .lb-detail[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.login-form-content[_ngcontent-%COMP%]   .input-div[_ngcontent-%COMP%]   .warn-msg[_ngcontent-%COMP%] {\n  color: red;\n}\n.login-form-content[_ngcontent-%COMP%]   .input-div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 40px;\n  border-radius: 8px;\n  border: 1px solid #D0D5DD;\n  padding: 0px 10px;\n  font-size: 15px;\n}\n.login-form-content.show-error[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  outline: none;\n  border: 2px solid red !important;\n}\n.login-form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0px 25px;\n  justify-content: space-between;\n  gap: 20px;\n}\n.login-form-actions[_ngcontent-%COMP%]   .remember-me[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: #344054;\n  font-size: 14px;\n}\n.login-form-actions[_ngcontent-%COMP%]   .remember-me[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: unset;\n}\n.login-form-actions[_ngcontent-%COMP%]   .forgot-password[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.login-form-actions[_ngcontent-%COMP%]   .forgot-password[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: unset;\n  color: var(--primaryBlue);\n  font-weight: 500;\n}\n.login-form-actions[_ngcontent-%COMP%]   .register[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.login-form-actions[_ngcontent-%COMP%]   .register[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: unset;\n  color: var(--primaryBlue);\n  font-weight: 500;\n  border-bottom: 1px dashed var(--primaryBlue);\n}\n.login-form-button[_ngcontent-%COMP%] {\n  padding: 25px;\n}\n.login-form-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  width: 100%;\n  background-color: var(--primaryBlue);\n  color: white;\n}\n.login-form-footer[_ngcontent-%COMP%] {\n  padding: 25px;\n}\n.login-form-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #667085;\n  text-align: center;\n  font-size: 14px;\n  margin: unset;\n}\n.login-form-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--primaryBlue);\n  text-decoration: none;\n}\n  .languageMenu .mat-mdc-menu-panel {\n  background-color: var(--mat-select-panel-background-color);\n}\n  .languageMenu .mat-mdc-menu-content {\n  height: 240px;\n  background-color: var(--mat-select-panel-background-color);\n}\n  .languageMenu .mat-mdc-menu-item {\n  padding-left: 20px;\n  padding-right: 20px;\n  background-color: var(--mat-select-panel-background-color);\n}\n  .languageMenu .mat-mdc-menu-item .mat-mdc-menu-item-text {\n  font-size: 17px !important;\n  display: flex;\n  gap: 20px;\n  align-items: center;\n}\n/*# sourceMappingURL=login.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginStandAloneComponent, { className: "LoginStandAloneComponent", filePath: "src\\app\\auth\\login\\login.standalone.component.ts", lineNumber: 27 });
})();
export {
  LoginStandAloneComponent
};
//# sourceMappingURL=chunk-AR3ZWIBN.js.map
