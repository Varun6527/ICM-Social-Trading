import { Component, ViewChild } from '@angular/core';
import { ColDef } from "ag-grid-community";
import { CommonCellRendererStandAloneComponent } from '../../shared/cell-renderer/common-cell-renderer/common-cell-renderer.standalone.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { AgGridConfig, CommonAgGridStandAloneComponent } from '../../shared/common-ag-grid/common.aggrid.standalone.component';
import { IcmDateRangePickerStandAloneComponent } from '../../shared/icm-date-ranger-picker/icm.date.range.picker.standalone.component';
import { WebService } from '../../service/web.service';
import { ConstantVariable } from '../../../shared/model/constantVariable.model';
import { ShowErrorStandAloneComponent } from '../../../shared/component/showerror/show.error.standalone.component';
import { ProvidersEarningModal, ProvidersOffersModal, FeesModal, PublishPostionModal, CopiedPostionModal } from '../../shared/ui-model/web.ui.model';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss',
  standalone: true,
  imports: [CommonModule, ShowErrorStandAloneComponent, TranslateModule, MatCardModule, MatTabsModule, CommonAgGridStandAloneComponent, IcmDateRangePickerStandAloneComponent]
})
export class ReportsStandAloneComponent {
  isProvider: boolean = false;
  isFollower: boolean = false;
  tabArrConfig: any = [];
  constantVariable: any = new ConstantVariable();
  indexEnum: any = {
    provider: {
      'earning': 0,
      'fees': 1,
      'trading': 2
    }
  }

  tabTypeEnum: any = {
    provider: {
      '0': 'earning',
      '1': 'fees',
      '2': 'trading'
    }
  }
  
  currentSelectedTabIndx!: number;
  @ViewChild(ShowErrorStandAloneComponent) errorComponent?: ShowErrorStandAloneComponent;

  constructor(public translate: TranslateService, private _webService: WebService) {
    this.isProvider = this._webService.isProviderAccount;
    this.isFollower = this._webService.isSubscriptionAccount;
    this.setUpReportsTabs();
    this.goToSelectedIndex(this.indexEnum.provider['earning']);
  }

  goToSelectedIndex(index: any) {
    this.currentSelectedTabIndx = index;
  }

  getCommonGridConfig(colDefs: any, reportType: any) {
    let gridConfig: AgGridConfig = {
      maxHeight: '400px',
      noDataWarnMessage: 'There is no report data for the specified period',
      gridOptions: {},
      agGridTheme: 'ag-theme-alpine',
      pageSizeDropdownArr: [25, 50, 100],
      initialSelectedPageSize: 25,
      columnDefination: colDefs,
      enablePagination: true,
      headerNameLangArr: colDefs.map((o: any) => o.headerName),
      rowModelType: 'clientSide',
      rowHeight: reportType == 'fees' ? 70 : undefined
    };
    return gridConfig;
  }

  setUpReportsTabs() {
    if(this.isProvider) {
      this.tabArrConfig = this.getProviderReportsTabsConfig();
    } else if(this.isFollower) {
      this.tabArrConfig = this.getFollowerReportsTabsConfig();
    }
  }

  getProviderReportsTabsConfig() {
    let arr = [];
    arr.push(
      this.getEarningsTabConfigObj(),
      this.getFeesTabConfigObj(),
      this.getTradingTabConfigObj()
    );
    return arr;
  }

  getFollowerReportsTabsConfig() {
    let arr = [];
    arr.push(
      this.getFeesTabConfigObj(),
      this.getCopiedPositionConfigObj()
    );
    return arr;
  }

  getEarningsTabConfigObj() {
    return {
      label: 'REPORTS.Earnings',
      tabIndex: 0,
      reportsArr: [
        this.getProviderEarningReportsConfig(),
        this.getOfferReportConfig()
      ]
    }
  }

  getFeesTabConfigObj() {
    return {
      label: 'REPORTS.Fees',
      tabIndex: this.isProvider ? 1 : 0,
      reportsArr: [
        this.getFeesReportsConfig()
      ]
    }
  }

