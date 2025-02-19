import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BaseService {
  REST_API_SERVER = environment.REST_API_SERVER;
  File_SERVER = environment.File_SERVER;

  constructor(private proHttp: HttpClient) {}

  protected sendHttpGetRequest(url: string, data:any) {
    if (typeof data.params === 'undefined') {
      return this.proHttp.get(url);
    } else {
      return this.proHttp.get(url, data);
    }
  };

  protected sendHttpGetRequestMap(url: string, data: any) {
    if (typeof data.params === 'undefined') {
      return this.proHttp.get(url).pipe(
        map(((resp: any) => resp)));
    } else {
      return this.proHttp.get(url, data).pipe(
        map(((resp: any) => resp)));
    }
  };
 //  --source-map
  protected sendHttpPostAjaxRequest(url: string, params: any) {
    return this.proHttp.post(url, params, {         
      headers: new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*').
      set('X-Requested-With', 'XMLHttpRequest').set('Accept','application/json')
    });

  };

  protected sendHttpPostFormRequest(url: string, params: any) {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(key => {
      let value = params[key];
      if (typeof value === "object" && value.length) {
        value.forEach((s: any) => {
          httpParams = httpParams.append(key, s);
        });
      } else {
        httpParams = httpParams.append(key, value);
      }
    })

    return this.proHttp.post(url, httpParams.toString(), {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
          'Accept': 'application/json;charset=utf-8',
          'Access-Control-Allow-Origin': '*'
        }
      )
    });
  }

  protected sendHttpGetWithUrlParam(url: any, params: any) {
    let httpParams = new HttpParams({ fromObject: params });
    if (typeof params === 'undefined') {
      return this.proHttp.get(url);
    } else {
      return this.proHttp.get(url, { params: httpParams });
    }
  }
}
