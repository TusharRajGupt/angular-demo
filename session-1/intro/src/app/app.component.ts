import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-counter></app-counter>`,
  styles: []
})
export class AppComponent {
  title = 'intro';
  nums = [1,2,3]
}
