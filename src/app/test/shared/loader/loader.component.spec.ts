import { FrameworkLoaderService } from '../../../shared/services/framework-loader.service';
import { LoaderComponent } from '../../../shared/loader/loader.component';
import {initContext, TestContext} from '../../test-context';

describe('LoaderComponent', () => {

  type Context = TestContext<LoaderComponent>;
  initContext(LoaderComponent, {
    imports: [ ],
    declarations: [ ],
    providers: [ FrameworkLoaderService ]
  });

  it('should create', function(this: Context) {
    expect(this.component).toBeTruthy();
  });
});
