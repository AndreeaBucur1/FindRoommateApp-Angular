import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoommatePostsComponent } from './roommate-posts.component';

describe('RoommatePostsComponent', () => {
  let component: RoommatePostsComponent;
  let fixture: ComponentFixture<RoommatePostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoommatePostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoommatePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
