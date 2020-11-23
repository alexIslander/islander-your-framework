import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ExperimentRoutingModule} from './experiment-routing.module';
import {KitchensinkModule} from './kitchen-sink/kitchensink.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ExperimentRoutingModule,
    KitchensinkModule
  ]
})
export class ExperimentModule { }
