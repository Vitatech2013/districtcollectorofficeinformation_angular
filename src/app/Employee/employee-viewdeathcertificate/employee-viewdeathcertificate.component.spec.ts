import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeViewdeathcertificateComponent } from './employee-viewdeathcertificate.component';

describe('EmployeeViewdeathcertificateComponent', () => {
  let component: EmployeeViewdeathcertificateComponent;
  let fixture: ComponentFixture<EmployeeViewdeathcertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeViewdeathcertificateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeViewdeathcertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
