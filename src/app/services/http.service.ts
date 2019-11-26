import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }
  
  /**
   * @param url 请求路径
   * @param params ?后拼接的参数
   * @param isPhp 是否为PHP地址
   */
  public get(url: string, params?: any, isPhp?: boolean) {
    let baseUrl: string;

    const httpParams = new HttpParams({
      fromObject: params
    });

    if (!isPhp) {
      baseUrl = environment.iconUrl + url;
    } else {
      baseUrl = 'localhost:3000' + url;
    }

    return this.http.get(baseUrl, {params: httpParams}).toPromise();
  }

  public post(url: string, params?: any, body?: any, isPhp?: boolean) {
    let baseUrl: string;
    const headers = new HttpHeaders({'Content-type': 'application/json'});

    const httpParams = new HttpParams({
      fromObject: params
    });

    if (!isPhp) {
      baseUrl = environment.iconUrl + url;
    } else {
      baseUrl = 'localhost:3000' + url;
    }

    return this.http.post(baseUrl, body, {headers, params: httpParams}).toPromise();
  }
}
