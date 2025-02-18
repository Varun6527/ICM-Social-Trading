import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { WebService } from '../../web/service/web.service';

@Injectable({
  providedIn: 'root',
})
export class UserProfileDataResolver implements Resolve<any> {
  constructor(private _webService: WebService) {}

  resolve(): Observable<any> {
    return this._webService.setOrRefreshUserProfileDataAsObserver();
  }
}
