import { Component, OnInit, Input, Self, SkipSelf, Optional } from '@angular/core';
import { RestService2 } from './../../rest2.service';

@Component({
  selector: 'app-item3',
  templateUrl: './item3.component.html',
  providers: [
    // RestService2
  ],
})
export class Item3Component implements OnInit {
  @Input() user;
  constructor(@SkipSelf() private rest: RestService2) { }

  ngOnInit() {
  }

}
