import { User } from './app.types';
import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { tap, map, shareReplay, filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

export const ANON: User = {
    id: undefined,
    username: ''
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private subject = new BehaviorSubject<User>(undefined);

    user$ = this.subject.asObservable().pipe(filter(user => !!user));
    isLoggedIn$ = this.user$.pipe(map(user => !!user.username));

    constructor(private http: HttpClient) {
        this.http.get<User>('/api/getUser')
            .subscribe(user => {
                console.log('user logged', user);
                
                this.subject.next(user ? user : ANON)
            });
    }

    // store the URL so we can redirect after logging in
    // redirectUrl: string;

    signIn(username: string, password: string): Observable<User> {
        return this.http.post<User>('/api/signin', { username, password })
            .pipe(
                shareReplay(),
                tap(user => this.subject.next(user))
            );
    }

    signOut(): Observable<any> {
        return this.http.post('/api/signout', null)
            .pipe(
                shareReplay(),
                tap(user => this.subject.next(ANON))
            );
    }
}
