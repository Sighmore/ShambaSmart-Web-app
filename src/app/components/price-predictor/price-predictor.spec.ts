import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricePredictor } from './price-predictor';

describe('PricePredictor', () => {
  let component: PricePredictor;
  let fixture: ComponentFixture<PricePredictor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricePredictor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricePredictor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
