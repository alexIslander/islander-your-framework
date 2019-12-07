import {BehaviorSubject} from 'rxjs';

export class MockActivatedRoute {
  private paramsSubject = new BehaviorSubject(this.testParams);
  private _testParams: {};
  private queryParamsSubject = new BehaviorSubject(this.testQueryParams);
  private _testQueryParams: {};

  params  = this.paramsSubject.asObservable();
  queryParams  = this.queryParamsSubject.asObservable();

  get testParams() {
    return this._testParams;
  }
  set testParams(newParams: any) {
    this._testParams = newParams;
    this.paramsSubject.next(newParams);
  }

  get testQueryParams() {
    return this._testQueryParams;
  }
  set testQueryParams(newParams: any) {
    this._testQueryParams = newParams;
    this.queryParamsSubject.next(newParams);
  }
}
