import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intercept-input-parent',
  templateUrl: './intercept-input-parent.component.html',
  styleUrls: ['./intercept-input-parent.component.css']
})
export class InterceptInputParentComponent implements OnInit {


  parentCounter: number = 0;
  constructor() { }

  ngOnInit() {

  }

  increaseCounter() {
    this.parentCounter += 1;
  }

}
