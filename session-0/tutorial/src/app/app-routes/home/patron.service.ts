import { PatronData } from './../../app.types';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PatronService {

    endpoint = 'http://localhost:2300';

    constructor(private http: HttpClient) {}

    getPatrons() {
        return this.http.get<{data: PatronData[]}>(this.endpoint + '/patrons');
    }
}
