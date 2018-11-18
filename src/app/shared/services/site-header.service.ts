import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * Responsible for managing changes in the
 * site header
 */
@Injectable({
  providedIn: 'root'
})
export class SiteHeaderService {

  private emitChangeSource = new Subject<any>();

  /**
   * Subscribeable event for site header change
   */
  public onSiteHeaderTextChange = this.emitChangeSource.asObservable();

  /**
   * Emittable function for site header text change
   * @param change - new text
   */
  changeSiteHeaderText(change: any) {
    this.emitChangeSource.next(change);
  }

}
