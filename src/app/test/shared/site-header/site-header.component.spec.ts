import { initContext, TestContext } from '../../test-context';
import { SiteHeaderComponent } from '../../../shared/site-header/site-header.component';

import { SidebarMenuComponent } from '../../../shared/sidebar-menu/sidebar-menu.component';

import { APP_BASE_HREF } from '@angular/common';
import {SiteHeaderService} from '../../../shared/services/site-header.service';
import {ErrorPageComponent} from '../../../shared/error-page/error-page.component';
import {FirstComponent} from '../../../sandbox/first/first.component';
import {SandboxDashboardComponent} from '../../../sandbox/dashboard/dashboard.component';
import {SandboxHomeComponent} from '../../../sandbox/home/home.component';
import {SecondComponent} from '../../../sandbox/second/second.component';
import {Router} from "@angular/router";

describe('SiteHeaderComponent', () => {

  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  type Context = TestContext<SiteHeaderComponent>;
  initContext(SiteHeaderComponent, {
    imports: [

    ],
    declarations: [
      SidebarMenuComponent,
      ErrorPageComponent,
      SandboxDashboardComponent,
      SandboxHomeComponent,
      FirstComponent,
      SecondComponent
    ],
    providers: [
      SiteHeaderService,
      { provide: APP_BASE_HREF, useValue : '/' },
      {provide: Router, useValue: mockRouter}
    ]
  });

  it('should be initialized', function(this: Context) {
    expect(this.component).toBeTruthy();
  });

  it('should have onMenuElemClick', function(this: Context) {
    const newHeaderText = 'New_Header_Text';
    this.component.headerText = '';
    this.component.onMenuElemClick(newHeaderText);
    expect(this.component.headerText).toEqual(newHeaderText);
  });

  // TODO test when implemented
  // it('should have onLogout', function(this: Context) {
  //   const authService = TestBed.get(AuthService);
  //   spyOn(authService, 'logout');
  //   this.component.onLogout();
  //   expect(authService.logout).toHaveBeenCalled();
  // });
});
