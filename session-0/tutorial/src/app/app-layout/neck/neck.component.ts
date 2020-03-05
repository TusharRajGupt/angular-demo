import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/auth.service';

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
        console.log('Logging out');
        this.authService.logout();
        this.router.navigate(['/home']);
        this.notif.open('Logged out successfully', '', { duration: 2000});
    }
}
