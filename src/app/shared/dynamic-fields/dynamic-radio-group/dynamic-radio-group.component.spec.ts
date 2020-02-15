import { DynamicRadioGroupComponent } from './dynamic-radio-group.component';
import {initContext, TestContext} from '../../../test/test-context';

describe('DynamicRadioGroupComponent', () => {
  type Context = TestContext<DynamicRadioGroupComponent>;

  initContext(DynamicRadioGroupComponent, {
    imports: [],
    declarations: [],
    providers: []
  });

  it('should be initialized', function (this: Context) {
    expect(this.component).toBeTruthy();
  });
});
