import { Component, inject, ViewChild } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ProviderChartsStandaloneComponent } from '../../shared/provider-charts/provider.charts.standalone.component';
import { StatusBtnRendererStandAloneComponent } from '../../shared/cell-renderer/status-btn-renderer/status-btn-renderer.standalone.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { WebService } from '../../service/web.service';
import { MatDialog } from '@angular/material/dialog';
import { CommonAgGridStandAloneComponent } from '../../shared/common-ag-grid/common.aggrid.standalone.component';
import { BeFollowerDialogStandAloneComponent } from '../../shared/dialogBox/create-follower-dialog/beFollowerDialog.standalone.component';
import { RatingUiModal } from '../../shared/ui-model/web.ui.model';
import { ShowErrorStandAloneComponent } from '../../../shared/component/showerror/show.error.standalone.component';
import { ConstantVariable } from '../../../shared/model/constantVariable.model';
import { AuthService } from '../../../auth/service/auth.service';
import { CommonCellRendererStandAloneComponent } from '../../shared/cell-renderer/common-cell-renderer/common-cell-renderer.standalone.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-provider-list-profile',
  templateUrl: './provider-list-profile.component.html',
  styleUrl: './provider-list-profile.component.scss',
  standalone: true,
  imports: [CommonModule, FormsModule, ProviderChartsStandaloneComponent, CommonAgGridStandAloneComponent, MatDividerModule, RouterModule, TranslateModule, MatButtonToggleModule, MatCardModule, ShowErrorStandAloneComponent]
})
export class ProviderListProfileStandAloneComponent {
  showGridLoader: boolean = false;
  ratingData :any = {};
  tradingMetricsData: any = {}
  offerData: any = {};
  gridConfig: any = {};
  gridData: any = [];
  showPageLoader: boolean = false;
  widget_key: string = "";
  accountId: any;
  ratingId: any;
  chartsData: any = {
    assestChart: {
      tabs: {
        count: { charts: { countData: [] } },
        volume: { charts: { volumeData: [] } },
      },
      selectedTab: 'count'
    },
    monthlyDetailsChart: {
      tabs: {
        returns: { charts: { returnsData: []}},
        investors: { charts: { investorsData: []}},
        invested: { charts: { investedData: []}},
      },
      selectedTab: 'returns'
    },
    perfRiskPortfolioChart: {
      tabs: {
        performance: { charts: { tradingPerformanceData: [], totalTradingData: [] } },
        risk: { charts: { tradingFrequencyData: [] } },
        portfolio: { charts: { topTrade: [], topWonTrade: [], topLostTrade: [] } }
      },
      selectedTab: 'performance'
    }
  };
  tradingStaticsData: any = {};

  IConstant: ConstantVariable = new ConstantVariable();
  readonly beFollowerDialog = inject(MatDialog);
  @ViewChild(ShowErrorStandAloneComponent) errorComponent?: ShowErrorStandAloneComponent;

  constructor(public translate: TranslateService, private _authService: AuthService, private _webService: WebService, private _router: Router, private route: ActivatedRoute) {
    this.widget_key = this._authService.userConfig.ratings.embeddedWidgetKey;
    this.route.paramMap.subscribe(params => {
      this.accountId = params.get('accountId')!;
      this.ratingId = params.get('ratingId')!;
      this.initialSetupOfProviderListProfilePage();
    });
    this._webService.subscribeOnWebDataChange("ProviderListProfileStandAloneComponent", (event: any)=>{
      this.recieveChildrenEmitter(event);
    });
  }

  async initialSetupOfProviderListProfilePage() {
    this.showPageLoader = true;
    let result1 = await this.getRatingData();
    let result2 = await this.getOffersData();
    this.showPageLoader = false;
    this.setupPositionGridConfig();
    this.getPositionData();
    this.getAssestsChartsData();
    this.getMonthlyReturnChartsData();
    //Need to call get investor api here which gives us all added investor month by month.
    //Need to call get invested api here which gives us all added invested amount month by month.
    this.getTradingMetricsData();
  }

