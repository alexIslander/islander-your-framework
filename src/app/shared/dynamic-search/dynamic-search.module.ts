import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormErrorMessageModule} from '../form-error-message/form-error-message.module';
import {StandardErrorMessageMappings} from '../../config/form-error-message-config';
import {DynamicSearchComponent} from './dynamic-search.component';
import {DynamicSearchValidator} from './dynamic-search-validator';
import {DynamicSearchMapper} from './dynamic-search-mapper';
import {DynamicSearchFormLogic} from './dynamic-search-form-logic';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppMaterialModule} from '../app-material/app-material.module';
import {SharedModule} from '../shared.module';
import { DynamicFieldDirective } from './directive/dynamic-field.directive';

@NgModule({
  declarations: [
    DynamicSearchComponent,
    DynamicFieldDirective
  ],
  imports: [
    CommonModule,
    OverlayPanelModule,
    ReactiveFormsModule,
    FormErrorMessageModule.forRoot(StandardErrorMessageMappings),
    AppMaterialModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    DynamicSearchValidator,
    DynamicSearchMapper,
    DynamicSearchFormLogic
  ],
  exports: [
    DynamicSearchComponent
  ],
  entryComponents: [DynamicSearchComponent],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class DynamicSearchModule {
}
