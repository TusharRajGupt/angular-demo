import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputBindingChildComponent } from './output-binding-child.component';

describe('OutputBindingChildComponent', () => {
  let component: OutputBindingChildComponent;
  let fixture: ComponentFixture<OutputBindingChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputBindingChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputBindingChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
