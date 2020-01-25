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
    // { providedIn: 'root' }
)

export class RestService2 {

    constructor(private http: HttpClient) {
        // console.log('Initiated');
     }

    private extractData(res: Response) {
        return res || {};
    }

    getComment(): Observable<any> {
        return this.http.get(endpoint + 'posts/7').pipe(
            map(this.extractData)
        );
    }
}
