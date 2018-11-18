import { Component } from '@angular/core';
import {SnackbarUtil} from './shared/utils/snackbar.util';
import {NotificationService} from './shared/services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  public appComponent;

  constructor(private notificationService: NotificationService,
              private snackBar: SnackbarUtil) {
    this.appComponent = this;
    this.notificationService
      .onError(message => {
        if (message != null) {
          this.snackBar.showRawSnackBar(message, SnackbarUtil.ERROR_STYLE, 'closeButton', SnackbarUtil.INFINITE_DURATION, true);
        }
      });
  }
}
