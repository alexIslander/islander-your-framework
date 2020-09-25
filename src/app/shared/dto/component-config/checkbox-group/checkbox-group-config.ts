import { ThemePalette } from '@angular/material/core';
import {OptionConfig} from '../option/option-config';

/**
 * color: Material ThemePalette option, default primary
 * labelPosition: where the label is placed
 */
export interface CheckboxGroupConfig<T>  extends OptionConfig<T> {
  color?: ThemePalette;
  labelPosition?: 'before' | 'after';
}
