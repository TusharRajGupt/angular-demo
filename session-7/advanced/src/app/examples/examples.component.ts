import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {

  nums = [1, 2, 3, 4, 5, 6];
  showOptions = true;


  constructor() { }

  ngOnInit() {
  }

}
