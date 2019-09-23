import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputBindingParentComponent } from './output-binding-parent.component';

describe('OutputBindingParentComponent', () => {
  let component: OutputBindingParentComponent;
  let fixture: ComponentFixture<OutputBindingParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputBindingParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputBindingParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
