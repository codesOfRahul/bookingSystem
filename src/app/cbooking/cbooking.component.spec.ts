import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbookingComponent } from './cbooking.component';

describe('CbookingComponent', () => {
  let component: CbookingComponent;
  let fixture: ComponentFixture<CbookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CbookingComponent]
    });
    fixture = TestBed.createComponent(CbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
