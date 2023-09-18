import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToWorkComponent } from './how-to-work.component';

describe('HowToWorkComponent', () => {
  let component: HowToWorkComponent;
  let fixture: ComponentFixture<HowToWorkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HowToWorkComponent]
    });
    fixture = TestBed.createComponent(HowToWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
