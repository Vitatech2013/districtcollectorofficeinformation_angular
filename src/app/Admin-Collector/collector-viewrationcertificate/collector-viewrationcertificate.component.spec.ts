import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectorViewrationcertificateComponent } from './collector-viewrationcertificate.component';

describe('CollectorViewrationcertificateComponent', () => {
  let component: CollectorViewrationcertificateComponent;
  let fixture: ComponentFixture<CollectorViewrationcertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectorViewrationcertificateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectorViewrationcertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
