import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotobookComponent } from './photobook.component';

describe('PhotobookComponent', () => {
  let component: PhotobookComponent;
  let fixture: ComponentFixture<PhotobookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotobookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotobookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
