import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRationstatusComponent } from './employee-rationstatus.component';

describe('EmployeeRationstatusComponent', () => {
  let component: EmployeeRationstatusComponent;
  let fixture: ComponentFixture<EmployeeRationstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeRationstatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeRationstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
