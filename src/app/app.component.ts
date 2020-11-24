import { Component } from '@angular/core';
import {SnackbarUtil} from './shared/utils/snackbar.util';
import {NotificationService} from './shared/service/notification.service';
import {HeaderMenuItem} from './shared/dto/HeaderMenuItem';
import {RouteUrls} from './route-urls';
import {TranslateService} from '@ngx-translate/core';
import {configureTranslation} from './shared/module/app-translate/app-translate.module';
import {ThemePickerService} from './core/modules/theme-picker/services/theme-picker.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  public appComponent;
  public headerMenuItems = [];
  readonly themeClass: Observable<string>;
  readonly applicationName = 'YourFramework';

  constructor(private notificationService: NotificationService,
              private snackBar: SnackbarUtil,
              private translate: TranslateService,
              private colorPicker: ThemePickerService) {
    this.themeClass = this.colorPicker.colorClass$;
    this.appComponent = this;
    configureTranslation(translate);
    this.headerMenuItems.push({name: 'SANDBOX.PAGE_HEADER',
      url: RouteUrls.sandboxPage.root + '/' + RouteUrls.sandboxPage.home,
      headerTitle: 'SANDBOX.PAGE_TITLE'} as HeaderMenuItem);
    this.headerMenuItems.push({name: 'EXPERIMENT.PAGE_HEADER',
      url: RouteUrls.experimentPage.root,
      headerTitle: 'EXPERIMENT.PAGE_TITLE'} as HeaderMenuItem);
    this.notificationService
      .onError(message => {
        if (message != null) {
          this.snackBar.showRawSnackBar(message, SnackbarUtil.ERROR_STYLE, 'closeButton', SnackbarUtil.INFINITE_DURATION, true);
        }
      });
  }

}
