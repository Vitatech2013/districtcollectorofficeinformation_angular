import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenViewcomplaintComponent } from './citizen-viewcomplaint.component';

describe('CitizenViewcomplaintComponent', () => {
  let component: CitizenViewcomplaintComponent;
  let fixture: ComponentFixture<CitizenViewcomplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitizenViewcomplaintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitizenViewcomplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
