import { Component, inject, ViewChild } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ProviderChartsStandaloneComponent } from '../../shared/provider-charts/provider.charts.standalone.component';
import { StatusBtnRendererStandAloneComponent } from '../../shared/cell-renderer/status-btn-renderer/status-btn-renderer.standalone.component';
import { StrategyCellRendererStandAloneComponent } from '../../shared/cell-renderer/strategy-cell-renderer/strategy-cell-renderer.standalone.component';
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

@Component({
  selector: 'app-provider-list-profile',
  templateUrl: './provider-list-profile.component.html',
  styleUrl: './provider-list-profile.component.scss',
  standalone: true,
  imports: [CommonModule, ProviderChartsStandaloneComponent, CommonAgGridStandAloneComponent, MatDividerModule, RouterModule, TranslateModule, MatButtonToggleModule, MatCardModule, ShowErrorStandAloneComponent]
})
export class ProviderListProfileStandAloneComponent {
  showGridLoader: boolean = false;
  ratingData :any = {};
  offerData: any = {};
  gridConfig: any = {};
  gridData: any = [];
  performanceToggle = 'performance';
  showPageLoader: boolean = false;
  widget_key: string = "";
  accountId: any;
  ratingId: any;

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
  }

  getPositionData() {
    this.showGridLoader = true;
    let param = {
      providerId: this.ratingData.profileId,
      $count: true
    }
    this._webService.getPositionDetails(param).subscribe({
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
      { field: "openDirection", headerName:'PROVIDERS_LIST_PROFILE.Type', resizable: false, cellRenderer: StatusBtnRendererStandAloneComponent, width: 100, colId : 'ratingType' },
      { field: "openVolume", headerName: 'PROVIDERS_LIST_PROFILE.Contract Size', resizable: false, width: 150 },
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

  togglePerformance(type: any) {
    this.performanceToggle = type
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
