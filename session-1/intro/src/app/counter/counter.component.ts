import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  mark: number;
  timer: any;

  constructor() { }

  ngOnInit() {
    this.mark = 0;
  }

  onStart() {
    this.timer = setInterval(this.increment, 1000);
  }

  onPause() {
    clearInterval(this.timer)
  }

  increment = () => {
    this.mark++
  }

}
