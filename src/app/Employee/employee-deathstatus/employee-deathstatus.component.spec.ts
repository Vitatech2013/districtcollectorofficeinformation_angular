import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDeathstatusComponent } from './employee-deathstatus.component';

describe('EmployeeDeathstatusComponent', () => {
  let component: EmployeeDeathstatusComponent;
  let fixture: ComponentFixture<EmployeeDeathstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDeathstatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeDeathstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
