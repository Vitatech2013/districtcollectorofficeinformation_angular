import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenViewcastecertificateComponent } from './citizen-viewcastecertificate.component';

describe('CitizenViewcastecertificateComponent', () => {
  let component: CitizenViewcastecertificateComponent;
  let fixture: ComponentFixture<CitizenViewcastecertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitizenViewcastecertificateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitizenViewcastecertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
