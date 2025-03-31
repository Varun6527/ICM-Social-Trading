import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke, ApexFill,
  NgApexchartsModule
} from "ng-apexcharts"
import { ConstantVariable } from '../../../../shared/model/constantVariable.model';

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
};

@Component({
  selector: 'app-chart-cell-renderer',
  template: `
    <div class="d-flex justify-center align-center">
      <apx-chart
        [series]="[{name: 'Dataset 1',data: this.params?.value}]"
        [chart]="chartOptions.chart"
        [xaxis]="chartOptions.xaxis"
        [stroke]="chartOptions.stroke"
        [tooltip]="chartOptions.tooltip"
        [yaxis]="chartOptions.yaxis"
        [grid]="chartOptions.grid"
        [dataLabels]="chartOptions.dataLabels"
        [fill]="chartOptions.fill"
        [colors]="chartOptions.colors"
        [labels]="chartOptions.labels"
        [legend]="chartOptions.legend"
          ></apx-chart>
    </div>
  `,
  standalone: true,
  imports: [CommonModule, NgApexchartsModule]
})

export class ChartCellRendererStandAloneComponent {

  public chartOptions!: Partial<ChartOptions> | any;
  IConstantVariable: ConstantVariable = new ConstantVariable();

  constructor() {}

  params: any;

  // This method is required for ag-Grid to pass parameters to the component
  agInit(params: any): void {
    this.params = params;
    this.chartOptions = this.IConstantVariable.getProviderLineChart();
  }

  refresh(params: any): boolean {
    this.params = params;
    return true
  }

}
