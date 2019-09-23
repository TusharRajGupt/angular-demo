import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterceptInputParentComponent } from './intercept-input-parent.component';

describe('InterceptInputParentComponent', () => {
  let component: InterceptInputParentComponent;
  let fixture: ComponentFixture<InterceptInputParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterceptInputParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterceptInputParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
