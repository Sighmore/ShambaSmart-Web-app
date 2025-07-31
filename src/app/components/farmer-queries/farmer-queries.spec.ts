import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerQueries } from './farmer-queries';

describe('FarmerQueries', () => {
  let component: FarmerQueries;
  let fixture: ComponentFixture<FarmerQueries>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarmerQueries]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmerQueries);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
