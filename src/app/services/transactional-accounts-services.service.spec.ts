import { TestBed } from '@angular/core/testing';

import { TransactionalAccountsServicesService } from './transactional-accounts-services.service';

describe('TransactionalAccountsServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransactionalAccountsServicesService = TestBed.get(TransactionalAccountsServicesService);
    expect(service).toBeTruthy();
  });
});
