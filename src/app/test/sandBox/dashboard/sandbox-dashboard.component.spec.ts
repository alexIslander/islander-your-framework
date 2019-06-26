import {initContext, TestContext} from '../../test-context';
import {SandboxDashboardComponent} from '../../../sandbox/dashboard/sandbox-dashboard.component';
import {Router} from "@angular/router";
import {appRoutes, AppRoutingModule} from "../../../app-routing";
import {RouterTestingModule} from "@angular/router/testing";
import {SandboxHomeComponent} from "../../../sandbox/home/home.component";
import {FirstComponent} from "../../../sandbox/first/first.component";
import {SecondComponent} from "../../../sandbox/second/second.component";
import {ThirdComponent} from "../../../sandbox/third/third.component";
import {ErrorPageComponent} from "../../../shared/error-page/error-page.component";

describe('SandboxDashboardComponent', () => {

  type Context = TestContext<SandboxDashboardComponent>;
  initContext(SandboxDashboardComponent, {
    imports: [RouterTestingModule.withRoutes(appRoutes)],
    declarations: [
      SandboxDashboardComponent,
      SandboxHomeComponent,
      FirstComponent,
      SecondComponent,
      ThirdComponent,
      ErrorPageComponent],
    providers: [ ]
  });

  it('should create', function(this: Context) {
    expect(this.component).toBeTruthy();
  });
});
