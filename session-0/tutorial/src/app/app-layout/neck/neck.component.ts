import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from './../../app-routing/auth.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-neck',
    templateUrl: './neck.component.html',
    styleUrls: ['./neck.component.scss']
})
export class NeckComponent implements OnInit {

    isLoggedIn$: Observable<boolean>;
    isLoggedOut$: Observable<boolean>;

    constructor(
        public authService: AuthService,
        private router: Router,
        private notif: MatSnackBar,
    ) { }

    ngOnInit() {
        this.isLoggedIn$ = this.authService.isLoggedIn$;
        this.isLoggedOut$ = this.authService.isLoggedOut$;
    }

    logout() {
    }
}
