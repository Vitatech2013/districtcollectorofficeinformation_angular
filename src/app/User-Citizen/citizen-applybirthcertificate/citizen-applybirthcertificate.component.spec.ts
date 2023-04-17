import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenApplybirthcertificateComponent } from './citizen-applybirthcertificate.component';

describe('CitizenApplybirthcertificateComponent', () => {
  let component: CitizenApplybirthcertificateComponent;
  let fixture: ComponentFixture<CitizenApplybirthcertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitizenApplybirthcertificateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitizenApplybirthcertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
