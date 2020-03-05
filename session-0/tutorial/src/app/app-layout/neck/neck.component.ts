import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
    selector: 'app-neck',
    templateUrl: './neck.component.html',
    styleUrls: ['./neck.component.scss']
})
export class NeckComponent implements OnInit {

    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit(): void {
    }

    logout() {
        console.log('Logging out');
        this.authService.logout();
        this.router.navigate(['/home']);
    }
}
