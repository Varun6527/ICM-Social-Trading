import { Component, ViewChild } from '@angular/core';
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
        <div class="stats d-flex justify-space-between g-20" *ngIf="(role['hasProvider'] || role['hasFollower']) && (providerMetric || followerMetric)">
                <div class="stats-card" [ngClass]="{'justify-center': (providerMetric?.monthlyFeesArr.length === 0) || (followerMetric?.monthlyTradeArr.length === 0) }">
                    <h6>
                        <ng-container *ngIf="role['hasProvider'] && providerMetric?.monthlyFeesArr.length > 0">
                            {{'HOME.Monthly Fees' | translate}}
                        </ng-container>
                        <ng-container *ngIf="role['hasFollower'] && followerMetric?.monthlyTradeArr.length > 0">
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
                        <ng-container *ngIf="role['hasProvider']">
                            {{'HOME.Followers' | translate}}
                        </ng-container>
                        <ng-container *ngIf="role['hasFollower']">
                            {{'HOME.Trading profit' | translate}}
                        </ng-container>
                    </h6>
                    <h3 class="{{followerMetric?.tradeProfitClass}}">
                        <ng-container *ngIf="role['hasProvider']">
                            {{providerMetric?.followers}}
                        </ng-container>
                        <ng-container *ngIf="role['hasFollower']">
                            {{followerMetric?.tradeProfit}}
                        </ng-container>
                    </h3>
                    <p>
                        <ng-container *ngIf="role['hasProvider']">
                            {{'COMMON.Active' | translate}}
                        </ng-container>
                        <ng-container *ngIf="role['hasFollower']">
                            {{currentDate | date:'MMMM'}}<!-- <p>{{'COMMON.September' | translate}}</p> -->
                        </ng-container>
                    </p>
                </div>
                <div class="stats-card">
                    <h6>
                        <ng-container *ngIf="role['hasProvider']">
                            {{'HOME.Followers Growth' | translate}}
                        </ng-container>
                        <ng-container *ngIf="role['hasFollower']">
                            {{'HOME.Copied Position' | translate}}
                        </ng-container>
                    </h6>
                    <h3 [ngClass]="{'green-color': providerMetric?.followerGrowth > 0, 'red-color': providerMetric?.followerGrowth < 0 }">
                        <ng-container *ngIf="role['hasProvider']">
                            {{providerMetric?.followerGrowth}}
                        </ng-container>
                        <ng-container *ngIf="role['hasFollower']">
                            {{followerMetric?.copiedPos}}
                        </ng-container>
                    </h3>
                    <p>{{currentDate | date:'MMMM'}}</p> <!-- <p>{{'COMMON.September' | translate}}</p> -->
                </div>
                <div class="stats-card">
                    <h6>
                        <ng-container *ngIf="role['hasProvider']">
                            {{'HOME.Closed Profit (own)' | translate}}
                        </ng-container>
                        <ng-container *ngIf="role['hasFollower']">
                            {{'HOME.Paid Fees' | translate}}
                        </ng-container>
                    </h6>
                    <h3 class="{{providerMetric?.closedProfitClass}}">
                        <ng-container *ngIf="role['hasProvider']">
                            {{providerMetric?.closedProfit}}
                        </ng-container>
                        <ng-container *ngIf="role['hasFollower']">
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
  role: any = {};
  currentDate: Date = new Date();
  providerMetric?: ProviderMetricUIModal | any;
  followerMetric?: FollowerMetricUIModal | any;
  chartOptions: any;
  IConstant: ConstantVariable = new ConstantVariable();
  
  @ViewChild(ShowErrorStandAloneComponent) errorComponent?: ShowErrorStandAloneComponent;
  

  constructor(public translate: TranslateService, private _webService: WebService) {
    this.role['hasProvider'] = this._webService.isProviderAccount;
    this.role['hasFollower'] = this._webService.isSubscriptionAccount;
    this.getHeaderCardsData();
  }

  getHeaderCardsData() {
    if (this.role['hasProvider']) {
      this.getProviderMetrics();
    } else if (this.role['hasFollower']) {
      this.getFollowersMetrics();
    }
  }

  getProviderMetrics() {
    this._webService.getProviderMetric().subscribe({
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
    this._webService.getFollowerMetric().subscribe({
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


