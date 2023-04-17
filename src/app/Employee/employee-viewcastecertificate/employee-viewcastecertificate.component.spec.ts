import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeViewcastecertificateComponent } from './employee-viewcastecertificate.component';

describe('EmployeeViewcastecertificateComponent', () => {
  let component: EmployeeViewcastecertificateComponent;
  let fixture: ComponentFixture<EmployeeViewcastecertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeViewcastecertificateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeViewcastecertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
