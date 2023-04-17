import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenViewpensioncertificateComponent } from './citizen-viewpensioncertificate.component';

describe('CitizenViewpensioncertificateComponent', () => {
  let component: CitizenViewpensioncertificateComponent;
  let fixture: ComponentFixture<CitizenViewpensioncertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitizenViewpensioncertificateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitizenViewpensioncertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
