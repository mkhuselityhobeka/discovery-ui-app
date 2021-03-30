import { TestBed } from '@angular/core/testing';

import { ClientIdForWithdrawalService } from './client-id-for-withdrawal.service';

describe('ClientIdForWithdrawalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientIdForWithdrawalService = TestBed.get(ClientIdForWithdrawalService);
    expect(service).toBeTruthy();
  });
});
