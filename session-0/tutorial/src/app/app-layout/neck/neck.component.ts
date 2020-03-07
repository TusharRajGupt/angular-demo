import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from './../../app-routing/auth.service';

@Component({
    selector: 'app-neck',
    templateUrl: './neck.component.html',
    styleUrls: ['./neck.component.scss']
})
export class NeckComponent implements OnInit {

    constructor(
        public authService: AuthService,
        private router: Router,
        private notif: MatSnackBar,
    ) { }

    ngOnInit(): void {
    }

    logout() {
    }
}
