import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenApplycastecertificateComponent } from './citizen-applycastecertificate.component';

describe('CitizenApplycastecertificateComponent', () => {
  let component: CitizenApplycastecertificateComponent;
  let fixture: ComponentFixture<CitizenApplycastecertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitizenApplycastecertificateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitizenApplycastecertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
