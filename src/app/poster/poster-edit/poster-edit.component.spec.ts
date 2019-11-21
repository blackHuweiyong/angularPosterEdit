import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterEditComponent } from './poster-edit.component';

describe('PosterEditComponent', () => {
  let component: PosterEditComponent;
  let fixture: ComponentFixture<PosterEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosterEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosterEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
