import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SecondComponent} from './second/second.component';
import {FirstComponent} from './first/first.component';
import {RouteUrls} from '../route-urls';
import {SandboxHomeComponent} from './home/home.component';
import {SandboxDashboardComponent} from './dashboard/sandbox-dashboard.component';

const sandboxRoutes: Routes = [
  {
    path: '',
    component: SandboxDashboardComponent,
    children: [
      { path: '', redirectTo: RouteUrls.sandboxPage.home, pathMatch: 'full'},
      { path: RouteUrls.sandboxPage.home, component: SandboxHomeComponent },
      { path: RouteUrls.sandboxPage.first, component: FirstComponent },
      { path: RouteUrls.sandboxPage.second, component: SecondComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(sandboxRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SandboxRoutingModule {

}
