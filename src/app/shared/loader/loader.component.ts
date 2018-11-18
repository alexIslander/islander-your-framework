import { Component, OnDestroy, OnInit } from '@angular/core';
import { FrameworkLoaderService } from '../services/framework-loader.service';
import { LoaderState } from '../dto/LoaderState';
import { componentDestroyed } from 'ng2-rx-componentdestroyed';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-common-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {
  public show = false;

  constructor(private loaderService: FrameworkLoaderService) {
    // NOOP
  }

  ngOnInit() {
    this.loaderService.loaderState
      .pipe(takeUntil(componentDestroyed(this)))
      .subscribe((state: LoaderState) => {
        this.show = state.show;
      });
  }

  ngOnDestroy() {
    // NOOP
  }
}
