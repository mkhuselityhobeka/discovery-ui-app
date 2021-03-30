import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayConvertedCurrencyAccountsComponent } from './display-converted-currency-accounts.component';

describe('DisplayConvertedCurrencyAccountsComponent', () => {
  let component: DisplayConvertedCurrencyAccountsComponent;
  let fixture: ComponentFixture<DisplayConvertedCurrencyAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayConvertedCurrencyAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayConvertedCurrencyAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
