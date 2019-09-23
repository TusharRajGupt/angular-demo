import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-parent',
  templateUrl: './data-binding-parent.component.html',
  styleUrls: ['./data-binding-parent.component.css']
})
export class DataBindingParentComponent implements OnInit {

  parentCounter: number = 0;
  constructor() { }

  ngOnInit() {

  }

  increaseCounter() {
    this.parentCounter += 1;
  }

}
