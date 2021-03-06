import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToDatePipe} from './utils/to-date.pipe';
import {ToDateTimePipe} from './utils/to-date-time.pipe';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SidebarMenuComponent} from './sidebar-menu/sidebar-menu.component';
import {AppMaterialModule} from './module/app-material/app-material.module';
import {ErrorPageComponent} from './error-page/error-page.component';
import {CustomSnackBarComponent} from './custom-snack-bar/custom-snack-bar.component';
import {ConfirmationWindowComponent} from './confirmation-window/confirmation-window.component';
import {LoaderComponent} from './loader/loader.component';
import {AutoCompleteComponent} from './autocomplete/autocomplete.component';
import {BaseDialogViewComponentComponent} from './base-dialog-view-component/base-dialog-view-component.component';
import {RouterModule} from '@angular/router';
import {DynamicTextComponent} from './dynamic-fields/dynamic-text/dynamic-text.component';
import {DynamicOptionComponent} from './dynamic-fields/dynamic-option/dynamic-option.component';
import {DynamicToggleComponent} from './dynamic-fields/dynamic-toggle/dynamic-toggle.component';
import {DynamicRadioGroupComponent} from './dynamic-fields/dynamic-radio-group/dynamic-radio-group.component';
import {DynamicCheckboxComponent} from './dynamic-fields/dynamic-checkbox/dynamic-checkbox.component';
import {DynamicUploadComponent} from './dynamic-fields/dynamic-upload/dynamic-upload.component';
import {DynamicAutocompleteComponent} from './dynamic-fields/dynamic-autocomplete/dynamic-autocomplete.component';
import {DynamicTableWithSelectionComponent} from './component/dynamic-table-with-selection/dynamic-table-with-selection.component';
import {DynamicTableComponent} from './dynamic-table/dynamic-table.component';
import {ClipboardModule} from 'ngx-clipboard';
import {InputComponent} from './component/input/input.component';
import {SelectComponent} from './component/select/select.component';
import {DatePickerComponent} from './component/date-picker/date-picker.component';
import {CustomDatePickerHeaderComponent} from './component/date-picker/custom-date-picker-header/custom-date-picker-header.component';
import {FormErrorMessageModule} from './form-error-message/form-error-message.module';
import {CheckboxGroupComponent} from './component/checkbox-group/checkbox-group.component';
import {RadioGroupComponent} from './component/radio-group/radio-group.component';
import {DynamicField} from './dynamic-fields/dynamic-field';
import {SimpleCardComponent} from './simple-card/simple-card.component';

// Translate
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {configureTranslation} from './module/app-translate/app-translate.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forChild({}),
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppMaterialModule,
    ClipboardModule,
    FormErrorMessageModule
  ],
  declarations: [
    ToDatePipe,
    ToDateTimePipe,
    SidebarMenuComponent,
    ErrorPageComponent,
    CustomSnackBarComponent,
    ConfirmationWindowComponent,
    LoaderComponent,
    AutoCompleteComponent,
    BaseDialogViewComponentComponent,
    DynamicTextComponent,
    DynamicOptionComponent,
    DynamicToggleComponent,
    DynamicRadioGroupComponent,
    DynamicCheckboxComponent,
    DynamicUploadComponent,
    DynamicAutocompleteComponent,
    DynamicTableComponent,
    DynamicTableWithSelectionComponent,
    InputComponent,
    SelectComponent,
    DatePickerComponent,
    CustomDatePickerHeaderComponent,
    CheckboxGroupComponent,
    RadioGroupComponent,
    DynamicField,
    SimpleCardComponent
  ],
  exports: [
    SidebarMenuComponent,
    ErrorPageComponent,
    CustomSnackBarComponent,
    ConfirmationWindowComponent,
    ToDatePipe,
    ToDateTimePipe,
    LoaderComponent,
    AutoCompleteComponent,
    DynamicTextComponent,
    DynamicOptionComponent,
    DynamicToggleComponent,
    DynamicRadioGroupComponent,
    DynamicCheckboxComponent,
    DynamicUploadComponent,
    DynamicAutocompleteComponent,
    DynamicTableComponent,
    DynamicTableWithSelectionComponent,
    CustomDatePickerHeaderComponent,
    CheckboxGroupComponent,
    RadioGroupComponent,
    SimpleCardComponent,
    TranslateModule,
    SelectComponent
  ],
  providers: [
    ToDatePipe,
    ToDateTimePipe
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule {
  constructor(private translate: TranslateService) {
    configureTranslation(translate);
  }
}
