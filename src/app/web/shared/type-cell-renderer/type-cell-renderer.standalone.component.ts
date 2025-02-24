import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'status-cell-renderer',
  standalone: true,
  template:`
    <div class="tag {{ value }}Tag">
      <span>{{ value }}</span>
    </div>
  `,
  styles: `
    .tag {
    border-radius: 8px;
    line-height: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    background: var(--primary-light-positive-color);
    color: var(--primary-positive-color);
    font-size:13px;
    font-weight: 400;
  }

  .activeTag {
    background-color: #84ca8130;
    border: 1.5px solid rgb(70, 227, 114, 0.2);
  }

  .outOfStockTag {
    background-color: rgb(255, 0, 0, 0.05);
    color: rgb(234, 83, 83);
    border: 1.5px solid rgb(255, 0, 0, 0.3);
  }

  .pausedTag {
    background-color: #caab7036;
  }

  .activeCircle {
    background-color: #6d9b7e;
  }

  .outOfStockCircle {
    background-color: #ea5353;
  }

  .pausedCircle {
    background-color: #a06d37;
  }
  `
})
export class TypeCellRendererStandAloneComponent implements ICellRendererAngularComp {
  public value: string = '';
  public valueFormatted: string = '';

  agInit(params: ICellRendererParams): void {
    this.value = params.value;
    this.valueFormatted = params.valueFormatted!;
  }

  refresh(params: ICellRendererParams): boolean {
    this.value = params.value;
    this.valueFormatted = params.valueFormatted!;
    return true;
  }
}