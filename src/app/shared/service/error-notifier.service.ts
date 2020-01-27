import {ErrorHandler, Injectable, Injector} from '@angular/core';
import {Router} from '@angular/router';
import {NotificationService} from './notification.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Error} from 'tslint/lib/error';
import {HttpStatus} from '../dto/HttpStatus';
import {hasNot} from './common-function.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorNotifierService implements ErrorHandler {

  constructor(private injector: Injector) {
    // NOOP
  }

  handleError(error: Error ): void {
    const notificationService = this.injector.get(NotificationService);
    const router = this.injector.get(Router);
    if (error instanceof HttpErrorResponse) {
      if (navigator.onLine) {
        let messageKey: string;
        switch (error.status) {
          case HttpStatus.BAD_REQUEST_ERROR : messageKey = 'COMMON.BAD_REQUEST_ERROR';  break;
          case HttpStatus.RESOURCE_NOT_FOUND_ERROR : messageKey = 'COMMON.RESOURCE_NOT_FOUND_ERROR';  break;
          case HttpStatus.METHOD_NOT_ALLOWED_ERROR : messageKey = 'COMMON.METHOD_NOT_ALLOWED_ERROR';  break;
          case HttpStatus.NO_HTTP_CODE : messageKey = 'COMMON.INTERNAL_SERVER_ERROR';
            console.error('ErrorNotifierService.handleError(): ' + error.message); break;
          default : break;
        }

        if (hasNot(messageKey)) {
          // TODO handle later 500 separately, when ARE error is refactored
          notificationService.notifyByRawText(`${error.status} - ${error.message}`);
        } else {
          notificationService.notify(messageKey);
        }
      } else {
        // Handle offline error
        notificationService.notify('COMMON.NO_INTERNET_CONNECTION');
      }

    } else {
      console.error(error.message, error);
      notificationService.notifyByRawText(`${error.message}`);
      router.navigate(['error-page'],
        {queryParams: {errorCode: '404', errorDetails: 'COMMON.ERROR_PAGE_DEFAULT_MESSAGE'}}
      );
    }
  }
}
