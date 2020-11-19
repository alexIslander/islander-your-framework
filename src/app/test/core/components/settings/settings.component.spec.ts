import {SettingsComponent} from '../../../../core/components/settings/settings.component';
import {initContext, TestContext} from '../../../test-context';
import {ThemePickerService} from '../../../../core/modules/theme-picker/services/theme-picker.service';

describe('SettingsComponent', () => {

  type Context = TestContext<SettingsComponent>;
  initContext(SettingsComponent, {
    imports: [],
    declarations: [],
    providers: [
      ThemePickerService
    ]
  });

  it('should create', function (this: Context) {
    expect(this.component).toBeTruthy();
  });

});
