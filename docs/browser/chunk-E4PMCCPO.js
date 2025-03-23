import {
  MatDateRangeInput,
  MatDateRangePicker,
  MatDatepickerModule,
  MatDatepickerToggle,
  MatEndDate,
  MatStartDate
} from "./chunk-BPPTD3SL.js";
import {
  MatTab,
  MatTabContent,
  MatTabGroup,
  MatTabsModule
} from "./chunk-IEUDD6M5.js";
import {
  MatInputModule
} from "./chunk-YEQ6N72F.js";
import {
  CopiedPostionModal,
  FeesModal,
  ProvidersEarningModal,
  ProvidersOffersModal,
  PublishPostionModal
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
  MatFormFieldModule,
  MatLabel,
  MatSelect,
  MatSelectModule,
  MatSuffix
} from "./chunk-VQMCFLWH.js";
import {
  WebService
} from "./chunk-5MDTIDYM.js";
import {
  FocusMonitor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MatCard,
  MatCardContent,
  MatCardModule,
  MatCommonModule,
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
  MatOption,
  MatRipple,
  MatRippleModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  ShowErrorStandAloneComponent,
  UniqueSelectionDispatcher,
  Validators,
  _MatInternalFormField,
  ɵNgNoValidate
} from "./chunk-ZFOVCG2I.js";
import {
  ANIMATION_MODULE_TYPE,
  Attribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ConstantVariable,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  InjectionToken,
  Injector,
  Input,
  NgForOf,
  NgIf,
  NgModule,
  NgZone,
  Optional,
  Output,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  ViewChild,
  ViewEncapsulation$1,
  afterNextRender,
  booleanAttribute,
  forwardRef,
  inject,
  numberAttribute,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInputTransformsFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinjectAttribute,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-G46OV5IL.js";
import "./chunk-4OO5LSKA.js";

// src/app/web/shared/icm-date-ranger-picker/icm.date.range.picker.standalone.component.ts
var _c0 = ["rangePicker"];
var IcmDateRangePickerStandAloneComponent = class _IcmDateRangePickerStandAloneComponent {
  rangePicker;
  emitToParent = new EventEmitter();
  defaultDateRange = "Last 7 days";
  selectedDateRange = "";
  startDate;
  endDate;
  constructor() {
  }
  ngOnInit() {
    this.selectDateRange(this.defaultDateRange);
  }
  triggerDateRangeChange(dateRangeStart, dateRangeEnd) {
    if (dateRangeStart.value && dateRangeEnd.value) {
      if (typeof dateRangeStart.value == "string") {
        this.startDate = new Date(dateRangeStart.value);
      }
      if (typeof dateRangeEnd.value == "string") {
        this.endDate = new Date(dateRangeEnd.value);
      }
      this.emitToParent.emit({ action: "on_date_range_change", startDate: this.startDate, endDate: this.endDate });
    }
  }
  selectDateRange(range) {
    const today = /* @__PURE__ */ new Date();
    if (this.selectedDateRange == range)
      return;
    this.selectedDateRange = range;
    if (range === "Last month") {
      const firstDayLastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
      const lastDayLastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      this.startDate = firstDayLastMonth;
      this.endDate = lastDayLastMonth;
      this.triggerDateRangeChange({ value: firstDayLastMonth }, { value: lastDayLastMonth });
    } else if (range === "Last 7 days") {
      this.setLast7Days();
      this.triggerDateRangeChange({ value: this.startDate }, { value: this.endDate });
    } else if (range === "Current month") {
      this.startDate = new Date(today.getFullYear(), today.getMonth(), 1);
      this.endDate = today;
      this.triggerDateRangeChange({ value: this.startDate }, { value: this.endDate });
    } else if (range === "Today") {
      this.startDate = today;
      this.endDate = today;
      this.triggerDateRangeChange({ value: this.startDate }, { value: this.endDate });
    } else if (range === "Custom") {
      this.startDate = today;
      this.endDate = today;
      this.rangePicker.open();
    }
  }
  setLast7Days() {
    const today = /* @__PURE__ */ new Date();
    this.endDate = today;
    this.startDate = /* @__PURE__ */ new Date();
    this.startDate.setDate(today.getDate() - 6);
  }
  static \u0275fac = function IcmDateRangePickerStandAloneComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IcmDateRangePickerStandAloneComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IcmDateRangePickerStandAloneComponent, selectors: [["app-icm-date-range-picker"]], viewQuery: function IcmDateRangePickerStandAloneComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.rangePicker = _t.first);
    }
  }, inputs: { defaultDateRange: "defaultDateRange" }, outputs: { emitToParent: "emitToParent" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 31, vars: 23, consts: [["dateActions", "matMenu"], ["dateRangeStart", ""], ["dateRangeEnd", ""], ["rangePicker", ""], [1, "d-flex", "align-center"], [1, "secondary-btn", "datepicker-menu", 3, "matMenuTriggerFor"], [1, "dateActions-menu"], ["mat-menu-item", "", 3, "click"], [1, "datepicker-filter", 3, "click"], [3, "rangePicker"], ["matStartDate", "", "placeholder", "Start date", "readonly", "", 3, "value"], ["matEndDate", "", "placeholder", "End date", "readonly", "", 3, "dateChange", "value"], ["matIconSuffix", "", 3, "for"]], template: function IcmDateRangePickerStandAloneComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 4)(1, "button", 5);
      \u0275\u0275text(2);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "mat-menu", 6, 0)(6, "button", 7);
      \u0275\u0275listener("click", function IcmDateRangePickerStandAloneComponent_Template_button_click_6_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.selectDateRange("Last month"));
      });
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "button", 7);
      \u0275\u0275listener("click", function IcmDateRangePickerStandAloneComponent_Template_button_click_9_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.selectDateRange("Last 7 days"));
      });
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "button", 7);
      \u0275\u0275listener("click", function IcmDateRangePickerStandAloneComponent_Template_button_click_12_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.selectDateRange("Current month"));
      });
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "button", 7);
      \u0275\u0275listener("click", function IcmDateRangePickerStandAloneComponent_Template_button_click_15_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.selectDateRange("Today"));
      });
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "button", 7);
      \u0275\u0275listener("click", function IcmDateRangePickerStandAloneComponent_Template_button_click_18_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.selectDateRange("Custom"));
      });
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div")(22, "mat-form-field", 8);
      \u0275\u0275listener("click", function IcmDateRangePickerStandAloneComponent_Template_mat_form_field_click_22_listener() {
        \u0275\u0275restoreView(_r1);
        const rangePicker_r2 = \u0275\u0275reference(30);
        return \u0275\u0275resetView(rangePicker_r2.open());
      });
      \u0275\u0275elementStart(23, "mat-date-range-input", 9);
      \u0275\u0275element(24, "input", 10, 1);
      \u0275\u0275elementStart(26, "input", 11, 2);
      \u0275\u0275listener("dateChange", function IcmDateRangePickerStandAloneComponent_Template_input_dateChange_26_listener() {
        \u0275\u0275restoreView(_r1);
        const dateRangeStart_r3 = \u0275\u0275reference(25);
        const dateRangeEnd_r4 = \u0275\u0275reference(27);
        return \u0275\u0275resetView(ctx.triggerDateRangeChange(dateRangeStart_r3, dateRangeEnd_r4));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275element(28, "mat-datepicker-toggle", 12)(29, "mat-date-range-picker", null, 3);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      const dateActions_r5 = \u0275\u0275reference(5);
      const rangePicker_r2 = \u0275\u0275reference(30);
      \u0275\u0275advance();
      \u0275\u0275property("matMenuTriggerFor", dateActions_r5);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 11, "REPORTS." + ctx.selectedDateRange), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 13, "REPORTS.Last month"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 15, "REPORTS.Last 7 days"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 17, "REPORTS.Current month"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 19, "REPORTS.Today"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 21, "REPORTS.Custom"));
      \u0275\u0275advance(4);
      \u0275\u0275property("rangePicker", rangePicker_r2);
      \u0275\u0275advance();
      \u0275\u0275property("value", ctx.startDate);
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.endDate);
      \u0275\u0275advance(2);
      \u0275\u0275property("for", rangePicker_r2);
    }
  }, dependencies: [MatMenuModule, MatMenu, MatMenuItem, MatMenuTrigger, MatDatepickerModule, MatDatepickerToggle, MatDateRangeInput, MatStartDate, MatEndDate, MatDateRangePicker, TranslateModule, TranslatePipe, MatFormFieldModule, MatFormField, MatSuffix], styles: ["\n\n  .dateActions-menu .mat-mdc-menu-panel {\n  background-color: white !important;\n}\n  .dateActions-menu .mat-mdc-menu-content {\n  background-color: white !important;\n}\n  .dateActions-menu .mat-mdc-menu-item {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n  .dateActions-menu .mat-mdc-menu-item .mat-mdc-menu-item-text {\n  font-size: 17px !important;\n  display: flex;\n  gap: 20px;\n  align-items: center;\n}\n  .datepicker-filter .mat-mdc-text-field-wrapper {\n  border: 1px solid #D0D5DD;\n  border-left: 0px;\n  border-top-left-radius: 0px;\n  border-bottom-left-radius: 0px;\n  justify-content: center;\n  border-top-right-radius: 8px;\n  border-bottom-right-radius: 8px;\n  height: 56px;\n  background-color: white !important;\n}\n  .datepicker-filter .mat-mdc-text-field-wrapper .mdc-line-ripple {\n  display: none !important;\n}\n  .datepicker-filter .mat-mdc-form-field-subscript-wrapper {\n  display: none !important;\n}\n.datepicker-menu[_ngcontent-%COMP%] {\n  border-top-right-radius: 0px;\n  border-bottom-right-radius: 0px;\n}\n  .mat-datepicker-content-container {\n  background: white;\n  border: 1px solid #D0D5DD;\n}\n/*# sourceMappingURL=icm.date.range.picker.standalone.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IcmDateRangePickerStandAloneComponent, { className: "IcmDateRangePickerStandAloneComponent", filePath: "src\\app\\web\\shared\\icm-date-ranger-picker\\icm.date.range.picker.standalone.component.ts", lineNumber: 83 });
})();

