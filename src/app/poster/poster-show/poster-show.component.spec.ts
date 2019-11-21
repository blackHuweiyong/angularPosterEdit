import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterShowComponent } from './poster-show.component';

describe('PosterShowComponent', () => {
  let component: PosterShowComponent;
  let fixture: ComponentFixture<PosterShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosterShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosterShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
