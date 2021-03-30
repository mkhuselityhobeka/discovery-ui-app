import { TestBed } from '@angular/core/testing';

import { WithdrawMoneyService } from './withdraw-money.service';

describe('WithdrawMoneyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WithdrawMoneyService = TestBed.get(WithdrawMoneyService);
    expect(service).toBeTruthy();
  });
});
