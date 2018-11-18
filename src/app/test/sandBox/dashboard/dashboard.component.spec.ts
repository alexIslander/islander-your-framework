import {initContext, TestContext} from '../../test-context';
import {SandboxDashboardComponent} from '../../../sandbox/dashboard/dashboard.component';

describe('SandboxDashboardComponent', () => {

  type Context = TestContext<SandboxDashboardComponent>;
  initContext(SandboxDashboardComponent, {
      imports: [],
      declarations: [ SandboxDashboardComponent ]
  });

  it('should create', function(this: Context) {
    expect(this.component).toBeTruthy();
  });
});
