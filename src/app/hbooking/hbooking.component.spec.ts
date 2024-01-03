import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HbookingComponent } from './hbooking.component';

describe('HbookingComponent', () => {
  let component: HbookingComponent;
  let fixture: ComponentFixture<HbookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HbookingComponent]
    });
    fixture = TestBed.createComponent(HbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
