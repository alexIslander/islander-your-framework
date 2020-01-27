import { DynamicUploadComponent } from './dynamic-upload.component';
import {initContext, TestContext} from '../../../test/test-context';
import {SearchInputFormatter} from '../../helpers/SearchInputFormatter';

describe('DynamicUploadComponent', () => {
  type Context = TestContext<DynamicUploadComponent>;

  initContext(DynamicUploadComponent, {
    imports: [],
    declarations: [],
    providers: [SearchInputFormatter]
  });

  it('should be initialized', function (this: Context) {
    expect(this.component).toBeTruthy();
  });
});