// node_modules/@angular/material/fesm2022/radio.mjs
var _c02 = ["input"];
var _c1 = ["formField"];
var _c2 = ["*"];
var nextUniqueId = 0;
var MatRadioChange = class {
  constructor(source, value) {
    this.source = source;
    this.value = value;
  }
};
var MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatRadioGroup),
  multi: true
};
var MAT_RADIO_GROUP = new InjectionToken("MatRadioGroup");
var MAT_RADIO_DEFAULT_OPTIONS = new InjectionToken("mat-radio-default-options", {
  providedIn: "root",
  factory: MAT_RADIO_DEFAULT_OPTIONS_FACTORY
});
function MAT_RADIO_DEFAULT_OPTIONS_FACTORY() {
  return {
    color: "accent",
    disabledInteractive: false
  };
}
var MatRadioGroup = class _MatRadioGroup {
  /** Name of the radio button group. All radio buttons inside this group will use this name. */
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
    this._updateRadioButtonNames();
  }
  /** Whether the labels should appear after or before the radio-buttons. Defaults to 'after' */
  get labelPosition() {
    return this._labelPosition;
  }
  set labelPosition(v) {
    this._labelPosition = v === "before" ? "before" : "after";
    this._markRadiosForCheck();
  }
  /**
   * Value for the radio-group. Should equal the value of the selected radio button if there is
   * a corresponding radio button with a matching value. If there is not such a corresponding
   * radio button, this value persists to be applied in case a new radio button is added with a
   * matching value.
   */
  get value() {
    return this._value;
  }
  set value(newValue) {
    if (this._value !== newValue) {
      this._value = newValue;
      this._updateSelectedRadioFromValue();
      this._checkSelectedRadioButton();
    }
  }
  _checkSelectedRadioButton() {
    if (this._selected && !this._selected.checked) {
      this._selected.checked = true;
    }
  }
  /**
   * The currently selected radio button. If set to a new radio button, the radio group value
   * will be updated to match the new selected button.
   */
  get selected() {
    return this._selected;
  }
  set selected(selected) {
    this._selected = selected;
    this.value = selected ? selected.value : null;
    this._checkSelectedRadioButton();
  }
  /** Whether the radio group is disabled */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this._markRadiosForCheck();
  }
  /** Whether the radio group is required */
  get required() {
    return this._required;
  }
  set required(value) {
    this._required = value;
    this._markRadiosForCheck();
  }
  /** Whether buttons in the group should be interactive while they're disabled. */
  get disabledInteractive() {
    return this._disabledInteractive;
  }
  set disabledInteractive(value) {
    this._disabledInteractive = value;
    this._markRadiosForCheck();
  }
  constructor(_changeDetector) {
    this._changeDetector = _changeDetector;
    this._value = null;
    this._name = `mat-radio-group-${nextUniqueId++}`;
    this._selected = null;
    this._isInitialized = false;
    this._labelPosition = "after";
    this._disabled = false;
    this._required = false;
    this._controlValueAccessorChangeFn = () => {
    };
    this.onTouched = () => {
    };
    this.change = new EventEmitter();
    this._disabledInteractive = false;
  }
  /**
   * Initialize properties once content children are available.
   * This allows us to propagate relevant attributes to associated buttons.
   */
  ngAfterContentInit() {
    this._isInitialized = true;
    this._buttonChanges = this._radios.changes.subscribe(() => {
      if (this.selected && !this._radios.find((radio) => radio === this.selected)) {
        this._selected = null;
      }
    });
  }
  ngOnDestroy() {
    this._buttonChanges?.unsubscribe();
  }
  /**
   * Mark this group as being "touched" (for ngModel). Meant to be called by the contained
   * radio buttons upon their blur.
   */
  _touch() {
    if (this.onTouched) {
      this.onTouched();
    }
  }
  _updateRadioButtonNames() {
    if (this._radios) {
      this._radios.forEach((radio) => {
        radio.name = this.name;
        radio._markForCheck();
      });
    }
  }
  /** Updates the `selected` radio button from the internal _value state. */
  _updateSelectedRadioFromValue() {
    const isAlreadySelected = this._selected !== null && this._selected.value === this._value;
    if (this._radios && !isAlreadySelected) {
      this._selected = null;
      this._radios.forEach((radio) => {
        radio.checked = this.value === radio.value;
        if (radio.checked) {
          this._selected = radio;
        }
      });
    }
  }
  /** Dispatch change event with current selection and group value. */
  _emitChangeEvent() {
    if (this._isInitialized) {
      this.change.emit(new MatRadioChange(this._selected, this._value));
    }
  }
  _markRadiosForCheck() {
    if (this._radios) {
      this._radios.forEach((radio) => radio._markForCheck());
    }
  }
  /**
   * Sets the model value. Implemented as part of ControlValueAccessor.
   * @param value
   */
  writeValue(value) {
    this.value = value;
    this._changeDetector.markForCheck();
  }
  /**
   * Registers a callback to be triggered when the model value changes.
   * Implemented as part of ControlValueAccessor.
   * @param fn Callback to be registered.
   */
  registerOnChange(fn) {
    this._controlValueAccessorChangeFn = fn;
  }
  /**
   * Registers a callback to be triggered when the control is touched.
   * Implemented as part of ControlValueAccessor.
   * @param fn Callback to be registered.
   */
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
   * @param isDisabled Whether the control should be disabled.
   */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this._changeDetector.markForCheck();
  }
  static {
    this.\u0275fac = function MatRadioGroup_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatRadioGroup)(\u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatRadioGroup,
      selectors: [["mat-radio-group"]],
      contentQueries: function MatRadioGroup_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          \u0275\u0275contentQuery(dirIndex, MatRadioButton, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._radios = _t);
        }
      },
      hostAttrs: ["role", "radiogroup", 1, "mat-mdc-radio-group"],
      inputs: {
        color: "color",
        name: "name",
        labelPosition: "labelPosition",
        value: "value",
        selected: "selected",
        disabled: [2, "disabled", "disabled", booleanAttribute],
        required: [2, "required", "required", booleanAttribute],
        disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute]
      },
      outputs: {
        change: "change"
      },
      exportAs: ["matRadioGroup"],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR, {
        provide: MAT_RADIO_GROUP,
        useExisting: _MatRadioGroup
      }]), \u0275\u0275InputTransformsFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRadioGroup, [{
    type: Directive,
    args: [{
      selector: "mat-radio-group",
      exportAs: "matRadioGroup",
      providers: [MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR, {
        provide: MAT_RADIO_GROUP,
        useExisting: MatRadioGroup
      }],
      host: {
        "role": "radiogroup",
        "class": "mat-mdc-radio-group"
      },
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], {
    change: [{
      type: Output
    }],
    _radios: [{
      type: ContentChildren,
      args: [forwardRef(() => MatRadioButton), {
        descendants: true
      }]
    }],
    color: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    labelPosition: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var MatRadioButton = class _MatRadioButton {
  /** Whether this radio button is checked. */
  get checked() {
    return this._checked;
  }
  set checked(value) {
    if (this._checked !== value) {
      this._checked = value;
      if (value && this.radioGroup && this.radioGroup.value !== this.value) {
        this.radioGroup.selected = this;
      } else if (!value && this.radioGroup && this.radioGroup.value === this.value) {
        this.radioGroup.selected = null;
      }
      if (value) {
        this._radioDispatcher.notify(this.id, this.name);
      }
      this._changeDetector.markForCheck();
    }
  }
  /** The value of this radio button. */
  get value() {
    return this._value;
  }
  set value(value) {
    if (this._value !== value) {
      this._value = value;
      if (this.radioGroup !== null) {
        if (!this.checked) {
          this.checked = this.radioGroup.value === value;
        }
        if (this.checked) {
          this.radioGroup.selected = this;
        }
      }
    }
  }
  /** Whether the label should appear after or before the radio button. Defaults to 'after' */
  get labelPosition() {
    return this._labelPosition || this.radioGroup && this.radioGroup.labelPosition || "after";
  }
  set labelPosition(value) {
    this._labelPosition = value;
  }
  /** Whether the radio button is disabled. */
  get disabled() {
    return this._disabled || this.radioGroup !== null && this.radioGroup.disabled;
  }
  set disabled(value) {
    this._setDisabled(value);
  }
  /** Whether the radio button is required. */
  get required() {
    return this._required || this.radioGroup && this.radioGroup.required;
  }
  set required(value) {
    this._required = value;
  }
  /**
   * Theme color of the radio button. This API is supported in M2 themes only, it
   * has no effect in M3 themes.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.io/guide/theming#using-component-color-variants.
   */
  get color() {
    return this._color || this.radioGroup && this.radioGroup.color || this._defaultOptions && this._defaultOptions.color || "accent";
  }
  set color(newValue) {
    this._color = newValue;
  }
  /** Whether the radio button should remain interactive when it is disabled. */
  get disabledInteractive() {
    return this._disabledInteractive || this.radioGroup !== null && this.radioGroup.disabledInteractive;
  }
  set disabledInteractive(value) {
    this._disabledInteractive = value;
  }
  /** ID of the native input element inside `<mat-radio-button>` */
  get inputId() {
    return `${this.id || this._uniqueId}-input`;
  }
  constructor(radioGroup, _elementRef, _changeDetector, _focusMonitor, _radioDispatcher, animationMode, _defaultOptions, tabIndex) {
    this._elementRef = _elementRef;
    this._changeDetector = _changeDetector;
    this._focusMonitor = _focusMonitor;
    this._radioDispatcher = _radioDispatcher;
    this._defaultOptions = _defaultOptions;
    this._ngZone = inject(NgZone);
    this._uniqueId = `mat-radio-${++nextUniqueId}`;
    this.id = this._uniqueId;
    this.disableRipple = false;
    this.tabIndex = 0;
    this.change = new EventEmitter();
    this._checked = false;
    this._value = null;
    this._removeUniqueSelectionListener = () => {
    };
    this._injector = inject(Injector);
    this._onInputClick = (event) => {
      if (this.disabled && this.disabledInteractive) {
        event.preventDefault();
      }
    };
    this.radioGroup = radioGroup;
    this._noopAnimations = animationMode === "NoopAnimations";
    this._disabledInteractive = _defaultOptions?.disabledInteractive ?? false;
    if (tabIndex) {
      this.tabIndex = numberAttribute(tabIndex, 0);
    }
  }
  /** Focuses the radio button. */
  focus(options, origin) {
    if (origin) {
      this._focusMonitor.focusVia(this._inputElement, origin, options);
    } else {
      this._inputElement.nativeElement.focus(options);
    }
  }
  /**
   * Marks the radio button as needing checking for change detection.
   * This method is exposed because the parent radio group will directly
   * update bound properties of the radio button.
   */
  _markForCheck() {
    this._changeDetector.markForCheck();
  }
  ngOnInit() {
    if (this.radioGroup) {
      this.checked = this.radioGroup.value === this._value;
      if (this.checked) {
        this.radioGroup.selected = this;
      }
      this.name = this.radioGroup.name;
    }
    this._removeUniqueSelectionListener = this._radioDispatcher.listen((id, name) => {
      if (id !== this.id && name === this.name) {
        this.checked = false;
      }
    });
  }
  ngDoCheck() {
    this._updateTabIndex();
  }
  ngAfterViewInit() {
    this._updateTabIndex();
    this._focusMonitor.monitor(this._elementRef, true).subscribe((focusOrigin) => {
      if (!focusOrigin && this.radioGroup) {
        this.radioGroup._touch();
      }
    });
    this._ngZone.runOutsideAngular(() => {
      this._inputElement.nativeElement.addEventListener("click", this._onInputClick);
    });
  }
  ngOnDestroy() {
    this._inputElement?.nativeElement.removeEventListener("click", this._onInputClick);
    this._focusMonitor.stopMonitoring(this._elementRef);
    this._removeUniqueSelectionListener();
  }
  /** Dispatch change event with current value. */
  _emitChangeEvent() {
    this.change.emit(new MatRadioChange(this, this._value));
  }
  _isRippleDisabled() {
    return this.disableRipple || this.disabled;
  }
  /** Triggered when the radio button receives an interaction from the user. */
  _onInputInteraction(event) {
    event.stopPropagation();
    if (!this.checked && !this.disabled) {
      const groupValueChanged = this.radioGroup && this.value !== this.radioGroup.value;
      this.checked = true;
      this._emitChangeEvent();
      if (this.radioGroup) {
        this.radioGroup._controlValueAccessorChangeFn(this.value);
        if (groupValueChanged) {
          this.radioGroup._emitChangeEvent();
        }
      }
    }
  }
  /** Triggered when the user clicks on the touch target. */
  _onTouchTargetClick(event) {
    this._onInputInteraction(event);
    if (!this.disabled || this.disabledInteractive) {
      this._inputElement?.nativeElement.focus();
    }
  }
  /** Sets the disabled state and marks for check if a change occurred. */
  _setDisabled(value) {
    if (this._disabled !== value) {
      this._disabled = value;
      this._changeDetector.markForCheck();
    }
  }
  /** Gets the tabindex for the underlying input element. */
  _updateTabIndex() {
    const group = this.radioGroup;
    let value;
    if (!group || !group.selected || this.disabled) {
      value = this.tabIndex;
    } else {
      value = group.selected === this ? this.tabIndex : -1;
    }
    if (value !== this._previousTabIndex) {
      const input = this._inputElement?.nativeElement;
      if (input) {
        input.setAttribute("tabindex", value + "");
        this._previousTabIndex = value;
        afterNextRender(() => {
          queueMicrotask(() => {
            if (group && group.selected && group.selected !== this && document.activeElement === input) {
              group.selected?._inputElement.nativeElement.focus();
              if (document.activeElement === input) {
                this._inputElement.nativeElement.blur();
              }
            }
          });
        }, {
          injector: this._injector
        });
      }
    }
  }
  static {
    this.\u0275fac = function MatRadioButton_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatRadioButton)(\u0275\u0275directiveInject(MAT_RADIO_GROUP, 8), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(FocusMonitor), \u0275\u0275directiveInject(UniqueSelectionDispatcher), \u0275\u0275directiveInject(ANIMATION_MODULE_TYPE, 8), \u0275\u0275directiveInject(MAT_RADIO_DEFAULT_OPTIONS, 8), \u0275\u0275injectAttribute("tabindex"));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatRadioButton,
      selectors: [["mat-radio-button"]],
      viewQuery: function MatRadioButton_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(_c02, 5);
          \u0275\u0275viewQuery(_c1, 7, ElementRef);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._inputElement = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._rippleTrigger = _t.first);
        }
      },
      hostAttrs: [1, "mat-mdc-radio-button"],
      hostVars: 19,
      hostBindings: function MatRadioButton_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("focus", function MatRadioButton_focus_HostBindingHandler() {
            return ctx._inputElement.nativeElement.focus();
          });
        }
        if (rf & 2) {
          \u0275\u0275attribute("id", ctx.id)("tabindex", null)("aria-label", null)("aria-labelledby", null)("aria-describedby", null);
          \u0275\u0275classProp("mat-primary", ctx.color === "primary")("mat-accent", ctx.color === "accent")("mat-warn", ctx.color === "warn")("mat-mdc-radio-checked", ctx.checked)("mat-mdc-radio-disabled", ctx.disabled)("mat-mdc-radio-disabled-interactive", ctx.disabledInteractive)("_mat-animation-noopable", ctx._noopAnimations);
        }
      },
      inputs: {
        id: "id",
        name: "name",
        ariaLabel: [0, "aria-label", "ariaLabel"],
        ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
        ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
        disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
        tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? 0 : numberAttribute(value)],
        checked: [2, "checked", "checked", booleanAttribute],
        value: "value",
        labelPosition: "labelPosition",
        disabled: [2, "disabled", "disabled", booleanAttribute],
        required: [2, "required", "required", booleanAttribute],
        color: "color",
        disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute]
      },
      outputs: {
        change: "change"
      },
      exportAs: ["matRadioButton"],
      standalone: true,
      features: [\u0275\u0275InputTransformsFeature, \u0275\u0275StandaloneFeature],
      ngContentSelectors: _c2,
      decls: 13,
      vars: 17,
      consts: [["formField", ""], ["input", ""], ["mat-internal-form-field", "", 3, "labelPosition"], [1, "mdc-radio"], [1, "mat-mdc-radio-touch-target", 3, "click"], ["type", "radio", 1, "mdc-radio__native-control", 3, "change", "id", "checked", "disabled", "required"], [1, "mdc-radio__background"], [1, "mdc-radio__outer-circle"], [1, "mdc-radio__inner-circle"], ["mat-ripple", "", 1, "mat-radio-ripple", "mat-mdc-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered"], [1, "mat-ripple-element", "mat-radio-persistent-ripple"], [1, "mdc-label", 3, "for"]],
      template: function MatRadioButton_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = \u0275\u0275getCurrentView();
          \u0275\u0275projectionDef();
          \u0275\u0275elementStart(0, "div", 2, 0)(2, "div", 3)(3, "div", 4);
          \u0275\u0275listener("click", function MatRadioButton_Template_div_click_3_listener($event) {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx._onTouchTargetClick($event));
          });
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(4, "input", 5, 1);
          \u0275\u0275listener("change", function MatRadioButton_Template_input_change_4_listener($event) {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx._onInputInteraction($event));
          });
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(6, "div", 6);
          \u0275\u0275element(7, "div", 7)(8, "div", 8);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(9, "div", 9);
          \u0275\u0275element(10, "div", 10);
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(11, "label", 11);
          \u0275\u0275projection(12);
          \u0275\u0275elementEnd()();
        }
        if (rf & 2) {
          \u0275\u0275property("labelPosition", ctx.labelPosition);
          \u0275\u0275advance(2);
          \u0275\u0275classProp("mdc-radio--disabled", ctx.disabled);
          \u0275\u0275advance(2);
          \u0275\u0275property("id", ctx.inputId)("checked", ctx.checked)("disabled", ctx.disabled && !ctx.disabledInteractive)("required", ctx.required);
          \u0275\u0275attribute("name", ctx.name)("value", ctx.value)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby)("aria-describedby", ctx.ariaDescribedby)("aria-disabled", ctx.disabled && ctx.disabledInteractive ? "true" : null);
          \u0275\u0275advance(5);
          \u0275\u0275property("matRippleTrigger", ctx._rippleTrigger.nativeElement)("matRippleDisabled", ctx._isRippleDisabled())("matRippleCentered", true);
          \u0275\u0275advance(2);
          \u0275\u0275property("for", ctx.inputId);
        }
      },
      dependencies: [MatRipple, _MatInternalFormField],
      styles: ['.mat-mdc-radio-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-radio-button .mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color;padding:calc((var(--mdc-radio-state-layer-size) - 20px)/2)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:not([disabled]):not(:focus)~.mdc-radio__background::before{opacity:.04;transform:scale(1)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:not([disabled])~.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-hover-icon-color, var(--mat-app-on-surface))}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-hover-icon-color, var(--mat-app-primary))}.mat-mdc-radio-button .mdc-radio:active .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-pressed-icon-color, var(--mat-app-on-surface))}.mat-mdc-radio-button .mdc-radio:active .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio:active .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-pressed-icon-color, var(--mat-app-primary))}.mat-mdc-radio-button .mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mat-mdc-radio-button .mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);width:var(--mdc-radio-state-layer-size);height:var(--mdc-radio-state-layer-size);top:calc(-1*(var(--mdc-radio-state-layer-size) - 20px)/2);left:calc(-1*(var(--mdc-radio-state-layer-size) - 20px)/2)}.mat-mdc-radio-button .mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-radio-button .mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-radio-button .mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;top:0;right:0;left:0;cursor:inherit;z-index:1;width:var(--mdc-radio-state-layer-size);height:var(--mdc-radio-state-layer-size)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-unselected-icon-color, var(--mat-app-on-surface));opacity:var(--mdc-radio-disabled-unselected-icon-opacity)}.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background{cursor:default}.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-selected-icon-color, var(--mat-app-on-surface));opacity:var(--mdc-radio-disabled-selected-icon-opacity)}.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-icon-color, var(--mat-app-on-surface-variant))}.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-icon-color, var(--mat-app-primary))}.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-selected-focus-icon-color, var(--mat-app-primary))}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transform:scale(0.5);transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled{pointer-events:auto}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-unselected-icon-color, var(--mat-app-on-surface));opacity:var(--mdc-radio-disabled-unselected-icon-opacity)}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-selected-icon-color, var(--mat-app-on-surface));opacity:var(--mdc-radio-disabled-selected-icon-opacity)}.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle{transition:none !important}.mat-mdc-radio-button .mdc-radio__background::before{background-color:var(--mat-radio-ripple-color, var(--mat-app-on-surface))}.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before{background-color:var(--mat-radio-checked-ripple-color, var(--mat-app-primary))}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before{background-color:var(--mat-radio-ripple-color, var(--mat-app-on-surface))}.mat-mdc-radio-button .mat-internal-form-field{color:var(--mat-radio-label-text-color, var(--mat-app-on-surface));font-family:var(--mat-radio-label-text-font, var(--mat-app-body-medium-font));line-height:var(--mat-radio-label-text-line-height, var(--mat-app-body-medium-line-height));font-size:var(--mat-radio-label-text-size, var(--mat-app-body-medium-size));letter-spacing:var(--mat-radio-label-text-tracking, var(--mat-app-body-medium-tracking));font-weight:var(--mat-radio-label-text-weight, var(--mat-app-body-medium-weight))}.mat-mdc-radio-button .mdc-radio--disabled+label{color:var(--mat-radio-disabled-label-color)}.mat-mdc-radio-button .mat-radio-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:50%}.mat-mdc-radio-button .mat-radio-ripple .mat-ripple-element{opacity:.14}.mat-mdc-radio-button .mat-radio-ripple::before{border-radius:50%}.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:focus:enabled:not(:checked)~.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-focus-icon-color, var(--mat-app-on-surface))}.mat-mdc-radio-button.cdk-focused .mat-mdc-focus-indicator::before{content:""}.mat-mdc-radio-disabled{cursor:default;pointer-events:none}.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive{pointer-events:auto}.mat-mdc-radio-touch-target{position:absolute;top:50%;left:50%;height:48px;width:48px;transform:translate(-50%, -50%);display:var(--mat-radio-touch-target-display)}[dir=rtl] .mat-mdc-radio-touch-target{left:auto;right:50%;transform:translate(50%, -50%)}'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRadioButton, [{
    type: Component,
    args: [{
      selector: "mat-radio-button",
      host: {
        "class": "mat-mdc-radio-button",
        "[attr.id]": "id",
        "[class.mat-primary]": 'color === "primary"',
        "[class.mat-accent]": 'color === "accent"',
        "[class.mat-warn]": 'color === "warn"',
        "[class.mat-mdc-radio-checked]": "checked",
        "[class.mat-mdc-radio-disabled]": "disabled",
        "[class.mat-mdc-radio-disabled-interactive]": "disabledInteractive",
        "[class._mat-animation-noopable]": "_noopAnimations",
        // Needs to be removed since it causes some a11y issues (see #21266).
        "[attr.tabindex]": "null",
        "[attr.aria-label]": "null",
        "[attr.aria-labelledby]": "null",
        "[attr.aria-describedby]": "null",
        // Note: under normal conditions focus shouldn't land on this element, however it may be
        // programmatically set, for example inside of a focus trap, in this case we want to forward
        // the focus to the native element.
        "(focus)": "_inputElement.nativeElement.focus()"
      },
      exportAs: "matRadioButton",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [MatRipple, _MatInternalFormField],
      template: `<div mat-internal-form-field [labelPosition]="labelPosition" #formField>
  <div class="mdc-radio" [class.mdc-radio--disabled]="disabled">
    <!-- Render this element first so the input is on top. -->
    <div class="mat-mdc-radio-touch-target" (click)="_onTouchTargetClick($event)"></div>
    <input #input class="mdc-radio__native-control" type="radio"
           [id]="inputId"
           [checked]="checked"
           [disabled]="disabled && !disabledInteractive"
           [attr.name]="name"
           [attr.value]="value"
           [required]="required"
           [attr.aria-label]="ariaLabel"
           [attr.aria-labelledby]="ariaLabelledby"
           [attr.aria-describedby]="ariaDescribedby"
           [attr.aria-disabled]="disabled && disabledInteractive ? 'true' : null"
           (change)="_onInputInteraction($event)">
    <div class="mdc-radio__background">
      <div class="mdc-radio__outer-circle"></div>
      <div class="mdc-radio__inner-circle"></div>
    </div>
    <div mat-ripple class="mat-radio-ripple mat-mdc-focus-indicator"
         [matRippleTrigger]="_rippleTrigger.nativeElement"
         [matRippleDisabled]="_isRippleDisabled()"
         [matRippleCentered]="true">
      <div class="mat-ripple-element mat-radio-persistent-ripple"></div>
    </div>
  </div>
  <label class="mdc-label" [for]="inputId">
    <ng-content></ng-content>
  </label>
</div>
`,
      styles: ['.mat-mdc-radio-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-radio-button .mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color;padding:calc((var(--mdc-radio-state-layer-size) - 20px)/2)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:not([disabled]):not(:focus)~.mdc-radio__background::before{opacity:.04;transform:scale(1)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:not([disabled])~.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-hover-icon-color, var(--mat-app-on-surface))}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-hover-icon-color, var(--mat-app-primary))}.mat-mdc-radio-button .mdc-radio:active .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-pressed-icon-color, var(--mat-app-on-surface))}.mat-mdc-radio-button .mdc-radio:active .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio:active .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-pressed-icon-color, var(--mat-app-primary))}.mat-mdc-radio-button .mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mat-mdc-radio-button .mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);width:var(--mdc-radio-state-layer-size);height:var(--mdc-radio-state-layer-size);top:calc(-1*(var(--mdc-radio-state-layer-size) - 20px)/2);left:calc(-1*(var(--mdc-radio-state-layer-size) - 20px)/2)}.mat-mdc-radio-button .mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-radio-button .mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-radio-button .mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;top:0;right:0;left:0;cursor:inherit;z-index:1;width:var(--mdc-radio-state-layer-size);height:var(--mdc-radio-state-layer-size)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-unselected-icon-color, var(--mat-app-on-surface));opacity:var(--mdc-radio-disabled-unselected-icon-opacity)}.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background{cursor:default}.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-selected-icon-color, var(--mat-app-on-surface));opacity:var(--mdc-radio-disabled-selected-icon-opacity)}.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-icon-color, var(--mat-app-on-surface-variant))}.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-icon-color, var(--mat-app-primary))}.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-selected-focus-icon-color, var(--mat-app-primary))}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transform:scale(0.5);transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled{pointer-events:auto}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-unselected-icon-color, var(--mat-app-on-surface));opacity:var(--mdc-radio-disabled-unselected-icon-opacity)}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-selected-icon-color, var(--mat-app-on-surface));opacity:var(--mdc-radio-disabled-selected-icon-opacity)}.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle{transition:none !important}.mat-mdc-radio-button .mdc-radio__background::before{background-color:var(--mat-radio-ripple-color, var(--mat-app-on-surface))}.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before{background-color:var(--mat-radio-checked-ripple-color, var(--mat-app-primary))}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before{background-color:var(--mat-radio-ripple-color, var(--mat-app-on-surface))}.mat-mdc-radio-button .mat-internal-form-field{color:var(--mat-radio-label-text-color, var(--mat-app-on-surface));font-family:var(--mat-radio-label-text-font, var(--mat-app-body-medium-font));line-height:var(--mat-radio-label-text-line-height, var(--mat-app-body-medium-line-height));font-size:var(--mat-radio-label-text-size, var(--mat-app-body-medium-size));letter-spacing:var(--mat-radio-label-text-tracking, var(--mat-app-body-medium-tracking));font-weight:var(--mat-radio-label-text-weight, var(--mat-app-body-medium-weight))}.mat-mdc-radio-button .mdc-radio--disabled+label{color:var(--mat-radio-disabled-label-color)}.mat-mdc-radio-button .mat-radio-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:50%}.mat-mdc-radio-button .mat-radio-ripple .mat-ripple-element{opacity:.14}.mat-mdc-radio-button .mat-radio-ripple::before{border-radius:50%}.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:focus:enabled:not(:checked)~.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-focus-icon-color, var(--mat-app-on-surface))}.mat-mdc-radio-button.cdk-focused .mat-mdc-focus-indicator::before{content:""}.mat-mdc-radio-disabled{cursor:default;pointer-events:none}.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive{pointer-events:auto}.mat-mdc-radio-touch-target{position:absolute;top:50%;left:50%;height:48px;width:48px;transform:translate(-50%, -50%);display:var(--mat-radio-touch-target-display)}[dir=rtl] .mat-mdc-radio-touch-target{left:auto;right:50%;transform:translate(50%, -50%)}']
    }]
  }], () => [{
    type: MatRadioGroup,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_RADIO_GROUP]
    }]
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: FocusMonitor
  }, {
    type: UniqueSelectionDispatcher
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_RADIO_DEFAULT_OPTIONS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["tabindex"]
    }]
  }], {
    id: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    ariaDescribedby: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? 0 : numberAttribute(value)
      }]
    }],
    checked: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    value: [{
      type: Input
    }],
    labelPosition: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    color: [{
      type: Input
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    change: [{
      type: Output
    }],
    _inputElement: [{
      type: ViewChild,
      args: ["input"]
    }],
    _rippleTrigger: [{
      type: ViewChild,
      args: ["formField", {
        read: ElementRef,
        static: true
      }]
    }]
  });
})();
var MatRadioModule = class _MatRadioModule {
  static {
    this.\u0275fac = function MatRadioModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatRadioModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _MatRadioModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [MatCommonModule, CommonModule, MatRippleModule, MatRadioButton, MatCommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRadioModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, CommonModule, MatRippleModule, MatRadioGroup, MatRadioButton],
      exports: [MatCommonModule, MatRadioGroup, MatRadioButton]
    }]
  }], null, null);
})();

