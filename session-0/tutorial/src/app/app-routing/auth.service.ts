import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from './../app.types';
import { map, shareReplay, tap } from 'rxjs/operators';

export const ANON: User = {
    id: undefined,
    username: '',
};

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private subject = new BehaviorSubject<User>(ANON);

    user$: Observable<User> = this.subject.asObservable();
    isLoggedIn$: Observable<boolean> = this.user$.pipe(map(user => !!user.id));
    isLoggedOut$: Observable<boolean> = this.isLoggedIn$.pipe(map(bool => !bool));

    constructor(private http: HttpClient) {

    }

    signIn(username: string, password: string) {
        return this.http.post<User>('http://localhost:2300/api/signin', {username, password})
            .pipe(
                shareReplay(),
                tap(validity => {
                    console.log('validity', validity);
                    return this.subject.next(validity);
                })
            );
    }
}
