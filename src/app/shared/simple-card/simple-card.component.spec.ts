import { SimpleCardComponent } from './simple-card.component';
import {DashboardCard} from '../../sandbox/dto/DashboardCard';
import {initContext, TestContext} from '../../test/test-context';

describe('SimpleCardComponent', () => {
  type Context = TestContext<SimpleCardComponent>;
  initContext(SimpleCardComponent, {
      declarations: [ SimpleCardComponent ]
    });

  it('should create', function(this: Context) {
    this.component.card = {} as DashboardCard;
    this.fixture.detectChanges();
    expect(this.component).toBeTruthy();
  });

});
