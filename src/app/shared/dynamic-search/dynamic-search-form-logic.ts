import {Injectable} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {CommonFunctionService, has, hasNot} from '../service/common-function.service';
import {AppConstants} from '../helpers/app-constants';
import {DynamicSearchMapper} from './dynamic-search-mapper';
import {DynamicSearchValidator} from './dynamic-search-validator';
import {AllowedInputTypes, DynamicSearchConfiguration} from './dynamic-search-configuration';
import {YourStorageManager} from '../helpers/your-storage-manager.service';

@Injectable()
export class DynamicSearchFormLogic {

  form: FormGroup;
  dynamicField: DynamicSearchConfiguration [];

  constructor(private commonFunctions: CommonFunctionService,
              private mapper: DynamicSearchMapper,
              private dynamicSearchValidator: DynamicSearchValidator,
              public formBuilder: FormBuilder,
              private storageManager: YourStorageManager) {
    // NOOP
  }

  /**
   * If the main form group dynamicForm contain one or more internal form groups
   * get all internal form groups and their form controllers
   */
  createForm(fields: DynamicSearchConfiguration [], conditionalValidator?: Function): void {
    const controls = {};
    fields.forEach(res => {
      if (res.inputType === AllowedInputTypes.AUTOCOMPLETE) {
        controls[res.inputDefinition] = this.formBuilder.group({autoCompleteControl: new FormControl('', res.validators)});
      } else if (res.inputType === AllowedInputTypes.COUNTRY_AGENT_AUTOCOMPLETE) {
        controls[res.inputDefinition] = this.formBuilder.group({
          country: this.formBuilder.group({autoCompleteControl: new FormControl('', res.validators)}),
          agent: this.formBuilder.group({autoCompleteControl: new FormControl('', res.validators)})
        });
      } else {
        controls[res.inputDefinition] = new FormControl('', res.validators);
      }
    });

    hasNot(conditionalValidator) ?
      this.form = this.formBuilder.group(controls) :
      this.form = this.formBuilder.group(
        controls, {
          validator: [
            conditionalValidator()
          ]
        });
  }

  subFormGroupControllers(controller: string): FormControl {
    if (has(this.form)) {
      const abstractControl = this.form.controls[controller];
      if (abstractControl instanceof FormGroup) {
        return abstractControl.controls[AppConstants.AUTOCOMPLETE_CONTROL_KEY] as FormControl;
      }
      return this.form.controls[controller] as FormControl;
    }
  }

  /**
   * if localstorage has stored value(s) from specific component name , it means we can patch these values
   * directly into our form inputs
   */
  loadLocalStorageValues(componentName: string): object {
    const storageValue = this.storageManager.getLocalStorageItem(componentName);
    if (has(storageValue) && has(storageValue.value)) {
      const savedControllers = Object.entries(storageValue.value);
      for (const [name, controllerValue] of savedControllers) {
        if (this.form.controls.hasOwnProperty('countryAgentAutocomplete') && name === 'country' || name === 'agent') {
          (<FormGroup>this.form.controls['countryAgentAutocomplete']).get(name).patchValue(controllerValue);
        } else {
          this.form.get(name).patchValue(controllerValue);
          this.form.get(name).markAsTouched();
        }
      }
    }
    if (this.dynamicSearchValidator.hasValidPrimaryField(this.dynamicField, this.form)) {
      const validMappedFormValues = this.mapper.getValidFormValues(this.form, this.dynamicField);
      if (has(validMappedFormValues)) {
        if (Object.keys(validMappedFormValues).length > 0) {
          return validMappedFormValues;
        }
      }
    }
  }

  /**
   * clear and update validator for each controller
   * for level controller and abstract internal formGroup controllers
   */
  resetSubFormGroup(controllerName: string): void {
    const abstractControl = this.form.controls[controllerName];
    if (abstractControl instanceof FormGroup) {
      Object.keys(abstractControl.controls).forEach(internalController => {
        abstractControl.get(internalController).reset();
        this.form.updateValueAndValidity();
      });
    } else {
      abstractControl.reset();
    }
    this.form.updateValueAndValidity();
  }

  /**
   * clear and update validator for one controller
   */
  resetController(controllerName: string): void {
    this.form.controls[controllerName].reset();
    this.form.updateValueAndValidity();
  }

  /**
   * access to internal form group functionalities
   */
  getSubController(mainController: string, internalController: string): FormControl {
    return this.form.controls[mainController]['controls'][internalController];
  }

  /**
   * If form is filled  ,is emitting only  filled , unique and valid values
   */
  saveLocalStorageValues(componentName, criteria?): void {
    if (this.commonFunctions.isNullOrUndefinedOrEmpty(criteria)) {
      this.storageManager.removeLocalStorageItem(criteria);
    } else {
      this.storageManager.setLocalStorageItem(componentName, [criteria]);
    }
  }

  patchControlValue(selector: string, value?): void {
    this.form.controls[selector].patchValue(value);
    this.form.updateValueAndValidity();
  }

}
