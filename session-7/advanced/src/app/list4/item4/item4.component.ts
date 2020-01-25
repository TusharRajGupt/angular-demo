import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-item4',
    templateUrl: './item4.component.html',
    styleUrls: ['./item4.component.scss']
})
export class Item4Component implements OnInit {

    @Input() user;

    constructor() { }

    ngOnInit() {
    }

}
