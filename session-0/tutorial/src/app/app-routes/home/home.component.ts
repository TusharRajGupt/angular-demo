import { Component, OnInit } from '@angular/core';
import { PatronData } from './../../app.types';
import { PatronService } from './patron.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    clientList: PatronData[] = [{id: '0', name: 'yt'}];

    constructor(private patronService: PatronService) { }

    ngOnInit() {
        this.patronService.getPatrons()
            .subscribe(res => {
                this.clientList = res.data;
            });
    }

}
