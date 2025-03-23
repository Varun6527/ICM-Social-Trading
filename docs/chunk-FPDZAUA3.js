import {
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger
} from "./chunk-M2YGG6IJ.js";
import {
  IcmLoadingOverlayDirective
} from "./chunk-XT7PDWCQ.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-YEQ6N72F.js";
import {
  MatDialogClose,
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
  AsyncPipe,
  ChangeDetectorRef,
  CommonModule,
  ConstantVariable,
  NgForOf,
  NgIf,
  TranslateModule,
  TranslatePipe,
  map,
  startWith,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-G46OV5IL.js";

// src/app/web/shared/dialogBox/create-follower-dialog/beFollowerDialog.standalone.component.ts
function BeFollowerDialogStandAloneComponent_mat_option_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const obj_r2 = ctx.$implicit;
    \u0275\u0275property("value", obj_r2.accountId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(obj_r2.tradingIdAndName);
  }
}
function BeFollowerDialogStandAloneComponent_p_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "ACCOUNTS.OneOfTradeAccounts"), "");
  }
}
function BeFollowerDialogStandAloneComponent_mat_error_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "login.FieldRequired"), "");
  }
}
function BeFollowerDialogStandAloneComponent_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    \u0275\u0275property("value", option_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", option_r3.nickName, " #", option_r3.id, "");
  }
}
function BeFollowerDialogStandAloneComponent_p_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "ACCOUNTS.ProviderToCopyTrades"), " ");
  }
}
function BeFollowerDialogStandAloneComponent_mat_error_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "login.FieldRequired"), " ");
  }
}
function BeFollowerDialogStandAloneComponent_mat_option_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const obj_r4 = ctx.$implicit;
    \u0275\u0275property("value", obj_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(obj_r4.name);
  }
}
function BeFollowerDialogStandAloneComponent_p_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "ACCOUNTS.SelectOfferOfProvider"), " ");
  }
}
function BeFollowerDialogStandAloneComponent_mat_error_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "login.FieldRequired"), " ");
  }
}
function BeFollowerDialogStandAloneComponent_mat_dialog_content_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-dialog-content", 6)(1, "div", 21)(2, "h6");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 22)(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 22)(12, "p");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 21)(18, "h6");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 22)(22, "p");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 22)(28, "p");
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p");
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 11, "HOME.Provider"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 13, "HOME.Nickname"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r4.getControl["providerObj"].value == null ? null : ctx_r4.getControl["providerObj"].value.nickName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 15, "PROVIDERS_PROFILE.Visibility"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r4.getControl["providerObj"].value == null ? null : ctx_r4.getControl["providerObj"].value.visibility);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 17, "PROVIDERS_PROFILE.Offer"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 19, "PROVIDERS_PROFILE.Title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r4.getControl["offerObj"].value == null ? null : ctx_r4.getControl["offerObj"].value.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 21, "OFFERS.Performance fee"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r4.getControl["offerObj"].value == null ? null : ctx_r4.getControl["offerObj"].value.performance == null ? null : ctx_r4.getControl["offerObj"].value.performance.fee, "% (", ctx_r4.getControl["offerObj"].value == null ? null : ctx_r4.getControl["offerObj"].value.performance == null ? null : ctx_r4.getControl["offerObj"].value.performance.interval, ")");
  }
}
var BeFollowerDialogStandAloneComponent = class _BeFollowerDialogStandAloneComponent {
  cdr;
  _webService;
  fb;
  dialogRef;
  createFollowerForm;
  tradingIdArr = [];
  offersArr = [];
  providersData = [];
  showError = false;
  filteredOptions;
  IConstant;
  showLoader = false;
  errorComponent;
  constructor(cdr, _webService, fb, dialogRef) {
    this.cdr = cdr;
    this._webService = _webService;
    this.fb = fb;
    this.dialogRef = dialogRef;
    this.createFollowerForm = this.fb.group({
      accountId: ["", [Validators.required]],
      providerObj: ["", [Validators.required]],
      offerObj: ["", [Validators.required]]
    });
    this.IConstant = new ConstantVariable();
    this.getTradingAccountDetais();
    this.getAllProvidersData();
  }
  ngOnInit() {
    this.setProvidersAutoComplete();
    this.onProviderObjEmpty();
  }
  onProviderObjEmpty() {
    this.getControl["providerObj"].valueChanges.subscribe((value) => {
      if (typeof value == "string" && value?.trim() === "") {
        this.getControl["offerObj"].setValue("");
        this.getControl["offerObj"].updateValueAndValidity();
      }
    });
  }
  displayFn(provider) {
    return provider && provider.nickName ? provider.nickName : "";
  }
  setProvidersAutoComplete() {
    this.filteredOptions = this.getControl["providerObj"].valueChanges.pipe(startWith(""), map((value) => {
      const filterValue = typeof value === "string" ? value.toLowerCase() : value?.nickName.toLowerCase();
      return this.providersData.filter((data) => data.nickName.toLowerCase().includes(filterValue));
    }));
  }
  getTradingAccountDetais() {
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
  getAllProvidersData() {
    this._webService.getAllProvidersData().subscribe({
      next: (response) => {
        this.providersData = response.items.filter((o) => o.hasPublicOffers).map((o) => {
          return { nickName: o.nickname, id: o.id, visibility: o.visibility };
        });
      },
      error: (errorObj) => {
        this.showErrorWarnMessage(errorObj?.error?.errorMessage);
      }
    });
  }
  getOffersOfProvider() {
    let param = {
      id: this.getControl["providerObj"].value.id
    };
    this._webService.getOffersOfProvider(param).subscribe({
      next: (response) => {
        this.offersArr = response.items;
        if (this.offersArr.length > 0)
          this.getControl["offerObj"].setValue(this.offersArr[0]);
        this.getControl["offerObj"].updateValueAndValidity();
      },
      error: (errorObj) => {
        this.showErrorWarnMessage(errorObj?.error?.errorMessage);
      }
    });
  }
  closeCreateFollowerForm() {
    this.dialogRef.close();
  }
  get getControl() {
    return this.createFollowerForm.controls;
  }
  createFollowerUser() {
    if (this.createFollowerForm.invalid) {
      this.showError = true;
      return;
    }
    this.showLoader = true;
    this.showError = false;
    let param = {
      accountId: this.getControl["accountId"].value,
      agent: { source: "ManualInput" },
      providerId: this.getControl["providerObj"].value.id,
      offerId: this.getControl["offerObj"].value.id
    };
    this._webService.createFollower(param).subscribe({
      next: (response) => {
        this.showLoader = false;
        this.showSuccessPopupMsg("Subscription has been added");
        this._webService.emitOnWebDataChange({ action: "follower_created", data: response });
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
  static \u0275fac = function BeFollowerDialogStandAloneComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BeFollowerDialogStandAloneComponent)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(WebService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MatDialogRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BeFollowerDialogStandAloneComponent, selectors: [["beFollower-dialog"]], viewQuery: function BeFollowerDialogStandAloneComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(ShowErrorStandAloneComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.errorComponent = _t.first);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 54, vars: 42, consts: [["auto", "matAutocomplete"], [1, "parent-div", "d-flex", "justify-space-between"], [1, "child-div-left"], ["mat-dialog-title", "", 1, "text-center"], [1, "text-center"], [3, "formGroup"], [1, "mat-typography"], [1, "common-field"], ["formControlName", "accountId"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "pb-10", 4, "ngIf"], ["type", "text", "formControlName", "providerObj", "matInput", "", "placeholder", "Provider 1", 3, "matAutocomplete"], [3, "optionSelected", "displayWith"], [3, "value"], ["formControlName", "offerObj"], [1, "d-flex", "justify-center", "g-20"], ["mat-dialog-close", "", 1, "secondary-btn", 3, "click"], ["type", "submit", 1, "primary-btn", 3, "click", "IcmLoadingOverlay"], [1, "child-div-right"], ["class", "mat-typography", 4, "ngIf"], [1, "pb-10"], [1, "pb-5"], [1, "d-flex", "justify-space-between", "pb-5"]], template: function BeFollowerDialogStandAloneComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h2", 3);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 4);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "form", 5)(9, "mat-dialog-content", 6)(10, "mat-form-field", 7)(11, "mat-label");
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "mat-select", 8);
      \u0275\u0275template(15, BeFollowerDialogStandAloneComponent_mat_option_15_Template, 2, 2, "mat-option", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(16, BeFollowerDialogStandAloneComponent_p_16_Template, 3, 3, "p", 10)(17, BeFollowerDialogStandAloneComponent_mat_error_17_Template, 3, 3, "mat-error", 10);
      \u0275\u0275elementStart(18, "mat-form-field", 7)(19, "mat-label");
      \u0275\u0275text(20);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(22, "input", 11);
      \u0275\u0275elementStart(23, "mat-autocomplete", 12, 0);
      \u0275\u0275listener("optionSelected", function BeFollowerDialogStandAloneComponent_Template_mat_autocomplete_optionSelected_23_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.getOffersOfProvider());
      });
      \u0275\u0275repeaterCreate(25, BeFollowerDialogStandAloneComponent_For_26_Template, 2, 3, "mat-option", 13, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275pipe(27, "async");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(28, BeFollowerDialogStandAloneComponent_p_28_Template, 3, 3, "p", 10)(29, BeFollowerDialogStandAloneComponent_mat_error_29_Template, 3, 3, "mat-error", 10);
      \u0275\u0275elementStart(30, "mat-form-field", 7)(31, "mat-label");
      \u0275\u0275text(32);
      \u0275\u0275pipe(33, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "mat-select", 14);
      \u0275\u0275template(35, BeFollowerDialogStandAloneComponent_mat_option_35_Template, 2, 2, "mat-option", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(36, BeFollowerDialogStandAloneComponent_p_36_Template, 3, 3, "p", 10)(37, BeFollowerDialogStandAloneComponent_mat_error_37_Template, 3, 3, "mat-error", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 15)(39, "button", 16);
      \u0275\u0275listener("click", function BeFollowerDialogStandAloneComponent_Template_button_click_39_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeCreateFollowerForm());
      });
      \u0275\u0275text(40);
      \u0275\u0275pipe(41, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "button", 17);
      \u0275\u0275listener("click", function BeFollowerDialogStandAloneComponent_Template_button_click_42_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.createFollowerUser());
      });
      \u0275\u0275text(43);
      \u0275\u0275pipe(44, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(45, "div", 18)(46, "h2", 3);
      \u0275\u0275text(47);
      \u0275\u0275pipe(48, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "p", 4);
      \u0275\u0275text(50);
      \u0275\u0275pipe(51, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(52, BeFollowerDialogStandAloneComponent_mat_dialog_content_52_Template, 33, 23, "mat-dialog-content", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(53, "show-error-message");
    }
    if (rf & 2) {
      const auto_r6 = \u0275\u0275reference(24);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 22, "HOME.New Subscription"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 24, "SUBSCRIPTION.CreateSubscription"));
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.createFollowerForm);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 26, "SUBSCRIPTION.Trading account"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.tradingIdArr);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.showError || !(ctx.createFollowerForm.controls["accountId"].errors == null ? null : ctx.createFollowerForm.controls["accountId"].errors["required"]));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showError && (ctx.createFollowerForm.controls["accountId"].errors == null ? null : ctx.createFollowerForm.controls["accountId"].errors["required"]));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 28, "HOME.Provider"));
      \u0275\u0275advance(2);
      \u0275\u0275property("matAutocomplete", auto_r6);
      \u0275\u0275advance();
      \u0275\u0275property("displayWith", ctx.displayFn);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(\u0275\u0275pipeBind1(27, 30, ctx.filteredOptions));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.showError || !(ctx.createFollowerForm.controls["providerObj"].errors == null ? null : ctx.createFollowerForm.controls["providerObj"].errors["required"]));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showError && (ctx.createFollowerForm.controls["providerObj"].errors == null ? null : ctx.createFollowerForm.controls["providerObj"].errors["required"]));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 32, "PROVIDERS_PROFILE.Offer"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.offersArr);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.showError || !(ctx.createFollowerForm.controls["offerObj"].errors == null ? null : ctx.createFollowerForm.controls["offerObj"].errors["required"]));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showError && (ctx.createFollowerForm.controls["offerObj"].errors == null ? null : ctx.createFollowerForm.controls["offerObj"].errors["required"]));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 34, "COMMON.Cancel"));
      \u0275\u0275advance(2);
      \u0275\u0275property("IcmLoadingOverlay", ctx.showLoader);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(44, 36, "COMMON.Create"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(48, 38, "ACCOUNTS.Details"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(51, 40, "ACCOUNTS.InfoChosenProviderAndSubscription"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.createFollowerForm.controls["providerObj"].value && ctx.createFollowerForm.controls["offerObj"].value && (ctx.createFollowerForm.controls["providerObj"].value == null ? null : ctx.createFollowerForm.controls["providerObj"].value.nickName));
    }
  }, dependencies: [MatDialogModule, MatDialogClose, MatDialogTitle, MatDialogContent, MatInputModule, MatInput, MatFormField, MatLabel, MatError, MatSelectModule, MatSelect, MatOption, CommonModule, NgForOf, NgIf, AsyncPipe, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, ShowErrorStandAloneComponent, MatAutocompleteModule, MatAutocomplete, MatAutocompleteTrigger, TranslateModule, TranslatePipe, IcmLoadingOverlayDirective], styles: ["\n\n  .beFollower-dialog {\n  width: 850px !important;\n  border-radius: 10px !important;\n  max-width: 850px !important;\n}\n  .beFollower-dialog .mat-mdc-dialog-title {\n  margin: unset !important;\n  padding-bottom: 10px !important;\n}\n  .beFollower-dialog .mat-mdc-dialog-surface {\n  border-radius: 10px !important;\n  background: white !important;\n  padding: 20px !important;\n}\n  .beFollower-dialog .common-field {\n  width: 100% !important;\n}\n  .beFollower-dialog .common-field .mdc-text-field {\n  background-color: white;\n  border: 1px solid;\n  border-bottom: 0px;\n}\n  .beFollower-dialog .common-field .mdc-text-field textarea {\n  resize: none;\n}\n  .beFollower-dialog .common-field .mdc-text-field .mat-mdc-form-field-text-suffix {\n  font-size: 20px;\n}\n  .beFollower-dialog .parent-div {\n  width: 100%;\n}\n  .beFollower-dialog .parent-div .child-div-left {\n  width: 60%;\n  border-right: 1px solid #EAECF0;\n}\n  .beFollower-dialog .parent-div .child-div-right {\n  width: 40%;\n  padding-left: 10px;\n}\n/*# sourceMappingURL=beFollowerDialog.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BeFollowerDialogStandAloneComponent, { className: "BeFollowerDialogStandAloneComponent", filePath: "src\\app\\web\\shared\\dialogBox\\create-follower-dialog\\beFollowerDialog.standalone.component.ts", lineNumber: 23 });
})();

export {
  BeFollowerDialogStandAloneComponent
};
//# sourceMappingURL=chunk-FPDZAUA3.js.map
