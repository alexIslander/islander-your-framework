import {ThemePickerComponent} from '../../../../../../core/modules/theme-picker/components/theme-picker/theme-picker.component';
import {initContext, TestContext} from '../../../../../test-context';
import {ThemePickerService} from '../../../../../../core/modules/theme-picker/services/theme-picker.service';

describe('ThemePickerComponent', () => {
  type Context = TestContext<ThemePickerComponent>;
  initContext(ThemePickerComponent, {
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
