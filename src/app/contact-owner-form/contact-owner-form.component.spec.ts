import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactOwnerFormComponent } from './contact-owner-form.component';

describe('ContactOwnerFormComponent', () => {
  let component: ContactOwnerFormComponent;
  let fixture: ComponentFixture<ContactOwnerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactOwnerFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactOwnerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
