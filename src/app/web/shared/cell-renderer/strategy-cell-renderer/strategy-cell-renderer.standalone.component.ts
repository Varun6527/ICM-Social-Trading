import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-strategy-cell-renderer',
  template: `
    <a [routerLink]="'/portal/ratings/'+params.data.accountId" class="default-link">
      <div class="d-flex align-center">
          <img height="40" width="40" [src]="params.data.avatarPath" [alt]="params.value" class="strategy-icon" />
        <div>
            <span>{{ params.value }}</span> 
        </div>
      </div>
    </a>
  `,
  styles: `
    .strategy-icon {
      border-radius: 100%;
      margin-right: 10px;
    }
  `,
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class StrategyCellRendererStandAloneComponent {

  params: any;

  // This method is required for ag-Grid to pass parameters to the component
  agInit(params: any): void {
    this.params = params;
  }

  refresh(params: any): boolean {
    this.params = params;
    return true;
  }

}
