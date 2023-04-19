import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePensionstatusComponent } from './employee-pensionstatus.component';

describe('EmployeePensionstatusComponent', () => {
  let component: EmployeePensionstatusComponent;
  let fixture: ComponentFixture<EmployeePensionstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeePensionstatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeePensionstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
