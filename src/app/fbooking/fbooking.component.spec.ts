import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbookingComponent } from './fbooking.component';

describe('FbookingComponent', () => {
  let component: FbookingComponent;
  let fixture: ComponentFixture<FbookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FbookingComponent]
    });
    fixture = TestBed.createComponent(FbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
