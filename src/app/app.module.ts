import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { SandboxModule } from './sandbox/sandbox.module';
import {SiteHeaderService} from './shared/service/site-header.service';
import {ErrorNotifierService} from './shared/service/error-notifier.service';
import {FrameworkLoaderService} from './shared/service/framework-loader.service';
import {NotificationService} from './shared/service/notification.service';
import {HttpClientModule} from '@angular/common/http';
import {appRoutes, AppRoutingModule} from './app-routing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {MainModule} from './main/main.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    SandboxModule,
    MainModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    SharedModule,
    HttpClientModule
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
