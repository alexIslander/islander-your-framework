import {OptionConfig} from '../option/option-config';

/**
 * fieldToDisplay: this value isis selected from the item
 * resetOption: additional 'None' option for options
 */
export interface SelectConfig<T> extends OptionConfig<T> {
  multipleSelect?: boolean;
  resetOption?: boolean;
}
