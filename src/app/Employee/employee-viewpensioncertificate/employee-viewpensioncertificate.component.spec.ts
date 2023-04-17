import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeViewpensioncertificateComponent } from './employee-viewpensioncertificate.component';

describe('EmployeeViewpensioncertificateComponent', () => {
  let component: EmployeeViewpensioncertificateComponent;
  let fixture: ComponentFixture<EmployeeViewpensioncertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeViewpensioncertificateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeViewpensioncertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
