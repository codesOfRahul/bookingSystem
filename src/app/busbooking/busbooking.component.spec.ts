import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusbookingComponent } from './busbooking.component';

describe('BusbookingComponent', () => {
  let component: BusbookingComponent;
  let fixture: ComponentFixture<BusbookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusbookingComponent]
    });
    fixture = TestBed.createComponent(BusbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
