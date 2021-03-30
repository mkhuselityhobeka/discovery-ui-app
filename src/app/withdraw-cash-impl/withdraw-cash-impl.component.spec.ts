import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawCashImplComponent } from './withdraw-cash-impl.component';

describe('WithdrawCashImplComponent', () => {
  let component: WithdrawCashImplComponent;
  let fixture: ComponentFixture<WithdrawCashImplComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithdrawCashImplComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawCashImplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
