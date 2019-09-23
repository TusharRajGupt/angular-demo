import { ViewChildChildComponent } from './view-child-child/view-child-child.component';
import { Component, OnInit, ViewChild, AfterContentChecked, AfterViewChecked, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-view-child-parent',
  templateUrl: './view-child-parent.component.html',
  styleUrls: ['./view-child-parent.component.css']
})
export class ViewChildParentComponent implements OnInit, AfterViewInit {

  @ViewChild(ViewChildChildComponent) reference: ViewChildChildComponent;

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.counter = () => {
      return this.reference.childCounter;;
    }
  }

  counter() {
    return 0;
  }

  increaseCounter() {
    this.reference.increaseCounter();
  }

  resetCounter() {
    this.reference.resetCounter();
  }

}
