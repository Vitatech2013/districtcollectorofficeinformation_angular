import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectorViewpensioncertificateComponent } from './collector-viewpensioncertificate.component';

describe('CollectorViewpensioncertificateComponent', () => {
  let component: CollectorViewpensioncertificateComponent;
  let fixture: ComponentFixture<CollectorViewpensioncertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectorViewpensioncertificateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectorViewpensioncertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
