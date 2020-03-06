import { Component } from '@angular/core';
import {
    Event,
    NavigationCancel,
    NavigationEnd,
    NavigationError,
    NavigationStart,
    Router
} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'tutorial';
    loading = false;

    constructor(private router: Router) {
        this.router.events.subscribe((event: Event) => {
            // console.log(event)
            switch (true) {
                case event instanceof NavigationStart: {
                    console.log('nav started');
                    this.loading = true;
                    break;
                }

                case event instanceof NavigationEnd:
                case event instanceof NavigationCancel:
                case event instanceof NavigationError: {
                    console.log('nav finished');
                    this.loading = false;
                    break;
                }
                default: {
                    break;
                }
            }
        });
    }
}
