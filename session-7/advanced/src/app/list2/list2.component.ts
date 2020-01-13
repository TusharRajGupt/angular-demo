import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
    selector: 'app-list2',
    templateUrl: './list2.component.html',
    styleUrls: ['./list2.component.scss']
})
export class List2Component implements OnInit {

    users;
    user1;
    user2;

    constructor(public rest: RestService) { }

    ngOnInit() {
        this.getUsers();
    }

    getUsers() {
        this.rest.getUsers().subscribe(data => {
            console.log(data);
            this.users = data;
            this.user1 = data[0];
            this.user2 = data[1];
        });
    }

}
