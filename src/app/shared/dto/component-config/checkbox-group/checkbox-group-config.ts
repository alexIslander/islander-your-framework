import {ThemePalette} from '@angular/material';
import {OptionConfig} from '../option/option-config';

/**
 * color: Material ThemePalette option, default primary
 * labelPosition: where the label is placed
 */
export interface CheckboxGroupConfig  extends OptionConfig {
  color?: ThemePalette;
  labelPosition?: 'before' | 'after';
}
