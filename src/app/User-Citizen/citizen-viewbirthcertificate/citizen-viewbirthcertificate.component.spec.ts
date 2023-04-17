import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenViewbirthcertificateComponent } from './citizen-viewbirthcertificate.component';

describe('CitizenViewbirthcertificateComponent', () => {
  let component: CitizenViewbirthcertificateComponent;
  let fixture: ComponentFixture<CitizenViewbirthcertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitizenViewbirthcertificateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitizenViewbirthcertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
