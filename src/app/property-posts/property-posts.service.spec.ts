import { TestBed } from '@angular/core/testing';

import { PropertyPostsService } from '../shared/services/property-posts.service';

describe('PropertyPostsService', () => {
  let service: PropertyPostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertyPostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
