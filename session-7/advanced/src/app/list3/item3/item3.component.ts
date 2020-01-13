import { Component, OnInit, Input, Self, SkipSelf } from '@angular/core';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-item3',
  templateUrl: './item3.component.html',
  styleUrls: ['./item3.component.scss'],
  providers: [RestService],
})
export class Item3Component implements OnInit {
  @Input() user;
  constructor(  private rest: RestService) { }

  ngOnInit() {
  }

}
