import {ValidatorFn} from '@angular/forms';
import {Observable} from 'rxjs/Rx.js';
import {DynamicToggleComponent} from '../dynamic-fields/dynamic-toggle/dynamic-toggle.component';
import {DynamicTextComponent} from '../dynamic-fields/dynamic-text/dynamic-text.component';
import {DynamicOptionComponent} from '../dynamic-fields/dynamic-option/dynamic-option.component';
import {DynamicRadioGroupComponent} from '../dynamic-fields/dynamic-radio-group/dynamic-radio-group.component';
import {DynamicCheckboxComponent} from '../dynamic-fields/dynamic-checkbox/dynamic-checkbox.component';
import {DynamicAutocompleteComponent} from '../dynamic-fields/dynamic-autocomplete/dynamic-autocomplete.component';
import {DynamicUploadComponent} from '../dynamic-fields/dynamic-upload/dynamic-upload.component';
import {DynamicFieldDirective} from '../dynamic-fields/dynamic-field.directive';

export enum AllowedInputTypes {
  TEXT = 'text',
  OPTION = 'option',
  TOGGLE = 'toggle',
  RADIO = 'radio',
  CHECKBOX = 'checkbox',
  AUTOCOMPLETE = 'autocomplete',
  UPLOAD = 'file',
  COUNTRY_AGENT_AUTOCOMPLETE = 'countryAgentAutocomplete',
  CUSTOM = 'custom'
}
export const AllowedInputComponents = {
  'text': DynamicTextComponent,
  'option': DynamicOptionComponent,
  'toggle': DynamicToggleComponent,
  'radio': DynamicRadioGroupComponent,
  'checkbox': DynamicCheckboxComponent,
  'autocomplete': DynamicAutocompleteComponent,
  'file': DynamicUploadComponent,
  'custom': DynamicFieldDirective
};

export interface DynamicSearchConfiguration {
  inputLabelDefinition?: string;
  inputDefinition?: string;
  inputType: AllowedInputTypes;
  component?: any;
  internalControllerKey?: string;
  options?: Observable<any> | Array<any>;
  validators?: Array<ValidatorFn>;
  position?: string;
  tooltipInfo?: string;
  isPrimaryCriteria?: boolean;
  preselectedOption?: string;
  action?: string;
  columnWidth?: string;
}
