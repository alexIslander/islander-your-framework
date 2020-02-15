import { ErrorHandler, NgModule} from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    SandboxModule,
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
