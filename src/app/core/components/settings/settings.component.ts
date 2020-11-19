import {Component, OnInit} from '@angular/core';
import {ThemePickerService} from '../../modules/theme-picker/services/theme-picker.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {baseThemePickerConf} from '../../modules/theme-picker/components/theme-picker/base-theme-picker.conf';
import {themeOptionsConf} from '../../modules/theme-picker/services/theme-options.conf';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  form: FormGroup;
  colorPickerConfig = baseThemePickerConf;

  constructor(private fb: FormBuilder, private themePickerService: ThemePickerService) {
    // NOOP
  }

  ngOnInit(): void {
    const controls = {};

    this.colorPickerConfig.options = themeOptionsConf;
    controls[this.colorPickerConfig.formControlName] = new FormControl(
      this.themePickerService.findSelection(this.colorPickerConfig.options));

    this.form = this.fb.group(controls);
  }

}