  getTradingTabConfigObj() {
    return {
      label: 'REPORTS.Trading',
      tabIndex: 2,
      reportsArr: [
        this.getPublishedPositionReportsConfig()
      ]
    }
  }

  getCopiedPositionConfigObj() {
    return {
      label: 'REPORTS.Trading',
      tabIndex: 1,
      reportsArr: [
        this.getCopiedPositionReportsConfig()
      ]
    }
  }

  getProviderEarningReportsConfig() {
    let providerColDef = this.getGridColDefs('provider');
    return {
      title: "REPORTS.Providers Report",
      description: "REPORTS.Report on earnings of providers",
      showProviderFilter: false,
      defaultDateRange: "Last 7 days",
      grid: {
        apiUrl: this.constantVariable.http_Api_Url.reports.provider,
        colDef: providerColDef,
        config: this.getCommonGridConfig(providerColDef, 'provider'),
        data: [],
        showLoader: false,
        filterData: { startDate: "", endDate: "" },
        uiModel: ProvidersEarningModal
      }
    }
  }

  getOfferReportConfig() {
    let offerColDef = this.getGridColDefs('offers');
    return {
      title: "REPORTS.Offers Report",
      description: "REPORTS.Report on earnings of providers per offer",
      showProviderFilter: false,
      defaultDateRange: "Last 7 days",
      grid: {
        apiUrl: this.constantVariable.http_Api_Url.reports.offers,
        colDef: offerColDef,
        config: this.getCommonGridConfig(offerColDef, 'offers'),
        data: [],
        showLoader: false,
        filterData: { startDate: "", endDate: "" },
        uiModel: ProvidersOffersModal
      }
    }
  }

  getFeesReportsConfig() {
    let feesColDef = this.getGridColDefs('fees');
    return {
      title: `${this.isProvider ? 'REPORTS.Received fees' : 'HOME.Paid Fees'}`,
      description: `${this.isProvider ?  "REPORTS.The list of fee payments received by your providers during the specified period" : 'REPORTS.FeesTitleForSubscriber'}`,
      showProviderFilter: false,
      defaultDateRange: "Last 7 days",
      grid: {
        apiUrl: `${this.isProvider ? this.constantVariable.http_Api_Url.reports.recieved_Fees : this.constantVariable.http_Api_Url.reports.paid_Fees }`,
        colDef: feesColDef,
        config: this.getCommonGridConfig(feesColDef, 'fees'),
        data: [],
        showLoader: false,
        filterData: { startDate: "", endDate: "" },
        uiModel: FeesModal
      }
    }
  }

  getPublishedPositionReportsConfig() {
    let publishColDef = this.getGridColDefs('publishing');
    return {
      title: "REPORTS.Published Positions Report",
      description: "REPORTS.Report on positions published by providers",
      showProviderFilter: false,
      defaultDateRange: "Last 7 days",
      grid: {
        apiUrl: this.constantVariable.http_Api_Url.reports.published,
        colDef: publishColDef,
        config: this.getCommonGridConfig(publishColDef, 'publishing'),
        data: [],
        showLoader: false,
        filterData: { startDate: "", endDate: "" },
        uiModel: PublishPostionModal
      }
    }
  }

  getCopiedPositionReportsConfig() {
    let publishColDef = this.getGridColDefs('copied');
    return {
      title: "REPORTS.Copied Positions Report",
      description: "REPORTS.DescriptionOfCopiedPostionReport",
      showProviderFilter: false,
      defaultDateRange: "Last 7 days",
      grid: {
        apiUrl: this.constantVariable.http_Api_Url.reports.copied_Position,
        colDef: publishColDef,
        config: this.getCommonGridConfig(publishColDef, 'copied'),
        data: [],
        showLoader: false,
        filterData: { startDate: "", endDate: "" },
        uiModel: CopiedPostionModal
      }
    }
  }

