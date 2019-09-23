import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalVariableParentComponent } from './local-variable-parent.component';

describe('LocalVariableParentComponent', () => {
  let component: LocalVariableParentComponent;
  let fixture: ComponentFixture<LocalVariableParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalVariableParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalVariableParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
