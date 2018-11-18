import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {SnackbarUtil} from '../utils/snackbar.util';
import {GetTextByKeyPipe} from '../utils/get-text-by-key.pipe';
import {publish} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private _notification: BehaviorSubject<string> = new BehaviorSubject(null);
  // readonly notification$: Observable<string> = this._notification.asObservable().publish().refCount();
  // readonly notification$: Observable<string> = of(this._notification).pipe(publish()).refCount();

  constructor(private snackBar: SnackbarUtil, public textPipe: GetTextByKeyPipe ) {
    // NOOP
  }

  /**
   * This method triggering notification service, about required message display.
   * @param messageKey - constant key of text to display.
   */
  notify(messageKey) {
    this._notification.next(this.textPipe.transform(messageKey));
  }

  /**
   * This method triggering notification service, about required message display.
   * @param message - aimed raw text to display.
   */
  notifyByRawText(message) {
    this._notification.next(message);
  }

  onError(callback: (err: any) => void) {
    if (callback != null) {
      this._notification.subscribe(callback);
    }
  }
}
