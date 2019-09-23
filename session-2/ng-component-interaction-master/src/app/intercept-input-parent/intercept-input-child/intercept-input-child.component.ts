import { Component, OnInit, SimpleChanges, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-intercept-input-child',
  templateUrl: './intercept-input-child.component.html',
  styleUrls: ['./intercept-input-child.component.css']
})
export class InterceptInputChildComponent implements OnInit, OnChanges {

  private _count: number;
  isCountEven: boolean;

  // @Input() childCounter = 0;

  @Input()
  get childCounter(): number {
    return this._count;
  }

  set childCounter(count: number) {
    this.isCountEven = (count % 2 === 0);
    this._count = count;
  }

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    // if (changes && changes.childCounter) {
    //   var count = changes.childCounter.currentValue;
    //   this.isCountEven = (count % 2 === 0);
    // }
  }
}