  onAssestMetricChange() {
    let selectedTab = this.chartsData.assestChart.selectedTab, chartData = [];
    if(selectedTab == 'count') {
      chartData = this.chartsData.assestChart.tabs[selectedTab].charts.countData;
    } else if(selectedTab == 'volume') {
      chartData = this.chartsData.assestChart.tabs[selectedTab].charts.volumeData;
    }
    this._webService.emitOnWebDataChange({action: "onAssestMetricChange", chartConfig: { data: chartData, type: selectedTab } });
  }

  onMonthlyMetricChange() {
    let selectedTab = this.chartsData.monthlyDetailsChart.selectedTab, chartData = [];
    if(selectedTab == 'returns') { 
      chartData = this.chartsData.monthlyDetailsChart.tabs[selectedTab].charts.returnsData;
    } else if(selectedTab == 'investors') {
      //Assign data here for investors chart.
    } else if(selectedTab == 'invested') {
      //Assign data here for investors chart.
    }
    this._webService.emitOnWebDataChange({action: "onMonthlyMetricChange", chartConfig: { data: chartData, type: selectedTab }});
  }

  onPerfRiskPortfolioChartMetricChange() {
    let selectedTab = this.chartsData.perfRiskPortfolioChart.selectedTab;
    if(selectedTab == 'performance') { 
      this.chartsData.perfRiskPortfolioChart.tabs[selectedTab].charts.totalTradingData = this.tradingMetricsData.total;
      this._webService.emitOnWebDataChange({action: "onTotalTradingMetricChange", chartConfig: { data: this.tradingMetricsData.total, type: selectedTab }});

      //Perfomance first chart data binding pending
      this._webService.emitOnWebDataChange({action: "onPerformanceMetricChange", chartConfig: { data: [], type: selectedTab }});
      //end of chart data binding
    } else if(selectedTab == 'risk') {
      this._webService.emitOnWebDataChange({action: "onRiskMetricChange", chartConfig: { data: [], type: selectedTab }});
      //Assign data here for investors chart.
    } else if(selectedTab == 'portfolio') {
      this.chartsData.perfRiskPortfolioChart.tabs[selectedTab].charts.topTrade = this.tradingMetricsData.largest;
      this._webService.emitOnWebDataChange({action: "onTopTradeMetricChange", chartConfig: { data: this.tradingMetricsData.largest, type: selectedTab }});

      this.chartsData.perfRiskPortfolioChart.tabs[selectedTab].charts.topWonTrade = this.tradingMetricsData.best;
      this._webService.emitOnWebDataChange({action: "onTopWonTradeMetricChange", chartConfig: { data: this.tradingMetricsData.best, type: selectedTab }});

      this.chartsData.perfRiskPortfolioChart.tabs[selectedTab].charts.topLostTrade = this.tradingMetricsData.worst;
      this._webService.emitOnWebDataChange({action: "onTopLostTradeMetricChange", chartConfig: { data: this.tradingMetricsData.worst, type: selectedTab }});
      //Assign data here for investors chart.
    }
  }

  getTradeSummaryData(tradeData: any) {
    if (!tradeData) return {};

    const wonCount = tradeData?.won?.count || 0;
    const lostCount = tradeData?.lost?.count || 0;
    const totalTrades = wonCount + lostCount;

    const wonPercentage = totalTrades > 0 ? ((wonCount / totalTrades) * 100).toFixed(0) : '0';
    const lostPercentage = totalTrades > 0 ? ((lostCount / totalTrades) * 100).toFixed(0) : '0';

    const bestProfit = tradeData?.best?.profit ?? null;
    const worstProfit = tradeData?.worst?.profit ?? null;

    return {
        tradeWon: `${wonCount}/${wonPercentage}%`,
        tradeLost: `${lostCount}/${lostPercentage}%`,
        bestTrade: bestProfit !== null ? bestProfit.toFixed(2) : '--',
        worstTrade: worstProfit !== null ? parseFloat(worstProfit).toFixed(2) : '--',
    };
  }

