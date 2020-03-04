import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmationDialogData} from '../../app.types';

@Component({
    selector: 'app-confirmation-dialog',
    templateUrl: './confirmation-dialog.component.html',
    styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {

    title: string;
    description: string;

    constructor(
        private dialogRef: MatDialogRef<ConfirmationDialogComponent>,
        @Inject(MAT_DIALOG_DATA) dialogData: ConfirmationDialogData
    ) {
        this.title = dialogData.title;
        this.description = dialogData.description;
    }

    ngOnInit() {
    }

    handleYes() {
        // console.log('handleYes');
        this.dialogRef.close(true);
    }

    handleNo() {
        // console.log('handleNo');
        this.dialogRef.close(false);
    }

}
