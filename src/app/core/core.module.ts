import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './components/settings/settings.component';
import {SharedModule} from '../shared/shared.module';
import {AppMaterialModule} from '../shared/module/app-material/app-material.module';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {configureTranslation} from '../shared/module/app-translate/app-translate.module';
import {ReactiveFormsModule} from '@angular/forms';
import {FormErrorMessageModule} from '../shared/form-error-message/form-error-message.module';
import {StandardErrorMessageMappings} from '../config/form-error-message-config';
import {ThemePickerModule} from './modules/theme-picker/theme-picker.module';
import {SiteHeaderComponent} from './components/site-header/site-header.component';
import {RouterModule} from '@angular/router';
import { InitialHeaderLogoComponent } from './components/initial-header-logo/initial-header-logo.component';

@NgModule({
  declarations: [
    SiteHeaderComponent,
    SettingsComponent,
    InitialHeaderLogoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    FormErrorMessageModule.forRoot(StandardErrorMessageMappings),
    AppMaterialModule,
    TranslateModule.forChild({}),
    ThemePickerModule
  ],
  exports: [
    SiteHeaderComponent,
    SettingsComponent,
    InitialHeaderLogoComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class CoreModule {
  constructor(private translate: TranslateService) {
    configureTranslation(translate);
  }
}
