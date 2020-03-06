import {Component, Input, OnInit} from '@angular/core';
import { LoaderState } from '../dto/LoaderState';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {CommonFunctionService} from '../service/common-function.service';
import {FrameworkLoaderService} from '../service/framework-loader.service';
import {OnDestroyMixin, untilComponentDestroyed} from '@w11k/ngx-componentdestroyed';

@Component({
  selector: 'app-common-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent extends OnDestroyMixin implements OnInit {
  @Input()
  debounceTime: number;
  public show = false;
  private DEFAULT_DEBOUNCE_TIME_IN_MS = 150;

  constructor(private loaderService: FrameworkLoaderService, private commonFunctionService: CommonFunctionService) {
    super();
  }

  ngOnInit() {
    if (this.commonFunctionService.isNullOrUndefined(this.debounceTime)) {
      this.debounceTime = this.DEFAULT_DEBOUNCE_TIME_IN_MS;
    }
    this.loaderService.loaderState.pipe(
      untilComponentDestroyed(this),
      debounceTime(this.debounceTime),
      distinctUntilChanged()
    )
      .subscribe((state: LoaderState) => {
        this.show = state.show;
      });
  }
}
