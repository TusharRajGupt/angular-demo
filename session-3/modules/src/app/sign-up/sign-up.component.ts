import { CanDeactivate } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signupForm = this.fb.group({
    username: [''],
    email: [''],
    phone: [''],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onFormSubmit(){
    alert('x')
  }

  canDeactivate() {
    let reply = confirm("Discard all changes?")
    return reply;

  }


}
