import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './../app.types';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    user$: Observable<User>;

    constructor(private http: HttpClient) {

    }
}
