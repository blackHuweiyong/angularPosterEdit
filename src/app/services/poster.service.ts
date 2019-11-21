import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { NzMessageService } from 'ng-zorro-antd';
import { Poster } from '../model/poster';

@Injectable({
  providedIn: 'root'
})
export class PosterService {

  constructor(
    private http: HttpService,
    private message: NzMessageService
  ) { }

  /**
   * @param id 查询id
   */
  public getPosterOption(id: number): Promise<Poster> {
    return new Promise((resolve, reject) => {
      this.http.get('/assets/data/poster.json', null, false)
      .then((res: any) => {
        if(res.code === 200) {
          if (res.data) {
            const result = new Poster();
            result.left = res.data.left;
            result.top = res.data.top;
            result.isShow = res.data.isShow;
            resolve(result);
          } else {
            reject('错误');
          }
        } else {
          reject('错误');
        }
      }).catch((error) => {
        this.message.create('error', error);
      });
    })
  }
}
