import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersPropertiesComponent } from './users-properties.component';

describe('UsersPropertiesComponent', () => {
  let component: UsersPropertiesComponent;
  let fixture: ComponentFixture<UsersPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersPropertiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
