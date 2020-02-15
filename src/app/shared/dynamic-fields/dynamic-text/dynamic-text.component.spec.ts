import { DynamicTextComponent } from './dynamic-text.component';
import {initContext, TestContext} from '../../../test/test-context';

describe('DynamicTextComponent', () => {
  type Context = TestContext<DynamicTextComponent>;

  initContext(DynamicTextComponent, {
    imports: [],
    declarations: [],
    providers: []
  });

  it('should be initialized', function (this: Context) {
    expect(this.component).toBeTruthy();
  });
});
