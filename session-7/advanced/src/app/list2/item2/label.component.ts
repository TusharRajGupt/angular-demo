import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-label',
  template: `
  <span>{{text}}</span>
  `,
  styles: []
})
export class LabelComponent implements OnInit {

  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}
