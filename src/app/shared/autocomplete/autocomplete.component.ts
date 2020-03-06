import {Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {AppConstants} from '../helpers/AppConstants';
import { MatAutocompleteSelectedEvent, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import {BaseAutocompleteDirective} from './base-autocomplete.directive';
import {CommonFunctionService} from '../service/common-function.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutoCompleteComponent extends BaseAutocompleteDirective implements OnInit, OnChanges {

  @ViewChild('autocompleteFormField', {static: true}) formField: ElementRef;
  @ViewChild('autocompleteInput', {static: true, read: MatAutocompleteTrigger}) autoCompleteInput: MatAutocompleteTrigger;

  constructor() {
    super();
  }

  ngOnInit() {
    this.init();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['options'] && !CommonFunctionService.isNullOrUndefined(this.options)) {
      this.displayOptions = this.options;
      this.processOptions();
    }
  }

  onIconAction(res: MouseEvent) {
    if (this.allowInputDelete && !this.disabledSection) {
      this.innerFormGroup.controls[AppConstants.AUTOCOMPLETE_CONTROL_KEY].patchValue('');
      this.setItemIconStyle(null);
      this.onSendDeletion(res);
    }
  }

  onSendSelection(res: MatAutocompleteSelectedEvent): void {
    this.selectionEvent.emit(res.option.value);
  }

  onSendDeletion(event): void {
    this.deletionEvent.emit(event);
  }

  /**
   *  This method clears the search input field.
   */
  resetInputField() {
    this.innerFormGroup.controls[AppConstants.AUTOCOMPLETE_CONTROL_KEY].reset();
  }

}
