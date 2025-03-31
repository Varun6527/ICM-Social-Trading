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
        gap: 15px;
        .sidenav{
            width: 300px;
        }
        .pages{
            flex: 1;
            padding-right: 10px;
            width:77%; //Dont know but we have to give some width only then rating page is working fine. if we remove it rating page is getting distorted.
        }
    }
  `
})
export class WebLayoutComponent {
  
  constructor() {
  }
}
