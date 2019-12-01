import { TestBed, inject } from '@angular/core/testing';

import { ErrorNotifierService } from '../../../shared/service/error-notifier.service';
import {Injector} from '@angular/core';
import {Router} from '@angular/router';
import {NotificationService} from '../../../shared/service/notification.service';
import {RouteUrls} from '../../../route-urls';

describe('ErrorNotifierService', () => {

  let errorNotifierService: ErrorNotifierService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ErrorNotifierService,
        Injector,
        {
          provide: Router,
          useClass: class {
            navigate = jasmine.createSpy('navigate');
          }
        },
        {
          provide: NotificationService,
          useValue: {
            notifyByRawText: () => {
            }
          }
        }
      ]
    });
  });

  beforeEach(inject([ErrorNotifierService], (service: ErrorNotifierService) => {
    errorNotifierService = service;
  }));

  it('should be created', inject([ErrorNotifierService], (service: ErrorNotifierService) => {
    expect(service).toBeTruthy();
  }));

  it('should have handleError method, when the given error is not HttpErrorResponse then navigate to the error page',
    inject([Router], (router: Router) => {
      // const mockError = {error: null, request: null, next: null} as WebError;
      const mockError = {name: null, message: null, stack: null } as Error;
      const queryParams = {
        queryParams: {
          errorCode: '404',
          errorDetails: 'errorPageDefaultMessage'
        }
      };

      errorNotifierService.handleError(mockError);
      expect(router.navigate).toHaveBeenCalledWith([RouteUrls.errorPage], queryParams);
    }));
});
