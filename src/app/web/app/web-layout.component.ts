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
  styles: `
    .web-layout{
        display: flex;
        .sidenav{
          flex: 1 1 23%;
        }
        .pages{
            flex: 1 1 77%;
            padding-right: 10px;
        }
    }
  `
})
export class WebLayoutComponent {
  
  constructor() {
  }
}
