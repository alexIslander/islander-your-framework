import {CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {FormErrorMessageConfigService, FormErrorMessageService} from './service';
import {FormMessageComponent} from './component/form-message/form-message.component';
import {CommonModule} from '@angular/common';
import {AppTranslateModule} from '../module/app-translate/app-translate.module';

@NgModule({
    imports: [
      CommonModule,
      AppTranslateModule
    ],
    declarations: [
      FormMessageComponent
    ],
    exports: [
      FormMessageComponent
    ],
    providers: [
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
