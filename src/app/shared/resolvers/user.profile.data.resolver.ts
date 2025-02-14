import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { WebService } from '../../web/service/web.service';

@Injectable({
  providedIn: 'root',
})
export class UserProfileDataResolver implements Resolve<any> {
  constructor(private _webService: WebService) {}

  resolve(): Observable<any> {
    return this.setUserProfileData();
  }

  setUserProfileData() {
    return new Observable((observer) => {
      this._webService.setOrRefreshUserProfileData((result: any)=>{
        if(result['status']) {
          observer.next(true);
          observer.complete();
        } else {
          observer.error(false);
        }
      });
    });
  }
}
