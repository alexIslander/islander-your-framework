import {AppConstants} from '../helpers/AppConstants';
import {FormControl} from '@angular/forms';
import {Input, ViewChild, Component} from '@angular/core';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import {Named} from '../dto/Named';
import {debounceTime, distinctUntilChanged, map, startWith} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {BaseCustomComponent} from '../component/base-custom.component';
import {CommonFunctionService, has} from '../service/common-function.service';
import {combineLatest} from 'rxjs/internal/observable/combineLatest';
import {of} from 'rxjs/internal/observable/of';

@Component({
  template: ''
})
export abstract class BaseAutocompleteComponent extends BaseCustomComponent {
  @ViewChild(MatAutocompleteTrigger, {static: true}) autoComplete: MatAutocompleteTrigger;

  @Input() allowInputDelete: boolean;

  displayOptions: Named[];
  filteredOptions: Observable<Named[]>;

  SELECT_ICON_CLASS = 'fa-chevron-down';
  DELETE_ICON_CLASS = 'fa-times';
  NO_ICON_CLASS = '';

  componentInnerIconClass = this.NO_ICON_CLASS;

  /**
   * Merges various data into a single display name
   * @param {Array<Object>} elements
   * @param {Array<string>} keys
   * @returns {Array<Object>}
   */
  static mergeDisplayNames(elements: Array<Object>, keys: Array<string>): Array<Object> {
    for (let i = 0; i < elements.length; i++) {
      elements[i][AppConstants.DISPLAY_NAME_KEY] = '';
      for (let j = 0; j < keys.length; j++) {
        elements[i][AppConstants.DISPLAY_NAME_KEY] += elements[i][keys[j]];
        if (j < (keys.length - 1)) {
          elements[i][AppConstants.DISPLAY_NAME_KEY] += ' ';
        }
      }
    }
    return elements;
  }

  protected init() {
    super.init();
  }

  /**
   *  This method clears the search input field.
   */
  abstract resetInputField(): void;

  displayFn(option?: Named): string | undefined {
    return option ? option[AppConstants.DISPLAY_NAME_KEY] : undefined;
  }

  isDropdownEmpty(): boolean {
    return CommonFunctionService.isNullOrUndefinedOrEmpty(this.innerFormGroup.controls[AppConstants.AUTOCOMPLETE_CONTROL_KEY].value) ||
      this.innerFormGroup.controls[AppConstants.AUTOCOMPLETE_CONTROL_KEY].value instanceof Array ||
      this.innerFormGroup.controls[AppConstants.AUTOCOMPLETE_CONTROL_KEY].value === '';
  }

  onFocusLost(event: KeyboardEvent) {
    if (event.key === (AppConstants.ENTER_EVENT || AppConstants.TAB_EVENT) && has(this.autoComplete.activeOption.value)) {
      this.innerFormGroup.controls[AppConstants.AUTOCOMPLETE_CONTROL_KEY].patchValue(this.autoComplete.activeOption.value);
      this.selectionEvent.emit(this.autoComplete.activeOption.value);
    }
  }

  filter(name: string): Named[] {
    return this.displayOptions.filter(option =>
      option[AppConstants.DISPLAY_NAME_KEY].toLowerCase().indexOf(name.toLowerCase()) !== -1);
  }

  protected processOptions(anies = this.options) {
    const observableOptions = of(anies);
    const filterParam = (this.formGroupParam.get(AppConstants.AUTOCOMPLETE_CONTROL_KEY) as FormControl).valueChanges.pipe(
      startWith(this.stringToLowercase(AppConstants.DEFAULT_CONTENT)),
      debounceTime(300),
      distinctUntilChanged());
    this.filteredOptions = combineLatest([observableOptions, filterParam])
      .pipe(map(([data, param]) =>
        data.filter(option => this.stringToLowercase(option.displayName).indexOf(this.stringToLowercase(param)) > -1)));
  }

  stringToLowercase(value: String) {
    if (has(value)) {
      return value.toString().toLowerCase();
    }
  }

  protected setItemIconStyle(value: any) {
    if (CommonFunctionService.isNullOrUndefined(value) || value instanceof Array) {
      this.componentInnerIconClass = this.NO_ICON_CLASS;
    } else {
      this.componentInnerIconClass = this.DELETE_ICON_CLASS;
    }
  }

  displayIcon() {
    if (!this.isDropdownEmpty() && this.allowInputDelete) {
      return this.DELETE_ICON_CLASS;
    }

    return this.SELECT_ICON_CLASS;
  }
}
