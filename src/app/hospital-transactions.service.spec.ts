import { TestBed } from '@angular/core/testing';

import { HospitalTransactionsService } from './hospital-transactions.service';

describe('HospitalTransactionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HospitalTransactionsService = TestBed.get(HospitalTransactionsService);
    expect(service).toBeTruthy();
  });
});
