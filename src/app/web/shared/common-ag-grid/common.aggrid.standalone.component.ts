import { Component, Input} from '@angular/core';
import { ColDef, GridApi, GridOptions, GridReadyEvent, PaginationChangedEvent, SortChangedEvent } from 'ag-grid-community';
import { TranslateService } from '@ngx-translate/core';
import { WebService } from '../../service/web.service';

import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { TranslateModule } from '@ngx-translate/core';

export interface AgGridConfig {
  maxHeight?: string;
  noDataWarnMessage?: string;
  gridOptions: GridOptions | {} | any;
  agGridTheme: string;
  pageSizeDropdownArr?: number[];
  initialSelectedPageSize: number;
  columnDefination: ColDef[] | [];
  enablePagination: boolean | false;
  headerNameLangArr: string[];
}

@Component({
  selector: 'common-ag-grid',
  template: `
  <div class="table">
      <ag-grid-angular *ngIf="!hideAgGrid" class="{{gridConfig.agGridTheme}}" [rowData]="gridData"
          [columnDefs]="gridConfig.columnDefination" [suppressRowHoverHighlight]="true" [pagination]="gridConfig.enablePagination"
          [paginationPageSizeSelector]="gridConfig.pageSizeDropdownArr" [paginationPageSize]="gridConfig.initialSelectedPageSize"
            [overlayNoRowsTemplate]="gridConfig.noDataWarnMessage" [gridOptions]="gridConfig.gridOptions"
            (gridReady)="onGridReady($event)" [loading]="showGridLoader"
            [style.height]="calculatedGridFixedHeight" [style.maxHeight]="gridConfig.maxHeight">
      </ag-grid-angular>
  </div>
  `,
  standalone: true,
  imports: [CommonModule, AgGridModule, TranslateModule]
})
export class CommonAgGridStandAloneComponent {
  @Input() gridConfig!: AgGridConfig;
  @Input() gridData: any;
  @Input() showGridLoader: any;
  hideAgGrid: boolean = false;
  calculatedGridFixedHeight!: string;
  gridApi!: GridApi;
  headerLangKeyArr: any = [];

  constructor(public translate: TranslateService, private _webService: WebService) {
   }

  ngOnInit() {
    this.translateGridDefaultText();
    this.translate.onLangChange.subscribe(() => {
      this.translateGridDefaultText();
    });
  }

  translateGridDefaultText() {
    this.hideAgGrid = true;
    setTimeout(() => {
      this.gridConfig.gridOptions['localeText'] = {
        pageSizeSelectorLabel: this.translate.instant('COMMON.Page Size'),
        to: this.translate.instant('COMMON.to'),
        of: this.translate.instant('COMMON.of'),
        page: this.translate.instant('COMMON.Page')
      };
      this.hideAgGrid = false;
    }, 100);
  }

  setTranslatedGridHeaderText() {
    let colDef: ColDef[] = this.gridConfig.columnDefination;
    colDef.forEach((obj, ind) => {
      let lngKey = this.gridConfig.headerNameLangArr[ind];
      if (!lngKey) return;
      obj.headerName = this.translate.instant(lngKey);
    });
    this.gridApi.setGridOption("columnDefs", this.gridConfig.columnDefination);
  }

  onGridReady(params: GridReadyEvent) {
    const { api } = params;
    this.gridApi = api;
    this.setDynamicDomLayout();
    api.sizeColumnsToFit();
    setTimeout(()=>{
      this.setTranslatedGridHeaderText();
    }, 0);
  }

  setDynamicDomLayout(): void {
    const renderedRowCount: number = this.gridApi.getDisplayedRowCount();
    const maxHeight: number = this.getMaxHeight();
    const size = this.gridApi.getSizesForCurrentTheme();
    const calculatedGridHeight: number = ((renderedRowCount * size.rowHeight) + size.headerHeight);
    if (calculatedGridHeight > maxHeight && renderedRowCount > 0 && maxHeight !== 0) {
      this.gridApi.setGridOption("domLayout", 'normal');
      this.calculatedGridFixedHeight = `${maxHeight}px`;
      this.gridApi.resetRowHeights();
    }
    else {
      this.gridApi.setGridOption("domLayout", 'autoHeight');
      this.gridApi.resetRowHeights();
      this.calculatedGridFixedHeight = 'calc(100% - 46px)';
    }
    this.gridApi.sizeColumnsToFit();
  }

  private getMaxHeight(): number {
    let ele: any = document.querySelector('.ag-theme-alpine');
    const maxHeightStyle: any = window.getComputedStyle(ele).maxHeight;
    if (maxHeightStyle) {
      const maxHeightnumberAndunit: string[] = maxHeightStyle.split('px');
      if (maxHeightnumberAndunit && maxHeightnumberAndunit.length > 0) {
        return +(maxHeightnumberAndunit[0]);
      }
    }
    return 0;
  }
}


