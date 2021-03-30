import { TestBed } from '@angular/core/testing';

import { DisplayConvertedCurrencyAccountsService } from './display-converted-currency-accounts.service';

describe('DisplayConvertedCurrencyAccountsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DisplayConvertedCurrencyAccountsService = TestBed.get(DisplayConvertedCurrencyAccountsService);
    expect(service).toBeTruthy();
  });
});
