import { Component, inject, ViewChild } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { ShowErrorStandAloneComponent } from '../../../shared/component/showerror/show.error.standalone.component';
import { AgGridConfig, CommonAgGridStandAloneComponent } from '../../shared/common-ag-grid/common.aggrid.standalone.component';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { WebService } from '../../service/web.service';
import { ActionButtonStanAloneComponent } from '../../shared/cell-renderer/action-button-cell-renderer/action-button-cell-renderer.standalone.component';
import { CommonCellRendererStandAloneComponent } from '../../shared/cell-renderer/common-cell-renderer/common-cell-renderer.standalone.component';
import { StatusBtnRendererStandAloneComponent } from '../../shared/cell-renderer/status-btn-renderer/status-btn-renderer.standalone.component';
import { ArchiveDialog } from '../../shared/dialogBox/archive-dialog/archiveDialog.standalone.component';
import { MatDialog } from '@angular/material/dialog';
import { AddAgentDialog } from '../../shared/dialogBox/add-agent-dialog/addAgentDialog.standalone.component';
import { DeleteOfferDataDialog } from '../../shared/dialogBox/delete-offer-data/deleteOfferDataDialog.standalone.component';
import { AddJoinLInkDialog } from '../../shared/dialogBox/add-join-link-dialog/addJoinLinkDialog.standalone.component';
import { OfferCommonInfoDialog } from '../../shared/dialogBox/offer-common-info-dialog/offerCommonInfoDialog.standalone.component';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.scss',
  standalone: true,
  imports: [CommonModule, RouterModule, CommonAgGridStandAloneComponent, FormsModule, ShowErrorStandAloneComponent, MatMenuModule, TranslateModule, MatSelectModule, MatInputModule, MatCardModule]
})
export class OffersStandALoneComponent {
  agentGridConfig: any = {};
  agentGridData: any = [];
  showAgentGridLoder: boolean = false;

  offerJoinGridConfig: any = {};
  offerJoinGridData: any = [];
  showOfferJoinGridLoder: boolean = false;

  offerId: any;
  offerData: any = {};
  providerId: any;
  providerData: any = {};
  showPageLoader: boolean = false;
  filters: any = { key: '', status: '', agent: '' };

  readonly offerArchiveDialog = inject(MatDialog);
  readonly addAgentDialog = inject(MatDialog);
  readonly offerCommonInfoDialog = inject(MatDialog);

  @ViewChild(ShowErrorStandAloneComponent) errorComponent?: ShowErrorStandAloneComponent;

