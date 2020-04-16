import { TestBed } from '@angular/core/testing';

import { PhotobookService } from './photobook.service';

describe('PhotobookService', () => {
  let service: PhotobookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotobookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