  getGridData(reportConfigObj: any) {
    let reportConfig = reportConfigObj.grid
    reportConfig.showLoader = true;
    let param = {
      startDate: this.convertToGMTFormat(reportConfig.filterData['startDate'], false),
      endDate: this.convertToGMTFormat(reportConfig.filterData['endDate'], true),
      filterType: 'All',
      needCount: true
    }
    this._webService.getCommonReportsData(reportConfig.apiUrl, param).subscribe({
      next: (response: any) => {
        let arr: any = [];
        response.items.forEach((obj: any) => arr.push(new reportConfig.uiModel(obj)));
        reportConfig.data = arr;
        reportConfig.showLoader = false;
      },
      error: (errorObj: any) => {
        this.showErrorWarnMessage(errorObj?.error?.errorMessage);
        reportConfig.showLoader = false;
      }
    })
  }

  onTabChange(event: any) {
    let tabName = this.tabTypeEnum.provider[event.index];
    this.goToSelectedIndex(this.indexEnum.provider[tabName]);
  }

  getGridColDefs(gridType: string) {
    if(gridType == 'provider') {
      return [
        { field: "nickName" , headerName:'REPORTS.Nickname',resizable: false , suppressSizeToFit: true,cellRenderer: CommonCellRendererStandAloneComponent,colId: 'providerProfileRedirection',flex:1},
        { field: "amount" , headerName : 'REPORTS.Amount',resizable: false,flex:1, suppressSizeToFit: true},
      ];
    } else if(gridType == 'offers') {
      return [
        { field: "offerTitle" , headerName : 'REPORTS.Title',resizable: false,flex:1,cellRenderer: CommonCellRendererStandAloneComponent, colId: 'providerOfferRedirection', suppressSizeToFit: true},
        { field: "nickName" , headerName:'REPORTS.Nickname',resizable: false , suppressSizeToFit: true,flex:1},
        { field: "amount" ,headerName:'REPORTS.Amount',resizable: false,flex:1, suppressSizeToFit: true},
      ]
    } else if(gridType == 'fees') {
      return [
        { field: "name" , headerName:'REPORTS.Name',resizable: false , suppressSizeToFit: true,cellRenderer: CommonCellRendererStandAloneComponent,flex:1, colId: 'subscriptionRedirection'},
        { field: "providerFeesObj" , headerName : 'REPORTS.Fees',resizable: false,flex:1, suppressSizeToFit: true, cellRenderer: CommonCellRendererStandAloneComponent, colId: 'providerFees'},
        { field: "amount" ,headerName:'REPORTS.Amount',resizable: false,flex:1, suppressSizeToFit: true},
      ]
    } else if(gridType == 'publishing') {
      return [
        { field: "nickName" , headerName:'REPORTS.Nickname',resizable: false , suppressSizeToFit: true,cellRenderer: CommonCellRendererStandAloneComponent,flex:1, colId: 'providerProfileRedirection'},
        { field: "count" , headerName :'REPORTS.Count',resizable: false,flex:1},
      ]
    } else if(gridType == 'copied') {
      return [
        { field: "name" , headerName:'REPORTS.Name',resizable: false , suppressSizeToFit: true,cellRenderer: CommonCellRendererStandAloneComponent,flex:1, colId: 'subscriptionRedirection'},
        { field: "count" , headerName :'REPORTS.Count',resizable: false,flex:1},
      ]
    }
    return;
  }

  recieveChildrenEmitter(event: any, reportObj: any) {
    if(event['action'] == 'on_date_range_change') {
      reportObj.grid.filterData.startDate = event['startDate'];
      reportObj.grid.filterData.endDate = event['endDate'];
      this.getGridData(reportObj);
    }
  }

  showErrorWarnMessage(msg: any) {
    const errorConfigObj = this.errorComponent?.config;
    errorConfigObj.message = msg ? msg : errorConfigObj.message;
    this.errorComponent?.openErrorSnackbar();
  }

  convertToGMTFormat(date: Date, isEndDate: boolean) {
    const dates = new Date(date);
    isEndDate ? dates.setUTCHours(23, 59, 59, 999) : dates.setUTCHours(0, 0, 0, 0);
    return dates.toUTCString();
  }

  refreshGrid(reportObj: any) {
    this.getGridData(reportObj);
  }
}
