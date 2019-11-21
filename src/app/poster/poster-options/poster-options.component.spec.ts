import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterOptionsComponent } from './poster-options.component';

describe('PosterOptionsComponent', () => {
  let component: PosterOptionsComponent;
  let fixture: ComponentFixture<PosterOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosterOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosterOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
