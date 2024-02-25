import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentacheivmentsComponent } from './studentacheivments.component';

describe('StudentacheivmentsComponent', () => {
  let component: StudentacheivmentsComponent;
  let fixture: ComponentFixture<StudentacheivmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentacheivmentsComponent]
    });
    fixture = TestBed.createComponent(StudentacheivmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
