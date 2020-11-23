import { Component, OnInit } from '@angular/core';
import {RouteUrls} from '../../route-urls';

@Component({
  selector: 'app-dashboard',
  templateUrl: './sandbox-dashboard.component.html',
  styleUrls: ['./sandbox-dashboard.component.scss']
})
export class SandboxDashboardComponent implements OnInit {

  sidebarMenu = [];

  constructor() {
    this.push('SANDBOX.SIDEBAR_MENU_DASHBOARD', RouteUrls.sandboxPage.root, 'fa-home');
    this.push('SANDBOX.SIDEBAR_MENU_FIRST', RouteUrls.sandboxPage.root + '/' + RouteUrls.sandboxPage.first, 'fa-magic');
    this.push('SANDBOX.SIDEBAR_MENU_SECOND', RouteUrls.sandboxPage.root + '/' + RouteUrls.sandboxPage.second, 'fa-bolt');
    this.push('SANDBOX.SIDEBAR_MENU_MY_SINK', RouteUrls.sandboxPage.root + '/' + RouteUrls.sandboxPage.mySink, 'fa-bath');
    this.push('SANDBOX.SIDEBAR_SETTINGS', RouteUrls.sandboxPage.root + '/' + RouteUrls.sandboxPage.settings, 'fa-sliders');
  }

  push(name: String, url: String, icon: String) {
    this.sidebarMenu.push(
      { name: name, url: url, icon: icon }
    );
  }

  ngOnInit() {
    // NOOP
  }

}
