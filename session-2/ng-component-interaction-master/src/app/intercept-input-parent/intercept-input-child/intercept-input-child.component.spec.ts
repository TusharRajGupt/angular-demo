import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterceptInputChildComponent } from './intercept-input-child.component';

describe('InterceptInputChildComponent', () => {
  let component: InterceptInputChildComponent;
  let fixture: ComponentFixture<InterceptInputChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterceptInputChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterceptInputChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
