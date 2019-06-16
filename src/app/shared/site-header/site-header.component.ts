import {AfterViewInit, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SiteHeaderService} from '../services/site-header.service';
import {componentDestroyed} from 'ng2-rx-componentdestroyed';
import { takeUntil } from 'rxjs/operators';
import {isNullOrUndefined} from 'util';
import {HeaderMenuItem} from "../dto/HeaderMenuItem";

@Component({
  selector: 'app-common-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss']
})
export class SiteHeaderComponent implements OnInit, OnDestroy {
  @Input() items: HeaderMenuItem[];
  @Input() default: string;
  headerText: string;
  imgUrl: string;
  [key: string]: any; // componentDestroyed
  headerMenu = [];

  constructor(private router: Router,
              private headerService: SiteHeaderService) {
    this.imgUrl = window.location.origin + '/assets/img/logo.png';
    // Sets the header upon refresh according to the current url
    this.headerService.onSiteHeaderTextChange
      .pipe(takeUntil(componentDestroyed(this)))
      .subscribe(
        (urlPath) => {
          const menuItem = this.headerMenu.find(hm => urlPath.includes(hm.url));
          this.headerText = !isNullOrUndefined(menuItem) ? menuItem.headerTitle : this.default;
        }
      );
  }

  ngOnInit(): void {
    if (!isNullOrUndefined(this.items)) {
      this.headerMenu = this.items;
      const item = this.headerMenu.find(m => this.router.config[0].redirectTo === m.url);
      this.headerText = !isNullOrUndefined(item) ? item.headerTitle : this.default;
    }
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
