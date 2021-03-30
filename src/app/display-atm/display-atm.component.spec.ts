import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAtmComponent } from './display-atm.component';

describe('DisplayAtmComponent', () => {
  let component: DisplayAtmComponent;
  let fixture: ComponentFixture<DisplayAtmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayAtmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAtmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
