import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalVariableChildComponent } from './local-variable-child.component';

describe('LocalVariableChildComponent', () => {
  let component: LocalVariableChildComponent;
  let fixture: ComponentFixture<LocalVariableChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalVariableChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalVariableChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
