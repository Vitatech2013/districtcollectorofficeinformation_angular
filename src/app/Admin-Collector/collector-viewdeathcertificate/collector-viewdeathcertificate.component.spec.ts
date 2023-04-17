import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectorViewdeathcertificateComponent } from './collector-viewdeathcertificate.component';

describe('CollectorViewdeathcertificateComponent', () => {
  let component: CollectorViewdeathcertificateComponent;
  let fixture: ComponentFixture<CollectorViewdeathcertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectorViewdeathcertificateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectorViewdeathcertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
