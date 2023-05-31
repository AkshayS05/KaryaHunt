import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePostedComponent } from './date-posted.component';

describe('DatePostedComponent', () => {
  let component: DatePostedComponent;
  let fixture: ComponentFixture<DatePostedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatePostedComponent]
    });
    fixture = TestBed.createComponent(DatePostedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
