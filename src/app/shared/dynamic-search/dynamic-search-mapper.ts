import {Injectable} from '@angular/core';
import {CommonFunctionService, has, isObject} from '../service/common-function.service';
import {DynamicSearchValidator} from './dynamic-search-validator';
import {AllowedInputTypes, DynamicSearchConfiguration} from './dynamic-search-configuration';
import {FormGroup} from '@angular/forms';

@Injectable()
export class DynamicSearchMapper {

  constructor(private commonFunctions: CommonFunctionService,
              private dynamicSearchValidator: DynamicSearchValidator
  ) {
    // NOOP
  }

  /**
   * clean object from null , undefined , empty = '' and invalid input values
   */
  removeInvalidFilterCriteria(formValues: object, form: FormGroup): object {
    if (has(formValues)) {
      Object.keys(this.commonFunctions.removeEmpty(formValues)).forEach(key => {
        if (this.dynamicSearchValidator.findInvalidControls(form).find(invalidCont => invalidCont === key) || Object.keys(formValues[key]).length === 0) {
          delete formValues[key];
        }
      });

      return !this.commonFunctions.isEmptyObject(formValues) ? formValues : null;
    }
  }

  getFormValues(form: FormGroup, fields: DynamicSearchConfiguration []): Object {
    const formStructuredValues = form.getRawValue();
    if (has(formStructuredValues)) {
      // tslint:disable-next-line:forin
      for (const key in formStructuredValues) {
        if (this.isCountryAgentAutocomplete(key)) {
          const country = formStructuredValues[key][Object.keys(formStructuredValues[key])[0]];
          const agent = formStructuredValues[key][Object.keys(formStructuredValues[key])[1]];
          delete formStructuredValues[key];
          formStructuredValues.country = country;
          formStructuredValues.agent = agent;
        }
        // check if a key has assigned object instead of string ,number ,
        if (isObject(formStructuredValues[key])) {
          // get  internalControllerKey from  correspondent internal Object
          let internalControllerKey;
          fields.forEach(field => {
            if (field.inputDefinition === key) {
              internalControllerKey = field.internalControllerKey;
            }

          });
          // example : get from first key  name >> autoCompleteControl >> and use that to get the value >> and using param grab specific part
          if (has(formStructuredValues[key])) {
            const selectedInternalFormGroupObject = formStructuredValues[key][Object.keys(formStructuredValues[key])[0]];
            formStructuredValues[key] = has(selectedInternalFormGroupObject) ?
              selectedInternalFormGroupObject[internalControllerKey] : '';
          }
        }
      }

      return formStructuredValues;
    }
  }

  getValidFormValues(formGroup: FormGroup, fields: DynamicSearchConfiguration []): object {
    if (fields.find(field =>
      field.inputType === AllowedInputTypes.CHECKBOX  ||
      field.inputType === AllowedInputTypes.UPLOAD)) {
      return this.removeInvalidFilterCriteria(formGroup.getRawValue(), formGroup);
    }

    return this.removeInvalidFilterCriteria(this.getFormValues(formGroup, fields), formGroup);
  }

  private isCountryAgentAutocomplete(field: string) {
    return field === AllowedInputTypes.COUNTRY_AGENT_AUTOCOMPLETE;
  }
}
