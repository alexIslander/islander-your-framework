import {NgModule} from '@angular/core';
import {RouteUrls} from './route-urls';
import {RouterModule, Routes} from '@angular/router';
import {ErrorPageComponent} from './shared/error-page/error-page.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: RouteUrls.sandboxPage.root + '/' + RouteUrls.sandboxPage.home, pathMatch: 'full'},
  {
    path: RouteUrls.sandboxPage.root,
    loadChildren: './sandbox/sandbox.module#SandboxModule'
  },
  {
    path: RouteUrls.experimentPage.root,
    loadChildren: './experiment/experiment.module#ExperimentModule'
  },
  /*
  {
    path: '',
    redirectTo: '/kitchensink',
    pathMatch: 'full'
  }

   */
  // {
  //   path: RouteUrls.xxxPage.root,
  //   loadChildren: '.sandbox/sandbox.module#SandboxModule'
  // },
  // {
  //   path: RouteUrls.xxxPage.root,
  //   component: SandboxDashboardComponent,
  //   children: [
  //     { path: RouteUrls.xxxPage.home, component: SandboxHomeComponent },
  //     { path: RouteUrls.xxxPage.second, component: SecondComponent }
  //   ]
  // },
  { path: '**', redirectTo: RouteUrls.errorPage }
  ,
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
