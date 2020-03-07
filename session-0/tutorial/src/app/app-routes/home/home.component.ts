import { Component, OnInit } from '@angular/core';
import { PatronData } from './../../app.types';
import { PatronService } from './patron.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    clientList;

    constructor(private patronService: PatronService) { }

    ngOnInit() {
        this.clientList = this.patronService.getPatrons();
    }

}
