import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ThemePickerComponent} from './components/theme-picker/theme-picker.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../shared/shared.module';
import {FormErrorMessageModule} from '../../../shared/form-error-message/form-error-message.module';
import {StandardErrorMessageMappings} from '../../../config/form-error-message-config';
import {AppMaterialModule} from '../../../shared/module/app-material/app-material.module';
import {TranslateModule} from '@ngx-translate/core';
import {ThemePickerIconMenuComponent} from './components/theme-picker-icon-menu/theme-picker-icon-menu.component';

@NgModule({
  declarations: [
    ThemePickerComponent,
    ThemePickerIconMenuComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    FormErrorMessageModule.forRoot(StandardErrorMessageMappings),
    AppMaterialModule,
    TranslateModule.forChild({})
  ],
  exports: [
    ThemePickerComponent,
    ThemePickerIconMenuComponent
  ]
})
export class ThemePickerModule {
}
