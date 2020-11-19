import {ThemeItem} from '../../services/theme-picker.service';
import {SelectConfig} from '../../../../../shared/dto/component-config/select/select-config';

export const baseThemePickerConf = {
  id: 'idThemePicker',
  formControlName: 'themePickerController',
  label: 'SANDBOX.SETTINGS.LABEL.COLOR_PICKER',
  disabled: false,
  fieldToDisplay: 'name'
} as SelectConfig<ThemeItem>;
