import {OptionConfig} from '../option/option-config';
import { ThemePalette } from '@angular/material/core';

/**
 * Example config:
 * radioGroupConfig = {
    id: 'idRadios',
    formControlName: 'radioGroup',
    label: 'SANDBOX.LABEL.RADIOS',
    orientation: 'vertical',
    labelPosition: 'before',
    color: 'primary',
    disabled: false,
    options: [
      {id: 'HU', name: 'Hungarian'},
      {id: 'EN', name: 'English'}
      ],
    fieldToDisplay: 'name',
    defaultValue: {id: 'EN', name: 'English'},
  } as RadioGroupConfig;
 radioGroupConfig2 = {
    id: 'idRadios2',
    formControlName: 'radioGroup2',
    label: 'SANDBOX.LABEL.RADIOS',
    color: 'accent',
    disabled: false,
    options: [ 'RHungarian', 'REnglish' ],
    defaultValue: 'REnglish',
  } as RadioGroupConfig;
 *
 */
export interface RadioGroupConfig extends OptionConfig {
  color?: ThemePalette;
  labelPosition?: 'before' | 'after';
  orientation?: 'horizontal' | 'vertical';
}
