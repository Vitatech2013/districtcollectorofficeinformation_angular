import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeViewrationcertificateComponent } from './employee-viewrationcertificate.component';

describe('EmployeeViewrationcertificateComponent', () => {
  let component: EmployeeViewrationcertificateComponent;
  let fixture: ComponentFixture<EmployeeViewrationcertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeViewrationcertificateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeViewrationcertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
