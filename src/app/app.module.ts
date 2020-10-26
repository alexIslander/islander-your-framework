import {ErrorHandler, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SandboxModule} from './sandbox/sandbox.module';
import {SiteHeaderService} from './shared/service/site-header.service';
import {ErrorNotifierService} from './shared/service/error-notifier.service';
import {FrameworkLoaderService} from './shared/service/framework-loader.service';
import {NotificationService} from './shared/service/notification.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {SharedModule} from './shared/shared.module';
import {HttpLoaderFactory} from './shared/module/app-translate/app-translate.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    SandboxModule,
    SharedModule
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
  exports: [
    TranslateModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
