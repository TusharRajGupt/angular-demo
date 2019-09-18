import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface myform {
    username: string;
    password: string;
  }

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signinForm: myform;

  constructor(private router: Router) {
    this.signinForm = {
      username: '',
      password: '',
    };
  }

  ngOnInit() {
  }

  onFormSubmit(){
    console.log(this.signinForm);
    localStorage.setItem('user', this.signinForm.username);
    this.router.navigate(['/profile']);
  }

}
