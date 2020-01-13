import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item2',
  templateUrl: './item2.component.html',
  styleUrls: ['./item2.component.scss']
})
export class Item2Component implements OnInit {

  @Input() user;

  constructor() { }

  ngOnInit() {
    console.log(this.user)
  }

}
