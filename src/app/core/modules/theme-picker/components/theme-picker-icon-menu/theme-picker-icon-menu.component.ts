import {Component} from '@angular/core';
import {ThemePickerService} from '../../services/theme-picker.service';
import {themeOptionsConf} from '../../services/theme-options.conf';

@Component({
  selector: 'app-theme-picker-icon-menu',
  templateUrl: './theme-picker-icon-menu.component.html',
  styleUrls: ['./theme-picker-icon-menu.component.scss']
})
export class ThemePickerIconMenuComponent {

  buttons = themeOptionsConf;

  constructor(private colorPicker: ThemePickerService) {
    // NOOP
  }

  pickColor(color: string) {
    this.colorPicker.setColorClass(color);
  }

}