  getTradingMetricsData() {
    let param = {
      accountId: this.accountId,
      widget_key: this.widget_key
    }
    this._webService.getTradingDataByAccountId(param).subscribe({
      next: (response: any) => {
        this.tradingMetricsData = response.summary;
        this.tradingStaticsData = this.getTradeSummaryData(response.summary);
        this.onPerfRiskPortfolioChartMetricChange();
      },
      error: (errorObj: any) => {
        this.showErrorWarnMessage(this.IConstant.errorMessageObj[errorObj?.error?.errorCode]);
      }
    })
    
  }

  getAssestsChartsData() {
    let param = {
      accountId: this.accountId,
      widget_key: this.widget_key
    }
    this._webService.getInstrumentData(param).subscribe({
      next: (response: any) => {
        this.chartsData.assestChart.tabs['count'].charts.countData = response.distribution;
        this.chartsData.assestChart.tabs['volume'].charts.volumeData = response.distribution;
        this.onAssestMetricChange();
      },
      error: (errorObj: any) => {
        this.showErrorWarnMessage(this.IConstant.errorMessageObj[errorObj?.error?.errorCode]);
      }
    })
  }

  getMonthlyReturnChartsData() {
    let param = {
      accountId: this.accountId,
      widget_key: this.widget_key
    }
    this._webService.getMonthlyReturnChartsData(param).subscribe({
      next: (response: any) => {
        this.chartsData.monthlyDetailsChart.tabs['returns'].charts.returnsData = response;
        this.onMonthlyMetricChange();
      },
      error: (errorObj: any) => {
        this.showErrorWarnMessage(this.IConstant.errorMessageObj[errorObj?.error?.errorCode]);
      }
    })
  }

  getPositionData() {
    this.showGridLoader = true;
    let param = {
      accountId: this.accountId,
      widget_key: this.widget_key
    }
    this._webService.getPublicPositionData(param).subscribe({
      next: (response: any) => {
        this.gridData = response.items;
        this.showGridLoader = false;
      },
      error: (errorObj) => {
        this.showGridLoader = false;
        this.showErrorWarnMessage(this.IConstant.errorMessageObj[errorObj?.error?.errorCode]);
      }
    })
}

  getRatingData() {
    return new Promise<void>((resolve, reject) => {
      let param = {
        widget_key: this.widget_key,
        $filter: `(accountId eq ${this.accountId})`,
        ratingId: this.ratingId
      };
      this._webService.getRatingData(param).subscribe({
        next: (response: any) => {
          response.items.forEach((obj: any) =>
            this.ratingData = new RatingUiModal(obj, this._webService.getFileServerUrl(), this._webService.getRatingServerUrl(), [])
          );
          resolve();
        },
        error: (errorObj) => {
          this.showErrorWarnMessage(this.IConstant.errorMessageObj[errorObj?.error?.errorCode]);
          resolve();
        }
      })
    })
  }

  getOffersData() {
    return new Promise<void>((resolve) => {
      let param = {
        id: this.ratingData.profileId
      }
      this._webService.getOffersOfProvider(param).subscribe({
        next: (response: any) => {
          this.offerData = response.items[0] || {};
          resolve();
        },
        error: (errorObj) => {
          this.showErrorWarnMessage(errorObj?.error?.errorMessage);
          resolve();
        }
      })
    })
  }

