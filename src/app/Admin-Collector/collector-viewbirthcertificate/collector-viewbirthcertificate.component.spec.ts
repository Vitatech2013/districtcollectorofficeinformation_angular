import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectorViewbirthcertificateComponent } from './collector-viewbirthcertificate.component';

describe('CollectorViewbirthcertificateComponent', () => {
  let component: CollectorViewbirthcertificateComponent;
  let fixture: ComponentFixture<CollectorViewbirthcertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectorViewbirthcertificateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectorViewbirthcertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
