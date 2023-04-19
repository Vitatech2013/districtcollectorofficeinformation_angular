import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeBirthstatusComponent } from './employee-birthstatus.component';

describe('EmployeeBirthstatusComponent', () => {
  let component: EmployeeBirthstatusComponent;
  let fixture: ComponentFixture<EmployeeBirthstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeBirthstatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeBirthstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
