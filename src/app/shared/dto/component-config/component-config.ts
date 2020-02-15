import {AbstractControlOptions, AsyncValidatorFn, ValidatorFn} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {ComponentDisabled} from './component-disabled';
import {MatFormFieldAppearance} from '@angular/material/form-field';

/**
 * id: identifier of the input
 * formControlName: name of the controller in FormGroup
 * label: labelKey of input
 * styleClass: custom style
 * matFormFieldAppearance: 4 different appearance variants is supported - 'legacy' | 'standard' | 'fill' | 'outline'
 *
 * disabled: the input is disabled
 * required: the input is required
 * placeholder: key of placeholder
 * tooltipInfoText: key of tooltipInfoText
 * hint: key of hint
 * translateContent: in case content is not translatable
 *
 * errorMatcher: impl of errorMatcher
 * validators: given validators apply for the input
 */
export interface ComponentConfig {
  id: string | number;
  formControlName: string;
  label?: string;
  styleClass?: string;
  prefixIcon?: string;
  matFormFieldAppearance?: MatFormFieldAppearance;

  disabled?: boolean | ComponentDisabled;
  required?: boolean;
  placeholder?: string;
  tooltipInfoText?: string;
  hint?: string;
  translateContent?: boolean;

  errorMatcher?: ErrorStateMatcher;
  validators?: ValidatorFn[] | AsyncValidatorFn[] | null;
}
