import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectorViewcastecertificateComponent } from './collector-viewcastecertificate.component';

describe('CollectorViewcastecertificateComponent', () => {
  let component: CollectorViewcastecertificateComponent;
  let fixture: ComponentFixture<CollectorViewcastecertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectorViewcastecertificateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectorViewcastecertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
