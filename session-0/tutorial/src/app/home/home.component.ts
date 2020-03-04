import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from './../shared/confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogData } from './../app.types';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(private dialog: MatDialog) { }

    ngOnInit(): void {
    }

    openDialog(): void {
        const dialogConfig = new MatDialogConfig();
        const data: ConfirmationDialogData = {
            title: 'Unsaved Changes',
            description: 'Are you sure you want to navigate away?',
        };
        dialogConfig.disableClose = true;
        dialogConfig.data = data;

        const dialogRef = this.dialog.open(ConfirmationDialogComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(res => {
            console.log(res);
        });

    }


}
