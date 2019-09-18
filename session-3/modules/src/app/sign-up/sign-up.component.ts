import { matchValidator } from './../match.validator';
import { CanDeactivate } from '@angular/router';
import { Component, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit, OnChanges {
  // signupForm = this.fb.group({
  //   username: [''],
  //   email: [''],
  //   phone: [''],
  // });

  signupForm = this.fb.group({
    username: ['', [Validators.minLength(4), Validators.maxLength(8)]],
    email: ['', Validators.email],
    phone: [''],
    password: [''],
    retypePassword: [''],
  }, {validators: matchValidator});

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log(this.signupForm.value);
  }

  onFormSubmit(){
    alert('x')
  }

  canDeactivate() {
    let reply = confirm("Discard all changes?")
    return reply;

  }

  get username() {
    return this.signupForm.get('username');
  }

  get email() {
    return this.signupForm.get('email');
  }


}
