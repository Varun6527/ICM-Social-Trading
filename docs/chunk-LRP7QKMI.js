import {
  ChartComponent,
  NgApexchartsModule
} from "./chunk-2UBV3CDC.js";
import {
  FollowerMetricUIModal,
  ProviderMetricUIModal
} from "./chunk-H2VRCKB7.js";
import {
  WebService
} from "./chunk-5MDTIDYM.js";
import {
  ShowErrorStandAloneComponent
} from "./chunk-ZFOVCG2I.js";
import {
  CommonModule,
  ConstantVariable,
  DatePipe,
  NgClass,
  NgIf,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-G46OV5IL.js";

// src/app/web/shared/provider-follower-header-cards/provider.follower.header.cards.standalone.component.ts
var _c0 = (a0) => ({ "justify-center": a0 });
var _c1 = (a0, a1) => ({ "green-color": a0, "red-color": a1 });
function ProviderFollowerHeaderCardsStandaloneComponent_div_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "HOME.Monthly Fees"), " ");
  }
}
function ProviderFollowerHeaderCardsStandaloneComponent_div_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "HOME.Monthly Trading"), " ");
  }
}
function ProviderFollowerHeaderCardsStandaloneComponent_div_0_apx_chart_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "apx-chart", 7);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("series", ctx_r0.chartOptions.series)("chart", ctx_r0.chartOptions.chart)("xaxis", ctx_r0.chartOptions.xaxis)("stroke", ctx_r0.chartOptions.stroke)("tooltip", ctx_r0.chartOptions.tooltip)("yaxis", ctx_r0.chartOptions.yaxis)("grid", ctx_r0.chartOptions.grid)("dataLabels", ctx_r0.chartOptions.dataLabels)("fill", ctx_r0.chartOptions.fill)("colors", ctx_r0.chartOptions.colors)("labels", ctx_r0.chartOptions.labels)("responsive", ctx_r0.chartOptions.responsive)("legend", ctx_r0.chartOptions.legend);
  }
}
function ProviderFollowerHeaderCardsStandaloneComponent_div_0_h6_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h6");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "HOME.NoTradingHistory"));
  }
}
function ProviderFollowerHeaderCardsStandaloneComponent_div_0_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "HOME.Followers"), " ");
  }
}
function ProviderFollowerHeaderCardsStandaloneComponent_div_0_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "HOME.Trading profit"), " ");
  }
}
function ProviderFollowerHeaderCardsStandaloneComponent_div_0_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.providerMetric == null ? null : ctx_r0.providerMetric.followers, " ");
  }
}
function ProviderFollowerHeaderCardsStandaloneComponent_div_0_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.followerMetric == null ? null : ctx_r0.followerMetric.tradeProfit, " ");
  }
}
function ProviderFollowerHeaderCardsStandaloneComponent_div_0_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.Active"), " ");
  }
}
function ProviderFollowerHeaderCardsStandaloneComponent_div_0_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, ctx_r0.currentDate, "MMMM"), "");
  }
}
function ProviderFollowerHeaderCardsStandaloneComponent_div_0_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "HOME.Followers Growth"), " ");
  }
}
function ProviderFollowerHeaderCardsStandaloneComponent_div_0_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "HOME.Copied Position"), " ");
  }
}
function ProviderFollowerHeaderCardsStandaloneComponent_div_0_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.providerMetric == null ? null : ctx_r0.providerMetric.followerGrowth, " ");
  }
}
function ProviderFollowerHeaderCardsStandaloneComponent_div_0_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.followerMetric == null ? null : ctx_r0.followerMetric.copiedPos, " ");
  }
}
function ProviderFollowerHeaderCardsStandaloneComponent_div_0_ng_container_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "HOME.Closed Profit (own)"), " ");
  }
}
function ProviderFollowerHeaderCardsStandaloneComponent_div_0_ng_container_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "HOME.Paid Fees"), " ");
  }
}
function ProviderFollowerHeaderCardsStandaloneComponent_div_0_ng_container_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.providerMetric == null ? null : ctx_r0.providerMetric.closedProfit, " ");
  }
}
function ProviderFollowerHeaderCardsStandaloneComponent_div_0_ng_container_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.followerMetric == null ? null : ctx_r0.followerMetric.paidFees, " ");
  }
}
function ProviderFollowerHeaderCardsStandaloneComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h6");
    \u0275\u0275template(3, ProviderFollowerHeaderCardsStandaloneComponent_div_0_ng_container_3_Template, 3, 3, "ng-container", 3)(4, ProviderFollowerHeaderCardsStandaloneComponent_div_0_ng_container_4_Template, 3, 3, "ng-container", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ProviderFollowerHeaderCardsStandaloneComponent_div_0_apx_chart_5_Template, 1, 13, "apx-chart", 4)(6, ProviderFollowerHeaderCardsStandaloneComponent_div_0_h6_6_Template, 3, 3, "h6", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 5)(8, "h6");
    \u0275\u0275template(9, ProviderFollowerHeaderCardsStandaloneComponent_div_0_ng_container_9_Template, 3, 3, "ng-container", 3)(10, ProviderFollowerHeaderCardsStandaloneComponent_div_0_ng_container_10_Template, 3, 3, "ng-container", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "h3");
    \u0275\u0275template(12, ProviderFollowerHeaderCardsStandaloneComponent_div_0_ng_container_12_Template, 2, 1, "ng-container", 3)(13, ProviderFollowerHeaderCardsStandaloneComponent_div_0_ng_container_13_Template, 2, 1, "ng-container", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p");
    \u0275\u0275template(15, ProviderFollowerHeaderCardsStandaloneComponent_div_0_ng_container_15_Template, 3, 3, "ng-container", 3)(16, ProviderFollowerHeaderCardsStandaloneComponent_div_0_ng_container_16_Template, 3, 4, "ng-container", 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 5)(18, "h6");
    \u0275\u0275template(19, ProviderFollowerHeaderCardsStandaloneComponent_div_0_ng_container_19_Template, 3, 3, "ng-container", 3)(20, ProviderFollowerHeaderCardsStandaloneComponent_div_0_ng_container_20_Template, 3, 3, "ng-container", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "h3", 6);
    \u0275\u0275template(22, ProviderFollowerHeaderCardsStandaloneComponent_div_0_ng_container_22_Template, 2, 1, "ng-container", 3)(23, ProviderFollowerHeaderCardsStandaloneComponent_div_0_ng_container_23_Template, 2, 1, "ng-container", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p");
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 5)(28, "h6");
    \u0275\u0275template(29, ProviderFollowerHeaderCardsStandaloneComponent_div_0_ng_container_29_Template, 3, 3, "ng-container", 3)(30, ProviderFollowerHeaderCardsStandaloneComponent_div_0_ng_container_30_Template, 3, 3, "ng-container", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "h3");
    \u0275\u0275template(32, ProviderFollowerHeaderCardsStandaloneComponent_div_0_ng_container_32_Template, 2, 1, "ng-container", 3)(33, ProviderFollowerHeaderCardsStandaloneComponent_div_0_ng_container_33_Template, 2, 1, "ng-container", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "p");
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(34, _c0, (ctx_r0.providerMetric == null ? null : ctx_r0.providerMetric.monthlyFeesArr.length) === 0 || (ctx_r0.followerMetric == null ? null : ctx_r0.followerMetric.monthlyTradeArr.length) === 0));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.role["hasProvider"] && (ctx_r0.providerMetric == null ? null : ctx_r0.providerMetric.monthlyFeesArr.length) > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.role["hasFollower"] && (ctx_r0.followerMetric == null ? null : ctx_r0.followerMetric.monthlyTradeArr.length) > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.chartOptions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.chartOptions);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.role["hasProvider"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.role["hasFollower"]);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.followerMetric == null ? null : ctx_r0.followerMetric.tradeProfitClass);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.role["hasProvider"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.role["hasFollower"]);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.role["hasProvider"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.role["hasFollower"]);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.role["hasProvider"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.role["hasFollower"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(36, _c1, (ctx_r0.providerMetric == null ? null : ctx_r0.providerMetric.followerGrowth) > 0, (ctx_r0.providerMetric == null ? null : ctx_r0.providerMetric.followerGrowth) < 0));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.role["hasProvider"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.role["hasFollower"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(26, 28, ctx_r0.currentDate, "MMMM"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.role["hasProvider"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.role["hasFollower"]);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.providerMetric == null ? null : ctx_r0.providerMetric.closedProfitClass);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.role["hasProvider"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.role["hasFollower"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(36, 31, ctx_r0.currentDate, "MMMM"));
  }
}
var ProviderFollowerHeaderCardsStandaloneComponent = class _ProviderFollowerHeaderCardsStandaloneComponent {
  translate;
  _webService;
  role = {};
  currentDate = /* @__PURE__ */ new Date();
  providerMetric;
  followerMetric;
  chartOptions;
  IConstant = new ConstantVariable();
  getDataById = false;
  id = false;
  errorComponent;
  constructor(translate, _webService) {
    this.translate = translate;
    this._webService = _webService;
    this.role["hasProvider"] = this._webService.isProviderAccount;
    this.role["hasFollower"] = this._webService.isSubscriptionAccount;
  }
  ngOnInit() {
    this.getHeaderCardsData();
  }
  getHeaderCardsData() {
    if (this.role["hasProvider"]) {
      this.getProviderMetrics();
    } else if (this.role["hasFollower"]) {
      this.getFollowersMetrics();
    }
  }
  getProviderMetrics() {
    let apiObseverable;
    if (this.getDataById) {
      apiObseverable = this._webService.getProviderMetricById(this.id);
    } else {
      apiObseverable = this._webService.getProviderMetric();
    }
    apiObseverable.subscribe({
      next: (response) => {
        this.providerMetric = new ProviderMetricUIModal(response);
        this.setChartData("provider");
      },
      error: (errorObj) => {
        this.showErrorWarnMessage(errorObj?.error?.errorMessage);
      }
    });
  }
  getFollowersMetrics() {
    let apiObseverable;
    if (this.getDataById) {
      apiObseverable = this._webService.getFollowerMetricById(this.id);
    } else {
      apiObseverable = this._webService.getFollowerMetric();
    }
    apiObseverable.subscribe({
      next: (response) => {
        this.followerMetric = new FollowerMetricUIModal(response);
        this.setChartData("follower");
      },
      error: (errorObj) => {
        this.showErrorWarnMessage(errorObj?.error?.errorMessage);
      }
    });
  }
  showErrorWarnMessage(msg) {
    const errorConfigObj = this.errorComponent?.config;
    errorConfigObj.message = msg ? msg : errorConfigObj.message;
    this.errorComponent?.openErrorSnackbar();
  }
  setChartData(chartType) {
    if (chartType == "provider") {
      if (this.providerMetric.monthlyFeesArr?.length == 0)
        return;
      let valueArr = this.providerMetric.monthlyFeesArr.map((num) => Number(num.feesValue.replace(/[^0-9.-]+/g, "")));
      let labelArr = this.providerMetric.monthlyFeesArr.map((num) => new Date(num.month).toLocaleString("en-US", { month: "short" }));
      this.chartOptions = this.IConstant.getHomePageChartConfig(valueArr, labelArr, this.providerMetric.currencyType, "Fees");
    } else if (chartType == "follower") {
      if (this.followerMetric.monthlyTradeArr.length == 0)
        return;
      let valueArr = this.followerMetric.monthlyTradeArr.map((num) => Number(num.monthTradeProfit.replace(/[^0-9.-]+/g, "")));
      let labelArr = this.followerMetric.monthlyTradeArr.map((num) => new Date(num.month).toLocaleString("en-US", { month: "short" }));
      this.chartOptions = this.IConstant.getHomePageChartConfig(valueArr, labelArr, this.followerMetric.currencyType, "Profit");
    }
  }
  static \u0275fac = function ProviderFollowerHeaderCardsStandaloneComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProviderFollowerHeaderCardsStandaloneComponent)(\u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(WebService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProviderFollowerHeaderCardsStandaloneComponent, selectors: [["provider-follower-header-cards"]], viewQuery: function ProviderFollowerHeaderCardsStandaloneComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(ShowErrorStandAloneComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.errorComponent = _t.first);
    }
  }, inputs: { getDataById: "getDataById", id: "id" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 1, consts: [["class", "stats d-flex justify-space-between g-20", 4, "ngIf"], [1, "stats", "d-flex", "justify-space-between", "g-20"], [1, "stats-card", 3, "ngClass"], [4, "ngIf"], [3, "series", "chart", "xaxis", "stroke", "tooltip", "yaxis", "grid", "dataLabels", "fill", "colors", "labels", "responsive", "legend", 4, "ngIf"], [1, "stats-card"], [3, "ngClass"], [3, "series", "chart", "xaxis", "stroke", "tooltip", "yaxis", "grid", "dataLabels", "fill", "colors", "labels", "responsive", "legend"]], template: function ProviderFollowerHeaderCardsStandaloneComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ProviderFollowerHeaderCardsStandaloneComponent_div_0_Template, 37, 39, "div", 0);
      \u0275\u0275element(1, "show-error-message");
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", (ctx.role["hasProvider"] || ctx.role["hasFollower"]) && (ctx.providerMetric || ctx.followerMetric));
    }
  }, dependencies: [CommonModule, NgClass, NgIf, DatePipe, TranslateModule, TranslatePipe, ShowErrorStandAloneComponent, NgApexchartsModule, ChartComponent], styles: ["\n\n.green-color[_ngcontent-%COMP%] {\n  color: var(--primary-positive-color);\n}\n.red-color[_ngcontent-%COMP%] {\n  color: var(--error-message--container-color);\n}\n/*# sourceMappingURL=provider.follower.header.cards.standalone.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProviderFollowerHeaderCardsStandaloneComponent, { className: "ProviderFollowerHeaderCardsStandaloneComponent", filePath: "src\\app\\web\\shared\\provider-follower-header-cards\\provider.follower.header.cards.standalone.component.ts", lineNumber: 111 });
})();

export {
  ProviderFollowerHeaderCardsStandaloneComponent
};
//# sourceMappingURL=chunk-LRP7QKMI.js.map
