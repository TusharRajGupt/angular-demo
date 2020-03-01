import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { interval, timer, fromEvent, of, Observable, from, Subscription } from 'rxjs';
import {map, distinctUntilChanged} from 'rxjs/operators';

@Component({
    selector: 'app-play',
    templateUrl: './play.component.html',
})
export class PlayComponent implements OnInit, AfterViewInit, OnDestroy {

    // count = 1;
    // clicked = false;
    // interval$;
    test$: Observable<number>;
    sub: Subscription;

    @ViewChild('box')
    box;

    constructor() { }

    ngOnInit(): void {
        // this.interval$ = interval(1000);
        this.test$ = from([1, 2, 3, 4]);
        // const timer$ = timer(2000, 1000);
        // let sub = timer$.subscribe(val => { this.count = val; });
        this.test$.subscribe(a => console.log(a));
    }

    ngAfterViewInit() {
        fromEvent<any>(this.box.nativeElement, 'keyup')
        .pipe(
            map(e => e.target.value),
            distinctUntilChanged()
        )
        .subscribe(v => console.log(v));
    }

    ngOnDestroy() {
        // this.sub.unsubscribe();
    }

}
