import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetTextByKeyPipe } from './utils/get-text-by-key.pipe';
import { ToDatePipe } from './utils/to-date.pipe';
import { ToDateTimePipe } from './utils/to-date-time.pipe';
// import {Routing} from '../app-routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import {AppMaterialModule} from './app-material/app-material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CustomSnackBarComponent } from './custom-snack-bar/custom-snack-bar.component';
import { ConfirmationWindowComponent } from './confirmation-window/confirmation-window.component';
import { LoaderComponent } from './loader/loader.component';
import { AutoCompleteComponent } from './autocomplete/autocomplete.component';
import { BaseDialogViewComponentComponent } from './base-dialog-view-component/base-dialog-view-component.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // RouterModule,
    // Routing,
    AppMaterialModule
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
    AutoCompleteComponent,
    BaseDialogViewComponentComponent
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
    AutoCompleteComponent
  ],
  providers: [
    GetTextByKeyPipe,
    ToDatePipe,
    ToDateTimePipe
  ],
  entryComponents: [
    CustomSnackBarComponent,
    ConfirmationWindowComponent,
    BaseDialogViewComponentComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule { }
