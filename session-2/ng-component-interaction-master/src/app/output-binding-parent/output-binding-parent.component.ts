import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-binding-parent',
  templateUrl: './output-binding-parent.component.html',
  styleUrls: ['./output-binding-parent.component.css']
})
export class OutputBindingParentComponent implements OnInit {

  parentCounter: number = 0;
  constructor() { }

  ngOnInit() {

  }

  onCountUpdated(count: number) {
    this.parentCounter = count;
  }

}