// src/app/web/shared/dialogBox/filter-dialog/filter.dialog.standalone.component.ts
var _c03 = ["selectElement"];
function FilterDialogStandAloneComponent_Conditional_19_mat_option_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const obj_r1 = ctx.$implicit;
    \u0275\u0275property("value", obj_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(obj_r1.nickName);
  }
}
function FilterDialogStandAloneComponent_Conditional_19_p_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "REPORTS.Filter data by a provider"));
  }
}
function FilterDialogStandAloneComponent_Conditional_19_mat_error_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "login.FieldRequired"));
  }
}
function FilterDialogStandAloneComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 13)(4, "mat-label");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-select", 14, 0);
    \u0275\u0275template(9, FilterDialogStandAloneComponent_Conditional_19_mat_option_9_Template, 2, 2, "mat-option", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, FilterDialogStandAloneComponent_Conditional_19_p_10_Template, 3, 3, "p", 16)(11, FilterDialogStandAloneComponent_Conditional_19_mat_error_11_Template, 3, 3, "mat-error", 16);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 5, "REPORTS.Specify the filtering type"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 7, "HOME.Provider"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.providerArr);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.showError || !(ctx_r1.filterForm.controls["providerId"].errors == null ? null : ctx_r1.filterForm.controls["providerId"].errors["required"]));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showError && (ctx_r1.filterForm.controls["providerId"].errors == null ? null : ctx_r1.filterForm.controls["providerId"].errors["required"]));
  }
}
var FilterDialogStandAloneComponent = class _FilterDialogStandAloneComponent {
  dialogRef;
  fb;
  _webService;
  reportObj;
  filterForm;
  showError = false;
  providerArr = [];
  errorComponent;
  selectElement;
  IConstant;
  constructor(dialogRef, fb, _webService, reportObj) {
    this.dialogRef = dialogRef;
    this.fb = fb;
    this._webService = _webService;
    this.reportObj = reportObj;
    this.filterForm = this.fb.group({
      filterType: ["All", [Validators.required]],
      providerId: [""]
    });
    this.setCustomProviderValidator();
    this.IConstant = new ConstantVariable();
    this.getProviderDetails();
  }
  ngOnInit() {
    this.setFilterData();
  }
  setFilterData() {
    this.filterForm.get("filterType")?.setValue(this.reportObj.grid.filterData.filterType);
    this.filterForm.get("providerId")?.setValue(this.reportObj.grid.filterData.filterValue);
    this.filterForm.get("providerId")?.updateValueAndValidity();
  }
  setCustomProviderValidator() {
    this.filterForm.get("filterType")?.valueChanges.subscribe((value) => {
      if (value == "Provider") {
        this.filterForm.get("providerId")?.setValidators([Validators.required]);
        this.filterForm.get("providerId")?.updateValueAndValidity();
      } else {
        this.filterForm.get("providerId")?.setValue("");
        this.filterForm.get("providerId")?.clearValidators();
        this.filterForm.get("providerId")?.updateValueAndValidity();
      }
    });
  }
  get getControl() {
    return this.filterForm.controls;
  }
  getProviderDetails() {
    let param = {
      scope: "Active"
    };
    this._webService.getProviderData(param).subscribe({
      next: (response) => {
        this.providerArr = [];
        response.items.forEach((obj) => this.providerArr.push({ id: obj.id, nickName: obj.nickname }));
        setTimeout(() => {
          this.selectElement?.focus();
        }, 100);
      },
      error: (errorObj) => {
        this.showErrorWarnMessage(errorObj?.error?.errorMessage);
      }
    });
  }
  closeProviderFilterForm() {
    this.dialogRef.close();
  }
  showErrorWarnMessage(msg) {
    const errorConfigObj = this.errorComponent?.config;
    errorConfigObj.message = msg ? msg : errorConfigObj.message;
    this.errorComponent?.openErrorSnackbar();
  }
  applyFilters() {
    if (this.filterForm.invalid) {
      this.showError = true;
      return;
    }
    this.showError = false;
    this.reportObj.grid.filterData["filterType"] = this.getControl["filterType"].value;
    this.reportObj.grid.filterData["filterValue"] = this.getControl["providerId"].value;
    this._webService.emitOnWebDataChange({ action: "set_filters", reportObj: this.reportObj });
    this.dialogRef.close();
  }
  static \u0275fac = function FilterDialogStandAloneComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FilterDialogStandAloneComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(WebService), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FilterDialogStandAloneComponent, selectors: [["filter-dialog"]], viewQuery: function FilterDialogStandAloneComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(ShowErrorStandAloneComponent, 5);
      \u0275\u0275viewQuery(_c03, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.errorComponent = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.selectElement = _t.first);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 28, vars: 23, consts: [["selectElement", ""], ["mat-dialog-title", "", 1, "text-center"], [1, "text-center"], [3, "formGroup"], [1, "mat-typography"], [1, "radio-container"], ["formControlName", "filterType"], ["value", "All"], ["value", "Provider"], [1, "d-flex", "justify-center", "g-20"], [1, "secondary-btn", 3, "click"], ["type", "submit", 1, "primary-btn", 3, "click"], [1, "pb-10"], [1, "common-field"], ["formControlName", "providerId"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "pb-10", 4, "ngIf"], [3, "value"]], template: function FilterDialogStandAloneComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h2", 1);
      \u0275\u0275text(1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 2);
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "form", 3)(7, "mat-dialog-content", 4)(8, "div", 5)(9, "mat-label");
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "mat-radio-group", 6)(13, "mat-radio-button", 7);
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "mat-radio-button", 8);
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(19, FilterDialogStandAloneComponent_Conditional_19_Template, 12, 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 9)(21, "button", 10);
      \u0275\u0275listener("click", function FilterDialogStandAloneComponent_Template_button_click_21_listener() {
        return ctx.closeProviderFilterForm();
      });
      \u0275\u0275text(22);
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "button", 11);
      \u0275\u0275listener("click", function FilterDialogStandAloneComponent_Template_button_click_24_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275text(25);
      \u0275\u0275pipe(26, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(27, "show-error-message");
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 9, "REPORTS.Filter"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 11, "REPORTS.FilterReportByCondition"));
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.filterForm);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(11, 13, "REPORTS.Filter type"), " *");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 15, "PROVIDERS_LIST.All"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 17, "HOME.Provider"));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.filterForm.controls["filterType"].value == "Provider" ? 19 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 19, "COMMON.Cancel"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 21, "REPORTS.Apply"));
    }
  }, dependencies: [MatDialogModule, MatDialogTitle, MatDialogContent, MatInputModule, MatFormField, MatLabel, MatError, MatSelectModule, MatSelect, MatOption, CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, ShowErrorStandAloneComponent, TranslateModule, TranslatePipe, MatRadioModule, MatRadioGroup, MatRadioButton], styles: ["\n\n  .filter-Dialog {\n  width: 600px !important;\n  border-radius: 10px !important;\n}\n  .filter-Dialog .mat-mdc-dialog-title {\n  margin: unset !important;\n  padding-bottom: 10px !important;\n}\n  .filter-Dialog .mat-mdc-dialog-surface {\n  border-radius: 10px !important;\n  background: white !important;\n  padding: 20px !important;\n}\n  .filter-Dialog .common-field {\n  width: 100% !important;\n}\n  .filter-Dialog .common-field .mdc-text-field {\n  background-color: white;\n  border: 1px solid;\n  border-bottom: 0px;\n}\n  .filter-Dialog .common-field .mdc-text-field textarea {\n  resize: none;\n}\n  .filter-Dialog .common-field .mdc-text-field .mat-mdc-form-field-text-suffix {\n  font-size: 20px;\n}\n  .filter-Dialog .radio-container {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n  .filter-Dialog .radio-container .mat-mdc-radio-group {\n  display: flex;\n  flex-direction: column;\n  padding: 5px 0px;\n  border-radius: 5px 5px 0px 0px;\n  background-color: var(--mat-select-panel-background-color);\n  border: 1px solid;\n}\n  .filter-Dialog .radio-container .mat-mdc-radio-group .mdc-radio__inner-circle {\n  border-color: var(--secondaryBlue) !important;\n}\n  .filter-Dialog .radio-container .mat-mdc-radio-group .mdc-radio__outer-circle {\n  border-color: var(--secondaryBlue) !important;\n}\n  .filter-Dialog .radio-container .mat-mdc-radio-group .mdc-radio__background::before {\n  background-color: var(--secondaryBlue) !important;\n}\n/*# sourceMappingURL=filter.dialog.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FilterDialogStandAloneComponent, { className: "FilterDialogStandAloneComponent", filePath: "src\\app\\web\\shared\\dialogBox\\filter-dialog\\filter.dialog.standalone.component.ts", lineNumber: 21 });
})();

