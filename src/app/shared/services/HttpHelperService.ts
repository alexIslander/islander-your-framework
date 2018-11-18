import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';
import {FrameworkLoaderService} from './framework-loader.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

/**
 * The service for https calls.
 */
export abstract class HttpHelperService {

  private HEADER_PROPERTY_CONTENT_TYPE = 'Content-Type';
  private HEADER_PROPERTY_AUTH_TOKEN = 'Authorization';
  private HEADER_PROPERTY_JSON = 'application/json';

  constructor(private http: HttpClient, private baseUrl: string, public loaderService: FrameworkLoaderService) {
    // NOOP
  }

  /**
   * The get REST calling.
   *
   * @param url The url.
   * @param queryParams The query params.
   */
  get<T>(url: string, queryParams?: HttpParams): Observable<T> {
    this.showLoader();
    return this.http.get<T>(this.baseUrl + url).pipe(
      finalize(() => {
        this.onCallEnd();
      })
    );
  }

  /**
   * The post REST calling.
   *
   * @param url The url.
   * @param body The rest body.
   * @param queryParams The query params.
   */
  post<T>(url: string, body?: any, queryParams?: HttpParams): Observable<T> {
    this.showLoader();
    return this.http.post<T>(this.baseUrl + url, body, httpOptions).pipe(
      finalize(() => {
        this.onCallEnd();
      })
    );
  }

  /**
   * The post REST calling.
   *
   * @param url The url.
   * @param body The rest body.
   * @param queryParams The query params.
   */
  put<T>(url: string, body?: any, queryParams?: HttpParams): Observable<T> {
    this.showLoader();
    return this.http.put<T>(this.baseUrl + url, body).pipe(
      finalize(() => {
        this.onCallEnd();
      })
    );
  }

  /**
   * Puts together the http request header
   * @param token - The auth token which will be applied to the header
   */
  getHeaders(token?: string): any {
    const headers = {};

    headers[this.HEADER_PROPERTY_CONTENT_TYPE] = this.HEADER_PROPERTY_JSON;
    // headers[this.HEADER_PROPERTY_AUTH_TOKEN] = 'Bearer ' + token;

    return headers;
  }

  /**
   * Extends the header and continues the call
   * @param req - request
   * @param token - token
   * @returns result
   */
  addHeaders(req: HttpRequest<any>, token = ''): HttpRequest<any> {
    // Extending our call with our header settings
    return req.clone({setHeaders: this.getHeaders(token)});
  }

  /**
   * This method executes required actions, after http call.
   */
  private onCallEnd(): void {
    this.hideLoader();
  }

  private showLoader(): void {
    this.loaderService.show();
  }

  private hideLoader(): void {
    this.loaderService.hide();
  }
}
