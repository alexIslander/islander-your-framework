import {takeUntil} from 'rxjs/operators';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {HttpStatus} from '../service/HttpStatus';
import {MatDialog} from '@angular/material';
import {CommonFunctionService} from '../service/common-function.service';
import {UnsubscribeComponent} from '../component/unsubscribe-base.js';
import {FrameworkLoaderService} from '../service/framework-loader.service';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent extends UnsubscribeComponent implements OnInit {

  public errorTitle: string;
  public errorDetails: string;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private dialog: MatDialog,
              private loader: FrameworkLoaderService,
              private commonFunctionService: CommonFunctionService) {
    // NOOP
    super();
  }

  ngOnInit() {
    this.errorTitle = 'COMMON.ERROR_PAGE_NOT_FOUND_MESSAGE';
    this.errorDetails = 'COMMON.ERROR_PAGE_DEFAULT_MESSAGE';

    this.route.queryParams.pipe(
      takeUntil(this.ngUnsubscribe))
      .subscribe(params => {

        if (this.commonFunctionService.isNullOrUndefined(params)) {
          return;
        }

        if (params['errorDetails']) {
          this.errorDetails = params['errorDetails'];
        }

        const errorCode = !this.commonFunctionService.isNullOrUndefined(params['errorCode']) ? +params['errorCode'] : null;
        switch (errorCode) {
          case HttpStatus.UNAUTHORIZED_ERROR:
            this.errorTitle = 'errorPageUnauthorizedMessage';
            break;
          case HttpStatus.FORBIDDEN:
            this.errorTitle = 'errorPageForbiddenMessage';
            this.errorDetails = 'errorPageForbiddenDetailMessage';
            break;
          case HttpStatus.INTERNAL_SERVER_ERROR:
            this.errorTitle = 'errorPageInternalServerErrorTitle';

            if (this.commonFunctionService.isNullOrUndefined(params['errorDetails'])) {
              this.errorDetails = 'errorPageInternalServerErrorDefaultMessage';
            }
            break;
          case HttpStatus.NO_HTTP_CODE:
            this.errorTitle = 'errorPageCORSErrorTitle';
            this.errorDetails = 'errorPageCORSErrorMessage';
            break;
        }

        this.dialog.closeAll();
        this.loader.hide();
      });
  }

  goBack() {
    this.location.back();
  }

}
