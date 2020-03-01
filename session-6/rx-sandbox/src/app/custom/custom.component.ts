import { createHttpObservable } from './../app.utils';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-custom',
    templateUrl: './custom.component.html',
})
export class CustomComponent implements OnInit {
    url = 'http://www.omdbapi.com/?apikey=57bcdb81&i=tt3896198';
    constructor() { }

    ngOnInit(): void {
        const http$ = createHttpObservable('harry');

        const movies$ = http$.pipe(
            // tslint:disable-next-line: no-string-literal
            map(res => res['Search'])
        );

        movies$.subscribe(
            movies => console.log(movies),
            err => console.error(err),
            () => console.log('completed')
        );



    }

}
