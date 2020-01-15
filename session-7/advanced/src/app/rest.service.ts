import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'https://jsonplaceholder.typicode.com/';
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};


@Injectable(
    { providedIn: 'root' }
)

export class RestService {

    constructor(private http: HttpClient) {
        console.log('Initiated');
     }

    private extractData(res: Response) {
        let body = res;
        return body || {};
    }

    getUsers(): Observable<any> {
        return this.http.get(endpoint + 'users').pipe(
            map(this.extractData)
        );
    }
}
