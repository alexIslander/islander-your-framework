import { Injectable } from '@angular/core';
import {HttpHelperService} from '../../shared/service/HttpHelperService';
import {FrameworkLoaderService} from '../../shared/service/framework-loader.service';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnyApiHttpHelperService extends HttpHelperService {

  constructor(private httpClient: HttpClient, public loaderService: FrameworkLoaderService) {
    super(httpClient, environment.anyApiServiceBaseUrl, loaderService);
  }
}
