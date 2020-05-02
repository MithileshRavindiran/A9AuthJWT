import { TestBed } from '@angular/core/testing';

import { BidAuthGuardService } from './bid-auth-guard.service';

describe('BidAuthGuardService', () => {
  let service: BidAuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BidAuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
