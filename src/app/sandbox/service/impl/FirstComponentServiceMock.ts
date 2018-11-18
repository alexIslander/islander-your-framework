import { Injectable } from '@angular/core';
import {AnyApiHttpHelperService} from '../AnyApiHttpHelperService';
import {IFirstComponentService} from '../IFirstComponentService';
import {Observable} from 'rxjs/internal/Observable';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../../dto/Todo';

@Injectable({
  providedIn: 'root'
})
export class FirstComponentServiceMock implements IFirstComponentService {

  constructor(private http: HttpClient, public httpHelperService: AnyApiHttpHelperService) {
    // NOOP
  }

  getInitialData(): Observable<Todo> {
    return this.http.get<Todo>('/assets/mock' + '/sandbox/first_data.json');
  }
}
