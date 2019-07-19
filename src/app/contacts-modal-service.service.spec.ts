import { TestBed } from '@angular/core/testing';

import { ContactsModalServiceService } from './contacts-modal-service.service';

describe('ContactsModalServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactsModalServiceService = TestBed.get(ContactsModalServiceService);
    expect(service).toBeTruthy();
  });
});
