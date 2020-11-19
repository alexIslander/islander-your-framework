import { CustomKitchenSinkComponent } from '../../../sandbox/custom-kitchen-sink/custom-kitchen-sink.component';
import {initContext, TestContext} from '../../test-context';
import {ThemePickerService} from '../../../core/modules/theme-picker/services/theme-picker.service';

describe('CustomKitchenSinkComponent', () => {

  type Context = TestContext<CustomKitchenSinkComponent>;
  initContext(CustomKitchenSinkComponent, {
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
