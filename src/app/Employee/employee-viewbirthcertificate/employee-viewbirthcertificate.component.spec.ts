import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeViewbirthcertificateComponent } from './employee-viewbirthcertificate.component';

describe('EmployeeViewbirthcertificateComponent', () => {
  let component: EmployeeViewbirthcertificateComponent;
  let fixture: ComponentFixture<EmployeeViewbirthcertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeViewbirthcertificateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeViewbirthcertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
