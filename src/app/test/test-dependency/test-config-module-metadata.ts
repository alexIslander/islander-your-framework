import {AppMaterialModule} from '../../shared/module/app-material/app-material.module';
import {TestModuleMetadata} from '@angular/core/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {HttpClientModule} from '@angular/common/http';
import {ToDatePipe} from '../../shared/utils/to-date.pipe';
import {ToDateTimePipe} from '../../shared/utils/to-date-time.pipe';
import {DateFormatterUtil} from '../../shared/utils/date-formatter.util';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {FrameworkLoaderService} from '../../shared/service/framework-loader.service';
import {AppTranslateModule} from '../../shared/module/app-translate/app-translate.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateServiceStub} from './TranslateServiceStub';

export const TestConfigModuleMetadata: TestModuleMetadata = {
  imports: [
    AppMaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {provide: TranslateLoader, useClass: TranslateServiceStub},
    })
  ],
  declarations: [
    ToDatePipe,
    ToDateTimePipe],
  providers: [
    ToDatePipe,
    ToDateTimePipe,
    DateFormatterUtil,
    FrameworkLoaderService],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
};
