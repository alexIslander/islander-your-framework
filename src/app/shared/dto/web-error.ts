import { HttpErrorResponse, HttpHandler, HttpRequest } from '@angular/common/http';

export interface WebError {
  error: Error | HttpErrorResponse;
  request: HttpRequest<any>;
  next: HttpHandler;
}
