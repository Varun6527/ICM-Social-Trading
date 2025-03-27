import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { TypeIconComponent } from './cellRenderers/type-icon/type-icon.component';
import { StrategyCellRendererComponent } from './cellRenderers/strategy-cell-renderer/strategy-cell-renderer.component';
import { RiskCellRendererComponent } from './cellRenderers/risk-cell-renderer/risk-cell-renderer.component';
import { ChartCellRendererComponent } from './cellRenderers/chart-cell-renderer/chart-cell-renderer.component';
import { ButtonCellRendererComponent } from './cellRenderers/button-cell-renderer/button-cell-renderer.component';
import { ConstantVariable } from '../../../shared/model/constantVariable.model';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { AgGridModule } from 'ag-grid-angular';
import { TranslateModule } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-providers-list',
  templateUrl: './providers-list.component.html',
  styleUrl: './providers-list.component.scss',
  standalone: true,
  imports: [NgApexchartsModule, CommonModule, RouterModule, MatCardModule, MatTabsModule, MatInputModule, AgGridModule, TranslateModule]
})
export class ProvidersListStanAloneComponent {
  rowData = [
    {
      id: 1,
      strategy: "Catalog",
      investors: 1,
      invested: "$500",
      ownFunds: "$2200",
      drawdown: "54.5%",
      fee: "50%",
      risk: "High",
      chart: "Bar",
      strategyIcon: '../../../../assets/icons/providerIcon.jpeg'
    }
  ];
  selectedTabIndex: number = 0;
  tabLabels: any = [];
  colDefs: ColDef[] = []

  chartOptions: any;
  viewMode: any;
  ratingsData = Array(1).fill(0);

  IConstant: ConstantVariable = new ConstantVariable();
  constructor() {
    this.intialSetup();
  }

  intialSetup() {
    this.getAllDataRelatedToProviderListPage();
    this.setInitialPageData();
  }

  getAllDataRelatedToProviderListPage() {

  }

  setInitialPageData() {
    this.initializeTabLabels();
    this.initializeColDefs();

    this.chartOptions = this.IConstant.getProviderListPageChartConfig([15, 23, 18, 32, -10, 44, 70, 67, 20]);
    this.switchMode("cards");
  }

  onTabChange(event: any) {
    this.selectedTabIndex = event.index;
  }

  initializeColDefs() {
    this.colDefs = [
      { field: "strategy", headerName: 'PROVIDERS_LIST.Title', resizable: false, width: 250, suppressSizeToFit: true, cellRenderer: StrategyCellRendererComponent },
      { field: "type", headerName: 'PROVIDERS_LIST.Type', resizable: false, cellRenderer: TypeIconComponent, width: 100 },
      { field: "investors", headerName: 'PROVIDERS_LIST.Investors', resizable: false, width: 150 },
      { field: "invested", headerName: 'PROVIDERS_LIST.Invested', resizable: false, width: 150 },
      { field: "ownFunds", headerName: 'PROVIDERS_LIST.Own Funds', resizable: false, width: 150 },
      { field: "drawdown", headerName: 'PROVIDERS_LIST.Drawdown', resizable: false, width: 150 },
      { field: "fee", headerName: 'PROVIDERS_LIST.Fee', resizable: false, width: 150 },
      { field: "risk", headerName: 'PROVIDERS_LIST.Risk', resizable: false, cellRenderer: RiskCellRendererComponent, width: 150 },
      { field: "chart", headerName: 'PROVIDERS_LIST.Chart', resizable: false, cellRenderer: ChartCellRendererComponent, width: 200, headerClass: 'chartHeader' },
      { field: "action", headerName: '', resizable: false, cellRenderer: ButtonCellRendererComponent, width: 150, cellStyle: { 'padding-left': '40px' }, },
    ];
  }
  initializeTabLabels() {
    this.tabLabels = [
      { name: 'all', label: 'PROVIDERS_LIST.All' },
      { name: 'watchlist', label: 'PROVIDERS_LIST.Watchlist' },
      { name: 'mostPopular', label: 'PROVIDERS_LIST.Most Popular' },
      { name: 'mostActive', label: 'PROVIDERS_PROFILE.Most Active' },
      { name: 'highWinRatio', label: 'PROVIDERS_LIST.High Win Ratio' },
      { name: 'lowFees', label: 'PROVIDERS_LIST.Low Fees' },
    ];
  }

  switchMode(type: any) {
    this.viewMode = type
  }
}
