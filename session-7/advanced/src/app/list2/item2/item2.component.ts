import { LabelComponent } from './label.component';
import { Component, OnInit, AfterViewInit, Input, ViewChild, ViewChildren, ElementRef, AfterContentInit, ContentChild } from '@angular/core';
import { SSL_OP_TLS_BLOCK_PADDING_BUG } from 'constants';

@Component({
  selector: 'app-item2',
  templateUrl: './item2.component.html',
  styleUrls: ['./item2.component.scss']
})
export class Item2Component implements OnInit, AfterViewInit, AfterContentInit {

  @Input() user;

  // @ViewChild('labelRef') label;

  
  // @ViewChild('labelRef', {static: false, read: ElementRef}) label;
  
  // @ViewChildren(LabelComponent) label;

  // @ContentChild('contactRef') slot;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // console.log('label: ',  this.label);
  }

  ngAfterContentInit() {
    // console.log('slot: ', this.slot);

  }

}
