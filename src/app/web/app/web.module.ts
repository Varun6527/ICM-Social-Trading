import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebRoutingModule } from './web-routing.module';
import { SidenavStanaloneComponent } from '../shared/sidenav/sidenav.standalone.component';
import { WebLayoutComponent } from './web-layout.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    WebLayoutComponent,
  ],
  imports: [
    CommonModule,
    SidenavStanaloneComponent,
    WebRoutingModule,
    MatCardModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class WebModule { }
