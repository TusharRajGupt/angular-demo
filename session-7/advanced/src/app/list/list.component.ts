import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

    users: [{name: 'Tushar'}];

    constructor(public rest: RestService) { }

    ngOnInit() {
        this.getUsers();
    }

    getUsers() {
        this.rest.getUsers().subscribe( data => {
            console.log(data);
            this.users = data;
        });
    }

}
