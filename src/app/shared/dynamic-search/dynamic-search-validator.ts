import {FormGroup} from '@angular/forms';
import {Injectable} from '@angular/core';
import {has, hasNot} from '../service/common-function.service';
import {DynamicSearchConfiguration} from './dynamic-search-configuration';

@Injectable()
export class DynamicSearchValidator {

  /**
   * if the dynamic form contain invalid form controls
   * it means we dont need to send that as search criteria
   */
  findInvalidControls(form: FormGroup): Array<string> {
    const invalid = [];
    const controls = form.controls;
    for (const control in controls) {
      if (control) {
        const subFormGroup = controls[control];
        if (subFormGroup instanceof FormGroup) {
          for (const controllerName in subFormGroup.controls) {
            if (subFormGroup.controls[controllerName].invalid || hasNot(subFormGroup.controls[controllerName].value)) {
              invalid.push(controllerName);
            }
          }
        }
        if (controls[control].invalid ||  hasNot(controls[control].value)) {
          invalid.push(control);
        }
      }
    }
    return invalid;
  }

  isFieldRequired(form: FormGroup, controller: string): boolean {
    if (has(form.get(controller).errors)) {
      return form.get(controller).errors['required'];
    }
  }

  showRemoveIcon(form: FormGroup, controller: string): boolean {
    return form.get(controller).touched && form.get(controller).value;
  }

  /**
   * check if at least one from isPrimaryCriteria is filled and valid
   */
  hasValidPrimaryField(fields: DynamicSearchConfiguration [], dynamicForm: FormGroup): boolean {
    if (has(fields)) {
      const primaryFields = fields.filter(primary => primary.isPrimaryCriteria).map(inputDefinitionOnly => {
        return inputDefinitionOnly.inputDefinition;
      }).filter(n => n);
      if (Array.isArray(primaryFields)) {
        return primaryFields.some(primaryControllers => !this.findInvalidControls(dynamicForm).includes(primaryControllers));
      }
    }
  }
}
