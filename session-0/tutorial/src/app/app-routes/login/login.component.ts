import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../shared/confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogData } from '../../app.types';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/app-routing/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
    loginForm = this.fb.group({
        username: ['', [Validators.required, Validators.minLength(4)]],
        password: ['', [Validators.required]],
    });

    passwordHidden = true;

    constructor(
        private fb: FormBuilder,
        private dialog: MatDialog,
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit(): void {
    }

    onSubmit() {
        console.log('submitted');
        console.log(this.loginForm.value);
        this.loginForm.markAsPristine();
        this.signIn();
    }

    signIn() {
        const val = this.loginForm.value;
        this.authService.signIn(val.username, val.password);
    }

    getUsernameError() {
        if (this.username.hasError('required')) {
            return 'You must enter a value';
        } else if (this.username.hasError('minlength')) {
            return 'At least 4 characters required';
        }
    }

    unsavedFormGuard() {
        if (!this.loginForm.dirty) {
            return true;
        }
        const dialogConfig = new MatDialogConfig();
        const data: ConfirmationDialogData = {
            title: 'Discard changes?',
            description: 'Your have unsaved changes. Are you sure you want to navigate away?',
        };
        dialogConfig.disableClose = true;
        dialogConfig.data = data;

        const dialogRef = this.dialog.open(ConfirmationDialogComponent, dialogConfig);
        return dialogRef.afterClosed();
    }

    get username() { return this.loginForm.get('username'); }
    get password() { return this.loginForm.get('password'); }

}
