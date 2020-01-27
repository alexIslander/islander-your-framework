import {Injectable, NgZone} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {CustomSnackBarComponent} from '../custom-snack-bar/custom-snack-bar.component';
import {FrameworkLoaderService} from '../service/framework-loader.service';

@Injectable({
  providedIn: 'root'
})
export class SnackbarUtil {
  // MAT-HOTFIX
  // There is currently no option for a snackbar to be shown infinitely so we have to give
  // it a very high number and catch the afterClosed callback ourselves
  public static INFINITE_DURATION = 9000000;
  public static ERROR_ICON = 'fa-times';
  public static ERROR_STYLE = 'error-bar';
  public static WARNING_ICON = 'fa-exclamation';
  public static WARNING_STYLE = 'warning-bar';
  public static SUCCESS_ICON = 'fa-check';
  public static SUCCESS_STYLE = 'success-bar';

  public snackbarMessageDuration = 5000;

  constructor(private zone: NgZone,
              public loaderService: FrameworkLoaderService,
              public snackBar: MatSnackBar) {
    // NOOP
  }

  /**
   * Shows an Error Snackbar
   * @param snackbarContent - Text key
   * @param buttonText - Text key
   * @param snackbarMessageDuration - duration
   */
  showErrorSnackBar(snackbarContent: string, buttonText = 'closeButtonLabel', snackbarMessageDuration = SnackbarUtil.INFINITE_DURATION) {
    this.showRawSnackBar(snackbarContent, SnackbarUtil.ERROR_STYLE, buttonText, snackbarMessageDuration);
  }

  /**
   * Shows a Warning Snackbar
   * @param snackbarContent - Text key
   * @param buttonText - Text key
   * @param snackbarMessageDuration  - duration
   */
  showWarningSnackBar(snackbarContent: string, buttonText = 'okButtonLabel', snackbarMessageDuration = this.snackbarMessageDuration) {
    this.showRawSnackBar(snackbarContent, SnackbarUtil.WARNING_STYLE, buttonText, snackbarMessageDuration);
  }

  /**
   * Shows a Success Snackbar
   * @param snackbarContent - Text key
   * @param buttonText - Text key
   * @param snackbarMessageDuration - duration
   */
  showSuccessSnackBar(snackbarContent: string, buttonText = 'okButtonLabel', snackbarMessageDuration = this.snackbarMessageDuration) {
    this.showRawSnackBar(snackbarContent, SnackbarUtil.SUCCESS_STYLE, buttonText, snackbarMessageDuration);
  }

  /**
   * Shows a raw text snackbar with explicit content styling
   * @param snackbarContent - Raw text
   * @param contentStyle - style
   * @param buttonText - Text key
   * @param snackbarMessageDuration - duration
   */
  showRawSnackBar(snackbarContent: string, contentStyle: string, buttonText = 'okButtonLabel', snackbarMessageDuration =
    this.snackbarMessageDuration, waitForUserInput = false) {
    let icon = '';
    let button = '';

    // Depending on the snackbar style we pre-set the icon and button text
    switch (contentStyle) {
      case SnackbarUtil.ERROR_STYLE:
        icon = SnackbarUtil.ERROR_ICON;
        button = 'COMMON.CLOSE_BUTTON_LABEL';
        waitForUserInput = true;
        break;
      case SnackbarUtil.WARNING_STYLE:
        icon = SnackbarUtil.WARNING_ICON;
        button = 'COMMON.OK_BUTTON_LABEL';
        break;
      case SnackbarUtil.SUCCESS_STYLE:
        icon = SnackbarUtil.SUCCESS_ICON;
        button = 'COMMON.OK_BUTTON_LABEL';
        break;
      default:
        icon = SnackbarUtil.WARNING_ICON;
        button = buttonText;
    }

    this.showCustomSnackbar(snackbarContent, false, contentStyle, icon, button, snackbarMessageDuration, waitForUserInput);
  }

  /**
   * Shows a completely customizable snackbar
   * @param snackbarContent - Raw text
   * @param contentStyle - style
   * @param icon - icon
   * @param buttonText - Raw text
   * @param snackbarMessageDuration - duration
   * @param waitForUserInput - waitForUserInput
   */
  showCustomSnackbar(snackbarContent: string, isRawText = true, contentStyle: string, icon: string, buttonText: string, snackbarMessageDuration =
    this.snackbarMessageDuration, waitForUserInput = false) {
    this.zone.run(() => {
      const snackBarRef = this.snackBar.openFromComponent(CustomSnackBarComponent, {
        // How long the snackbar will be showing
        duration: snackbarMessageDuration,
        data: {
          'messageContent': snackbarContent,
          'isRawText': isRawText,
          'contentStyle': contentStyle,
          'iconParam': icon,
          'snackBarAction': buttonText,
          'waitForUserInput': waitForUserInput
        },
        panelClass: 'nopadding'
      });
      snackBarRef.onAction().subscribe(() => {
        this.loaderService.hide();
      });
    });
  }
}
