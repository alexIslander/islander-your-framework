import {ErrorHandler, Injectable, Injector} from '@angular/core';
import {Router} from '@angular/router';
import {RouteUrls} from '../utils/route-urls';
import {NotificationService} from './notification.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Error} from 'tslint/lib/error';
import {isNullOrUndefined} from 'util';
import {HttpStatus} from '../dto/HttpStatus';

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
          case HttpStatus.BAD_REQUEST_ERROR : messageKey = 'badRequestError';  break;
          case HttpStatus.RESOURCE_NOT_FOUND_ERROR : messageKey = 'resourceNotFoundError';  break;
          case HttpStatus.METHOD_NOT_ALLOWED_ERROR : messageKey = 'methodNotAllowedError';  break;
          case HttpStatus.NO_HTTP_CODE : messageKey = 'internalServerError';
            console.error('ErrorNotifierService.handleError(): ' + error.message); break;
          default : break;
        }

        if (isNullOrUndefined(messageKey)) {
          // TODO handle later 500 separately, when ARE error is refactored
          notificationService.notifyByRawText(`${error.status} - ${error.message}`);
        } else {
          notificationService.notify(messageKey);
        }
      } else {
        // Handle offline error
        notificationService.notify('noInternetConnection');
      }

    } else {
      console.error(error.message, error);
      notificationService.notifyByRawText(`${error.message}`);
      router.navigate([RouteUrls.errorPage],
        {queryParams: {errorCode: '404', errorDetails: 'errorPageDefaultMessage'}}
      );
    }
  }
}
