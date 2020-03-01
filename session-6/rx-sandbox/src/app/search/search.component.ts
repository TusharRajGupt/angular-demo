import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, distinctUntilChanged, debounceTime } from 'rxjs/operators';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, AfterViewInit {

    @ViewChild('box')
    box;

    constructor() { }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
        fromEvent<any>(this.box.nativeElement, 'keyup')
            .pipe(
                map(e => e.target.value),
                debounceTime(500),
                distinctUntilChanged()
            )
            .subscribe(v => console.log(v));
    }

}
