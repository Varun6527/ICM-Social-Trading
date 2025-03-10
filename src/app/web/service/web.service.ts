import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../../shared/service/base.service';
import { ConstantVariable } from "../../shared/model/constantVariable.model";
import { map, mergeMap, Observable, of, Subject, switchMap, tap } from 'rxjs';

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

  clearUserProfileData() {
    this.userPermissionConfig = undefined;
    this.isProviderAccount = false;
    this.isSubscriptionAccount = false;
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

  setOrRefreshUserProfileDataAsObserver() {
    return new Observable((observer) => {
      if (this.userPermissionConfig) {
        observer.next(true);
        observer.complete();
      } else {
        this.setOrRefreshUserProfileData((result: any) => {
          if (result['status']) {
            observer.next(true);
            observer.complete();
          } else {
            observer.error(false);
            observer.complete();
          }
        });
      }
    });
  }

  getProviderMetric() {
    return this.sendHttpGetRequest(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.webHomePage.provider.metric}`, '');
  }

  getFollowerMetric() {
    return this.sendHttpGetRequest(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.webHomePage.follower.subscriptions_Metric}`, '');
  }

  getProviderTableData() {
    return this.sendHttpGetRequest(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.webHomePage.provider.details}`, '');
  }

  getFollowerTableData() {
    return this.sendHttpGetRequest(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.webHomePage.follower.subscriptions_Details}`, '');
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

  getProviderData(data: any) {
    return this.sendHttpGetWithUrlParam(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.webHomePage.provider.create}`, data);
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

  getTransactionPageData(data: any) {
    return this.sendHttpGetWithUrlParam(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.transactionsHistory.get}`, data).pipe(
      switchMap(transactHistory => {
        let providerId = this.getProviderId(transactHistory);
        if(providerId == "") {
          return of({ transactHistory, secondResponse: null });
        }
        return this.http.get(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.webHomePage.provider.brief}/${providerId}`).pipe(
          map(providerData => ({
            transactHistory: transactHistory,
            providerData: providerData 
          }))
        )
      })
    );
  }

  getProviderId(transactHistoryArr: any) {
    let transactObj = transactHistoryArr.items[0];
    if(transactObj?.ownerType == "Provider") {
      return transactObj.ownerId;
    } else if(transactObj?.counterpartyType == "Provider") {
      return transactObj.counterpartyId;
    } else {
      return "";
    }
  }

  getCommonGridData(url: any, param: any) {
    return this.sendHttpGetWithUrlParam(`${this.REST_API_SERVER}${url}`, param);
  }

  getClientDetails() {
    return this.sendHttpGetRequest(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.webHomePage.sideNav.clientDetails}`, "");
  }

  saveClientDetails(data: any) {
    return this.sendHttpPatchAjaxRequest(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.webHomePage.sideNav.clientDetails}`, data);
  }

  getProviderDashboardDetails() {
    return this.sendHttpGetRequest(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.webHomePage.provider.providers_View}`, "");
  }

  getFileServerUrl() {
    return this.File_SERVER;
  }

  getProviderProfilePageData(data: any) {
    return this.sendHttpGetWithUrlParam(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.webHomePage.provider.create}/${data.providerId}`, '').pipe(
      switchMap((providerData: any) => {
        let accountId = providerData.accountId;
        return this.sendHttpGetWithUrlParam(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.webHomePage.trading.account_Details}/${accountId}`, '').pipe(
          map(tradeAccountData => ({
            providerData: providerData,
            tradeAccountData: tradeAccountData 
          }))
        )
      })
    );
  }

  getSingleProviderData(data: any) {
    return this.sendHttpGetWithUrlParam(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.webHomePage.provider.create}/${data.providerId}`, '')
  }

  getOffersDetails(data: any) {
    let url = this.constantVar?.http_Api_Url.offers.offers_details;
    url = url.replace(':providerId', data.providerId);
    delete data['providerId'];
    return this.sendHttpGetWithUrlParam(`${this.REST_API_SERVER}${url}`, data);
  }

  getPositionDetails(data: any) {
    let url = this.constantVar?.http_Api_Url.provider_profile.position;
    url = url.replace(':providerId', data.providerId);
    delete data['providerId'];
    return this.sendHttpGetWithUrlParam(`${this.REST_API_SERVER}${url}`, data);
  }

  getSingleOfferData(data: any) {
    let url = this.constantVar?.http_Api_Url.offers.get_single_offer;
    url = url.replace(':offerId', data.offerId);
    delete data['offerId'];
    return this.sendHttpGetRequest(`${this.REST_API_SERVER}${url}`, '');
  }

  getSubscriptionData(data: any) {
    let url = `${this.constantVar?.http_Api_Url.provider_profile.subscriptions}/${data.subscriptionId}`;
    url = url.replace(':providerId', data.providerId);
    delete data['providerId'];
    return this.sendHttpGetRequest(`${this.REST_API_SERVER}${url}`, '');
  }

  getResultData(data: any) {
    let url = `${this.constantVar?.http_Api_Url.webHomePage.follower.result}`;
    url = url.replace(':subscriptionId', data.subscriptionId);
    delete data['subscriptionId'];
    return this.sendHttpGetRequest(`${this.REST_API_SERVER}${url}`, '');
  }

  getSingleResultData(data: any) {
    let url = `${this.constantVar?.http_Api_Url.webHomePage.follower.single_result}/${data.resultId}`;
    return this.sendHttpGetRequest(`${this.REST_API_SERVER}${url}`, '');
  }

  getSinglePosotionData(data: any) {
    let url = `${this.constantVar?.http_Api_Url.provider_profile.single_position}/${data.positionId}`;
    return this.sendHttpGetRequest(`${this.REST_API_SERVER}${url}`, '');
  }

  getSingleTradingAccountData(data: any) {
    return this.sendHttpGetWithUrlParam(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.webHomePage.trading.account_Details}/${data.accountId}`, '')
  }

  getStatsData(data: any) {
    let url = `${this.constantVar?.http_Api_Url.provider_profile.stats}`;
    url = url.replace(':providerId', data.providerId);
    url = url.replace(':positionId', data.positionId);
    return this.sendHttpGetWithUrlParam(`${this.REST_API_SERVER}${url}`, '');
  }

  updateProviderData(data: any) {
    let url = `${this.constantVar?.http_Api_Url.webHomePage.provider.create}/${data.providerId}`
    delete data['providerId'];
    return this.sendHttpPatchAjaxRequest(`${this.REST_API_SERVER}${url}`, data);
  }
}


