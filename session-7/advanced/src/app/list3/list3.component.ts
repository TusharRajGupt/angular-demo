
import { Component, OnInit, Inject, Optional, Host } from '@angular/core';
import { RestService } from '../rest.service';
import { RestService2 } from '../rest2.service';

@Component({
    selector: 'app-list3',
    templateUrl: './list3.component.html',
    styleUrls: ['./list3.component.scss'],
    providers: [
        RestService2
    ]
})
export class List3Component implements OnInit {

    users: [{name: 'Tushar'}];
    comment: '';

    constructor(
        private rest: RestService,
        private rest2: RestService2,
    ) {
    }

    ngOnInit() {
        this.getComment();
        this.getUsers();
    }

    getUsers() {
        this.rest.getUsers().subscribe( data => {
            this.users = data;
        });
    }

    getComment() {
        this.rest2.getComment().subscribe( data => {
            this.comment = data.title;
        });
    }

}
