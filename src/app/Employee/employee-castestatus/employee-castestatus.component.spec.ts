import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCastestatusComponent } from './employee-castestatus.component';

describe('EmployeeCastestatusComponent', () => {
  let component: EmployeeCastestatusComponent;
  let fixture: ComponentFixture<EmployeeCastestatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeCastestatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeCastestatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
