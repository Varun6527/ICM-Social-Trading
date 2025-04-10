import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { WebService } from '../../service/web.service';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
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
  constructor(public translate: TranslateService, private _webService: WebService) {
    this._webService.subscribeOnWebDataChange('ProviderChartsStandaloneComponent', (event: any)=>{
      this.setupChartsConfig(event);
    })
  }

  ngOnInit() {
    this.setupChartsConfig({});
  }

  resetChartDataConfig() {
    this.chartDataConfig = {data: [], type: ''};
  }


  setupChartsConfig(event: any) {
    if (event.action == 'onAssestMetricChange' && this.chartType == 'assestChart') {
      this.resetChartDataConfig();
      this.chartOptions = this.getAssestChartConfig(event.data);
    } else if (event.action == 'onMonthlyMetricChange' && this.chartType == 'monthlyDetailsChart') {
      this.resetChartDataConfig();
      this.chartOptions = this.getMonthlyDetailsChartConfig(event.data);
    } else if (this.chartType == 'areaChart') {
      this.chartOptions = this.getAreaChartConfig();
    } else if (this.chartType == 'pieChart') {
      this.chartOptions = this.getPieChartConfig();
    } else if (this.chartType == 'riskStackedChart') {
      this.chartOptions = this.getRiskStackedChartConfig();
    } else if (this.chartType == 'portfolioChartOptions1') {
      this.chartOptions = this.getPortfolioChartOptions1Config();
    } else if (this.chartType == 'portfolioChartOptions2') {
      this.chartOptions = this.getPortfolioChartOptions2Config();
    } else if (this.chartType == 'portfolioChartOptions3') {
      this.chartOptions = this.getPortfolioChartOptions3Config();
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
            size: '45%', 
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
                return totalCount;
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

  getAreaChartConfig() {
    return {
      series: [{
        name: "STOCK ABC",
        data: [80, 76, 73, 80, 78, 80, 87, 88, 90, 93, 95, 97]
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
    };
  }

  getPieChartConfig() {
    return {
      series: [42],
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
              formatter: function (w: any) {
                return 121;
              },
            }
          }
        },
      },
      stroke: {
        lineCap: 'round', // This enables rounded edges for the bars
      },
      labels: ['Apples'],
      colors: ['#0A365B'],
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
      ]
    };
  }

  getRiskStackedChartConfig() {
    return {
      series: [
        {
          name: '2019',
          data: [44, 55, 41, 67, 22, 43, 56, 78, 34, 23, 45, 67] // Data for 12 months
        },
        {
          name: '2020',
          data: [13, 23, 20, 8, 13, 27, 29, 41, 34, 22, 31, 14] // Data for 12 months
        },
        {
          name: '2021',
          data: [11, 17, 15, 15, 21, 14, 19, 25, 18, 12, 20, 16] // Data for 12 months
        }
      ],
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
      }
    };
  }

  getPortfolioChartOptions1Config() {
    return {
      series: [84, 80, 67],
      chart: {
        height: 350,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '45%', // Adjust this percentage to reduce the inner spacing
          },
          track: {
            show: true,
            background: "#F2F4F7",
            strokeWidth: '100%',
            margin: 5, // Space between bars
          },
          dataLabels: {
            name: {
              fontSize: '25px',
            },
            value: {
              fontSize: '25px',
              fontWeight: 500
            },
            total: {
              show: true,
              label: 'Top Traded',
              fontWeight: 400,
              formatter: function (w: any) {
                return 316;
              },
            }
          },
        },
      },
      stroke: {
        lineCap: 'round', // This enables rounded edges for the bars
      },
      labels: ['Gold', 'GER40Cash', 'US100Cash'],
      colors: ['#0A365B', '#146BB2', '#00D2FF'],
      legend: {
        show: true,
        position: 'bottom', // Position at the bottom
        horizontalAlign: 'center', // Center align the legend
        offsetY: -30
      },
      responsive: [
        {
          breakpoint: 600,
          options: {
            chart: {
              height: 120
            },
            legend: {
              fontSize: '12px', // Adjust legend font size for smaller screens
              position: 'bottom',
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
      ]
    };
  }

  getPortfolioChartOptions2Config() {
    return {
      series: [84, 80, 67],
      chart: {
        height: 350,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '45%', // Adjust this percentage to reduce the inner spacing
          },
          track: {
            show: true,
            background: "#F2F4F7",
            strokeWidth: '100%',
            margin: 5, // Space between bars
          },
          dataLabels: {
            name: {
              fontSize: '25px',
            },
            value: {
              fontSize: '25px',
              fontWeight: 500
            },
            total: {
              show: true,
              label: 'Top Winner',
              fontWeight: 400,
              formatter: function (w: any) {
                return 316;
              },
            }
          },
        },
      },
      stroke: {
        lineCap: 'round', // This enables rounded edges for the bars
      },
      labels: ['Gold', 'GER40Cash', 'US100Cash'],
      colors: ['#0A365B', '#146BB2', '#00D2FF'],
      legend: {
        show: true,
        position: 'bottom', // Position at the bottom
        horizontalAlign: 'center', // Center align the legend
        offsetY: -30
      },
      responsive: [
        {
          breakpoint: 600,
          options: {
            chart: {
              height: 120
            },
            legend: {
              fontSize: '12px', // Adjust legend font size for smaller screens
              position: 'bottom',
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
      ]
    };
  }

  getPortfolioChartOptions3Config() {
    return {
      series: [84, 80, 67],
      chart: {
        height: 350,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '45%', // Adjust this percentage to reduce the inner spacing
          },
          track: {
            show: true,
            background: "#F2F4F7",
            strokeWidth: '100%',
            margin: 5, // Space between bars
          },
          dataLabels: {
            name: {
              fontSize: '25px',
            },
            value: {
              fontSize: '25px',
              fontWeight: 500
            },
            total: {
              show: true,
              label: 'Top Traded',
              fontWeight: 400,
              formatter: function (w: any) {
                return 316;
              },
            }
          },
        },
      },
      stroke: {
        lineCap: 'round', // This enables rounded edges for the bars
      },
      labels: ['Gold', 'GER40Cash', 'US100Cash'],
      colors: ['#0A365B', '#146BB2', '#00D2FF'],
      legend: {
        show: true,
        position: 'bottom', // Position at the bottom
        horizontalAlign: 'center', // Center align the legend
        offsetY: -30
      },
      responsive: [
        {
          breakpoint: 600,
          options: {
            chart: {
              height: 120
            },
            legend: {
              fontSize: '12px', // Adjust legend font size for smaller screens
              position: 'bottom',
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
      ]
    };
  }

  ngOnDestroy() {
    this._webService.unSubscribeOnWebDataChange('ProviderChartsStandaloneComponent')
  }
}


