import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsbylevelComponent } from './jobsbylevel.component';

describe('JobsbylevelComponent', () => {
  let component: JobsbylevelComponent;
  let fixture: ComponentFixture<JobsbylevelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobsbylevelComponent]
    });
    fixture = TestBed.createComponent(JobsbylevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