// src/app/web/views/reports/reports.standalone.component.ts
function ReportsStandAloneComponent_mat_tab_12_ng_template_2_div_0_app_icm_date_range_picker_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-icm-date-range-picker", 23);
    \u0275\u0275listener("emitToParent", function ReportsStandAloneComponent_mat_tab_12_ng_template_2_div_0_app_icm_date_range_picker_11_Template_app_icm_date_range_picker_emitToParent_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const report_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.recieveChildrenEmitter($event, report_r3));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const report_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("defaultDateRange", report_r3.defaultDateRange);
  }
}
function ReportsStandAloneComponent_mat_tab_12_ng_template_2_div_0_button_12_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function ReportsStandAloneComponent_mat_tab_12_ng_template_2_div_0_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function ReportsStandAloneComponent_mat_tab_12_ng_template_2_div_0_button_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const report_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.openProviderFilterPopup(report_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275template(3, ReportsStandAloneComponent_mat_tab_12_ng_template_2_div_0_button_12_div_3_Template, 2, 0, "div", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const report_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "REPORTS.Set Filter"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", report_r3.grid.filterData.filterType == "Provider");
  }
}
function ReportsStandAloneComponent_mat_tab_12_ng_template_2_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "div", 12)(3, "h5");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 13)(10, "div", 14);
    \u0275\u0275template(11, ReportsStandAloneComponent_mat_tab_12_ng_template_2_div_0_app_icm_date_range_picker_11_Template, 1, 1, "app-icm-date-range-picker", 15)(12, ReportsStandAloneComponent_mat_tab_12_ng_template_2_div_0_button_12_Template, 4, 4, "button", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 17)(14, "div", 18)(15, "button", 19);
    \u0275\u0275listener("click", function ReportsStandAloneComponent_mat_tab_12_ng_template_2_div_0_Template_button_click_15_listener() {
      const report_r3 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.refreshGrid(report_r3));
    });
    \u0275\u0275element(16, "img", 20);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(19, "div", 21);
    \u0275\u0275element(20, "common-ag-grid", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const report_r3 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 8, report_r3.title));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 10, report_r3.description));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", report_r3.defaultDateRange);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", report_r3.showProviderFilter);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 12, "COMMON.Refresh"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("gridConfig", report_r3.grid.config)("gridData", report_r3.grid.data)("showGridLoader", report_r3.grid.showLoader);
  }
}
function ReportsStandAloneComponent_mat_tab_12_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ReportsStandAloneComponent_mat_tab_12_ng_template_2_div_0_Template, 21, 14, "div", 9);
  }
  if (rf & 2) {
    const tab_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngForOf", tab_r6.reportsArr);
  }
}
function ReportsStandAloneComponent_mat_tab_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-tab", 7);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275template(2, ReportsStandAloneComponent_mat_tab_12_ng_template_2_Template, 1, 1, "ng-template", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r6 = ctx.$implicit;
    \u0275\u0275propertyInterpolate("label", \u0275\u0275pipeBind1(1, 1, tab_r6.label));
  }
}
var ReportsStandAloneComponent = class _ReportsStandAloneComponent {
  translate;
  _webService;
  isProvider = false;
  isFollower = false;
  tabArrConfig = [];
  constantVariable = new ConstantVariable();
  currentSelectedTabIndx;
  filterDialog = inject(MatDialog);
  errorComponent;
  constructor(translate, _webService) {
    this.translate = translate;
    this._webService = _webService;
    this.isProvider = this._webService.isProviderAccount;
    this.isFollower = this._webService.isSubscriptionAccount;
    this.setUpReportsTabs();
    this._webService.subscribeOnWebDataChange("ReportsStandAloneComponent", (event) => {
      this.recieveChildrenEmitter(event, {});
    });
  }
  getCommonGridConfig(colDefs, reportType) {
    let gridConfig = {
      maxHeight: "400px",
      noDataWarnMessage: "There is no report data for the specified period",
      gridOptions: {},
      agGridTheme: "ag-theme-alpine",
      pageSizeDropdownArr: [25, 50, 100],
      initialSelectedPageSize: 25,
      columnDefination: colDefs,
      enablePagination: true,
      headerNameLangArr: colDefs.map((o) => o.headerName),
      rowModelType: "clientSide",
      rowHeight: reportType == "fees" ? 70 : void 0
    };
    return gridConfig;
  }
  setUpReportsTabs() {
    if (this.isProvider) {
      this.tabArrConfig = this.getProviderReportsTabsConfig();
    } else if (this.isFollower) {
      this.tabArrConfig = this.getFollowerReportsTabsConfig();
    }
  }
  getProviderReportsTabsConfig() {
    let arr = [];
    arr.push(this.getEarningsTabConfigObj(), this.getFeesTabConfigObj(), this.getTradingTabConfigObj());
    return arr;
  }
  getFollowerReportsTabsConfig() {
    let arr = [];
    arr.push(this.getFeesTabConfigObj(), this.getCopiedPositionConfigObj());
    return arr;
  }
  getEarningsTabConfigObj() {
    return {
      label: "REPORTS.Earnings",
      reportsArr: [
        this.getProviderEarningReportsConfig(),
        this.getOfferReportConfig()
      ]
    };
  }
  getFeesTabConfigObj() {
    return {
      label: "REPORTS.Fees",
      reportsArr: [
        this.getFeesReportsConfig()
      ]
    };
  }
  getTradingTabConfigObj() {
    return {
      label: "REPORTS.Trading",
      reportsArr: [
        this.getPublishedPositionReportsConfig()
      ]
    };
  }
  getCopiedPositionConfigObj() {
    return {
      label: "REPORTS.Trading",
      reportsArr: [
        this.getCopiedPositionReportsConfig()
      ]
    };
  }
  getProviderEarningReportsConfig() {
    let providerColDef = this.getGridColDefs("provider");
    return {
      title: "REPORTS.Providers Report",
      description: "REPORTS.Report on earnings of providers",
      showProviderFilter: false,
      defaultDateRange: "Last 7 days",
      grid: {
        apiUrl: this.constantVariable.http_Api_Url.reports.provider,
        colDef: providerColDef,
        config: this.getCommonGridConfig(providerColDef, "provider"),
        data: [],
        showLoader: false,
        filterData: { startDate: "", endDate: "", filterType: "All", filterValue: "" },
        uiModel: ProvidersEarningModal
      }
    };
  }
  getOfferReportConfig() {
    let offerColDef = this.getGridColDefs("offers");
    return {
      title: "REPORTS.Offers Report",
      description: "REPORTS.Report on earnings of providers per offer",
      showProviderFilter: true,
      defaultDateRange: "Last 7 days",
      grid: {
        apiUrl: this.constantVariable.http_Api_Url.reports.offers,
        colDef: offerColDef,
        config: this.getCommonGridConfig(offerColDef, "offers"),
        data: [],
        showLoader: false,
        filterData: { startDate: "", endDate: "", filterType: "All", filterValue: "" },
        uiModel: ProvidersOffersModal
      }
    };
  }
  getFeesReportsConfig() {
    let feesColDef = this.getGridColDefs("fees");
    return {
      title: `${this.isProvider ? "REPORTS.Received fees" : "HOME.Paid Fees"}`,
      description: `${this.isProvider ? "REPORTS.The list of fee payments received by your providers during the specified period" : "REPORTS.FeesTitleForSubscriber"}`,
      showProviderFilter: this.isProvider ? true : false,
      defaultDateRange: "Last 7 days",
      grid: {
        apiUrl: `${this.isProvider ? this.constantVariable.http_Api_Url.reports.recieved_Fees : this.constantVariable.http_Api_Url.reports.paid_Fees}`,
        colDef: feesColDef,
        config: this.getCommonGridConfig(feesColDef, "fees"),
        data: [],
        showLoader: false,
        filterData: { startDate: "", endDate: "", filterType: "All", filterValue: "" },
        uiModel: FeesModal
      }
    };
  }
  getPublishedPositionReportsConfig() {
    let publishColDef = this.getGridColDefs("publishing");
    return {
      title: "REPORTS.Published Positions Report",
      description: "REPORTS.Report on positions published by providers",
      showProviderFilter: false,
      defaultDateRange: "Last 7 days",
      grid: {
        apiUrl: this.constantVariable.http_Api_Url.reports.published,
        colDef: publishColDef,
        config: this.getCommonGridConfig(publishColDef, "publishing"),
        data: [],
        showLoader: false,
        filterData: { startDate: "", endDate: "", filterType: "All", filterValue: "" },
        uiModel: PublishPostionModal
      }
    };
  }
  getCopiedPositionReportsConfig() {
    let publishColDef = this.getGridColDefs("copied");
    return {
      title: "REPORTS.Copied Positions Report",
      description: "REPORTS.DescriptionOfCopiedPostionReport",
      showProviderFilter: false,
      defaultDateRange: "Last 7 days",
      grid: {
        apiUrl: this.constantVariable.http_Api_Url.reports.copied_Position,
        colDef: publishColDef,
        config: this.getCommonGridConfig(publishColDef, "copied"),
        data: [],
        showLoader: false,
        filterData: { startDate: "", endDate: "", filterType: "All", filterValue: "" },
        uiModel: CopiedPostionModal
      }
    };
  }
  getGridData(reportConfigObj) {
    let reportConfig = reportConfigObj.grid;
    reportConfig.showLoader = true;
    let param = this.getCommonGridParam(reportConfig);
    this._webService.getCommonGridData(reportConfig.apiUrl, param).subscribe({
      next: (response) => {
        let arr = [];
        response.items.forEach((obj) => arr.push(new reportConfig.uiModel(obj)));
        reportConfig.data = arr;
        reportConfig.showLoader = false;
      },
      error: (errorObj) => {
        this.showErrorWarnMessage(errorObj?.error?.errorMessage);
        reportConfig.showLoader = false;
      }
    });
  }
  getCommonGridParam(reportConfig) {
    let param = {
      startDate: this.convertToGMTFormat(reportConfig.filterData["startDate"], false),
      endDate: this.convertToGMTFormat(reportConfig.filterData["endDate"], true),
      filterType: reportConfig.filterData["filterType"],
      needCount: true
    };
    if (reportConfig.filterData["filterType"] == "Provider") {
      param["filterValue"] = reportConfig.filterData["filterValue"];
    }
    return param;
  }
  getGridColDefs(gridType) {
    if (gridType == "provider") {
      return [
        { field: "nickName", headerName: "REPORTS.Nickname", resizable: false, suppressSizeToFit: true, cellRenderer: CommonCellRendererStandAloneComponent, colId: "providerProfileRedirection", flex: 1 },
        { field: "amount", headerName: "REPORTS.Amount", resizable: false, flex: 1, suppressSizeToFit: true }
      ];
    } else if (gridType == "offers") {
      return [
        { field: "offerTitle", headerName: "REPORTS.Title", resizable: false, flex: 1, cellRenderer: CommonCellRendererStandAloneComponent, colId: "providerOfferRedirection", suppressSizeToFit: true },
        { field: "nickName", headerName: "REPORTS.Nickname", resizable: false, suppressSizeToFit: true, flex: 1 },
        { field: "amount", headerName: "REPORTS.Amount", resizable: false, flex: 1, suppressSizeToFit: true }
      ];
    } else if (gridType == "fees") {
      return [
        { field: "name", headerName: "REPORTS.Name", resizable: false, suppressSizeToFit: true, cellRenderer: CommonCellRendererStandAloneComponent, flex: 1, colId: "subscriptionRedirection" },
        { field: "providerFeesObj", headerName: "REPORTS.Fees", resizable: false, flex: 1, suppressSizeToFit: true, cellRenderer: CommonCellRendererStandAloneComponent, colId: "providerFees" },
        { field: "amount", headerName: "REPORTS.Amount", resizable: false, flex: 1, suppressSizeToFit: true }
      ];
    } else if (gridType == "publishing") {
      return [
        { field: "nickName", headerName: "REPORTS.Nickname", resizable: false, suppressSizeToFit: true, cellRenderer: CommonCellRendererStandAloneComponent, flex: 1, colId: "providerProfileRedirection" },
        { field: "count", headerName: "REPORTS.Count", resizable: false, flex: 1 }
      ];
    } else if (gridType == "copied") {
      return [
        { field: "name", headerName: "REPORTS.Name", resizable: false, suppressSizeToFit: true, cellRenderer: CommonCellRendererStandAloneComponent, flex: 1, colId: "subscriptionRedirection" },
        { field: "count", headerName: "REPORTS.Count", resizable: false, flex: 1 }
      ];
    }
    return;
  }
  recieveChildrenEmitter(event, reportObj) {
    if (event["action"] == "on_date_range_change") {
      reportObj.grid.filterData.startDate = event["startDate"];
      reportObj.grid.filterData.endDate = event["endDate"];
      this.getGridData(reportObj);
    } else if (event["action"] == "set_filters") {
      this.refreshGrid(event["reportObj"]);
    }
  }
  showErrorWarnMessage(msg) {
    const errorConfigObj = this.errorComponent?.config;
    errorConfigObj.message = msg ? msg : errorConfigObj.message;
    this.errorComponent?.openErrorSnackbar();
  }
  convertToGMTFormat(date, isEndDate) {
    const dates = new Date(date);
    isEndDate ? dates.setUTCHours(23, 59, 59, 999) : dates.setUTCHours(0, 0, 0, 0);
    return dates.toUTCString();
  }
  refreshGrid(reportObj) {
    this.getGridData(reportObj);
  }
  openProviderFilterPopup(reportObj) {
    this.filterDialog.open(FilterDialogStandAloneComponent, {
      panelClass: "filter-Dialog",
      data: reportObj
    });
    this.filterDialog.afterAllClosed.subscribe((result) => {
    });
  }
  ngOnDestroy() {
    this._webService.unSubscribeOnWebDataChange("ReportsStandAloneComponent");
  }
  static \u0275fac = function ReportsStandAloneComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReportsStandAloneComponent)(\u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(WebService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportsStandAloneComponent, selectors: [["app-reports"]], viewQuery: function ReportsStandAloneComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(ShowErrorStandAloneComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.errorComponent = _t.first);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 14, vars: 7, consts: [["appearance", "outlined", 1, "section-card"], [1, "section-card-content"], [1, "home-card"], [1, "header", "d-flex", "justify-space-between", "align-center"], [1, "header-title"], ["mat-stretch-tabs", "false", "mat-align-tabs", "start", 1, "providerProfile-tabGroup"], [3, "label", 4, "ngFor", "ngForOf"], [3, "label"], ["matTabContent", ""], ["class", "reports-container", 4, "ngFor", "ngForOf"], [1, "reports-container"], [1, "header", "d-flex", "justify-space-between", "align-center", "pb-20"], [1, "header-subtitle"], [1, "header-buttons", "d-flex", "justify-space-between", "align-center"], [1, "d-flex", "g-10"], [3, "defaultDateRange", "emitToParent", 4, "ngIf"], ["class", "secondary-btn pos-relative", 3, "click", 4, "ngIf"], [1, "d-flex", "justify-space-between", "g-10"], [1, "d-flex", "justify-center", "g-10", "align-baseline"], [1, "secondary-btn", 3, "click"], ["src", "../../../../assets/icons/rotateIcon.svg"], [1, "pb-20"], [3, "gridConfig", "gridData", "showGridLoader"], [3, "emitToParent", "defaultDateRange"], [1, "secondary-btn", "pos-relative", 3, "click"], ["class", "filter-badge", 4, "ngIf"], [1, "filter-badge"]], template: function ReportsStandAloneComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "mat-card", 0)(1, "mat-card-content", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5");
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p");
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "mat-tab-group", 5);
      \u0275\u0275template(12, ReportsStandAloneComponent_mat_tab_12_Template, 3, 3, "mat-tab", 6);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(13, "show-error-message");
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 3, "REPORTS.Reports"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 5, "REPORTS.Different kinds of reports"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.tabArrConfig);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ShowErrorStandAloneComponent, TranslateModule, TranslatePipe, MatCardModule, MatCard, MatCardContent, MatTabsModule, MatTabContent, MatTab, MatTabGroup, CommonAgGridStandAloneComponent, IcmDateRangePickerStandAloneComponent], styles: ["\n\n.search-provider-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 600px;\n  width: 100%;\n}\n.search-provider-field[_ngcontent-%COMP%] {\n  width: 600px;\n}\n.search-provider-field[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%] {\n  border-color: #D0D5DD !important;\n}\n.divider[_ngcontent-%COMP%] {\n  font-size: 40px;\n  padding-top: 5px;\n  color: #D0D5DD;\n  font-weight: 100;\n}\n  .providerProfile-tabGroup .mdc-tab__text-label {\n  font-size: 20px !important;\n  font-weight: 400;\n  color: #667085 !important;\n}\n  .providerProfile-tabGroup .mdc-tab {\n  padding: 0 50px !important;\n}\n  .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n/*# sourceMappingURL=reports.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportsStandAloneComponent, { className: "ReportsStandAloneComponent", filePath: "src\\app\\web\\views\\reports\\reports.standalone.component.ts", lineNumber: 24 });
})();
export {
  ReportsStandAloneComponent
};
//# sourceMappingURL=chunk-E4PMCCPO.js.map
