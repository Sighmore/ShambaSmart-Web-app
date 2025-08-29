import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartInputAdvisor } from './smart-input-advisor';

describe('SmartInputAdvisor', () => {
  let component: SmartInputAdvisor;
  let fixture: ComponentFixture<SmartInputAdvisor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartInputAdvisor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartInputAdvisor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
