import { Component } from '@angular/core';
import {SnackbarUtil} from './shared/utils/snackbar.util';
import {NotificationService} from './shared/service/notification.service';
import {HeaderMenuIItem} from './shared/dto/header-menuI-item';
import {RouteUrls} from './route-urls';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  public appComponent;
  public headerMenuItems = [];

  constructor(private notificationService: NotificationService,
              private snackBar: SnackbarUtil) {
    this.appComponent = this;
    this.headerMenuItems.push({name: 'sandBoxModulePageTitle',
      url: RouteUrls.sandboxPage.root + '/' + RouteUrls.sandboxPage.home,
      headerTitle: 'sandBoxModulePageHeader'} as HeaderMenuIItem);
    this.headerMenuItems.push({name: 'mainModulePageTitle',
      url: RouteUrls.mainModule.root + '/' + RouteUrls.mainModule.home,
      headerTitle: 'mainModulePageHeader'} as HeaderMenuIItem);
    this.notificationService
      .onError(message => {
        if (message != null) {
          this.snackBar.showRawSnackBar(message, SnackbarUtil.ERROR_STYLE, 'closeButton', SnackbarUtil.INFINITE_DURATION, true);
        }
      });
  }
}
