import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm = this.fb.group({
        username: [''],
        password: [''],
    });

    passwordHidden = true;

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
    }

    onSubmit() {
        console.log('submitted');
        console.log(this.loginForm.value);
    }

}
