import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-window',
  templateUrl: './confirmation-window.component.html'
})
export class ConfirmationWindowComponent {

  public title;
  public confirmationText;
  public yesButtonText;
  public noButtonText;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Object) {
    if (data['title']) {
      this.title = data['title'];
    } else {
      this.title = 'COMMON.CONFIRMATION';
    }

    if (data['confirmationText']) {
      this.confirmationText = data['confirmationText'];
    } else {
      this.confirmationText = 'CONFIRMATION_MESSAGE';
    }

    if (data['yesButtonText']) {
      this.yesButtonText = data['yesButtonText'];
    } else {
      this.yesButtonText = 'COMMON.YES_BUTTON_LABEL';
    }

    if (data['noButtonText']) {
      this.noButtonText = data['noButtonText'];
    } else {
      this.noButtonText = 'COMMON.NO_BUTTON_LABEL';
    }
  }

  /**
   * Triggers when the user clicks on 'Yes'
   * @param event - param event
   */
  onYesClick(event: any): void {
    // NOOP
  }

  /**
   * Triggers when the user clicks on 'No'
   * @param event - param event
   */
  onNoClick(event: any): void {
    // NOOP
  }

}
