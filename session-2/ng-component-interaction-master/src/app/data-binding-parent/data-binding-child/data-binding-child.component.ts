import { Component, OnInit, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-binding-child',
  templateUrl: './data-binding-child.component.html',
  styleUrls: ['./data-binding-child.component.css']
})
export class DataBindingChildComponent implements OnInit {

  @Input('counter') childCounter: number;

  // with alias
  // @Input('childCounter') childCounter;

  constructor() { }

  ngOnInit() {
  }

}
