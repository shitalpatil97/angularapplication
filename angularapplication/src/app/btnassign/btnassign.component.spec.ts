import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnassignComponent } from './btnassign.component';

describe('BtnassignComponent', () => {
  let component: BtnassignComponent;
  let fixture: ComponentFixture<BtnassignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnassignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnassignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
