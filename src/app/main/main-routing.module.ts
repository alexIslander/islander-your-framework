import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RouteUrls} from '../route-urls';

const mainRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: '', redirectTo: RouteUrls.mainModule.root + '/' + RouteUrls.mainModule.home, pathMatch: 'full'},
      {path: RouteUrls.mainModule.home, component: HomeComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(mainRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule { }
