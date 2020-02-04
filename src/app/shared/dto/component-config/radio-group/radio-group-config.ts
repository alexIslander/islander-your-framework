import {OptionConfig} from '../option/option-config';
import {ThemePalette} from '@angular/material';

export interface RadioGroupConfig extends OptionConfig {
  color?: ThemePalette;
  labelPosition?: 'before' | 'after';
}
