import { Injectable } from '@angular/core';
import {HttpHelperService} from '../../shared/service/HttpHelperService';
import {FrameworkLoaderService} from '../../shared/service/framework-loader.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SandboxHttpHelperService extends HttpHelperService {

  constructor(private httpClient: HttpClient, public loaderService: FrameworkLoaderService) {
    super(httpClient, environment.islanderFrameworkServiceUrl, loaderService);
  }
}
