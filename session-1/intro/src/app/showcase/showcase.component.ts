import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {

  now: Date;
  half = 0.5;

  constructor() { }

  ngOnInit() {
    this.now = new Date();
  }

}
