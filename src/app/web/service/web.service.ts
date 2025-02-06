import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { BaseService } from '../../shared/service/base.service';
import { ConstantVariable } from "../../shared/model/constantVariable.model";
import { map, mergeMap, of, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebService extends BaseService {
  constantVar: ConstantVariable | undefined;
  public webEmitterReference: any = {};
  public webChangeEmitter = new Subject<any>();

  //Should move into ngrx store
  userPermissionConfig: any;  
  isProviderAccount: boolean = false;
  isSubscriptionAccount: boolean = false;
  //End

  constructor(private http: HttpClient) {
    super(http);
    this.constantVar = new ConstantVariable();
  }

  subscribeOnWebDataChange(subscribeedFrom: string, callback: any) {
    this.webEmitterReference[subscribeedFrom] = this.webChangeEmitter.subscribe((data: any) => {
      callback && callback(data);
    });
  }

  emitOnWebDataChange(dataObj: any) {
    this.webChangeEmitter.next(dataObj);
  }

  unSubscribeOnWebDataChange(unSubscribeedFrom: string) {
    if (this.webEmitterReference[unSubscribeedFrom])
      this.webEmitterReference[unSubscribeedFrom].unsubscribe();
  }

  setOrRefreshUserProfileData(callback: any) {
    this.sendHttpGetRequest(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.webLayoutPage.get_User_Profile_details}`, '').subscribe({
        next: (result: any)=>{
            this.userPermissionConfig = result;
            this.isProviderAccount = result?.provider?.view;
            this.isSubscriptionAccount = result?.subscription?.view;
            callback({status: true, response: result});
        },
        error: (error: any) => {
            callback({status: false, errorObj: error});
        }
    });
  }

  getHomePageProviderData() {
    const providerHomePageMetric = this.sendHttpGetRequest(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.webHomePage.provider.metric}`, '').pipe(map(response => ({ source: 'provider_Metric', response })));
    const providerHomePageDetais = this.sendHttpGetRequest(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.webHomePage.provider.details}`, '').pipe(map(response => ({ source: 'provider_Details', response })));
    
    return of(providerHomePageMetric, providerHomePageDetais).pipe(
        mergeMap((request: any) => request));
  }

  getHomePageFollowerData() {
    const followerHomePageMetric = this.sendHttpGetRequest(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.webHomePage.follower.subscriptions_Metric}`, '').pipe(map(response => ({ source: 'follower_Metric', response })));
    const followerHomePageDetais = this.sendHttpGetRequest(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.webHomePage.follower.subscriptions_Details}`, '').pipe(map(response => ({ source: 'follower_Details', response })));
    
    return of(followerHomePageMetric, followerHomePageDetais).pipe(
        mergeMap((request: any) => request));
  }

  getTradingAccountData(data: any) {
    return this.sendHttpGetWithUrlParam(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.webHomePage.trading.account_Details}`, data);
  }

  createProvider(data: any) {
    return this.sendHttpPostAjaxRequest(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.webHomePage.provider.create}`, data);
  }

  createFollower(data: any) {
    return this.sendHttpPostAjaxRequest(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.webHomePage.follower.create}`, data);
  }

  getAllProvidersData() {
    return this.sendHttpGetRequest(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.webHomePage.provider.brief}`, "");
  }

  getOffersOfProvider(data: any) {
    let url = `${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.webHomePage.provider.brief_Offers}`;
    url = url.replace(':providerId', data.id);
    return this.sendHttpGetRequest(url, "");
  }

  getTransactionHistoryData(data: any) {
    return this.sendHttpGetWithUrlParam(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.transactionsHistory.get}`, data);
  }
}


