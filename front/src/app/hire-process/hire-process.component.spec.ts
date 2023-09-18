import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireProcessComponent } from './hire-process.component';

describe('HireProcessComponent', () => {
  let component: HireProcessComponent;
  let fixture: ComponentFixture<HireProcessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HireProcessComponent]
    });
    fixture = TestBed.createComponent(HireProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
