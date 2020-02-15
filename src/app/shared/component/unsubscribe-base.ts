import {OnDestroy} from '@angular/core';
import {Subject} from 'rxjs/Subject';

export abstract class UnsubscribeComponent implements OnDestroy {

  ngUnsubscribe = new Subject<void>();

  /**
   * Class that we just extend if we need to destroy an observable
   * BENEFITS
   * 1 No need to find all subscriptions and assign them into variable ,  and then use variables to unsubscribe
   * with simple words we don’t need to keep and remember references to our subscriptions anymore
   * 2 No need of third party libraries
   * 3 No need to implement all the time ngOnDestroy
   */

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
