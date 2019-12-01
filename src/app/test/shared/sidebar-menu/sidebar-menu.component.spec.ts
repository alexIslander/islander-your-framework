import {initContext, TestContext} from '../../test-context';
import {SidebarMenuComponent} from '../../../shared/sidebar-menu/sidebar-menu.component';

describe('SidebarMenuComponent', () => {

  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  type Context = TestContext<SidebarMenuComponent>;
  initContext(SidebarMenuComponent, {
    declarations: [ SidebarMenuComponent ]
  });

  it('should be initialized', function(this: Context) {
    expect(this.component).toBeTruthy();
  });

  it('should have onToggleClick method', function(this: Context) {
    this.component.opened = null;
    this.component.onToggleClick(true);
    expect(this.component.opened).toEqual(true);
  });
});
