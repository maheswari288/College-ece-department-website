import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyachievmentsComponent } from './facultyachievments.component';

describe('FacultyachievmentsComponent', () => {
  let component: FacultyachievmentsComponent;
  let fixture: ComponentFixture<FacultyachievmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacultyachievmentsComponent]
    });
    fixture = TestBed.createComponent(FacultyachievmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
