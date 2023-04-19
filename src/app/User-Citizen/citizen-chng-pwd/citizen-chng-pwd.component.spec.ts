import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenChngPwdComponent } from './citizen-chng-pwd.component';

describe('CitizenChngPwdComponent', () => {
  let component: CitizenChngPwdComponent;
  let fixture: ComponentFixture<CitizenChngPwdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitizenChngPwdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitizenChngPwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
