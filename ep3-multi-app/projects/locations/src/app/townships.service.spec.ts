import { TestBed } from '@angular/core/testing';

import { TownshipsService } from './townships.service';

describe('TownshipsService', () => {
  let service: TownshipsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TownshipsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
