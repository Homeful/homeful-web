import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetNavigateComponent } from './bottom-sheet-navigate.component';

describe('BottomSheetNavigateComponent', () => {
  let component: BottomSheetNavigateComponent;
  let fixture: ComponentFixture<BottomSheetNavigateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomSheetNavigateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomSheetNavigateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
