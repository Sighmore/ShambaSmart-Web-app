import { TestBed } from '@angular/core/testing';

import { FaqsService } from './faqs';

describe('Faqs', () => {
  let service: FaqsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaqsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
