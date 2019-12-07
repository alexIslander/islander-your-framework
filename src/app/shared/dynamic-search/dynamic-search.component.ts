import {
  AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component,
  EventEmitter, Input, OnInit, Output
} from '@angular/core';
// import {YourStorageManager} from '../../auth/helpers/YourStorageManager';
import {CommonFunctionService, has} from '../service/common-function.service';
import {AllowedInputTypes, DynamicSearchConfiguration} from './dynamic-search-configuration';
import {DynamicSearchMapper} from './dynamic-search-mapper';
import {DynamicSearchFormLogic} from './dynamic-search-form-logic';
import {DynamicSearchValidator} from './dynamic-search-validator';
import {AppConstants} from '../helpers/app-constants';

@Component({
  selector: 'app-dynamic-search',
  templateUrl: './dynamic-search.component.html',
  styleUrls: ['./dynamic-search.component.scss']
})

export class DynamicSearchComponent implements OnInit, AfterViewChecked, AfterViewInit, AfterContentInit  {

  @Input() conditionalValidator: Function;
  @Input() fields: DynamicSearchConfiguration [];
  @Input() componentName: string;
  @Output() searchCriteriaSelection: EventEmitter<Object> = new EventEmitter();
  @Output() functionSelection = new EventEmitter<string>();

  constructor(private cdRef: ChangeDetectorRef,
              private commonFunctions: CommonFunctionService,
              private mapper: DynamicSearchMapper,
              public formLogic: DynamicSearchFormLogic,
              private dynamicSearchValidator: DynamicSearchValidator
              // ,
              // private storageManager: YourStorageManager
  ) {
    // NOOP
  }

  ngOnInit(): void {
    this.formLogic.createForm(this.fields, this.conditionalValidator);

    // this.searchCriteriaSelection.emit(this.formLogic.loadLocalStorageValues(this.componentName));
    // this.onLocalStoragePatch();
    this.statusChangeEmit();
  }

  ngAfterContentInit() {
  }

  ngAfterViewChecked(): void {
    this.cdRef.detectChanges();
  }

  // emits an event every time when the validation status of the control is recalculated
  statusChangeEmit() {
    this.formLogic.form.statusChanges.subscribe(ch => {
      if (this.formLogic.form.valid) {
        // this.onSendFormGroupValue();
      }
    });
  }

  // /**
  //  * on Local storage value patch
  //  */
  // onLocalStoragePatch(): void {
  //   if (has(this.storageManager.getLocalStorageItem(this.componentName).value)) {
  //     this.onSendFormGroupValue();
  //   }
  // }

  ngAfterViewInit() {

  }

  performAction(functionName) {
    if (has(functionName)) {
      this.functionSelection.next(functionName);
    }
  }

  onClearAllButtonClick(): void {
    this.formLogic.form.reset();
    // this.storageManager.removeLocalStorageItem(this.componentName);
    this.searchCriteriaSelection.emit();
  }

  /**
   * on input value select
   */
  onValueSelect(e): void { // TODO rename
    if (e.key === AppConstants.ENTER_EVENT || e.key === AppConstants.TAB_EVENT || has(e.checked) || has(e.value)) {
      this.onSendFormGroupValue();
    }
  }

  /**
   * on autocomplete dropwdown selection
   */
  onValueChange(e): void {
    if (has(e) && Object.keys(e).length > 0) {
      this.onSendFormGroupValue();
    }
  }

  /**
   * on autocomplete and other input x button
   */
  onValueRemove(): void {
    this.onSendFormGroupValue();
  }

  onSendFormGroupValue() {
    // this.formLogic.saveLocalStorageValues(this.componentName , this.mapper.getValidFormValues(this.formLogic.form, this.fields));
    if (this.dynamicSearchValidator.hasValidPrimaryField(this.fields, this.formLogic.form)) {
      this.searchCriteriaSelection.emit(this.mapper.getValidFormValues(this.formLogic.form, this.fields));
    } else {
      this.searchCriteriaSelection.emit();
    }
  }

  get inputTypes() {
    return AllowedInputTypes;
  }

}
