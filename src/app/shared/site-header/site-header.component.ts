import {Component, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {SiteHeaderService} from '../services/site-header.service';
import {RouteUrls} from '../utils/route-urls';
import {componentDestroyed} from 'ng2-rx-componentdestroyed';
import { takeUntil } from 'rxjs/operators';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'app-common-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss']
})
export class SiteHeaderComponent implements OnDestroy {

  headerText: string;
  imgUrl: string;
  [key: string]: any; // componentDestroyed
  headerMenu = [];

  constructor(private router: Router,
              private headerService: SiteHeaderService) {
    this.imgUrl = window.location.origin + '/assets/img/logo.png';

    this.headerMenu.push({name: 'sandBoxModulePageTitle'
      , url: RouteUrls.sandboxPage.root + '/' + RouteUrls.sandboxPage.home, headerTitle: 'sandBoxModulePageHeader'});

    if (!isNullOrUndefined(router.config[0])) {
      this.headerText = this.headerMenu.find(m => router.config[0].redirectTo === m.url).headerTitle;
    }

    // Sets the header upon refresh according to the current url

    this.headerService.onSiteHeaderTextChange
      .pipe(takeUntil(componentDestroyed(this)))
      .subscribe(
        (headerText) => {
          if (headerText.match(RouteUrls.sandboxPage.root)) {
            this.headerText = 'sandBoxModulePageHeader';
          } else {
            this.headerText = '';
          }
        }
      );
  }

  /**
   * Upon navigation sets the header to the new page's name
   * @param newHeaderText - text
   */
  onMenuElemClick(newHeaderText: string): void {
    this.headerText = newHeaderText;
  }

  /**
   * When the user clicks on the logout button
   */
  onLogout(): void {
    // TODO when implemented
    // this.authService.logout();
  }

  ngOnDestroy(): void {
    // NOOP
  }
}
