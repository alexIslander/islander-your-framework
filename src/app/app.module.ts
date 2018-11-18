import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { SandboxModule } from './sandbox/sandbox.module';
import {SiteHeaderService} from './shared/services/site-header.service';
import {ErrorNotifierService} from './shared/services/error-notifier.service';
import {FrameworkLoaderService} from './shared/services/framework-loader.service';
import {NotificationService} from './shared/services/notification.service';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    SharedModule,
    SandboxModule,
    HttpClientModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    SiteHeaderService,
    {
      provide: ErrorHandler,
      useClass: ErrorNotifierService,
    },
    FrameworkLoaderService,
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
