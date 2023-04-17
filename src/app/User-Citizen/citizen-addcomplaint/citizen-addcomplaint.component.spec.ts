import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenAddcomplaintComponent } from './citizen-addcomplaint.component';

describe('CitizenAddcomplaintComponent', () => {
  let component: CitizenAddcomplaintComponent;
  let fixture: ComponentFixture<CitizenAddcomplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitizenAddcomplaintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitizenAddcomplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
