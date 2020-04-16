import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotobookPageComponent } from './photobook-page.component';

describe('PhotobookPageComponent', () => {
  let component: PhotobookPageComponent;
  let fixture: ComponentFixture<PhotobookPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotobookPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotobookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
