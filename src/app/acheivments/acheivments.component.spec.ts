import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcheivmentsComponent } from './acheivments.component';

describe('AcheivmentsComponent', () => {
  let component: AcheivmentsComponent;
  let fixture: ComponentFixture<AcheivmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcheivmentsComponent]
    });
    fixture = TestBed.createComponent(AcheivmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
