import { Component } from '@angular/core';
import { RestService2 } from './rest2.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [RestService2]
})
export class AppComponent {
  title = 'advanced';
}
