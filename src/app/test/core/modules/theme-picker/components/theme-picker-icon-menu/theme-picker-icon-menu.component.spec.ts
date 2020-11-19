import {ThemePickerIconMenuComponent} from '../../../../../../core/modules/theme-picker/components/theme-picker-icon-menu/theme-picker-icon-menu.component';
import {initContext, TestContext} from '../../../../../test-context';
import {ThemePickerService} from '../../../../../../core/modules/theme-picker/services/theme-picker.service';

describe('ThemePickerIconMenuComponent', () => {

  type Context = TestContext<ThemePickerIconMenuComponent>;
  initContext(ThemePickerIconMenuComponent, {
    imports: [],
    declarations: [],
    providers: [
      ThemePickerService
    ]
  });

  it('should create', function(this: Context) {
    expect(this.component).toBeTruthy();
  });

});
