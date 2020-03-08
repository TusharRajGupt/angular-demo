import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-neck',
    templateUrl: './neck.component.html',
    styleUrls: ['./neck.component.scss']
})
export class NeckComponent implements OnInit {

    isLoggedIn$: Observable<boolean>;
    username$: Observable<string>;

    constructor(
        public authService: AuthService,
        private router: Router,
        private notif: MatSnackBar,
    ) { }

    ngOnInit(): void {

        this.isLoggedIn$ = this.authService.isLoggedIn$;
        this.username$ = this.authService.user$.pipe(map(user => user.username));
    }

    logout() {
        // console.log('Logging out');
        this.authService.signOut().subscribe( val => {
            this.router.navigate(['/home']);
            this.notif.open('Logged out successfully', '', { duration: 2000});
        });
    }
}
