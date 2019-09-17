import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input() id: number;
  mark: number;
  timer: any;
  isPaused = true;
  place = "Pune"

  constructor() { }

  ngOnInit() {
    this.mark = 0;
  }

  onStart(e) {
    this.timer = setInterval(this.increment, 1000);
    this.isPaused = false;
    console.log(e.target)
  }

  onPause() {
    clearInterval(this.timer)
    this.isPaused = true;
  }

  increment = () => {
    this.mark++
  }

}
