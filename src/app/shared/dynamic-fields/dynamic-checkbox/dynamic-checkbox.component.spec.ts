import { DynamicCheckboxComponent } from './dynamic-checkbox.component';
import {initContext, TestContext} from '../../../test/test-context';

describe('DynamicCheckboxComponent', () => {
  type Context = TestContext<DynamicCheckboxComponent>;

  initContext(DynamicCheckboxComponent, {
    imports: [],
    declarations: [],
    providers: []
  });

  it('should be initialized', function (this: Context) {
    expect(this.component).toBeTruthy();
  });

});
