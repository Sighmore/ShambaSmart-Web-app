import { TestBed } from '@angular/core/testing';

import { Queries } from './queries';

describe('Queries', () => {
  let service: Queries;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Queries);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
