import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenApplypensioncertificateComponent } from './citizen-applypensioncertificate.component';

describe('CitizenApplypensioncertificateComponent', () => {
  let component: CitizenApplypensioncertificateComponent;
  let fixture: ComponentFixture<CitizenApplypensioncertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitizenApplypensioncertificateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitizenApplypensioncertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