  constructor(private _webService: WebService, private router: Router, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.offerId = params.get('offerId')!;
      this.setMenuActive();
      this.getAllOfferPageData();
    });
    this._webService.subscribeOnWebDataChange('OffersStandALoneComponent', (event: any) => {
      this.recieveChildrenEmitter(event);
    });
  }

  async getAllOfferPageData() {
    this.showPageLoader = true;
    let result1 = await this.getOfferData();
    let result2 = await this.getProviderData();
    this.setupGridConfig('agents');
    this.setupGridConfig('offerJoin');
    this.showPageLoader = false;
  }

  setMenuActive() {
    setTimeout(() => {
      const providerMenu = document.querySelector("#provider-menu-relative");
      if (providerMenu) {
        providerMenu.classList.add("menu-active");
      }
    }, 500);
  }

  getOfferData() {
    return new Promise<void>((resolve) => {
      let param = { offerId: this.offerId };
      this._webService.getSingleOfferData(param).subscribe({
        next: (response: any) => {
          this.offerData = response;
          this.providerId = this.offerData.providerId;
          this.agentGridData = this.offerData.additionalAgents.chain;
          this.offerJoinGridData = this.offerData.registration.links;
          resolve();
        },
        error: (errorObj: any) => {
          this.showErrorWarnMessage(errorObj?.error?.errorMessage);
          resolve();
        },
        complete: () => {
          resolve();
        }
      })
    })
  }

  getProviderData() {
    return new Promise<void>((resolve) => {
      let param = { providerId: this.providerId };
      this._webService.getSingleProviderData(param).subscribe({
        next: (response: any) => {
          this.providerData = response;
          resolve();
        },
        error: (errorObj: any) => {
          this.showErrorWarnMessage(errorObj?.error?.errorMessage);
          resolve();
        },
        complete: () => {
          resolve();
        }
      })
    })
  }

  setupGridConfig(type: string) {
    if (type == 'agents') {
      let colDefs = this.getGridColDefs(type);
      this.agentGridConfig = this.getCommonGridConfig(colDefs, 'There are no agents');
    } else if (type == 'offerJoin') {
      let colDefs = this.getGridColDefs(type);
      this.offerJoinGridConfig = this.getCommonGridConfig(colDefs, 'There are no join links');
    }
  }

  getCommonGridConfig(colDefs: any, warnMessage: string) {
    let gridConfig: AgGridConfig = {
      maxHeight: '400px',
      noDataWarnMessage: warnMessage,
      gridOptions: {},
      agGridTheme: 'ag-theme-alpine',
      pageSizeDropdownArr: [5, 10, 15],
      initialSelectedPageSize: 5,
      columnDefination: colDefs,
      enablePagination: true,
      headerNameLangArr: colDefs.map((o: any) => o.headerName),
      rowModelType: 'clientSide',
      rowHeight: undefined
    };
    return gridConfig;
  }

  getGridColDefs(gridType: string) {
    if (gridType == 'agents') {
      return [
        { field: "externalAccount", sortable: false, headerName: 'COMMON.Agent', resizable: false },
        { field: "share", sortable: false, headerName: 'PROVIDERS_PROFILE.Share', resizable: false, valueFormatter: (params: any) => `${params.value}%` },
        { field: "actions", headerName: "", sortable: false, cellRenderer: ActionButtonStanAloneComponent, colId: 'agentActionCell', resizable: false },
      ];
    } else if (gridType == 'offerJoin') {
      return [
        { field: "key", headerName: 'COMMON.Key', resizable: false, colId: 'offerKeyCell', cellRenderer: CommonCellRendererStandAloneComponent },
        { field: "expiration", headerName: 'OFFERS.Expiration', resizable: false, colId: 'dateCell', cellRenderer: CommonCellRendererStandAloneComponent },
        { field: "status", sortable: false, headerName: 'COMMON.Status', resizable: false, cellRenderer: StatusBtnRendererStandAloneComponent },
        { field: "agent", headerName: 'COMMON.Agent', resizable: false, valueFormatter: (params: any) => `${params.value ? params.value : '-'}` },
        { field: "actions", headerName: "", sortable: false, cellRenderer: ActionButtonStanAloneComponent, colId: 'offerJoinActionCell', resizable: false },
      ];
    }
    return;
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

  recieveChildrenEmitter(event: any) {
    if(event['action'] == 'redirect_to_provider_page') {
      this.router.navigate([`/portal/providers/${this.offerData.providerId}`]);
    } else if(event['action'] == 'copy_offer_join_link') {
      this.copyOfferJoinLink(event.data);
    } else if(event['action'] == 'refresh_offer_data') {
      this.getOfferData();
    } else if(event['action'] == 'update_agent_data') {
      this.openAddOrUpdateAgentModal(true, event.data);
    } else if(event['action'] == 'delete_agent_data') {
      this.openDeleteOfferDataModal('agent', event.data);
    } else if(event['action'] == 'delete_offer_join_link') {
      this.openDeleteOfferDataModal('joinLink', event.data);
    } else if(event['action'] == 'edit_offer_join_link') {
      this.openAddOrUpdateJoinLinkModal(true, event.data);
    }
  }

  filterJoinLinks(searchKey: string) {
    if (searchKey == 'key') {
      this.offerJoinGridData = this.offerData.registration.links.filter(({key}: any) => key.toLowerCase().includes(this.filters.key.toLowerCase()));
    } else if(searchKey == 'agent') {
      this.offerJoinGridData = this.offerData.registration.links.filter(({agent}: any) => agent == this.filters.agent || this.filters.agent == null );
    } else if(searchKey == 'status') {
      this.filters.status = this.filters.status == "-" ? '' : this.filters.status;
      this.offerJoinGridData = this.offerData.registration.links.filter(({status}: any) => status.toLowerCase().includes(this.filters.status.toLowerCase()));
    }
  }

  copyOfferJoinLink(joindata: any) {
    let joinLink = `${window.location.origin}/portal/registration/subscription/${this.providerData.publicKey}/${joindata.key}`;
    navigator.clipboard.writeText(joinLink).then(() => {
      this.showSuccessPopupMsg("Join link is copied");
    }).catch(err => {
      this.showErrorWarnMessage("Falied to copy Join link");
    });
  }

  openofferArchiveModal() {
    const dialogRef = this.offerArchiveDialog.open(ArchiveDialog, {
      panelClass: 'archive-dialog',
      data: { offerData: this.offerData, modelType: 'offer' }
    });
    dialogRef.afterClosed().subscribe((event) => {
      this.recieveChildrenEmitter(event);
    });
  }

  openAddOrUpdateAgentModal(isUpdate: boolean, offerFormData?: any) {
    const dialogRef = this.addAgentDialog.open(AddAgentDialog, {
      panelClass: 'add-agent-dialog',
      data: { offerData: this.offerData, isUpdate: isUpdate, offerFormData: offerFormData }
    });
    dialogRef.afterClosed().subscribe((event) => {
      this.recieveChildrenEmitter(event);
    });
  }

  openAddOrUpdateJoinLinkModal(isUpdate: boolean, offerJoinLinkData?: any) {
    const dialogRef = this.addAgentDialog.open(AddJoinLInkDialog, {
      panelClass: 'add-join-link-dialog',
      data: { offerData: this.offerData, isUpdate: isUpdate, offerJoinLinkData: offerJoinLinkData }
    });
    dialogRef.afterClosed().subscribe((event) => {
      this.recieveChildrenEmitter(event);
    });
  }

  openDeleteOfferDataModal(modelType: string, modelData: any) {
    const dialogRef = this.addAgentDialog.open(DeleteOfferDataDialog, {
      panelClass: 'delete-offer-dialog',
      data: { offerData: this.offerData, modelType: modelType, modelData: modelData }
    });
    dialogRef.afterClosed().subscribe((event) => {
      this.recieveChildrenEmitter(event);
    });
  }
  
  openOfferCommonInfoDialog(modelType: string) {
    const dialogRef = this.offerCommonInfoDialog.open(OfferCommonInfoDialog,{
      panelClass: 'offer-commonInfo',
      data: { offerData: this.offerData, modelType: modelType }
    });
    dialogRef.afterClosed().subscribe(event => {
      this.recieveChildrenEmitter(event);
    });
  }

  ngOnDestroy() {
    this._webService.unSubscribeOnWebDataChange("OffersStandALoneComponent");
  }
}
