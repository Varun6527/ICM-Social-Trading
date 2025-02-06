import { Component, Input } from '@angular/core';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';

export interface ErrorSnackBarConfig {
  duration?: number;
  horizontalPosition?: string;
  verticalPosition?: string;
  message?: string;
  actionButtonText?: string;
  customStyle?: string;
}

@Component({
  selector: 'show-error-message',
  template: ``,
  styles: `
    ::ng-deep .mat-mdc-snack-bar-container.default-error-style {
        --mat-snack-bar-button-color: var(--primaryWhite);
        --mdc-snackbar-container-color: var(--error-message--container-color);
        --mdc-snackbar-supporting-text-color: var(--primaryWhite);
        width: 350px;
    }
  `,
  standalone: true,
  imports : [MatSnackBarModule]
})
export class ShowErrorStandAloneComponent {
  @Input() config: ErrorSnackBarConfig | any;
  constructor(private snackBar: MatSnackBar) {
    this.setDefaultFailedErrorConfig();
  }

  openErrorSnackbar() {
    this.snackBar.open(this.config.message, this.config.actionButtonText, {
      duration: this.config.duration,
      horizontalPosition: this.config.horizontalPosition,
      verticalPosition: this.config.verticalPosition,
      panelClass: [this.config.customStyle]
    });
  }

  setDefaultFailedErrorConfig() {
    this.config = {
      duration: 3000,
      actionButtonText: "✖",
      message: "Unknown Api Error Occured",
      horizontalPosition: 'right',
      verticalPosition: 'top',
      customStyle: 'default-error-style'
    };
  }
}
