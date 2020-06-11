import { TestBed } from '@angular/core/testing';

import { DivisionsService } from './divisions.service';

describe('DivisionsService', () => {
  let service: DivisionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DivisionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
