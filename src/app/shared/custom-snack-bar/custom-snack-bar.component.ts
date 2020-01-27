import {Component, Inject} from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material';

@Component({
  selector: 'app-custom-snack-bar',
  templateUrl: './custom-snack-bar.component.html',
  styleUrls: ['./custom-snack-bar.component.scss']
})
export class CustomSnackBarComponent {
  public iconParam: string;
  public contentStyle: string;
  public messageContent: any;
  public snackBarAction: string;
  public waitForUserInput: boolean;
  public isRawText: boolean;

  constructor(private snackBarRef: MatSnackBarRef<CustomSnackBarComponent>, @Inject(MAT_SNACK_BAR_DATA) public data: Object) {
    this.iconParam = data['iconParam'];
    this.contentStyle = data['contentStyle'];
    this.messageContent = data['messageContent'];
    this.isRawText = data['isRawText'];
    this.snackBarAction = data['snackBarAction'];
    this.waitForUserInput = data['waitForUserInput'];
  }

  buttonAction() {
    this.snackBarRef.dismissWithAction();
  }

}
