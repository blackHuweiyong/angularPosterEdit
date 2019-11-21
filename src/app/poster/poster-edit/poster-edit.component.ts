import { Component, OnInit } from '@angular/core';
import { PosterService } from 'src/app/services/poster.service';
import { NzMessageService } from 'ng-zorro-antd';
import { Poster } from 'src/app/model/poster';

@Component({
  selector: 'app-poster-edit',
  templateUrl: './poster-edit.component.html',
  styleUrls: ['./poster-edit.component.less']
})
export class PosterEditComponent implements OnInit {
  posterOption: Poster = new Poster();

  constructor(
    private posterService: PosterService,
    private message: NzMessageService
  ) { }

  ngOnInit() {
    this.getData(1);
  }

  public getData(id: number) {
    this.posterService.getPosterOption(id)
    .then((res: any) => {
      this.posterOption = res;
      this.message.create('success', '请求成功');
    }).catch((error) => {
      this.message.create('error', error);
    });
  }
}
