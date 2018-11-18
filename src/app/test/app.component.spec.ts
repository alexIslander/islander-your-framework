import { AppComponent } from '../app.component';
import {initContext, TestContext} from './test-context';
import {Router} from '@angular/router';

describe('AppComponent', () => {

  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  type Context = TestContext<AppComponent>;
  initContext(AppComponent, {
    declarations: [ AppComponent ],
    providers: [ { provide: Router, useValue: mockRouter } ]
  });

  it('should create', function(this: Context) {
    expect(this.component).toBeTruthy();
  });

  it('should create the app', function(this: Context) {
    const app = this.fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
