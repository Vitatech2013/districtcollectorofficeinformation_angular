import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectorViewemployeeComponent } from './collector-viewemployee.component';

describe('CollectorViewemployeeComponent', () => {
  let component: CollectorViewemployeeComponent;
  let fixture: ComponentFixture<CollectorViewemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectorViewemployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectorViewemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
