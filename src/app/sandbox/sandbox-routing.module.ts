import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SecondComponent} from './second/second.component';
import {FirstComponent} from './first/first.component';
import {RouteUrls} from '../route-urls';
import {SandboxHomeComponent} from './home/sandbox-home.component';
import {SandboxDashboardComponent} from './dashboard/sandbox-dashboard.component';
import {CustomKitchenSinkComponent} from './custom-kitchen-sink/custom-kitchen-sink.component';
import {SettingsComponent} from '../core/components/settings/settings.component';

const sandboxRoutes: Routes = [
  {
    path: '',
    component: SandboxDashboardComponent,
    children: [
      { path: '', redirectTo: RouteUrls.sandboxPage.home, pathMatch: 'full'},
      { path: RouteUrls.sandboxPage.home, component: SandboxHomeComponent },
      { path: RouteUrls.sandboxPage.first, component: FirstComponent },
      { path: RouteUrls.sandboxPage.second, component: SecondComponent },
      { path: RouteUrls.sandboxPage.mySink, component: CustomKitchenSinkComponent },
      { path: RouteUrls.sandboxPage.settings, component: SettingsComponent }
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
