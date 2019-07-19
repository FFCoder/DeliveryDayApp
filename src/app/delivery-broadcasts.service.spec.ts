import { TestBed } from '@angular/core/testing';

import { DeliveryBroadcastsService } from './delivery-broadcasts.service';

describe('DeliveryBroadcastsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeliveryBroadcastsService = TestBed.get(DeliveryBroadcastsService);
    expect(service).toBeTruthy();
  });
});
