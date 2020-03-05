import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../shared/confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogData } from '../../app.types';
import { AuthService } from './../../auth.service';

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

    constructor(
        private fb: FormBuilder,
        private dialog: MatDialog,
        private authService: AuthService,
    ) { }

    ngOnInit(): void {
    }

    onSubmit() {
        console.log('submitted');
    }

    getUsernameError() {
        if (this.username.hasError('required')) {
            return 'You must enter a value';
        } else if (this.username.hasError('minlength')) {
            return 'At least 6 characters required';
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
