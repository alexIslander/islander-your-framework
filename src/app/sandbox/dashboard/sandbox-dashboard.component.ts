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
    this.push('sidebarMenuDashboard', RouteUrls.sandboxPage.home, 'fa-home');
    this.push('sidebarMenuFirst', RouteUrls.sandboxPage.root + '/' + RouteUrls.sandboxPage.first, 'fa-magic');
    this.push('sidebarMenuSecond', RouteUrls.sandboxPage.root + '/' + RouteUrls.sandboxPage.second, 'fa-bolt');
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
