import { TestBed } from '@angular/core/testing';

import { PaginationInfoService } from '..//services/pagination-info.service';

describe('PaginationInfoService', () => {
  let service: PaginationInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaginationInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
