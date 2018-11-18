import { HttpErrorResponse, HttpHandler, HttpRequest } from '@angular/common/http';

export interface RexError {
  error: Error | HttpErrorResponse;
  request: HttpRequest<any>;
  next: HttpHandler;
}
