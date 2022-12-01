import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HooksAssignComponent } from './hooks-assign.component';

describe('HooksAssignComponent', () => {
  let component: HooksAssignComponent;
  let fixture: ComponentFixture<HooksAssignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HooksAssignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HooksAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
