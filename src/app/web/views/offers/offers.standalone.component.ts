import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { AgGridAngular, AgGridModule } from "ag-grid-angular";
import { ColDef } from "ag-grid-community";
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ActionButtonStanAloneComponent } from '../../shared/action-button/action-button.standalone.component';
import { StatusBtnRendererComponent } from '../../shared/status-btn-renderer/status-btn-renderer.component';
import { ProviderCommonInfoDialog } from '../../shared/dialogBox/provider-common-info-dialog/providerCommonInfoDialog.standalone.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.scss', 
  standalone: true,
  imports: [CommonModule, AgGridModule, MatMenuModule, MatTabsModule, TranslateModule, MatSelectModule, MatInputModule, MatCardModule]
})
export class OffersStandALoneComponent {

  readonly commonInfoDialog = inject(MatDialog);

  OffersRows =   [
    { Id:1, key: "ABCD1234", expiration: "10/30/2024", status: 'Active', agent: "test" },
  ]

  OffersCols: ColDef[] = [
    { field: "key" , headerName:'Key',resizable: false ,width: 200},
    { field: "expiration" , headerName : 'Expiration',resizable: false,width: 200},
    { field: "status" ,headerName:'Status',resizable: false,width: 200, cellRenderer:StatusBtnRendererComponent,cellStyle: {display: 'flex', 'justify-content': 'center','align-items':'center'},headerClass: 'subs-status-header'},
    { field: "agent",headerName:'Agent' ,resizable: false,width: 150 },
    {
      field: "actions",
      headerName: "",
      cellRenderer: ActionButtonStanAloneComponent,flex:1
    },
  ];

  agentsRows =   [
  ]

  agentsCols: ColDef[] = [
  ];

  openCommonInfoDialog(){
    const dialogRef = this.commonInfoDialog.open(ProviderCommonInfoDialog,{
      panelClass: 'providerProfile-commonInfo'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
