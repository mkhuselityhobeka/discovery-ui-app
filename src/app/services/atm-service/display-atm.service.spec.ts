import { TestBed } from '@angular/core/testing';

import { DisplayAtmService } from './display-atm.service';

describe('DisplayAtmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DisplayAtmService = TestBed.get(DisplayAtmService);
    expect(service).toBeTruthy();
  });
});
