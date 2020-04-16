import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotobookViewComponent } from './photobook-view.component';

describe('PhotobookViewComponent', () => {
  let component: PhotobookViewComponent;
  let fixture: ComponentFixture<PhotobookViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotobookViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotobookViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
