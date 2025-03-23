import {
  BaseService,
  ConstantVariable,
  HttpClient,
  Observable,
  Subject,
  map,
  mergeMap,
  of,
  switchMap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-G46OV5IL.js";

// src/app/web/service/web.service.ts
var WebService = class _WebService extends BaseService {
  http;
  constantVar;
  webEmitterReference = {};
  webChangeEmitter = new Subject();
  //Should move into ngrx store
  userPermissionConfig;
  isProviderAccount = false;
  isSubscriptionAccount = false;
  isReportPageEnable = false;
  showSubscriptionsTradingResults = false;
  //End
  constructor(http) {
    super(http);
    this.http = http;
    this.constantVar = new ConstantVariable();
  }
  clearUserProfileData() {
    this.userPermissionConfig = void 0;
    this.isProviderAccount = false;
    this.isSubscriptionAccount = false;
    this.isReportPageEnable = false;
    this.showSubscriptionsTradingResults = false;
  }
  subscribeOnWebDataChange(subscribeedFrom, callback) {
    this.webEmitterReference[subscribeedFrom] = this.webChangeEmitter.subscribe((data) => {
      callback && callback(data);
    });
  }
  emitOnWebDataChange(dataObj) {
    this.webChangeEmitter.next(dataObj);
  }
  unSubscribeOnWebDataChange(unSubscribeedFrom) {
    if (this.webEmitterReference[unSubscribeedFrom])
      this.webEmitterReference[unSubscribeedFrom].unsubscribe();
  }
  setOrRefreshUserProfileData(callback) {
    this.sendHttpGetRequest(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.webLayoutPage.get_User_Profile_details}`, "").subscribe({
      next: (result) => {
        this.userPermissionConfig = result;
        this.isProviderAccount = result?.provider?.view;
        this.isSubscriptionAccount = result?.subscription?.view;
        this.isReportPageEnable = result?.reports.view;
        this.showSubscriptionsTradingResults = result?.provider?.showSubscriptionsTradingResults.length > 0;
        callback({ status: true, response: result });
      },
      error: (error) => {
        callback({ status: false, errorObj: error });
      }
    });
  }
  setOrRefreshUserProfileDataAsObserver() {
    return new Observable((observer) => {
      if (this.userPermissionConfig) {
        observer.next(true);
        observer.complete();
      } else {
        this.setOrRefreshUserProfileData((result) => {
          if (result["status"]) {
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
    return this.sendHttpGetRequest(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.webHomePage.provider.metric}`, "");
  }
  getProviderMetricById(id) {
    return this.sendHttpGetRequest(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.webHomePage.provider.metric}/${id}`, "");
  }
  getFollowerMetric() {
    return this.sendHttpGetRequest(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.webHomePage.follower.subscriptions_Metric}`, "");
  }
  getFollowerMetricById(id) {
    return this.sendHttpGetRequest(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.webHomePage.follower.subscriptions_Metric}/${id}`, "");
  }
  getProviderTableData() {
    return this.sendHttpGetRequest(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.webHomePage.provider.details}`, "");
  }
  getFollowerTableData() {
    return this.sendHttpGetRequest(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.webHomePage.follower.subscriptions_Details}`, "");
  }
  getHomePageFollowerData() {
    const followerHomePageMetric = this.sendHttpGetRequest(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.webHomePage.follower.subscriptions_Metric}`, "").pipe(map((response) => ({ source: "follower_Metric", response })));
    const followerHomePageDetais = this.sendHttpGetRequest(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.webHomePage.follower.subscriptions_Details}`, "").pipe(map((response) => ({ source: "follower_Details", response })));
    return of(followerHomePageMetric, followerHomePageDetais).pipe(mergeMap((request) => request));
  }
  getTradingAccountData(data) {
    return this.sendHttpGetWithUrlParam(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.webHomePage.trading.account_Details}`, data);
  }
  createProvider(data) {
    return this.sendHttpPostAjaxRequest(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.webHomePage.provider.create}`, data);
  }
  getProviderData(data) {
    return this.sendHttpGetWithUrlParam(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.webHomePage.provider.create}`, data);
  }
  createFollower(data) {
    return this.sendHttpPostAjaxRequest(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.webHomePage.follower.create}`, data);
  }
  getAllProvidersData() {
    return this.sendHttpGetRequest(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.webHomePage.provider.brief}`, "");
  }
  getOffersOfProvider(data) {
    let url = `${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.webHomePage.provider.brief_Offers}`;
    url = url.replace(":providerId", data.id);
    return this.sendHttpGetRequest(url, "");
  }
  getTransactionHistoryData(data) {
    return this.sendHttpGetWithUrlParam(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.transactionsHistory.get}`, data);
  }
  getTransactionPageData(data) {
    return this.sendHttpGetWithUrlParam(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.transactionsHistory.get}`, data).pipe(switchMap((transactHistory) => {
      let providerId = this.getProviderId(transactHistory);
      if (providerId == "") {
        return of({ transactHistory, secondResponse: null });
      }
      return this.http.get(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.webHomePage.provider.brief}/${providerId}`).pipe(map((providerData) => ({
        transactHistory,
        providerData
      })));
    }));
  }
  getProviderId(transactHistoryArr) {
    let transactObj = transactHistoryArr.items[0];
    if (transactObj?.ownerType == "Provider") {
      return transactObj.ownerId;
    } else if (transactObj?.counterpartyType == "Provider") {
      return transactObj.counterpartyId;
    } else {
      return "";
    }
  }
  getCommonGridData(url, param) {
    return this.sendHttpGetWithUrlParam(`${this.REST_API_SERVER}${url}`, param);
  }
  getClientDetails() {
    return this.sendHttpGetRequest(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.webHomePage.sideNav.clientDetails}`, "");
  }
  saveClientDetails(data) {
    return this.sendHttpPatchAjaxRequest(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.webHomePage.sideNav.clientDetails}`, data);
  }
  getProviderDashboardDetails() {
    return this.sendHttpGetRequest(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.webHomePage.provider.providers_View}`, "");
  }
  getFileServerUrl() {
    return this.File_SERVER;
  }
  getProviderProfilePageData(data) {
    return this.sendHttpGetWithUrlParam(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.webHomePage.provider.create}/${data.providerId}`, "").pipe(switchMap((providerData) => {
      let accountId = providerData.accountId;
      return this.sendHttpGetWithUrlParam(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.webHomePage.trading.account_Details}/${accountId}`, "").pipe(map((tradeAccountData) => ({
        providerData,
        tradeAccountData
      })));
    }));
  }
  getSingleProviderData(data) {
    return this.sendHttpGetWithUrlParam(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.webHomePage.provider.create}/${data.providerId}`, "");
  }
  getOffersDetails(data) {
    let url = this.constantVar?.http_Api_Url.offers.offers_details;
    url = url.replace(":providerId", data.providerId);
    delete data["providerId"];
    return this.sendHttpGetWithUrlParam(`${this.REST_API_SERVER}${url}`, data);
  }
  getPositionDetails(data) {
    let url = this.constantVar?.http_Api_Url.provider_profile.position;
    url = url.replace(":providerId", data.providerId);
    delete data["providerId"];
    return this.sendHttpGetWithUrlParam(`${this.REST_API_SERVER}${url}`, data);
  }
  getSingleOfferData(data) {
    let url = this.constantVar?.http_Api_Url.offers.get_single_offer;
    url = url.replace(":offerId", data.offerId);
    delete data["offerId"];
    return this.sendHttpGetRequest(`${this.REST_API_SERVER}${url}`, "");
  }
  updateOfferData(data) {
    let url = this.constantVar?.http_Api_Url.offers.get_single_offer;
    url = url.replace(":offerId", data.offerId);
    delete data["offerId"];
    return this.sendHttpPatchAjaxRequest(`${this.REST_API_SERVER}${url}`, data);
  }
  deleteorArchiveOfferData(data) {
    let url = this.constantVar?.http_Api_Url.offers.get_single_offer;
    url = url.replace(":offerId", data.offerId);
    delete data["offerId"];
    return this.sendHttpDeleteAjaxRequest(`${this.REST_API_SERVER}${url}`, "");
  }
  getSubscriptionData(data) {
    let url = `${this.constantVar?.http_Api_Url.provider_profile.subscriptions}/${data.subscriptionId}`;
    url = url.replace(":providerId", data.providerId);
    delete data["providerId"];
    return this.sendHttpGetRequest(`${this.REST_API_SERVER}${url}`, "");
  }
  getAllSubscriptionData(data) {
    let url = `${this.constantVar?.http_Api_Url.provider_profile.subscriptions}`;
    url = url.replace(":providerId", data.providerId);
    delete data["providerId"];
    return this.sendHttpGetRequest(`${this.REST_API_SERVER}${url}`, "");
  }
  getResultData(data) {
    let url = `${this.constantVar?.http_Api_Url.webHomePage.follower.result}`;
    url = url.replace(":subscriptionId", data.subscriptionId);
    delete data["subscriptionId"];
    return this.sendHttpGetRequest(`${this.REST_API_SERVER}${url}`, "");
  }
  getSingleResultData(data) {
    let url = `${this.constantVar?.http_Api_Url.webHomePage.follower.single_result}/${data.resultId}`;
    return this.sendHttpGetRequest(`${this.REST_API_SERVER}${url}`, "");
  }
  getSinglePosotionData(data) {
    let url = `${this.constantVar?.http_Api_Url.provider_profile.single_position}/${data.positionId}`;
    return this.sendHttpGetRequest(`${this.REST_API_SERVER}${url}`, "");
  }
  getSingleSubscriptionPositionData(data) {
    let url = `${this.constantVar?.http_Api_Url.subscription_profile.single_position}/${data.positionId}`;
    return this.sendHttpGetRequest(`${this.REST_API_SERVER}${url}`, "");
  }
  getSingleTradingAccountData(data) {
    return this.sendHttpGetWithUrlParam(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.webHomePage.trading.account_Details}/${data.accountId}`, "");
  }
  getStatsData(data) {
    let url = `${this.constantVar?.http_Api_Url.provider_profile.stats}`;
    url = url.replace(":providerId", data.providerId);
    url = url.replace(":positionId", data.positionId);
    return this.sendHttpGetWithUrlParam(`${this.REST_API_SERVER}${url}`, "");
  }
  updateProviderData(data) {
    let url = `${this.constantVar?.http_Api_Url.webHomePage.provider.create}/${data.providerId}`;
    delete data["providerId"];
    return this.sendHttpPatchAjaxRequest(`${this.REST_API_SERVER}${url}`, data);
  }
  createOffersDetails(data) {
    return this.sendHttpPostAjaxRequest(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.offers.create}`, data);
  }
  deleteOrArchiveProvider(data) {
    let url = `${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.webHomePage.provider.create}/${data.providerId}`;
    return this.sendHttpDeleteAjaxRequest(url, "");
  }
  createSharedLink(data) {
    let url = `${this.constantVar?.http_Api_Url.shared_link.create_or_delete}`;
    url = url.replace(":providerId", data.providerId);
    return this.sendHttpPostAjaxRequest(`${this.REST_API_SERVER}${url}`, "");
  }
  deleteSharedLink(data) {
    let url = `${this.constantVar?.http_Api_Url.shared_link.create_or_delete}`;
    url = url.replace(":providerId", data.providerId);
    return this.sendHttpDeleteAjaxRequest(`${this.REST_API_SERVER}${url}`, "");
  }
  uploadAvatar(data) {
    let url = `${this.constantVar?.http_Api_Url.avatar.upload}`;
    url = url.replace(":providerId", data.providerId);
    const formData = new FormData();
    formData.append("file", data.file, data.file.name);
    return this.http.post(`${this.REST_API_SERVER}${url}`, formData);
  }
  getFollowerData(data) {
    return this.sendHttpGetWithUrlParam(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.webHomePage.follower.create}`, data);
  }
  getFollowerDashboardDetails() {
    return this.sendHttpGetRequest(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.webHomePage.follower.subscription_View}`, "");
  }
  getFollowerDataById(data) {
    return this.sendHttpGetRequest(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.webHomePage.follower.create}/${data.subscriptionId}`, "");
  }
  deleteOrArchiveFollower(data) {
    return this.sendHttpDeleteAjaxRequest(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.webHomePage.follower.create}/${data.subscriptionId}`, { body: {} });
  }
  getProviderDataById(data) {
    return this.sendHttpGetRequest(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.webHomePage.provider.brief}/${data.providerId}`, "");
  }
  getBriefOfferDataById(data) {
    return this.sendHttpGetRequest(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.offers.brief}/${data.offerId}`, "");
  }
  getAllRiskData(data) {
    let url = `${this.constantVar?.http_Api_Url.subscription_profile.risk}`;
    url = url.replace(":subscriptionId", data.subscriptionId);
    return this.sendHttpGetRequest(`${this.REST_API_SERVER}${url}`, "");
  }
  activateOrDeactivateSubscription(data) {
    let url = `${this.constantVar?.http_Api_Url.subscription_profile.activateOrDeActivateSubscription}`;
    url = url.replace(":subscriptionId", data.subscriptionId);
    delete data["subscriptionId"];
    return this.sendHttpPostAjaxRequest(`${this.REST_API_SERVER}${url}`, data);
  }
  createOrUpdateRiskData(data) {
    let url = `${this.constantVar?.http_Api_Url.subscription_profile.risk}`;
    url = url.replace(":subscriptionId", data.subscriptionId);
    delete data["subscriptionId"];
    return this.sendHttpPatchAjaxRequest(`${this.REST_API_SERVER}${url}`, data);
  }
  updateFollowerDataById(data) {
    let url = `${this.constantVar?.http_Api_Url.webHomePage.follower.create}/${data.subscriptionId}`;
    delete data["subscriptionId"];
    return this.sendHttpPatchAjaxRequest(`${this.REST_API_SERVER}${url}`, data);
  }
  static \u0275fac = function WebService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WebService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WebService, factory: _WebService.\u0275fac, providedIn: "root" });
};

export {
  WebService
};
//# sourceMappingURL=chunk-5MDTIDYM.js.map
