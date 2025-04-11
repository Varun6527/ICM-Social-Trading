import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { WebService } from '../../service/web.service';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexDataLabels, ApexTooltip, ApexStroke, ApexFill, ApexPlotOptions, ApexLegend, NgApexchartsModule, ApexNoData } from "ng-apexcharts";
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  colors: any
  fill: ApexFill
  labels: any
  plotOptions: ApexPlotOptions
  legen: ApexLegend
};

@Component({
  selector: 'provider-charts',
  template: `
            <apx-chart *ngIf="chartOptions" [series]="chartOptions.series" [chart]="chartOptions.chart"
            [xaxis]="chartOptions.xaxis" [stroke]="chartOptions.stroke"
            [tooltip]="chartOptions.tooltip" [yaxis]="chartOptions.yaxis"
            [grid]="chartOptions.grid" [dataLabels]="chartOptions.dataLabels"
            [fill]="chartOptions.fill" [colors]="chartOptions.colors"
            [labels]="chartOptions.labels" [responsive]="chartOptions.responsive"
            [legend]="chartOptions.legend" [plotOptions]="chartOptions.plotOptions"
            [states]="chartOptions.states" [noData]="chartOptions.noData"></apx-chart>
        `,
  standalone: true,
  imports: [CommonModule, TranslateModule, NgApexchartsModule]
})
export class ProviderChartsStandaloneComponent {
  chartOptions!: Partial<ChartOptions> | any;
  chartNoData: ApexNoData = {
    text: 'No data available',
    align: 'center',
    verticalAlign: 'middle',
    style: {
      color: '#999',
      fontSize: '16px'
    }
  };
  
  @Input() chartType: string = "";
  @Input() chartDataConfig: any = {data: [], type: ''};
  constructor(public translate: TranslateService, private _webService: WebService, private datePipe: DatePipe) {
    this._webService.subscribeOnWebDataChange('ProviderChartsStandaloneComponent', (event: any)=>{
      this.setupChartsConfig(event);
    })
  }

  ngOnInit() {
  }

  resetChartDataConfig() {
    this.chartDataConfig = {data: [], type: ''};
  }


  setupChartsConfig(event: any) {
    if (event.action == 'onAssestMetricChange' && this.chartType == 'assestChart') {
      this.resetChartDataConfig();
      this.chartOptions = this.getAssestChartConfig(event.chartConfig);
    } else if (event.action == 'onMonthlyMetricChange' && this.chartType == 'monthlyDetailsChart') {
      this.resetChartDataConfig();
      this.chartOptions = this.getMonthlyDetailsChartConfig(event.chartConfig);
    } else if (event.action == 'onPerformanceMetricChange' && this.chartType == 'performanceChart') {
      this.resetChartDataConfig();
      this.chartOptions = this.getPerformanceChartConfig(event.chartConfig);
    } else if (event.action == 'onTotalTradingMetricChange' && this.chartType == 'totalTradingChart') {
      this.resetChartDataConfig();
      this.chartOptions = this.getTotalTradingChartConfig(event.chartConfig);
    } else if (event.action == 'onRiskMetricChange' && this.chartType == 'riskMetricChart') {
      this.resetChartDataConfig();
      this.chartOptions = this.getRiskChartConfig(event.chartConfig);
    } else if (event.action == 'onTopTradeMetricChange' && this.chartType == 'topTradeMetricChart') {
      this.resetChartDataConfig();
      this.chartOptions = this.getTopTradeChartConfig(event.chartConfig);
    } else if (event.action == 'onTopWonTradeMetricChange' && this.chartType == 'topWonTradeMetricChart') {
      this.resetChartDataConfig();
      this.chartOptions = this.getTopTradeWonChartConfig(event.chartConfig);
    } else if (event.action == 'onTopLostTradeMetricChange' && this.chartType == 'topLostTradeMetricChart') {
      this.resetChartDataConfig();
      this.chartOptions = this.getTopTradeLostChartConfig(event.chartConfig);
    }
  }

