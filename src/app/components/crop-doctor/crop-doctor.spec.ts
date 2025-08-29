import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropDoctor } from './crop-doctor';

describe('CropDoctor', () => {
  let component: CropDoctor;
  let fixture: ComponentFixture<CropDoctor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CropDoctor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CropDoctor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
