import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {SnackbarUtil} from '../utils/snackbar.util';

@Component({
  selector: 'app-base-dialog-view-component',
  templateUrl: './base-dialog-view-component.component.html',
  styleUrls: ['./base-dialog-view-component.component.scss']
})
export class BaseDialogViewComponentComponent implements OnInit {

  generatedTransactionValues: any;
  dialogTitle: any;

  constructor(public dialogRef: MatDialogRef<BaseDialogViewComponentComponent>,
              private snackBar: SnackbarUtil,
              @Inject(MAT_DIALOG_DATA) public data: Object) {
    this.generatedTransactionValues = data['values'];
    this.dialogTitle = data['title'];
  }

  ngOnInit() {
    // NOOP
  }

  onClose($event) {
    this.dialogRef.close();
  }

}
