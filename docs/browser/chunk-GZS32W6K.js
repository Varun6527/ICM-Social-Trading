import {
  BaseService,
  ConstantVariable,
  HttpClient,
  HttpHeaders,
  Observable,
  Subject,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-G46OV5IL.js";

// src/app/auth/service/auth.service.ts
var AuthService = class _AuthService extends BaseService {
  http;
  constantVar;
  authEmitterReference = {};
  authChangeEmitter = new Subject();
  //Stores All token value from oauth api, also all below data need to store in ngrx.
  tokenObject = {};
  userConfig;
  //end
  constructor(http) {
    super(http);
    this.http = http;
    this.constantVar = new ConstantVariable();
  }
  isAccessTokenGenerated() {
    return this.tokenObject.access_token ? true : false;
  }
  getAccessToken() {
    return this.tokenObject.access_token;
  }
  clearUserDataAndToken() {
    this.tokenObject = {};
    this.userConfig = void 0;
  }
  subscribeOnEducatorDataChange(subscribeedFrom, callback) {
    this.authEmitterReference[subscribeedFrom] = this.authChangeEmitter.subscribe((data) => {
      callback && callback(data);
    });
  }
  emitOnEducatorDataChange(dataObj) {
    this.authChangeEmitter.next(dataObj);
  }
  unSubscribeOnEducatorDataChange(unSubscribeedFrom) {
    if (this.authEmitterReference[unSubscribeedFrom])
      this.authEmitterReference[unSubscribeedFrom].unsubscribe();
  }
  getUserConfiguration() {
    return this.sendHttpGetRequest(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.commonUser.get_User_Details}`, "");
  }
  setOrRefreshUserConfiguration() {
    return new Observable((observer) => {
      if (this.userConfig) {
        observer.next(true);
        observer.complete();
      } else {
        this.getUserConfiguration().subscribe({
          next: (response) => {
            this.userConfig = response;
            observer.next(true);
            observer.complete();
          },
          error: (error) => {
            observer.error(false);
            observer.complete();
          }
        });
      }
    });
  }
  loginUser(param) {
    const body = new URLSearchParams();
    body.set("username", param.username);
    body.set("password", param.password);
    body.set("grant_type", param.grant_type);
    const headers = new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded");
    return this.http.post(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.loginPage.get_Token_URL}`, body.toString(), { headers });
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};

export {
  AuthService
};
//# sourceMappingURL=chunk-GZS32W6K.js.map
