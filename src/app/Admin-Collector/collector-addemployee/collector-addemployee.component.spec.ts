import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectorAddemployeeComponent } from './collector-addemployee.component';

describe('CollectorAddemployeeComponent', () => {
  let component: CollectorAddemployeeComponent;
  let fixture: ComponentFixture<CollectorAddemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectorAddemployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectorAddemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
