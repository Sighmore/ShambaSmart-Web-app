import { TestBed } from '@angular/core/testing';

import { Extension } from './extension';

describe('Extension', () => {
  let service: Extension;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Extension);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
