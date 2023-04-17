import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenViewdeathcertificateComponent } from './citizen-viewdeathcertificate.component';

describe('CitizenViewdeathcertificateComponent', () => {
  let component: CitizenViewdeathcertificateComponent;
  let fixture: ComponentFixture<CitizenViewdeathcertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitizenViewdeathcertificateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitizenViewdeathcertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
