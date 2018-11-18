import {SandboxHomeComponent} from '../../../sandbox/home/home.component';
import {initContext, TestContext} from '../../test-context';
import {Router} from '@angular/router';
import {FirstComponent} from '../../../sandbox/first/first.component';
import {FirstComponentService} from '../../../sandbox/service/impl/FirstComponentService';

describe('FirstComponent', () => {

  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  type Context = TestContext<FirstComponent>;
  initContext(FirstComponent, {
      imports: [],
      declarations: [ FirstComponent ],
      providers: [FirstComponentService,
        {provide: Router, useValue: mockRouter}]
  });

  it('should create', function(this: Context) {
    expect(this.component).toBeTruthy();
  });
});
