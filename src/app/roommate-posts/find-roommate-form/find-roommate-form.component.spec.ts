import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindRoommateFormComponent } from './find-roommate-form.component';

describe('FindRoommateFormComponent', () => {
  let component: FindRoommateFormComponent;
  let fixture: ComponentFixture<FindRoommateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindRoommateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindRoommateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
