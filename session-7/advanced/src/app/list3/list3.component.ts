import { CONFIG_TOKEN, APP_CONFIG, OrgConfig } from './../config';
import { Component, OnInit, Inject } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
    selector: 'app-list3',
    templateUrl: './list3.component.html',
    styleUrls: ['./list3.component.scss'],
    providers: [
        // {provide: CONFIG_TOKEN, useValue: APP_CONFIG}
    ]
})
export class List3Component implements OnInit {

    users: [{name: 'Tushar'}];

    constructor(
        private rest: RestService,
        @Inject(CONFIG_TOKEN) private config: OrgConfig,
    ) {
        // console.log('config: ', config);
    }

    ngOnInit() {
        this.getUsers();
    }

    getUsers() {
        this.rest.getUsers().subscribe( data => {
            this.users = data;
        });
    }

}
