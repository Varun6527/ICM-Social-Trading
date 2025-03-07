import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-status-btn-renderer',
  templateUrl: './status-btn-renderer.component.html',
  styleUrl: './status-btn-renderer.component.scss'
})
export class StatusBtnRendererComponent {
  public params: any;

  agInit(params: ICellRendererParams): void {
    this.params = params;
  }
}
