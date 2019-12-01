import {CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {FormErrorMessageConfigService, FormErrorMessageService} from './service';
import {FormMessageComponent} from './component/form-message/form-message.component';
import {CommonModule} from '@angular/common';
import {TextTranslatePipe} from './service/text-translate.pipe';

@NgModule({
    imports: [
      CommonModule
    ],
    declarations: [
      FormMessageComponent,
      TextTranslatePipe
    ],
    exports: [
      FormMessageComponent
    ],
    providers: [
      TextTranslatePipe
    ],
    schemas: [
      NO_ERRORS_SCHEMA,
      CUSTOM_ELEMENTS_SCHEMA
    ],
  }
)
export class FormErrorMessageModule {
  static forRoot(config: Object): ModuleWithProviders {
    return {
      ngModule: FormErrorMessageModule,
      providers: [
        FormErrorMessageService,
        {
          provide: FormErrorMessageConfigService,
          useValue: config
        }
      ]
    };
  }
}
