import { TestBed } from '@angular/core/testing';

import { DeliveryConfirmTransactionsService } from './delivery-confirm-transactions.service';

describe('DeliveryConfirmTransactionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeliveryConfirmTransactionsService = TestBed.get(DeliveryConfirmTransactionsService);
    expect(service).toBeTruthy();
  });
});
