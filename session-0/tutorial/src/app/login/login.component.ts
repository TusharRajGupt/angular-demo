import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm = this.fb.group({
        username: ['', [Validators.required, Validators.minLength(6)]],
        password: ['', [Validators.required]],
    });

    passwordHidden = true;
    isFormValid: boolean;

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        this.isFormValid = this.loginForm.status === 'VALID';
    }

    onSubmit() {
        console.log('submitted');
        console.log(this.loginForm.status);
        console.log(this.isFormValid);
    }
    
    getUsernameError() {
        console.log(this.isFormValid);
        console.log(this.loginForm.status);
        
        if (this.username.hasError('required')) {
            return 'You must enter a value';
        } else if (this.username.hasError('minlength')) {
            return 'At least 6 characters required';
        }
    }

    get username() { return this.loginForm.get('username'); }
    get password() { return this.loginForm.get('password'); }

}
