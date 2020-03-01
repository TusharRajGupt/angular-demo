import { Component, OnInit, Inject } from '@angular/core';
import { myToken, APP_CONFIG, OrgConfig } from './../config';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-list4',
  templateUrl: './list4.component.html',
  styleUrls: ['./list4.component.scss'],
  providers: [
    // {provide: myToken, useValue: APP_CONFIG}
]
})
export class List4Component implements OnInit {

    users: [{name: 'Tushar'}];

    constructor(
        private rest: RestService,
        // @Inject(myToken) private config: OrgConfig,
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
