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

  now: Date;
  half = '0.5x';
  place = "Pune"
  man = { name: 'bob' }

  sites = ['Ind', 'US', 'UK', 'Aus']


  constructor() { }

  ngOnInit() {
    this.mark = 0;
    this.now = new Date();
    setTimeout(() => {
      this.man['place'] = {city: 'Pune'}

    }, 1000);
  }

  onStart() {
    this.timer = setInterval(this.increment, 1000);
    this.isPaused = false;
  }

  onPause() {
    clearInterval(this.timer)
    this.isPaused = true;
  }

  increment = () => {
    this.mark++
  }

}
