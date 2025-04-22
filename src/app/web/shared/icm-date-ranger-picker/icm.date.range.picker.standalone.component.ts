import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatDatepickerModule, MatDateRangePicker } from '@angular/material/datepicker';
import { TranslateModule } from '@ngx-translate/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-icm-date-range-picker',
  template: `
    <div class="d-flex align-center flex-wrap">
        <button class="secondary-btn datepicker-menu" [matMenuTriggerFor]="dateActions">
            {{("REPORTS." + selectedDateRange) |translate}}
        </button>
        <mat-menu #dateActions="matMenu" class="dateActions-menu">
            <button mat-menu-item (click)="selectDateRange('Last month')">{{"REPORTS.Last month"|translate}}</button>
            <button mat-menu-item (click)="selectDateRange('Last 7 days')">{{"REPORTS.Last 7 days"|translate}}</button>
            <button mat-menu-item (click)="selectDateRange('Current month')">{{"REPORTS.Current month"|translate}}</button>
            <button mat-menu-item (click)="selectDateRange('Today')">{{"REPORTS.Today"|translate}}</button>
            <button mat-menu-item (click)="selectDateRange('Custom')">{{"REPORTS.Custom"|translate}}</button>
        </mat-menu>
        <div>
            <mat-form-field class="datepicker-filter" (click)="rangePicker.open()">
            <mat-date-range-input [rangePicker]="rangePicker">
                <input matStartDate placeholder="Start date" [value]="startDate" readonly #dateRangeStart />
                <input matEndDate placeholder="End date" [value]="endDate" readonly #dateRangeEnd (dateChange)="triggerDateRangeChange(dateRangeStart, dateRangeEnd)" />
            </mat-date-range-input>
            <mat-datepicker-toggle matIconSuffix [for]="rangePicker"></mat-datepicker-toggle>
            <mat-date-range-picker #rangePicker></mat-date-range-picker>
            </mat-form-field>
        </div>            
    </div>
  `,
  styles: `
        ::ng-deep .dateActions-menu .mat-mdc-menu-panel{
            background-color: white !important;
        }
        ::ng-deep .dateActions-menu .mat-mdc-menu-content {
            background-color: white !important;
        }
        ::ng-deep .dateActions-menu .mat-mdc-menu-item{
            padding-left: 20px;
            padding-right: 20px;
            .mat-mdc-menu-item-text{
                font-size: 17px !important;
                display: flex;
                gap: 20px;
                align-items: center;
            }
        }
        ::ng-deep .datepicker-filter {
            .mat-mdc-text-field-wrapper{
            border: 1px solid #D0D5DD;
            border-left: 0px;
            border-top-left-radius: 0px;
            border-bottom-left-radius: 0px;
            justify-content: center;
            border-top-right-radius: 8px;
            border-bottom-right-radius: 8px;
            height: 56px;
            background-color: white !important;
                .mdc-line-ripple{
                    display: none !important;
                }
            }
            .mat-mdc-form-field-subscript-wrapper {
                display: none !important;
            }
        }

        .datepicker-menu{
            border-top-right-radius: 0px;
            border-bottom-right-radius: 0px;
        }

        ::ng-deep .mat-datepicker-content-container {
            background: white;
            border: 1px solid #D0D5DD;
        }

        
        ::ng-deep .d-flex.align-center.flex-wrap {
          @media screen and (max-width: 455px) {
            gap: 20px;
            .datepicker-menu {
              border-radius: 8px !important;;
            }
            .datepicker-filter .mat-mdc-text-field-wrapper {
              border-radius: 8px !important;
            }
          }
        }

  `,
  standalone: true,
  imports: [MatMenuModule, MatDatepickerModule, TranslateModule, MatFormFieldModule]
})
export class IcmDateRangePickerStandAloneComponent {
  @ViewChild('rangePicker') rangePicker!: MatDateRangePicker<Date>;
  @Output() emitToParent: any = new EventEmitter<any>();
  @Input() defaultDateRange: string = 'Last 7 days';

  selectedDateRange: string = '';
  startDate!: Date;
  endDate!: Date;

  constructor() {
  }

  ngOnInit() {
    this.selectDateRange(this.defaultDateRange);
  }

  triggerDateRangeChange(dateRangeStart: any, dateRangeEnd: any) {
    if(dateRangeStart.value && dateRangeEnd.value) {
        if(typeof dateRangeStart.value == 'string') {
            this.startDate = new Date(dateRangeStart.value);
        }
        if(typeof dateRangeEnd.value == 'string') {
            this.endDate = new Date(dateRangeEnd.value);
        }
        this.emitToParent.emit({action: 'on_date_range_change', startDate: this.startDate, endDate: this.endDate});
    }
  }

  selectDateRange(range: string) {
    const today = new Date();
    if(this.selectedDateRange == range) return;
    this.selectedDateRange = range;
    if (range === 'Last month') {
      const firstDayLastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
      const lastDayLastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      this.startDate = firstDayLastMonth;
      this.endDate = lastDayLastMonth;
      this.triggerDateRangeChange({value: firstDayLastMonth}, {value: lastDayLastMonth});
    } else if (range === 'Last 7 days') {
      this.setLast7Days();
      this.triggerDateRangeChange({value: this.startDate}, {value: this.endDate});
    } else if (range === 'Current month') {
      this.startDate = new Date(today.getFullYear(), today.getMonth(), 1);
      this.endDate = today;
      this.triggerDateRangeChange({value: this.startDate}, {value: this.endDate});
    } else if (range === 'Today') {
      this.startDate = today;
      this.endDate = today;
      this.triggerDateRangeChange({value: this.startDate}, {value: this.endDate});
    } else if (range === 'Custom') {
      // Set start and end dates to today
      this.startDate = today;
      this.endDate = today;
      this.rangePicker.open();
    }
  }

  setLast7Days() {
    const today = new Date();
    this.endDate = today;
    this.startDate = new Date();
    this.startDate.setDate(today.getDate() - 6);
  }
}
