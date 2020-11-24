import { InitialHeaderLogoComponent } from '../../../../core/components/initial-header-logo/initial-header-logo.component';
import {initContext, TestContext} from '../../../test-context';

describe('InitialHeaderLogoComponent', () => {

  type Context = TestContext<InitialHeaderLogoComponent>;
  initContext(InitialHeaderLogoComponent, {
    imports: [],
    declarations: [],
    providers: []
  });

  it('should create', function (this: Context) {
    expect(this.component).toBeTruthy();
  });

});
