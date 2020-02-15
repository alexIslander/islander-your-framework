import { DynamicToggleComponent } from './dynamic-toggle.component';
import {initContext, TestContext} from '../../../test/test-context';

describe('DynamicToggleComponent', () => {
  type Context = TestContext<DynamicToggleComponent>;

  initContext(DynamicToggleComponent, {
    imports: [],
    declarations: [],
    providers: []
  });

  it('should be initialized', function (this: Context) {
    expect(this.component).toBeTruthy();
  });
});
