import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  joke;
  showError = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  showJoke() {
    let comp = this;
    // for POST, the signature is this.http.post(url, data, httpOptions)
    return this.http.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
      .subscribe(
        data => {
          console.log(data);
          comp.joke = data[0];

        } ,
        error => {
          console.log(error);
          comp.showError = true; 
        }
      );
  }

}