  getAssestChartConfig(data: any) {
    this.chartDataConfig = data;
    let graphType = this.chartDataConfig.type;
    let chartData = this.chartDataConfig.data || [];
    const shareField = graphType === 'volume' ? 'volumeShare' : 'countShare';
    const countField = graphType === 'volume' ? 'volume' : 'count';

    const sortedData = [...chartData].sort((a: any, b: any) => b[shareField] - a[shareField]);
    const seriesData = sortedData.map((item: any) => item[shareField]);
    const labels = sortedData.map((item: any) => item.symbol);
    const totalCount = sortedData.reduce((sum: number, item: any) => sum + item[countField], 0);

    return {
      series: seriesData,
      chart: {
        height: 350,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '70%', 
          },
          track: {
            show: true,
            background: "#F2F4F7",
            strokeWidth: '100%',
            margin: 5, 
          },
          dataLabels: {
            name: {
              fontSize: '25px',
            },
            value: {
              fontSize: '30px',
              fontWeight: 600
            },
            total: {
              show: true,
              label: `Total Asset ${graphType === 'volume' ? 'Volume' : 'Count'}`,
              fontWeight: 400,
              formatter: function () {
                return totalCount.toFixed(2);
              },
            }
          },
        },
      },
      stroke: {
        lineCap: 'round', 
      },
      labels: labels,
      colors: ['#0A365B', '#105995', '#A8D1F3'],
      tooltip: {
        enabled: true,
        custom: (opts: any) => {
          const seriesIndex = opts.seriesIndex;
          const dataItem = sortedData[seriesIndex];
          return `<div style="padding: 5px;">
                    <strong>Symbol:</strong> ${dataItem.symbol}<br/>
                    <strong>Total ${graphType === 'volume' ? 'Volume' : 'Count'}:</strong> ${dataItem[countField]}<br/>
                  </div>`;
        }
      },
      responsive: [
        {
          breakpoint: 600,
          options: {
            chart: {
              height: 120
            },
            stroke: {
              width: 2
            },
            grid: {
              padding: {
                top: -50,
                bottom: -10
              }
            }
          }
        },
        {
          breakpoint: 768,
          options: {
            chart: {
              height: 130
            },
            grid: {
              padding: {
                top: -60,
                bottom: -15
              }
            }
          }
        }
      ],
      noData: this.chartNoData
    };
  }

  getMonthlyDetailsChartConfig(data: any) {
    this.chartDataConfig = data;
    let graphType = this.chartDataConfig.type;
    let chartData = this.chartDataConfig.data || [];

    let series: any = [];
    if(graphType == 'returns') {
      const seriesMap = new Map<number, number[]>();
      chartData.forEach((item: any) => {
        const date = new Date(item.month);
        const year = date.getFullYear();
        const month = date.getMonth(); 
        if (!seriesMap.has(year)) {
          seriesMap.set(year, new Array(12).fill(null));
        }
        seriesMap.get(year)![month] = item.returnChange;
      });
      series = Array.from(seriesMap.entries()).map(([year, dataArr]) => ({
        name: year.toString(),
        data: dataArr
      }));
    } else if(graphType == 'investors') {
      //prepare data according to chart
    } else if(graphType == 'invested') {
      //prepare data according to chart
    }
    
    return {
      series: series,
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: true
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 10, // Border radius applied to the top of each stack
          borderRadiusApplication: 'end', // Apply to the topmost part of the stack
        }
      },
      xaxis: {
        categories: [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ],
        title: {
          text: 'Month', // Add a label below the x-axis
          style: {
            fontSize: '14px',
            fontWeight: 'light',
            color: '#333' // Adjust text color as needed
          }
        }
      },
      yaxis: {
        show: true
      },
      legend: {
        position: 'top',
        offsetY: 2,
        horizontalAlign: 'right', 
        floating: true, 
        offsetX: 10, 
      },
      fill: {
        opacity: 1
      },
      colors: ['#0A365B', '#105995', '#A8D1F3'], 
      tooltip: {
        y: {
          formatter: function(value: number) {
            return `Total ${graphType} (${value}%)`;
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      noData: this.chartNoData
    };
  }

  getPerformanceChartConfig(data: any) {
    this.chartDataConfig = data;
    let graphType = this.chartDataConfig.type;
    let chartData = this.chartDataConfig.data || [];
    return {
      series: [{
        name: "STOCK ABC",
        data: chartData
      }],
      chart: {
        type: 'area',
        height: 450,
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        curve: 'smooth',
        width: [2], // Reduced stroke width
      },
      colors: ['#146BB2'],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'vertical',
          shadeIntensity: 0, // Minimal overall shading
          gradientToColors: ['#146BB2'], // The darker color at the top
          inverseColors: false,
          opacityFrom: 0.5, // Higher opacity at the top
          opacityTo: 0.1, // Lower opacity at the bottom
          stops: [0, 100] // Focus on top being darker, then gradual lightening
        }
      },
      title: {
        text: 'Fundamental Analysis of Stocks',
        align: 'left'
      },
      subtitle: {
        text: 'Price Movements',
        align: 'left'
      },
      labels: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ],
      xaxis: {
        categories: [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ],
        title: {
          text: 'Month', // Add a label below the x-axis
          style: {
            fontSize: '14px',
            fontWeight: 'light',
            color: '#333' // Adjust text color as needed
          }
        }
      },
      yaxis: {
        opposite: false,
      },
      legend: {
        position: 'top',
        offsetY: 0,
        horizontalAlign: 'right', // Align the legend to the right
        floating: true, // Make the legend float (position absolute)
        offsetX: 0, // Adjust horizontal position for fine-tuning
      },
      noData: this.chartNoData
    };
  }

  getTotalTradingChartConfig(data: any) {
    this.chartDataConfig = data;
    const countValue = this.chartDataConfig.data.count || 0;
    const tooltipData = this.chartDataConfig.data;
    return {
      series: [countValue],
      chart: {
        height: 350,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '60%', // Adjust this percentage to reduce the inner spacing
          },
          track: {
            show: true,
            background: "#F2F4F7",
            strokeWidth: '100%',
          },
          dataLabels: {
            value: {
              fontSize: '25px',
              fontWeight: 600
            },
            total: {
              show: true,
              label: 'Trades Total',
              fontWeight: 400,
              formatter: function () {
                return countValue;
              },
            }
          }
        },
      },
      stroke: {
        lineCap: 'round', // This enables rounded edges for the bars
      },
      labels: [countValue.toString()],
      colors: ['#0A365B'],
      tooltip: {
        enabled: true,
        custom: function (opts: any) {
          return `<div style="padding: 5px;">
                    <strong>Profit:</strong> ${tooltipData.profit}<br/>
                    <strong>Average Trade Size:</strong> ${tooltipData.averageTradeSize}<br/>
                    <strong>Average Profit Per Trade:</strong> ${tooltipData.averageProfitPerTrade}<br/>
                    <strong>Average Profit Per Lot:</strong> ${tooltipData.averageProfitPerLot}<br/>
                    <strong>Buy Count:</strong> ${tooltipData.buyCount}<br/>
                    <strong>Sell Count:</strong> ${tooltipData.sellCount}<br/>
                  </div>`;
        }
      },
      responsive: [
        {
          breakpoint: 600,
          options: {
            chart: {
              height: 120
            },
            stroke: {
              width: 2
            },
            grid: {
              padding: {
                top: -50,
                bottom: -10
              }
            }
          }
        },
        {
          breakpoint: 768,
          options: {
            chart: {
              height: 130
            },
            grid: {
              padding: {
                top: -60,
                bottom: -15
              }
            }
          }
        }
      ],
      noData: this.chartNoData
    };
  }

  getRiskChartConfig(data: any) {
    this.chartDataConfig = data;
    let graphType = this.chartDataConfig.type;
    let chartData = this.chartDataConfig.data || [];
    return {
      series: chartData,
      chart: {
        type: 'bar',
        height: 280,
        stacked: true,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: true
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 10, // Border radius applied to the top of each stack
          borderRadiusApplication: 'end', // Apply to the topmost part of the stack
        }
      },
      xaxis: {
        categories: [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ],
        title: {
          text: 'Month', // Add a label below the x-axis
          style: {
            fontSize: '14px',
            fontWeight: 'light',
            color: '#333' // Adjust text color as needed
          }
        }
      },
      yaxis: {
        show: true
      },
      legend: {
        position: 'top',
        offsetY: 2,
        horizontalAlign: 'right', // Align the legend to the right
        floating: true, // Make the legend float (position absolute)
        offsetX: 10, // Adjust horizontal position for fine-tuning
      },
      fill: {
        opacity: 1
      },
      colors: ['#0A365B', '#105995', '#A8D1F3'], // Custom stack colors
      tooltip: {
        enabled: false // Disable tooltips on hover
      },
      dataLabels: {
        enabled: false // Disable data labels
      },
      noData: this.chartNoData
    };
  }

  getTopTradeChartConfig(data: any) {
    this.chartDataConfig = data;
    const symbolValue = this.chartDataConfig?.data?.symbol || 0;
    const profitValue = this.chartDataConfig?.data == null ? [] : [this.chartDataConfig?.data?.profit || 0];
    const tooltipData = this.chartDataConfig?.data;
    return {
      series: profitValue,
      chart: {
        height: 350,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '60%', // Adjust this percentage to reduce the inner spacing
          },
          track: {
            show: true,
            background: "#F2F4F7",
            strokeWidth: '100%',
          },
          dataLabels: {
            value: {
              fontSize: '25px',
              fontWeight: 600
            },
            total: {
              show: true,
              label: 'Top Trade',
              fontWeight: 400,
              formatter: function () {
                return symbolValue;
              },
            }
          }
        },
      },
      stroke: {
        lineCap: 'round', // This enables rounded edges for the bars
      },
      labels: [profitValue.toString()],
      colors: ['#0A365B'],
      tooltip: {
        enabled: true,
        custom: (opts: any) => {
          return `<div style="padding: 5px;">
                    <strong>Direction:</strong> ${tooltipData?.direction}<br/>
                    <strong>Open Time:</strong> ${this.datePipe.transform(tooltipData?.openTime, 'MM/dd/yyyy, hh:mm a')}<br/>
                    <strong>Close Time:</strong> ${this.datePipe.transform(tooltipData?.closeTime, 'MM/dd/yyyy, hh:mm a')}<br/>
                    <strong>Volume:</strong> ${tooltipData?.volume}<br/>
                    <strong>Largest Profit:</strong> ${tooltipData?.profit}<br/>
                  </div>`;
        }
      },
      responsive: [
        {
          breakpoint: 600,
          options: {
            chart: {
              height: 120
            },
            stroke: {
              width: 2
            },
            grid: {
              padding: {
                top: -50,
                bottom: -10
              }
            }
          }
        },
        {
          breakpoint: 768,
          options: {
            chart: {
              height: 130
            },
            grid: {
              padding: {
                top: -60,
                bottom: -15
              }
            }
          }
        }
      ],
      noData: this.chartNoData
    };
  }

  getTopTradeWonChartConfig(data: any) {
    this.chartDataConfig = data;
    const symbolValue = this.chartDataConfig?.data?.symbol || 0;
    const wonValue = this.chartDataConfig?.data == null ? [] : [this.chartDataConfig?.data?.profit || 0];
    const tooltipData = this.chartDataConfig?.data;
    return {
      series: wonValue,
      chart: {
        height: 350,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '60%', // Adjust this percentage to reduce the inner spacing
          },
          track: {
            show: true,
            background: "#F2F4F7",
            strokeWidth: '100%',
          },
          dataLabels: {
            value: {
              fontSize: '25px',
              fontWeight: 600
            },
            total: {
              show: true,
              label: 'Top Won Trade',
              fontWeight: 400,
              formatter: function () {
                return symbolValue;
              },
            }
          }
        },
      },
      stroke: {
        lineCap: 'round', // This enables rounded edges for the bars
      },
      labels: [wonValue.toString()],
      colors: ['#0A365B'],
      tooltip: {
        enabled: true,
        custom: (opts: any) => {
          return `<div style="padding: 5px;">
                    <strong>Direction:</strong> ${tooltipData?.direction}<br/>
                    <strong>Open Time:</strong> ${this.datePipe.transform(tooltipData?.openTime, 'MM/dd/yyyy, hh:mm a')}<br/>
                    <strong>Close Time:</strong> ${this.datePipe.transform(tooltipData?.closeTime, 'MM/dd/yyyy, hh:mm a')}<br/>
                    <strong>Volume:</strong> ${tooltipData?.volume}<br/>
                    <strong>Best Profit:</strong> ${tooltipData?.profit}<br/>
                  </div>`;
        }
      },
      responsive: [
        {
          breakpoint: 600,
          options: {
            chart: {
              height: 120
            },
            stroke: {
              width: 2
            },
            grid: {
              padding: {
                top: -50,
                bottom: -10
              }
            }
          }
        },
        {
          breakpoint: 768,
          options: {
            chart: {
              height: 130
            },
            grid: {
              padding: {
                top: -60,
                bottom: -15
              }
            }
          }
        }
      ],
      noData: this.chartNoData
    };
  }

  getTopTradeLostChartConfig(data: any) {
    this.chartDataConfig = data;
    const symbolValue = this.chartDataConfig?.data?.symbol || 0;
    const LostValue = this.chartDataConfig?.data == null ? [] : [this.chartDataConfig?.data?.profit || 0];
    const tooltipData = this.chartDataConfig?.data;
    return {
      series: LostValue,
      chart: {
        height: 350,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '60%', // Adjust this percentage to reduce the inner spacing
          },
          track: {
            show: true,
            background: "#F2F4F7",
            strokeWidth: '100%',
          },
          dataLabels: {
            value: {
              fontSize: '25px',
              fontWeight: 600
            },
            total: {
              show: true,
              label: 'Top Lost Trade',
              fontWeight: 400,
              formatter: function () {
                return symbolValue;
              },
            }
          }
        },
      },
      stroke: {
        lineCap: 'round', // This enables rounded edges for the bars
      },
      labels: [LostValue.toString()],
      colors: ['#0A365B'],
      tooltip: {
        enabled: true,
        custom: (opts: any) => {
          return `<div style="padding: 5px;">
                    <strong>Direction:</strong> ${tooltipData?.direction}<br/>
                    <strong>Open Time:</strong> ${this.datePipe.transform(tooltipData?.openTime, 'MM/dd/yyyy, hh:mm a')}<br/>
                    <strong>Close Time:</strong> ${this.datePipe.transform(tooltipData?.closeTime, 'MM/dd/yyyy, hh:mm a')}<br/>
                    <strong>Volume:</strong> ${tooltipData?.volume}<br/>
                    <strong>Lost Profit:</strong> ${tooltipData?.profit}<br/>
                  </div>`;
        }
      },
      responsive: [
        {
          breakpoint: 600,
          options: {
            chart: {
              height: 120
            },
            stroke: {
              width: 2
            },
            grid: {
              padding: {
                top: -50,
                bottom: -10
              }
            }
          }
        },
        {
          breakpoint: 768,
          options: {
            chart: {
              height: 130
            },
            grid: {
              padding: {
                top: -60,
                bottom: -15
              }
            }
          }
        }
      ],
      noData: this.chartNoData
    };
  }

  ngOnDestroy() {
    this._webService.unSubscribeOnWebDataChange('ProviderChartsStandaloneComponent')
  }
}


