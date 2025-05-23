import { Component, Input, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { WebService } from '../../service/web.service';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FollowerMetricUIModal, ProviderMetricUIModal } from '../ui-model/web.ui.model';
import { ShowErrorStandAloneComponent } from '../../../shared/component/showerror/show.error.standalone.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ConstantVariable } from '../../../shared/model/constantVariable.model';

@Component({
  selector: 'provider-follower-header-cards',
  template: `
        <div class="stats d-flex justify-space-between g-20 flex-wrap" *ngIf="(isProvider || isFollower) && (providerMetric || followerMetric)">
                <div class="stats-card" [ngClass]="{'justify-center': (providerMetric?.monthlyFeesArr.length === 0) || (followerMetric?.monthlyTradeArr.length === 0) }">
                    <h6>
                        <ng-container *ngIf="isProvider && providerMetric?.monthlyFeesArr.length > 0">
                            {{'HOME.Monthly Fees' | translate}}
                        </ng-container>
                        <ng-container *ngIf="isFollower && followerMetric?.monthlyTradeArr.length > 0">
                            {{'HOME.Monthly Trading' | translate}}
                        </ng-container>
                    </h6>
                    <apx-chart *ngIf="chartOptions" [series]="chartOptions.series" [chart]="chartOptions.chart" [xaxis]="chartOptions.xaxis"
                            [stroke]="chartOptions.stroke" [tooltip]="chartOptions.tooltip" [yaxis]="chartOptions.yaxis"
                            [grid]="chartOptions.grid" [dataLabels]="chartOptions.dataLabels" [fill]="chartOptions.fill"
                            [colors]="chartOptions.colors" [labels]="chartOptions.labels" [responsive]="chartOptions.responsive"
                            [legend]="chartOptions.legend"></apx-chart>

                    <h6 *ngIf="!chartOptions">{{'HOME.NoTradingHistory' | translate}}</h6>
                </div>
                <div class="stats-card">
                    <h6>
                        <ng-container *ngIf="isProvider">
                            {{'HOME.Followers' | translate}}
                        </ng-container>
                        <ng-container *ngIf="isFollower">
                            {{'HOME.Trading profit' | translate}}
                        </ng-container>
                    </h6>
                    <h3 class="{{followerMetric?.tradeProfitClass}}">
                        <ng-container *ngIf="isProvider">
                            {{providerMetric?.followers}}
                        </ng-container>
                        <ng-container *ngIf="isFollower">
                            {{followerMetric?.tradeProfit}}
                        </ng-container>
                    </h3>
                    <p>
                        <ng-container *ngIf="isProvider">
                            {{'COMMON.Active' | translate}}
                        </ng-container>
                        <ng-container *ngIf="isFollower">
                            {{currentDate | date:'MMMM'}}<!-- <p>{{'COMMON.September' | translate}}</p> -->
                        </ng-container>
                    </p>
                </div>
                <div class="stats-card">
                    <h6>
                        <ng-container *ngIf="isProvider">
                            {{'HOME.Followers Growth' | translate}}
                        </ng-container>
                        <ng-container *ngIf="isFollower">
                            {{'HOME.Copied Position' | translate}}
                        </ng-container>
                    </h6>
                    <h3 [ngClass]="{'green-color': providerMetric?.followerGrowth > 0, 'red-color': providerMetric?.followerGrowth < 0 }">
                        <ng-container *ngIf="isProvider">
                            {{providerMetric?.followerGrowth}}
                        </ng-container>
                        <ng-container *ngIf="isFollower">
                            {{followerMetric?.copiedPos}}
                        </ng-container>
                    </h3>
                    <p>{{currentDate | date:'MMMM'}}</p> <!-- <p>{{'COMMON.September' | translate}}</p> -->
                </div>
                <div class="stats-card">
                    <h6>
                        <ng-container *ngIf="isProvider">
                            {{'HOME.Closed Profit (own)' | translate}}
                        </ng-container>
                        <ng-container *ngIf="isFollower">
                            {{'HOME.Paid Fees' | translate}}
                        </ng-container>
                    </h6>
                    <h3 class="{{providerMetric?.closedProfitClass}}">
                        <ng-container *ngIf="isProvider">
                            {{providerMetric?.closedProfit}}
                        </ng-container>
                        <ng-container *ngIf="isFollower">
                            {{followerMetric?.paidFees}}
                        </ng-container>
                    </h3>
                    <p>{{currentDate | date:'MMMM'}}</p> <!-- <p>{{'COMMON.September' | translate}}</p> -->
                </div>
            </div>
            <show-error-message></show-error-message>
  `,
  styles:[`
        .green-color {
            color: var(--primary-positive-color);
        }

        .red-color {
            color: var(--error-message--container-color);
        }
 `],
  standalone: true,
  imports: [CommonModule, TranslateModule, ShowErrorStandAloneComponent, NgApexchartsModule]
})
export class ProviderFollowerHeaderCardsStandaloneComponent {
  currentDate: Date = new Date();
  providerMetric?: ProviderMetricUIModal | any;
  followerMetric?: FollowerMetricUIModal | any;
  chartOptions: any;
  IConstant: ConstantVariable = new ConstantVariable();
  
