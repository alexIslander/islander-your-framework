import { DynamicAutocompleteComponent } from './dynamic-autocomplete.component';
import {initContext, TestContext} from '../../../test/test-context';

describe('DynamicSearchAutocompleteItemComponent', () => {
  type Context = TestContext<DynamicAutocompleteComponent>;

  initContext(DynamicAutocompleteComponent, {
    imports: [],
    declarations: [],
    providers: []
  });

  it('should be initialized', function (this: Context) {
    expect(this.component).toBeTruthy();
  });
});
