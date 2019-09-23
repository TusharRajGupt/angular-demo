import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-child-child',
  templateUrl: './view-child-child.component.html',
  styleUrls: ['./view-child-child.component.css']
})
export class ViewChildChildComponent implements OnInit {

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
