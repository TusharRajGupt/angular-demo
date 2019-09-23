import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingParentComponent } from './data-binding-parent.component';

describe('DataBindingParentComponent', () => {
  let component: DataBindingParentComponent;
  let fixture: ComponentFixture<DataBindingParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataBindingParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindingParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
