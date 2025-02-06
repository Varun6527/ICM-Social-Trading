import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { BaseService } from '../../shared/service/base.service';
import { ConstantVariable } from "../../shared/model/constantVariable.model";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {
  constantVar: ConstantVariable | undefined;
  public authEmitterReference: any = {};
  public authChangeEmitter = new Subject<any>();
  //Stores All token value from oauth api, also all below data need to store in ngrx.
  tokenObject: any = {}; 
  userConfig: any;
  //end

  constructor(private http: HttpClient) {
    super(http);
    this.constantVar = new ConstantVariable();
  }

  isAccessTokenGenerated() {
    return this.tokenObject.access_token ? true : false;
  }

  getAccessToken() {
    return this.tokenObject.access_token;
  }

  clearUserSession() {
    this.tokenObject = {};
  }

  subscribeOnEducatorDataChange(subscribeedFrom: string, callback: any) {
    this.authEmitterReference[subscribeedFrom] = this.authChangeEmitter.subscribe((data: any) => {
      callback && callback(data);
    });
  }

  emitOnEducatorDataChange(dataObj: any) {
    this.authChangeEmitter.next(dataObj);
  }

  unSubscribeOnEducatorDataChange(unSubscribeedFrom: string) {
    if (this.authEmitterReference[unSubscribeedFrom])
      this.authEmitterReference[unSubscribeedFrom].unsubscribe();
  }

  getUserConfiguration() {
    return this.sendHttpGetRequest(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.commonUser.get_User_Details}`, '');
  }

  loginUser(param: any) {
    const body = new URLSearchParams();
    body.set('username', param.username);
    body.set('password', param.password);
    body.set('grant_type', param.grant_type);
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(`${this.REST_API_SERVER}${this.constantVar?.http_Api_Url.loginPage.get_Token_URL}`, body.toString(), { headers });
  }
}


