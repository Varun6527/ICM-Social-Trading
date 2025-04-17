import { Component } from '@angular/core';

@Component({
  selector: 'app-web-layout',
  template: `
    <div class="web-layout">
      <div class="sidenav">
          <app-sidenav></app-sidenav>
      </div>
      <div class="pages">
          <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styleUrls: ['./web-layout-comonent.scss']
})
export class WebLayoutComponent {
  
  constructor() {
  }
}
