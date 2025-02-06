// nickname-renderer.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nickname-renderer',
  template: `
    <a (click)="onCellNameClicked()" href="javascript:void(0)" class="nickname-link">
      {{ params.value }}
    </a>
  `,
  styles: [
    `
      .nickname-link {
        text-decoration: none;
        color: black;
        cursor: pointer;
      }
    `
  ]
})
export class NicknameRendererComponent {
  params: any;

  constructor(private router:Router) {

  }

  // AG Grid passes the row data into this method
  agInit(params: any): void {
    this.params = params;
  }

  onCellNameClicked() {
    if(this.params.colDef.type == 'providerProfileRedirection') {
      this.router.navigate([`${this.params.data.actionUrl}${this.params.data.providerId}`]);
    } else if(this.params.colDef.type == 'followerProfileRedirection') {
      this.router.navigate([`${this.params.data.actionUrl}${this.params.data.followerId}`]);
    }
  }
}
