import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenViewrationcertificateComponent } from './citizen-viewrationcertificate.component';

describe('CitizenViewrationcertificateComponent', () => {
  let component: CitizenViewrationcertificateComponent;
  let fixture: ComponentFixture<CitizenViewrationcertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitizenViewrationcertificateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitizenViewrationcertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
