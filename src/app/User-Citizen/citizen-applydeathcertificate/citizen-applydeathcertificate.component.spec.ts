import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenApplydeathcertificateComponent } from './citizen-applydeathcertificate.component';

describe('CitizenApplydeathcertificateComponent', () => {
  let component: CitizenApplydeathcertificateComponent;
  let fixture: ComponentFixture<CitizenApplydeathcertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitizenApplydeathcertificateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitizenApplydeathcertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
