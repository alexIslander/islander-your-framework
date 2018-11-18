import {ErrorPageComponent} from '../../../shared/error-page/error-page.component';

import { of } from 'rxjs';
import {initContext, TestContext} from '../../test-context';
import {Routing} from '../../../app-routing';
import {APP_BASE_HREF} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {MockActivatedRoute} from '../../MockActivatedRoute';

import {SandboxDashboardComponent} from '../../../sandbox/dashboard/dashboard.component';
import {SandboxHomeComponent} from '../../../sandbox/home/home.component';
import {FirstComponent} from '../../../sandbox/first/first.component';
import {SecondComponent} from '../../../sandbox/second/second.component';

describe('ErrorPageComponent', () => {

  const activeRoute: MockActivatedRoute = new MockActivatedRoute();

  type Context = TestContext<ErrorPageComponent>;
  initContext(ErrorPageComponent, {
    imports: [ Routing],
    declarations: [
      SandboxDashboardComponent,
      SandboxHomeComponent,
      FirstComponent,
      SecondComponent
    ],
    providers: [
      { provide: APP_BASE_HREF, useValue : '/' },
      { provide: ActivatedRoute, useValue: activeRoute }
    ]
  });

  it('should create', function(this: Context) {
    expect(this.component).toBeTruthy();
    activeRoute.queryParams = of( {'errorCode': 401} );
  });


  it('should fire ngOnInit', function(this: Context) {
    // prepare
    spyOn(this.component, 'ngOnInit').and.callThrough();

    // call
    this.component.ngOnInit();
    // verify
    expect(this.component.ngOnInit).toHaveBeenCalled();
  });
});