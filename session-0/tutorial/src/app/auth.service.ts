import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) { }

    isLoggedIn = false;

    // store the URL so we can redirect after logging in
    redirectUrl: string;

    login(): Observable<boolean> {
        return of(true).pipe(
            delay(1000),
            tap(val => this.isLoggedIn = true)
        );
    }

    signin(): Observable<any> {
        return this.http.get('/api/signin');
    }

    logout(): void {
        this.isLoggedIn = false;
    }
}
