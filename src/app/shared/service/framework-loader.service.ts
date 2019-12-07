import { Injectable } from '@angular/core';
import { LoaderState } from '../dto/loader-state';
import { Subject } from 'rxjs';

@Injectable()
export class FrameworkLoaderService {

  private loaderSubject = new Subject<LoaderState>();
  public loaderState = this.loaderSubject.asObservable();

  constructor() {
    // NOOP
  }

  show() {
    this.loaderSubject.next(<LoaderState>{show: true});
  }

  hide() {
    this.loaderSubject.next(<LoaderState>{show: false});
  }

}
