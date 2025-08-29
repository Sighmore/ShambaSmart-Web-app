import { TestBed } from '@angular/core/testing';

import { CropDoctorService } from './crop-doctor-service';

describe('CropDoctorService', () => {
  let service: CropDoctorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CropDoctorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
