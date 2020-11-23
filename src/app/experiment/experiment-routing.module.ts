import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

const experimentRoutes: Routes = [
  {
    path: 'kitchensink',
    loadChildren: './kitchen-sink/kitchensink.module#KitchensinkModule'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(experimentRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ExperimentRoutingModule {}
