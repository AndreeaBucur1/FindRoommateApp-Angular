import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPropertyPhotosComponent } from './upload-property-photos.component';

describe('UploadPropertyPhotosComponent', () => {
  let component: UploadPropertyPhotosComponent;
  let fixture: ComponentFixture<UploadPropertyPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadPropertyPhotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadPropertyPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
