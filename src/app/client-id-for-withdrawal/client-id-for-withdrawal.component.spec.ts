import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientIdForWithdrawalComponent } from './client-id-for-withdrawal.component';

describe('ClientIdForWithdrawalComponent', () => {
  let component: ClientIdForWithdrawalComponent;
  let fixture: ComponentFixture<ClientIdForWithdrawalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientIdForWithdrawalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientIdForWithdrawalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
