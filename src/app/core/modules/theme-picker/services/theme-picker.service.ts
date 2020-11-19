import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {OverlayContainer} from '@angular/cdk/overlay';

export interface ThemeItem {
  id: number;
  name: string;
  cssClass: string;
}

@Injectable({
  providedIn: 'root'
})
export class ThemePickerService {
  public static readonly INITIAL_CLASS = `angular-material-router-app-theme`;
  readonly COLOR_PICKER_STORAGE_KEY = 'color-picker';
  readonly initialClass = ThemePickerService.INITIAL_CLASS;

  private _colorClass$: BehaviorSubject<string> = new BehaviorSubject(this.initialClass);
  public colorClass$ = this._colorClass$.asObservable();

  constructor(private overlayContainer: OverlayContainer) {
    const storageClass = localStorage.getItem(this.COLOR_PICKER_STORAGE_KEY);
    if (storageClass) {
      this.addClassToContainer(storageClass);
    } else {
      overlayContainer.getContainerElement().classList.add(this.initialClass);
    }
  }

  getColorClass(): string {
    return this._colorClass$.getValue();
  }

  setColorClass(className: string) {
    this.overlayContainer.getContainerElement().classList.forEach(css => {
      if (css.startsWith(this.initialClass)) {
        this.overlayContainer.getContainerElement().classList.remove(css);
      }
    });
    this.addClassToContainer(className);

    localStorage.setItem(this.COLOR_PICKER_STORAGE_KEY, className);
  }

  public findSelection(options: Array<ThemeItem>, cssParam = this.getColorClass()): ThemeItem {
    return options.find(o => o.cssClass === cssParam);
  }

  private addClassToContainer(cssClass: string) {
    this.overlayContainer.getContainerElement().classList.add(cssClass);
    this._colorClass$.next(cssClass);
  }
}
