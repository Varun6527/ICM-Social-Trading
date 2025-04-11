import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeStandAloneComponent } from './home.standalone.component';
import { WebService } from '../../service/web.service';
@Component({
  selector: 'app-home-wrapper',
  template: `
    @if(isProvider && isFollower) {
        <app-home [isProvider]="true" [isFollower]="false" [showHeader]="true"></app-home>
        <app-home [isProvider]="false" [isFollower]="true" [showHeader]="false"></app-home>
    } @else if(isProvider) {
        <app-home [isProvider]="true" [isFollower]="false" [showHeader]="true"></app-home>
    } @else if(isFollower) {
        <app-home [isProvider]="false" [isFollower]="true" [showHeader]="true"></app-home>
    } @else {
        <app-home [isProvider]="false" [isFollower]="false" [showHeader]="true"></app-home>
    }
  `,
  standalone: true,
  imports: [CommonModule, HomeStandAloneComponent]
})
export class HomeWrapperStandAloneComponent {
    isProvider: boolean = false;
    isFollower: boolean = false;
    constructor(private _webService:  WebService) {
        this.isProvider = this._webService.isProviderAccount;
        this.isFollower = this._webService.isSubscriptionAccount;
    }
}