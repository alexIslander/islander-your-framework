import { DynamicOptionComponent } from './dynamic-option.component';
import {initContext, TestContext} from '../../../test/test-context';

describe('DynamicOptionComponent', () => {
  type Context = TestContext<DynamicOptionComponent>;

  initContext(DynamicOptionComponent, {
    imports: [],
    declarations: [],
    providers: []
  });

  it('should be initialized', function (this: Context) {
    expect(this.component).toBeTruthy();
  });
});
