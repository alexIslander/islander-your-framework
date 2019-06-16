import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouteUrls} from './route-urls';
import {RouterModule, Routes} from '@angular/router';
import {ErrorPageComponent} from './shared/error-page/error-page.component';
import {SecondComponent} from './sandbox/second/second.component';
import {SandboxDashboardComponent} from './sandbox/dashboard/dashboard.component';
import {SandboxHomeComponent} from './sandbox/home/home.component';
import {FirstComponent} from './sandbox/first/first.component';
import {SandboxRoutingModule} from "./sandbox/sandbox-routing.module";

const appRoutes: Routes = [
  { path: '', redirectTo: RouteUrls.sandboxPage.root + '/' + RouteUrls.sandboxPage.home, pathMatch: 'full'},
  {
    path: RouteUrls.sandboxPage.root,
    loadChildren: '.sandbox/sandbox.module#SandboxModule'
  },
  // {
  //   path: RouteUrls.xxxPage.root,
  //   loadChildren: '.sandbox/sandbox.module#SandboxModule'
  // },
  {
    path: RouteUrls.xxxPage.root,
    component: SandboxDashboardComponent,
    children: [
      { path: RouteUrls.xxxPage.home, component: SandboxHomeComponent },
      { path: RouteUrls.xxxPage.second, component: SecondComponent }
    ]
  },
  { path: '**', redirectTo: RouteUrls.errorPage },
  { path: RouteUrls.errorPage, component: ErrorPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}
