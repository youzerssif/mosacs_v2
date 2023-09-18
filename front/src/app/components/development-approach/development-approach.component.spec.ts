import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentApproachComponent } from './development-approach.component';

describe('DevelopmentApproachComponent', () => {
  let component: DevelopmentApproachComponent;
  let fixture: ComponentFixture<DevelopmentApproachComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DevelopmentApproachComponent]
    });
    fixture = TestBed.createComponent(DevelopmentApproachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
