import { PatronData } from './../../app.types';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PatronService {

    endpoint = 'http://localhost:2300';

    constructor(private http: HttpClient) {}

    getPatrons(): Observable<any> {
        return this.http
            .get<{data: PatronData[]}>(this.endpoint + '/patrons')
            .pipe(
                map(this.extractData)
            );
    }

    extractData(res) {
        return res.data || {};
    }
}
