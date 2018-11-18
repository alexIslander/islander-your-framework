import {Component, OnDestroy, OnInit} from '@angular/core';
import {isNullOrUndefined} from 'util';
import {componentDestroyed} from 'ng2-rx-componentdestroyed';
import {ActivatedRoute, Router} from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import {Location} from '@angular/common';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit, OnDestroy {

  public errorTitle: string;
  public errorDetails: string;

  constructor( private route: ActivatedRoute,
               private router: Router,
               private location: Location) {
    // NOOP
  }

  ngOnInit() {
    this.errorTitle = 'errorPageNotFoundMessage';
    this.errorDetails = 'errorPageDefaultMessage';

    this.route.queryParams
      .pipe(takeUntil(componentDestroyed(this)))
      .subscribe(params => {
        if (isNullOrUndefined(params)) {
          return;
        }

        if (params['errorCode']) {
          if (params['errorCode'] === '401') {
            this.errorTitle = 'errorPageUnauthorizedMessage';
          }
        }
        if (params['errorDetails']) {
          this.errorDetails = params['errorDetails'];
        }
      });
  }

  ngOnDestroy() {
    // NOOP
  }

  goBack() {
    this.location.back();
  }

}
