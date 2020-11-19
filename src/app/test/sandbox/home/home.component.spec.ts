import {SandboxHomeComponent} from '../../../sandbox/home/home.component';
import {SandboxDashboardService} from '../../../sandbox/service/impl/SandboxDashboardService';
import {initContext, TestContext} from '../../test-context';
import {Router} from '@angular/router';

describe('SandboxHomeComponent', () => {

  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  type Context = TestContext<SandboxHomeComponent>;
  initContext(SandboxHomeComponent, {
      imports: [],
      declarations: [ SandboxHomeComponent ],
      providers: [SandboxDashboardService,
        {provide: Router, useValue: mockRouter}]
  });

  it('should create', function(this: Context) {
    expect(this.component).toBeTruthy();
  });
});
