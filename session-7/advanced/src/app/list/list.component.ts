import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor() { }

  nums: Array<number>;
  showOptions = true;

  ngOnInit() {
    this.nums = [1, 2, 3, 4, 5, 6];

  }

}