  @Input() getDataById: boolean = false;
  @Input() id: boolean = false;
  @Input() isProvider: boolean = false;
  @Input() isFollower: boolean = false;
  @ViewChild(ShowErrorStandAloneComponent) errorComponent?: ShowErrorStandAloneComponent;
  

  constructor(public translate: TranslateService, private _webService: WebService) {
    this.isProvider = this._webService.isProviderAccount;
    this.isFollower = this._webService.isSubscriptionAccount;
  }

  ngOnInit() {
    this.getHeaderCardsData();
  }

  getHeaderCardsData() {
    if (this.isProvider) {
      this.getProviderMetrics();
    } else if (this.isFollower) {
      this.getFollowersMetrics();
    }
  }

  getProviderMetrics() {
    let apiObseverable;
    if(this.getDataById) {
      apiObseverable = this._webService.getProviderMetricById(this.id);
    } else {
      apiObseverable = this._webService.getProviderMetric();
    }
    apiObseverable.subscribe({
      next: (response: any) => {
        this.providerMetric = new ProviderMetricUIModal(response);
        this.setChartData("provider");
      },
      error: (errorObj) => {
        this.showErrorWarnMessage(errorObj?.error?.errorMessage);
      }
    })
  }

  getFollowersMetrics() {
    let apiObseverable;
    if(this.getDataById) {
      apiObseverable = this._webService.getFollowerMetricById(this.id);
    } else {
      apiObseverable = this._webService.getFollowerMetric();
    }
    apiObseverable.subscribe({
      next: (response: any) => {
        this.followerMetric = new FollowerMetricUIModal(response);
        this.setChartData("follower");
      },
      error: (errorObj) => {
        this.showErrorWarnMessage(errorObj?.error?.errorMessage);
      }
    })
  }
  
  showErrorWarnMessage(msg: any) {
    const errorConfigObj = this.errorComponent?.config;
    errorConfigObj.message = msg ? msg : errorConfigObj.message;
    this.errorComponent?.openErrorSnackbar();
  }
  
  setChartData(chartType: any) {
    if(chartType == 'provider') {
      if(this.providerMetric.monthlyFeesArr?.length == 0) return;
      let valueArr = this.providerMetric.monthlyFeesArr.map((num: any) => Number(num.feesValue.replace(/[^0-9.-]+/g, '')));
      let labelArr = this.providerMetric.monthlyFeesArr.map((num: any) => new Date(num.month).toLocaleString('en-US', { month: 'short' }));
      this.chartOptions = this.IConstant.getHomePageChartConfig(valueArr, labelArr, this.providerMetric.currencyType, 'Fees');
    } else if(chartType == 'follower') {
      if(this.followerMetric.monthlyTradeArr.length == 0) return;
      let valueArr = this.followerMetric.monthlyTradeArr.map((num: any) => Number(num.monthTradeProfit.replace(/[^0-9.-]+/g, '')));
      let labelArr = this.followerMetric.monthlyTradeArr.map((num: any) => new Date(num.month).toLocaleString('en-US', { month: 'short' }));
      this.chartOptions = this.IConstant.getHomePageChartConfig(valueArr, labelArr, this.followerMetric.currencyType, 'Profit');
    }
  }
}


