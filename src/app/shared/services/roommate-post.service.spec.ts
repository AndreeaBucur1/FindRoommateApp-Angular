import { TestBed } from '@angular/core/testing';

import { RoommatePostService } from './roommate-post.service';

describe('RoommatePostService', () => {
  let service: RoommatePostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoommatePostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
