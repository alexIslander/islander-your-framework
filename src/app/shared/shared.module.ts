import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetTextByKeyPipe } from './utils/get-text-by-key.pipe';
import { ToDatePipe } from './utils/to-date.pipe';
import { ToDateTimePipe } from './utils/to-date-time.pipe';
// import {Routing} from '../app-routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import {AppMaterialModule} from './module/app-material/app-material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CustomSnackBarComponent } from './custom-snack-bar/custom-snack-bar.component';
import { ConfirmationWindowComponent } from './confirmation-window/confirmation-window.component';
import { LoaderComponent } from './loader/loader.component';
import { AutoCompleteComponent } from './autocomplete/autocomplete.component';
import { BaseDialogViewComponentComponent } from './base-dialog-view-component/base-dialog-view-component.component';
import {RouterModule} from '@angular/router';
import { DynamicTextComponent } from './dynamic-fields/dynamic-text/dynamic-text.component';
import { DynamicOptionComponent } from './dynamic-fields/dynamic-option/dynamic-option.component';
import { DynamicToggleComponent } from './dynamic-fields/dynamic-toggle/dynamic-toggle.component';
import { DynamicRadioGroupComponent } from './dynamic-fields/dynamic-radio-group/dynamic-radio-group.component';
import { DynamicCheckboxComponent } from './dynamic-fields/dynamic-checkbox/dynamic-checkbox.component';
import { DynamicUploadComponent } from './dynamic-fields/dynamic-upload/dynamic-upload.component';
import { DynamicAutocompleteComponent } from './dynamic-fields/dynamic-autocomplete/dynamic-autocomplete.component';
import {DynamicTableWithSelectionComponent} from './component/dynamic-table-with-selection/dynamic-table-with-selection.component';
import {DynamicTableComponent} from './dynamic-table/dynamic-table.component';
import {ClipboardModule} from 'ngx-clipboard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule,
    AppMaterialModule,
    ClipboardModule
  ],
  declarations: [
    GetTextByKeyPipe,
    ToDatePipe,
    ToDateTimePipe,
    SiteHeaderComponent,
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
    DynamicTableWithSelectionComponent
  ],
  exports: [
    SiteHeaderComponent,
    SidebarMenuComponent,
    ErrorPageComponent,
    CustomSnackBarComponent,
    ConfirmationWindowComponent,
    GetTextByKeyPipe,
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
    DynamicTableWithSelectionComponent
  ],
  providers: [
    GetTextByKeyPipe,
    ToDatePipe,
    ToDateTimePipe
  ],
  entryComponents: [
    CustomSnackBarComponent,
    ConfirmationWindowComponent,
    BaseDialogViewComponentComponent,
    DynamicTextComponent,
    DynamicOptionComponent,
    DynamicToggleComponent,
    DynamicRadioGroupComponent,
    DynamicCheckboxComponent,
    DynamicUploadComponent,
    DynamicAutocompleteComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule { }
