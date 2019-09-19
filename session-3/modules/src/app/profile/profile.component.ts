import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: string;
  joke;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.user = this.route.snapshot.paramMap.get('id');
    console.log(this.route.snapshot);
  }

  showJoke() {
    let comp = this;
    return this.http.get('https://api.chucknorris.io/jokes/random')
      .subscribe(
        data => {
          console.log(data.value);
          comp.joke = data['value']

        } ,
        error => { console.log(error); }
      );
  }

}
