import { Observable, fromEvent } from 'rxjs';
import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  observer = {
    next: function (value: any) {
      console.log(value);
    },
    error: function (err: any) {
      console.log(err);
    },
    complete: function () {
      console.log('Complete')
    },
  };

  // button: any;

  constructor() { }

  ngOnInit() {
    // this.button = document.querySelector('button');

    this.createObservable();

  }

  createObservable() {

    Observable.create(subscriber => {
      setInterval(() => {
        subscriber.next(new Date().getSeconds())
      }, 1000);
    }).subscribe(this.observer);


    // Observable.create((obs) => {
    //   setInterval(() => {
    //     obs.next(new Date().getSeconds())
    //   }, 1000);
    // }).subscribe(this.observer);
  }
}
