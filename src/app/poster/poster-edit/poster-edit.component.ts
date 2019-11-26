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

  fontSize = "40px";

  isMax = false;

  stringIfy = {
    name: 1,
    age: 2,
    sex: 3
  };

  constructor(
    private posterService: PosterService,
    private message: NzMessageService
  ) { }

  ngOnInit() {
    this.getData(1);
    console.log(JSON.stringify(this.stringIfy, null, 2));
    console.dir(this.stringIfy);
    console.log("%cMy stylish message", "color: red; font-style: italic");
    console.log("My %cstylish message", "color: red; font-style: italic");
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
