import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { SandboxHomeComponent } from './home/home.component';
import { SandboxDashboardComponent } from './dashboard/sandbox-dashboard.component';
import {AppMaterialModule} from '../shared/module/app-material/app-material.module';
import {SharedModule} from '../shared/shared.module';
import {SandboxDashboardService} from './service/impl/SandboxDashboardService';
import {HttpClient} from '@angular/common/http';
import {SandboxHttpHelperService} from './service/SandboxHttpHelperService';
import {SandboxDashboardServiceMock} from './service/impl/SandboxDashboardServiceMock';
import {AnyApiHttpHelperService} from './service/AnyApiHttpHelperService';
import {FirstComponentServiceMock} from './service/impl/FirstComponentServiceMock';
import {FirstComponentService} from './service/impl/FirstComponentService';
import {environment} from '../../environments/environment';
import { ThirdComponent } from './third/third.component';
import {SandboxRoutingModule} from './sandbox-routing.module';
import {AppTranslateModule, configureTranslation} from '../shared/module/app-translate/app-translate.module';
import {ReactiveFormsModule} from '@angular/forms';
import { CustomKitchenSinkComponent } from './custom-kitchen-sink/custom-kitchen-sink.component';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';

@NgModule({
  declarations: [
    FirstComponent,
    SecondComponent,
    SandboxHomeComponent,
    SandboxDashboardComponent,
    ThirdComponent,
    CustomKitchenSinkComponent
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SandboxRoutingModule,
    SharedModule,
    AppMaterialModule,
    // AppTranslateModule
    TranslateModule.forChild({}),
    //   .forChild({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: HttpLoaderFactory,
    //     deps: [HttpClient]
    //   }
    // })
  ],
  providers: [
    SandboxHttpHelperService,
    AnyApiHttpHelperService,
    {
      provide: SandboxDashboardService,
      useFactory: dashboardServiceUseFactory,
      deps: [HttpClient, SandboxHttpHelperService]
    },
    {
      provide: FirstComponentService,
      useFactory: firstComponentServiceUseFactory,
      deps: [HttpClient, AnyApiHttpHelperService]
    }
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
    SandboxDashboardComponent,
    SandboxHomeComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    CustomKitchenSinkComponent
  ]
})
export class SandboxModule {
  constructor(private translate: TranslateService) {
    configureTranslation(translate);
  }
}

  // TODO modify when beckend provides dashboard
  export function dashboardServiceUseFactory(http: HttpClient, httpHelperService: SandboxHttpHelperService) {
    // return environment.mock ? new SandboxDashboardServiceMock(http, httpHelperService)
    // : new SandboxDashboardService(http, httpHelperService);
    return new SandboxDashboardServiceMock(http, httpHelperService);
  }

export function firstComponentServiceUseFactory(http: HttpClient, httpHelperService: AnyApiHttpHelperService) {
  return environment.mock ? new FirstComponentServiceMock(http, httpHelperService) : new FirstComponentService(http, httpHelperService);
}
