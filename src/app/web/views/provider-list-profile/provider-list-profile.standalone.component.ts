import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ProviderChartsStandaloneComponent } from '../../shared/provider-charts/provider.charts.standalone.component';
import { StatusBtnRendererStandAloneComponent } from '../../shared/cell-renderer/status-btn-renderer/status-btn-renderer.standalone.component';
import { StrategyCellRendererStandAloneComponent } from '../../shared/cell-renderer/strategy-cell-renderer/strategy-cell-renderer.standalone.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { WebService } from '../../service/web.service';
import { CommonAgGridStandAloneComponent } from '../../shared/common-ag-grid/common.aggrid.standalone.component';

@Component({
  selector: 'app-provider-list-profile',
  templateUrl: './provider-list-profile.component.html',
  styleUrl: './provider-list-profile.component.scss',
  standalone: true,
  imports: [CommonModule, ProviderChartsStandaloneComponent, CommonAgGridStandAloneComponent, MatDividerModule, RouterModule, TranslateModule, MatButtonToggleModule, MatCardModule]
})
export class ProviderListProfileStandAloneComponent {
  rowData = [
    {
      id: 1,
      symbol: "Catalog",
      type: 'Buy',
      assetType: "Equity",
      contractSize: "100 units",
      volume: 500,
      openPrice: "$1500",
      openTime: "2023-12-01 10:00",
      profit: "$200",
      strategyIcon: '../../../../assets/icons/providerIcon.jpeg'
    }
  ];

  showGridLoader: boolean = false;
  gridConfig: any = {};
  performanceToggle = 'performance';

  constructor(public translate: TranslateService, private _webService: WebService) {
    this.initialSetupOfProviderListProfilePage();
  }

  async initialSetupOfProviderListProfilePage() {
    this.setupPositionGridConfig();
  }

  setupPositionGridConfig() {
    let colDefs = [
      { field: "symbol", headerName: this.translate.instant('PROVIDERS_LIST_PROFILE.Symbol'), resizable: false, width: 250, suppressSizeToFit: true, cellRenderer: StrategyCellRendererStandAloneComponent },
      { field: "type", headerName:this.translate.instant('PROVIDERS_LIST_PROFILE.Type'), resizable: false, cellRenderer: StatusBtnRendererStandAloneComponent, width: 100, colId : 'ratingType' },
      { field: "assetType", headerName: this.translate.instant('PROVIDERS_LIST_PROFILE.Asset Type'), resizable: false, width: 150 },
      { field: "contractSize", headerName: this.translate.instant('PROVIDERS_LIST_PROFILE.Contract Size'), resizable: false, width: 150 },
      { field: "volume", headerName:this.translate.instant('PROVIDERS_LIST_PROFILE.Volume'), resizable: false, width: 150 },
      { field: "openPrice", headerName: this.translate.instant('PROVIDERS_LIST_PROFILE.Open Price'), resizable: false, width: 150 },
      { field: "openTime", headerName: this.translate.instant('PROVIDERS_LIST_PROFILE.Open Time'), resizable: false, width: 200 },
      { field: "profit", headerName: this.translate.instant('PROVIDERS_LIST_PROFILE.Profit'), resizable: false, width: 150, cellStyle: { color: '#12B76A' } },
    ];
    this.setupGridConfig(colDefs);
  }

  setupGridConfig(colDefs: any) {
    this.gridConfig = {
      maxHeight: '400px',
      noDataWarnMessage: 'There are no providers',
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

  togglePerformance(type: any) {
    this.performanceToggle = type
  }

}
