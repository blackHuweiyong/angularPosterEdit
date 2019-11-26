import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poster-show',
  templateUrl: './poster-show.component.html',
  styleUrls: ['./poster-show.component.less']
})
export class PosterShowComponent implements OnInit {
  isCollapsed = false;

  openMap: { [name: string]: boolean } = {
    sub1: true,
    sub2: false,
    sub3: false
  };

  constructor() { }

  ngOnInit() {
  }

  public toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  public openHandler(value: string): void {
    for (const key in this.openMap) {
      if (key !== value) {
        this.openMap[key] = false;
      }
    }
  }

}
