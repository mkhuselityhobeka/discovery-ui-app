import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTransactionalAccountsComponent } from './display-transactional-accounts.component';

describe('DisplayTransactionalAccountsComponent', () => {
  let component: DisplayTransactionalAccountsComponent;
  let fixture: ComponentFixture<DisplayTransactionalAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayTransactionalAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTransactionalAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
