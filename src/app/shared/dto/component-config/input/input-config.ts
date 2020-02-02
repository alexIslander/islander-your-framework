import {ComponentConfig} from '../component-config';
import {InputType} from './input-type';

export interface InputConfig extends ComponentConfig {
  inputType: InputType;
}
