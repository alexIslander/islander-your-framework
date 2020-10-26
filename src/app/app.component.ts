import { Component } from '@angular/core';
import {SnackbarUtil} from './shared/utils/snackbar.util';
import {NotificationService} from './shared/service/notification.service';
import {HeaderMenuItem} from './shared/dto/HeaderMenuItem';
import {RouteUrls} from './route-urls';
import {TranslateService} from '@ngx-translate/core';
import {configureTranslation} from './shared/module/app-translate/app-translate.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  public appComponent;
  public headerMenuItems = [];

  constructor(private notificationService: NotificationService,
              private snackBar: SnackbarUtil,
              private translate: TranslateService) {
    this.appComponent = this;
    configureTranslation(translate);
    this.headerMenuItems.push({name: 'SANDBOX.PAGE_HEADER',
      url: RouteUrls.sandboxPage.root + '/' + RouteUrls.sandboxPage.home,
      headerTitle: 'SANDBOX.PAGE_TITLE'} as HeaderMenuItem);
    // this.headerMenuItems.push({name: 'SANDBOX.XXX_MODULE_PAGE_TITLE',
    this.notificationService
      .onError(message => {
        if (message != null) {
          this.snackBar.showRawSnackBar(message, SnackbarUtil.ERROR_STYLE, 'closeButton', SnackbarUtil.INFINITE_DURATION, true);
        }
      });
  }
}
