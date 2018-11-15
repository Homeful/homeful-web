import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetRouteComponent } from './bottom-sheet-route.component';

describe('BottomSheetRouteComponent', () => {
  let component: BottomSheetRouteComponent;
  let fixture: ComponentFixture<BottomSheetRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomSheetRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomSheetRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
