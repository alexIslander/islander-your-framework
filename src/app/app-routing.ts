import {ModuleWithProviders} from '@angular/core';
import {RouteUrls} from './shared/utils/route-urls';
import {RouterModule, Routes} from '@angular/router';
import {ErrorPageComponent} from './shared/error-page/error-page.component';
import {SecondComponent} from './sandbox/second/second.component';
import {SandboxDashboardComponent} from './sandbox/dashboard/dashboard.component';
import {SandboxHomeComponent} from './sandbox/home/home.component';
import {FirstComponent} from './sandbox/first/first.component';

const appRoutes: Routes = [
  { path: '', redirectTo: RouteUrls.sandboxPage.root + '/' + RouteUrls.sandboxPage.home, pathMatch: 'full'},
  {
    path: RouteUrls.sandboxPage.root,
    component: SandboxDashboardComponent,
    children: [
      { path: RouteUrls.sandboxPage.home, component: SandboxHomeComponent },
      { path: RouteUrls.sandboxPage.first, component: FirstComponent },
      { path: RouteUrls.sandboxPage.second, component: SecondComponent }
    ]
  },
  { path: '**', redirectTo: RouteUrls.errorPage },
  { path: RouteUrls.errorPage, component: ErrorPageComponent }
];
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
