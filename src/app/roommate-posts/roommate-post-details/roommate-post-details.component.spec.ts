import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoommatePostDetailsComponent } from './roommate-post-details.component';

describe('RoommatePostDetailsComponent', () => {
  let component: RoommatePostDetailsComponent;
  let fixture: ComponentFixture<RoommatePostDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoommatePostDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoommatePostDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
