import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetMemberComponent } from './bottom-sheet-member.component';

describe('BottomSheetMemberComponent', () => {
  let component: BottomSheetMemberComponent;
  let fixture: ComponentFixture<BottomSheetMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomSheetMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomSheetMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
