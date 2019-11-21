import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }
  
  /**
   * 
   * @param url 请求路径
   * @param params ?后拼接的参数
   * @param isPhp 是否为PHP地址
   */
  public get(url: string, params?: any, isPhp?: boolean) {
    let baseUrl: string;
    let result = '';

    if (params) {
      for (const item in params) {
        if(params[item] && String(params[item])) {
          result += `&${item}=${params[item]}`;
        }
      }
      if (result) {
        result = '?' + result.slice(1);
      }
    }

    if (!isPhp) {
      baseUrl = environment.iconUrl + url + result;
    } else {
      baseUrl = 'localhost:3000' + url + result;
    }

    return this.http.get(baseUrl).toPromise();
  }
}
