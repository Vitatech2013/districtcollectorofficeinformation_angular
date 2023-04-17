import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeViewusercomplaintComponent } from './employee-viewusercomplaint.component';

describe('EmployeeViewusercomplaintComponent', () => {
  let component: EmployeeViewusercomplaintComponent;
  let fixture: ComponentFixture<EmployeeViewusercomplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeViewusercomplaintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeViewusercomplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
