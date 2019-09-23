import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output-binding-child',
  templateUrl: './output-binding-child.component.html',
  styleUrls: ['./output-binding-child.component.css']
})
export class OutputBindingChildComponent implements OnInit {

  private childCounter = 0;

  //NOTE: Clicking the button emits a number, a number (integer) payload.
  @Output() countUpdated: EventEmitter<number> = new EventEmitter();

  //with alias
  // @Output('countUpdated') countUpdated = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  increaseCounter() {
    this.childCounter += 1;
    this.countUpdated.emit(this.childCounter);
  }

}
