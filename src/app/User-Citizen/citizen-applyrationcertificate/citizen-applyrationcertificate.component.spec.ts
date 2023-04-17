import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenApplyrationcertificateComponent } from './citizen-applyrationcertificate.component';

describe('CitizenApplyrationcertificateComponent', () => {
  let component: CitizenApplyrationcertificateComponent;
  let fixture: ComponentFixture<CitizenApplyrationcertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitizenApplyrationcertificateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitizenApplyrationcertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
