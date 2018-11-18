import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent {

  @Input() sidebarMenu;
  opened = false;

  constructor() {
    // NOOP
  }

  onToggleClick(state: boolean): void {
    this.opened = state;
  }

}
