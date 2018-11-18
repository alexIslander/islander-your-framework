import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { GetTextByKeyPipe } from '../utils/get-text-by-key.pipe';

@Component({
  selector: 'app-confirmation-window',
  templateUrl: './confirmation-window.component.html'
})
export class ConfirmationWindowComponent {

  public title;
  public confirmationText;
  public yesButtonText;
  public noButtonText;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Object,
    private textPipe: GetTextByKeyPipe
  ) {
    if (data['title']) {
      this.title = data['title'];
    } else {
      this.title = this.textPipe.transform('confirmation');
    }

    if (data['confirmationText']) {
      this.confirmationText = data['confirmationText'];
    } else {
      this.confirmationText = this.textPipe.transform('confirmationMessage');
    }

    if (data['yesButtonText']) {
      this.yesButtonText = data['yesButtonText'];
    } else {
      this.yesButtonText = this.textPipe.transform('yesButtonLabel');
    }

    if (data['noButtonText']) {
      this.noButtonText = data['noButtonText'];
    } else {
      this.noButtonText = this.textPipe.transform('noButtonLabel');
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
