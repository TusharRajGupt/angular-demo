import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-variable-child',
  templateUrl: './local-variable-child.component.html',
  styleUrls: ['./local-variable-child.component.css']
})
export class LocalVariableChildComponent implements OnInit {

  childCounter = 0;
  constructor() { }

  ngOnInit() {
  }

  increaseCounter() {
    this.childCounter += 1;
  }

  resetCounter() {
    this.childCounter = 0;
  }
}