  setupPositionGridConfig() {
    let colDefs = [
      { field: "symbol", headerName: 'PROVIDERS_LIST_PROFILE.Symbol', resizable: false, width: 150, suppressSizeToFit: true },
      { field: "direction", headerName:'PROVIDERS_LIST_PROFILE.Type', resizable: false, cellRenderer: StatusBtnRendererStandAloneComponent, width: 100, colId : 'ratingType' },
      { field: "volume", headerName: 'PROVIDERS_LIST_PROFILE.Contract Size', resizable: false, width: 150 },
      { field: "openTime", sort: 'desc', headerName: 'PROVIDERS_LIST_PROFILE.Open Time', resizable: false, width: 200, cellRenderer: CommonCellRendererStandAloneComponent, colId: 'dateTimeCell' },
      { field: "openPrice", headerName: 'PROVIDERS_LIST_PROFILE.Open Price', resizable: false, width: 150, cellRenderer: CommonCellRendererStandAloneComponent, colId: 'currencyCellWithNoSymbol' },
      { field: "closeTime", headerName: 'PROVIDERS_PROFILE.Close Time', resizable: false, width: 200, cellRenderer: CommonCellRendererStandAloneComponent, colId: 'dateTimeCell' },
      { field: "closePrice", headerName: 'PROVIDERS_PROFILE.Close price', resizable: false, width: 150, cellRenderer: CommonCellRendererStandAloneComponent, colId: 'currencyCellWithNoSymbol' },
      { field: "profit", headerName: 'PROVIDERS_LIST_PROFILE.Profit', resizable: false, width: 150, cellRenderer: CommonCellRendererStandAloneComponent, colId: 'currencyCell', cellStyle: (params: any) => { return { color: params.value < 0 ? 'var(--error-message--container-color)' : 'var(--primary-positive-color)' } } }
    ];
    this.setupGridConfig(colDefs);
  }

  setupGridConfig(colDefs: any) {
    this.gridConfig = {
      maxHeight: '400px',
      noDataWarnMessage: 'There are no position',
      gridOptions: {},
      agGridTheme: 'ag-theme-alpine',
      pageSizeDropdownArr: [25, 50, 100],
      initialSelectedPageSize: 25,
      columnDefination: colDefs,
      enablePagination: true,
      headerNameLangArr: colDefs.map((o: any) => o.headerName),
      rowModelType: 'clientSide',
      rowHeight: undefined
    }
  }
  
  recieveChildrenEmitter(event: any) {
    if (event['action'] == 'follower_created') {
      this.refreshUserProfileAndRedirectToProviderOrFollowerProfile(event.data);
      this.beFollowerDialog.closeAll();
    }
  }

  refreshUserProfileAndRedirectToProviderOrFollowerProfile(response: any) {
    this._webService.setOrRefreshUserProfileData((result: any)=>{
      if(result.status) {
        this._webService.emitOnWebDataChange({action: "refresh_sidenav_menu_options", callback: () => {
            this._router.navigate([`/portal/subscriptions/${response.id}`]);
        }});
      }
    })
  }

  openCopyStrategyPopup() {
    this.beFollowerDialog.open(BeFollowerDialogStandAloneComponent, {
      panelClass: 'beFollower-dialog',
      data: {id: this.ratingData.profileId, nickName: this.ratingData.accountName, visibility: this.ratingData.account?.isPublic ? "Public" : "Private" }
    });
    this.beFollowerDialog.afterAllClosed.subscribe(()=>{});
  }

  showErrorWarnMessage(msg: any) {
    const errorConfigObj = this.errorComponent?.config;
    errorConfigObj.message = msg ? msg : errorConfigObj.message;
    this.errorComponent?.openErrorSnackbar();
  }

  showSuccessPopupMsg(msg: string) {
    const errorConfigObj = this.errorComponent?.config;
    errorConfigObj.customStyle = 'default-success-style';
    errorConfigObj.message = msg ? msg : errorConfigObj.message;
    this.errorComponent?.openErrorSnackbar();
  }

  ngOnDestroy() {
    this._webService.unSubscribeOnWebDataChange('ProviderListProfileStandAloneComponent');
  }

}
